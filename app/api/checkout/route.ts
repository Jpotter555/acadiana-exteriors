import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
    const { amount, description } = await request.json();

    const amountInCents = Math.round(parseFloat(amount) * 100);

    if (!amountInCents || amountInCents < 50) {
      return NextResponse.json(
        { error: "Amount must be at least $0.50" },
        { status: 400 }
      );
    }

    if (amountInCents > 99999999) {
      return NextResponse.json(
        { error: "Amount is too large" },
        { status: 400 }
      );
    }

    const origin = request.headers.get("origin") || "https://acadianaexteriors.com";

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Acadiana Exteriors LLC",
              description: description || "Service Payment",
            },
            unit_amount: amountInCents,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${origin}/pay/success`,
      cancel_url: `${origin}/pay`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe checkout error:", error);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
