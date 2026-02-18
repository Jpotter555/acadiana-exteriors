import Link from "next/link";
import Image from "next/image";

export default function PaymentSuccess() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100">
      {/* Header */}
      <nav className="border-b border-gray-200 bg-white/95 backdrop-blur-sm shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/logo-symbol.svg"
                alt="Acadiana Exteriors"
                width={60}
                height={60}
                className="h-14 w-14 object-contain"
              />
              <span className="text-2xl font-bold text-primary">
                Acadiana Exteriors
              </span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Success Message */}
      <div className="max-w-md mx-auto px-4 py-16 text-center">
        <div className="bg-white rounded-2xl shadow-xl p-10 border border-gray-100">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-8 h-8 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-3">
            Payment Successful!
          </h1>
          <p className="text-gray-600 mb-8">
            Thank you for your payment. You will receive a receipt from Stripe
            at the email you provided during checkout.
          </p>

          <Link
            href="/"
            className="inline-block bg-primary text-white px-8 py-3 rounded-xl font-semibold hover:bg-primary-700 transition shadow-lg"
          >
            Back to Home
          </Link>
        </div>

        <p className="text-sm text-gray-500 mt-6">
          Questions about your payment? Call us at{" "}
          <a href="tel:+19857099200" className="text-primary hover:underline">
            (985) 709-9200
          </a>
        </p>
      </div>
    </div>
  );
}
