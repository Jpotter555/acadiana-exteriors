import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    console.log("Quote API called");
    const data = await request.json();
    console.log("Quote data received:", JSON.stringify(data, null, 2));

    const {
      services,
      propertyType,
      propertyAddress,
      propertySize,
      fullName,
      email,
      phone,
      preferredDate,
      message,
    } = data;

    // Format services list
    const servicesList = services
      .map((s: string) => s.replace(/-/g, " ").replace(/\b\w/g, (l: string) => l.toUpperCase()))
      .join(", ");

    // Email to business owner (Jonathan)
    const adminEmail = await resend.emails.send({
      from: "Acadiana Exteriors <quotes@acadianaexteriors.com>",
      to: process.env.RESEND_TO_EMAIL || "jonathan@acadianaexteriors.com",
      subject: `New Quote Request from ${fullName}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
          </head>
          <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: linear-gradient(135deg, #0066CC 0%, #00A86B 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
              <h1 style="color: white; margin: 0; font-size: 28px;">New Quote Request!</h1>
            </div>

            <div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px;">
              <h2 style="color: #0066CC; margin-top: 0;">Customer Information</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Name:</strong></td>
                  <td style="padding: 10px; border-bottom: 1px solid #ddd;">${fullName}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Email:</strong></td>
                  <td style="padding: 10px; border-bottom: 1px solid #ddd;"><a href="mailto:${email}" style="color: #0066CC;">${email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Phone:</strong></td>
                  <td style="padding: 10px; border-bottom: 1px solid #ddd;"><a href="tel:${phone}" style="color: #0066CC;">${phone}</a></td>
                </tr>
              </table>

              <h2 style="color: #0066CC; margin-top: 30px;">Service Details</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Services:</strong></td>
                  <td style="padding: 10px; border-bottom: 1px solid #ddd;">${servicesList}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Property Type:</strong></td>
                  <td style="padding: 10px; border-bottom: 1px solid #ddd;">${propertyType.charAt(0).toUpperCase() + propertyType.slice(1)}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Address:</strong></td>
                  <td style="padding: 10px; border-bottom: 1px solid #ddd;">${propertyAddress}</td>
                </tr>
                ${propertySize ? `
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Property Size:</strong></td>
                  <td style="padding: 10px; border-bottom: 1px solid #ddd;">${propertySize}</td>
                </tr>
                ` : ""}
                ${preferredDate ? `
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Preferred Date:</strong></td>
                  <td style="padding: 10px; border-bottom: 1px solid #ddd;">${new Date(preferredDate).toLocaleDateString()}</td>
                </tr>
                ` : ""}
                ${message ? `
                <tr>
                  <td style="padding: 10px; vertical-align: top;"><strong>Message:</strong></td>
                  <td style="padding: 10px;">${message}</td>
                </tr>
                ` : ""}
              </table>

              <div style="margin-top: 30px; padding: 20px; background: #fff; border-left: 4px solid #00A86B; border-radius: 5px;">
                <p style="margin: 0; color: #00A86B; font-weight: bold;">⚡ Action Required</p>
                <p style="margin: 10px 0 0 0;">Contact this customer within 24 hours to provide a quote and schedule the service.</p>
              </div>
            </div>

            <div style="text-align: center; padding: 20px; color: #666; font-size: 12px;">
              <p>This quote request was submitted via acadianaexteriors.com</p>
            </div>
          </body>
        </html>
      `,
    });

    // Auto-response email to customer
    const customerEmail = await resend.emails.send({
      from: "Acadiana Exteriors <quotes@acadianaexteriors.com>",
      to: email,
      subject: "We Received Your Quote Request!",
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
          </head>
          <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: linear-gradient(135deg, #0066CC 0%, #00A86B 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
              <h1 style="color: white; margin: 0; font-size: 28px;">Thank You, ${fullName}!</h1>
            </div>

            <div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px;">
              <p style="font-size: 18px; margin-top: 0;">We've received your quote request for:</p>

              <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="color: #0066CC; margin-top: 0;">Services Requested:</h3>
                <p style="font-size: 16px; color: #555;">${servicesList}</p>

                <h3 style="color: #0066CC; margin-top: 20px;">Property:</h3>
                <p style="font-size: 16px; color: #555;">${propertyAddress}</p>
              </div>

              <div style="background: #e6f2ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="color: #0066CC; margin-top: 0;">What Happens Next?</h3>
                <ol style="margin: 10px 0; padding-left: 20px;">
                  <li style="margin-bottom: 10px;">We'll review your request and property details</li>
                  <li style="margin-bottom: 10px;">One of our team members will contact you within <strong>24 hours</strong></li>
                  <li style="margin-bottom: 10px;">We'll provide a detailed, no-obligation quote</li>
                  <li style="margin-bottom: 10px;">If you're happy with the quote, we'll schedule your service!</li>
                </ol>
              </div>

              <div style="text-align: center; margin: 30px 0;">
                <a href="https://acadianaexteriors.com" style="display: inline-block; background: #0066CC; color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: bold;">Visit Our Website</a>
              </div>

              <p style="color: #666; font-size: 14px; margin-top: 30px;">
                Questions? Reply to this email or call us directly. We're here to help!
              </p>
            </div>

            <div style="text-align: center; padding: 20px; color: #666; font-size: 12px;">
              <p style="margin: 5px 0;">Acadiana Exteriors</p>
              <p style="margin: 5px 0;">Professional Pressure Washing & Exterior Maintenance</p>
              <p style="margin: 5px 0;">Serving Acadiana, Louisiana</p>
              <p style="margin: 5px 0;"><a href="https://acadianaexteriors.com" style="color: #0066CC;">acadianaexteriors.com</a></p>
            </div>
          </body>
        </html>
      `,
    });

    console.log("Admin email sent:", JSON.stringify(adminEmail, null, 2));
    console.log("Customer email sent:", JSON.stringify(customerEmail, null, 2));

    // Check if emails were sent successfully
    if (adminEmail.error || customerEmail.error) {
      console.error("Email sending errors:", {
        adminError: adminEmail.error,
        customerError: customerEmail.error
      });
      return NextResponse.json(
        { error: "Failed to send emails", details: { adminEmail, customerEmail } },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Quote request submitted successfully", emailIds: {
        admin: adminEmail.data?.id,
        customer: customerEmail.data?.id
      }},
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing quote request:", error);
    console.error("Error details:", JSON.stringify(error, null, 2));
    return NextResponse.json(
      { error: "Failed to process quote request", details: String(error) },
      { status: 500 }
    );
  }
}
