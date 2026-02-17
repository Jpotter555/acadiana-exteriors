import Link from "next/link";
import Image from "next/image";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 relative">
      {/* Navigation */}
      <nav className="border-b border-gray-200 bg-white/95 backdrop-blur-sm sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center gap-3">
                <Image
                  src="/images/logo-symbol.svg"
                  alt="Acadiana Exteriors"
                  width={60}
                  height={60}
                  className="h-14 w-14 object-contain"
                  priority
                />
                <span className="text-2xl font-bold text-primary">
                  Acadiana Exteriors
                </span>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                <Link
                  href="#services"
                  className="text-gray-700 hover:text-primary transition font-medium"
                >
                  Services
                </Link>
                <Link
                  href="#about"
                  className="text-gray-700 hover:text-primary transition font-medium"
                >
                  About
                </Link>
                <Link
                  href="#contact"
                  className="text-gray-700 hover:text-primary transition font-medium"
                >
                  Contact
                </Link>
                <a
                  href="tel:+19857099200"
                  className="text-gray-700 hover:text-primary transition font-medium"
                >
                  (985) 709-9200
                </a>
                <Link
                  href="/quote"
                  className="bg-primary text-white px-6 py-2.5 rounded-lg hover:bg-primary-700 transition font-bold shadow-lg"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <div className="inline-block mb-4 px-8 py-3 bg-primary/10 border-2 border-primary rounded-full">
                <span className="text-primary font-bold text-lg">Fair Prices, Clean Places</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                We Make Your{" "}
                <span className="text-primary">Property Shine</span>
                <br/>
                <span className="text-3xl md:text-4xl text-secondary">Right Here in Acadiana</span>
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Brandon and Jonathan here - we&apos;re starting this business to serve
                Lafayette, Breaux Bridge, and all of Acadiana. Pressure washing, windows,
                gutters. Fair prices and we&apos;ll treat your place right.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link
                  href="/quote"
                  className="bg-primary text-white px-10 py-5 rounded-lg text-lg font-bold hover:bg-primary-700 transition shadow-xl transform hover:scale-105"
                >
                  Get Your Quote
                </Link>
                <Link
                  href="#services"
                  className="bg-secondary text-white px-10 py-5 rounded-lg text-lg font-bold hover:bg-secondary-700 transition shadow-xl"
                >
                  What We Do
                </Link>
              </div>
            </div>
            <div className="relative h-[400px] md:h-[500px]">
              <BeforeAfterSlider
                beforeImage="/images/before-driveway.jpg"
                afterImage="/images/after-driveway.jpg"
                beforeAlt="Dirty driveway before pressure washing"
                afterAlt="Clean driveway after pressure washing"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What We Do
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We&apos;re Brandon and Jonathan, launching this business right here in Acadiana.
              Here&apos;s what we offer:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service Card 1 */}
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Pressure Washing
              </h3>
              <p className="text-gray-600 mb-4">
                Driveways, patios, sidewalks, siding, decks - you name it.
                We blast away all that Louisiana dirt, mold, and grime that builds up.
              </p>
              <Link
                href="/services/pressure-washing"
                className="text-primary font-semibold hover:underline"
              >
                Learn More →
              </Link>
            </div>

            {/* Service Card 2 */}
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-secondary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Window Cleaning
              </h3>
              <p className="text-gray-600 mb-4">
                Streak-free windows for homes and businesses. Inside, outside,
                screens too. Makes a bigger difference than you&apos;d think.
              </p>
              <Link
                href="/services/window-cleaning"
                className="text-secondary font-semibold hover:underline"
              >
                Learn More →
              </Link>
            </div>

            {/* Service Card 3 */}
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Gutter Cleaning
              </h3>
              <p className="text-gray-600 mb-4">
                With all the rain we get? Your gutters need this. We clean out
                the leaves, moss, and whatever else ends up in there.
              </p>
              <Link
                href="/services/gutter-services"
                className="text-primary font-semibold hover:underline"
              >
                Learn More →
              </Link>
            </div>

            {/* Service Card 4 */}
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-secondary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Can Cleaning
              </h3>
              <p className="text-gray-600 mb-4">
                Trash cans get nasty quick in Louisiana heat. We&apos;ll pressure wash
                and sanitize your bins so they don&apos;t smell up your property.
              </p>
              <Link
                href="/services/can-cleaning"
                className="text-secondary font-semibold hover:underline"
              >
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Fill out a quick form and we&apos;ll get you a price. No sales pitch,
            just honest work at a fair rate.
          </p>
          <Link
            href="/quote"
            className="inline-block bg-white text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition"
          >
            Get a Quote
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <Image
                src="/images/logo.svg"
                alt="Acadiana Exteriors"
                width={180}
                height={45}
                className="h-10 w-auto mb-4"
              />
              <p className="text-gray-400">
                Pressure washing, window cleaning, gutter services, and can cleaning
                throughout Acadiana. Based right here in Louisiana.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#services" className="text-gray-400 hover:text-white transition">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="text-gray-400 hover:text-white transition">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-gray-400 hover:text-white transition">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <p className="text-gray-400 mb-2">
                <a href="tel:+19857099200" className="hover:text-white transition">(985) 709-9200</a>
              </p>
              <p className="text-gray-400 mb-2">Get a quote anytime 24/7</p>
              <p className="text-gray-400 mb-4">Serving all of Acadiana</p>
              <a
                href="https://www.facebook.com/profile.php?id=61588205375764"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Follow us on Facebook
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} Acadiana Exteriors. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
