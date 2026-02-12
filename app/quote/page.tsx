"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle, Loader2 } from "lucide-react";

const quoteSchema = z.object({
  // Services
  services: z.array(z.string()).min(1, "Please select at least one service"),

  // Property Details
  propertyType: z.enum(["residential", "commercial"]),
  propertyAddress: z.string().min(5, "Please enter a valid address"),
  propertySize: z.string().optional(),

  // Contact Information
  fullName: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),

  // Additional Details
  preferredDate: z.string().optional(),
  message: z.string().optional(),
});

type QuoteFormData = z.infer<typeof quoteSchema>;

const services = [
  { id: "pressure-washing", label: "Pressure Washing", description: "Driveways, siding, decks, patios" },
  { id: "window-cleaning", label: "Window Cleaning", description: "Interior and exterior windows" },
  { id: "gutter-cleaning", label: "Gutter Cleaning", description: "Cleaning and maintenance" },
  { id: "roof-cleaning", label: "Roof Cleaning", description: "Soft wash roof cleaning" },
];

export default function QuotePage() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [canSubmit, setCanSubmit] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    trigger,
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
    mode: "onChange",
  });

  const selectedServices = watch("services") || [];

  const nextStep = async () => {
    let fieldsToValidate: (keyof QuoteFormData)[] = [];

    if (step === 1) fieldsToValidate = ["services"];
    if (step === 2) fieldsToValidate = ["propertyType", "propertyAddress"];
    if (step === 3) fieldsToValidate = ["fullName", "email", "phone"];

    const isValid = await trigger(fieldsToValidate);
    if (isValid) {
      setStep(step + 1);

      // If moving to step 4, prevent immediate submission
      if (step === 3) {
        setCanSubmit(false);
        // Allow submission after 300ms to prevent click event carryover
        setTimeout(() => setCanSubmit(true), 300);
      }
    }
  };

  const prevStep = () => {
    setStep(step - 1);
    setCanSubmit(false); // Reset canSubmit when going back
  };

  const onSubmit = async (data: QuoteFormData) => {
    // Prevent submission if not on step 4
    if (step !== 4) {
      console.log("Form submission prevented - not on step 4");
      return;
    }

    // Prevent submission if we just reached step 4 (click event carryover protection)
    if (!canSubmit) {
      console.log("Form submission prevented - just reached step 4, please click submit again");
      return;
    }

    console.log("Submitting quote request...", data);
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      console.log("API response status:", response.status);

      if (!response.ok) {
        const errorData = await response.text();
        console.error("API error:", errorData);
        throw new Error("Failed to submit quote");
      }

      const result = await response.json();
      console.log("Quote submitted successfully:", result);

      setIsSuccess(true);
    } catch (error) {
      console.error("Error submitting quote:", error);
      alert("Failed to submit quote. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Quote Request Received!
          </h1>
          <p className="text-gray-600 mb-6">
            Thank you for your interest! We&apos;ve received your quote request and will get back to you within 24 hours.
          </p>
          <p className="text-sm text-gray-500 mb-8">
            Check your email for a confirmation message.
          </p>
          <Link
            href="/"
            className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <nav className="border-b bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/" className="flex items-center text-gray-600 hover:text-primary transition">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
        </div>
      </nav>

      {/* Form Container */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600">
                Step {step} of 4
              </span>
              <span className="text-sm text-gray-500">{Math.round((step / 4) * 100)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-primary h-2 rounded-full transition-all duration-300"
                style={{ width: `${(step / 4) * 100}%` }}
              />
            </div>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            onKeyDown={(e) => {
              // Prevent Enter key from ever submitting the form
              // Only allow submission via explicit button click
              if (e.key === "Enter") {
                e.preventDefault();
              }
            }}
          >
            {/* Step 1: Services */}
            {step === 1 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  What services do you need?
                </h2>
                <p className="text-gray-600 mb-6">Select all that apply</p>

                <div className="space-y-3">
                  {services.map((service) => (
                    <label
                      key={service.id}
                      className={`flex items-start p-4 border-2 rounded-lg cursor-pointer transition ${
                        selectedServices.includes(service.id)
                          ? "border-primary bg-primary/5"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <input
                        type="checkbox"
                        value={service.id}
                        {...register("services")}
                        className="mt-1 w-5 h-5 text-primary"
                      />
                      <div className="ml-3">
                        <div className="font-semibold text-gray-900">
                          {service.label}
                        </div>
                        <div className="text-sm text-gray-500">
                          {service.description}
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
                {errors.services && (
                  <p className="mt-2 text-sm text-red-600">{errors.services.message}</p>
                )}
              </div>
            )}

            {/* Step 2: Property Details */}
            {step === 2 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Tell us about your property
                </h2>
                <p className="text-gray-600 mb-6">Help us provide an accurate quote</p>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Property Type *
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      <label className="flex items-center p-4 border-2 rounded-lg cursor-pointer hover:border-primary transition">
                        <input
                          type="radio"
                          value="residential"
                          {...register("propertyType")}
                          className="w-5 h-5 text-primary"
                        />
                        <span className="ml-3 font-medium text-gray-900">Residential</span>
                      </label>
                      <label className="flex items-center p-4 border-2 rounded-lg cursor-pointer hover:border-primary transition">
                        <input
                          type="radio"
                          value="commercial"
                          {...register("propertyType")}
                          className="w-5 h-5 text-primary"
                        />
                        <span className="ml-3 font-medium text-gray-900">Commercial</span>
                      </label>
                    </div>
                    {errors.propertyType && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.propertyType.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Property Address *
                    </label>
                    <input
                      type="text"
                      {...register("propertyAddress")}
                      placeholder="123 Main St, Lafayette, LA"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-gray-900 placeholder:text-gray-500"
                    />
                    {errors.propertyAddress && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.propertyAddress.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Approximate Property Size (optional)
                    </label>
                    <input
                      type="text"
                      {...register("propertySize")}
                      placeholder="e.g., 2000 sq ft, 1 acre"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-gray-900 placeholder:text-gray-500"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Contact Information */}
            {step === 3 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  How can we reach you?
                </h2>
                <p className="text-gray-600 mb-6">We&apos;ll contact you with your quote</p>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      {...register("fullName")}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-gray-900 placeholder:text-gray-500"
                    />
                    {errors.fullName && (
                      <p className="mt-1 text-sm text-red-600">{errors.fullName.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      {...register("email")}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-gray-900 placeholder:text-gray-500"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      {...register("phone")}
                      placeholder="(337) 555-0123"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-gray-900 placeholder:text-gray-500"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Additional Details */}
            {step === 4 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Any additional details?
                </h2>
                <p className="text-gray-600 mb-6">Optional information to help us serve you better</p>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Start Date (optional)
                    </label>
                    <input
                      type="date"
                      {...register("preferredDate")}
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-gray-900"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Additional Notes (optional)
                    </label>
                    <textarea
                      {...register("message")}
                      rows={4}
                      placeholder="Any special requirements, concerns, or questions?"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none text-gray-900 placeholder:text-gray-500"
                    />
                  </div>
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-sm text-blue-900">
                    <strong>What happens next?</strong> We&apos;ll review your request and send you a detailed quote within 24 hours. Our quotes are free with no obligation!
                  </p>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t">
              {step > 1 && (
                <button
                  type="button"
                  onClick={prevStep}
                  className="flex items-center px-6 py-3 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Previous
                </button>
              )}

              {step < 4 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="ml-auto flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-700 transition"
                >
                  Next
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="ml-auto flex items-center px-8 py-3 bg-accent text-white rounded-lg hover:bg-accent-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Quote Request
                      <CheckCircle className="w-5 h-5 ml-2" />
                    </>
                  )}
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
