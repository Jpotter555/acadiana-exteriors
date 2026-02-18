"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

function PaymentForm() {
  const searchParams = useSearchParams();
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const urlAmount = searchParams.get("amount");
    const urlDesc = searchParams.get("description");
    if (urlAmount) setAmount(urlAmount);
    if (urlDesc) setDescription(urlDesc);
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const numAmount = parseFloat(amount);
    if (isNaN(numAmount) || numAmount < 0.5) {
      setError("Please enter a valid amount of at least $0.50");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: numAmount, description }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Something went wrong. Please try again.");
        setLoading(false);
        return;
      }

      if (data.url) {
        window.location.href = data.url;
      }
    } catch {
      setError("Failed to connect. Please try again.");
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="amount"
          className="block text-sm font-semibold text-gray-700 mb-2"
        >
          Payment Amount
        </label>
        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-lg font-medium">
            $
          </span>
          <input
            type="number"
            id="amount"
            step="0.01"
            min="0.50"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="0.00"
            required
            className="w-full pl-8 pr-4 py-3 border-2 border-gray-200 rounded-xl text-lg focus:outline-none focus:border-primary transition"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="description"
          className="block text-sm font-semibold text-gray-700 mb-2"
        >
          Description / Invoice # (optional)
        </label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="e.g. Driveway pressure washing"
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-lg focus:outline-none focus:border-primary transition"
        />
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-primary text-white py-4 rounded-xl text-lg font-bold hover:bg-primary-700 transition disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
      >
        {loading ? (
          <span className="flex items-center justify-center gap-2">
            <svg
              className="animate-spin h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Processing...
          </span>
        ) : (
          "Pay Now"
        )}
      </button>

      <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
        Secure payment powered by Stripe
      </div>
    </form>
  );
}

export default function PayPage() {
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
            <Link
              href="/"
              className="text-gray-600 hover:text-primary transition font-medium"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Payment Form */}
      <div className="max-w-md mx-auto px-4 py-16">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Pay Your Invoice
          </h1>
          <p className="text-gray-600">
            Enter your payment amount below to pay securely online.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <Suspense fallback={<div className="text-center py-8 text-gray-500">Loading...</div>}>
            <PaymentForm />
          </Suspense>
        </div>

        <p className="text-center text-sm text-gray-500 mt-6">
          Questions? Call us at{" "}
          <a href="tel:+19857099200" className="text-primary hover:underline">
            (985) 709-9200
          </a>
        </p>
      </div>
    </div>
  );
}
