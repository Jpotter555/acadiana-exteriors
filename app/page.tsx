import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-900 via-secondary-700 to-primary-800 relative">
      {/* Fleur-de-lis Pattern Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none select-none"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 100px, rgba(245, 158, 11, 0.1) 100px, rgba(245, 158, 11, 0.1) 200px)`,
        }}>
        <div className="absolute inset-0 flex flex-wrap gap-20 p-10">
          {[...Array(20)].map((_, i) => (
            <span key={i} className="text-4xl text-accent opacity-30">⚜️</span>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <nav className="border-b border-accent/20 bg-primary-900/95 backdrop-blur-sm sticky top-0 z-50 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/logo.svg"
                  alt="Acadiana Exteriors"
                  width={200}
                  height={50}
                  className="h-12 w-auto"
                  priority
                />
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                <Link
                  href="#services"
                  className="text-gray-100 hover:text-accent transition font-medium"
                >
                  Services
                </Link>
                <Link
                  href="#about"
                  className="text-gray-100 hover:text-accent transition font-medium"
                >
                  About
                </Link>
                <Link
                  href="#contact"
                  className="text-gray-100 hover:text-accent transition font-medium"
                >
                  Contact
                </Link>
                <Link
                  href="/quote"
                  className="bg-accent text-primary-900 px-6 py-2.5 rounded-lg hover:bg-accent-400 transition font-bold shadow-lg border-2 border-accent-600"
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
              <div className="inline-block mb-4 px-6 py-2 bg-accent/20 border-2 border-accent rounded-full">
                <span className="text-accent font-bold">⚜️ Locally Owned & Operated ⚜️</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                We Make Your{" "}
                <span className="text-accent drop-shadow-lg">House Shine</span>
                <br/>
                <span className="text-3xl md:text-4xl text-gray-200">Right Here in Acadiana</span>
              </h1>
              <p className="text-xl text-gray-100 mb-8 leading-relaxed">
                Brandon and Jonathan here - we&apos;re starting this business to serve
                Lafayette, Breaux Bridge, and all of Acadiana. Pressure washing, windows,
                gutters. Fair prices and we&apos;ll treat your place right.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link
                  href="/quote"
                  className="bg-accent text-primary-900 px-10 py-5 rounded-lg text-lg font-bold hover:bg-accent-400 transition shadow-2xl border-4 border-accent-600 transform hover:scale-105"
                >
                  Get Your Quote
                </Link>
                <Link
                  href="#services"
                  className="bg-white/10 backdrop-blur-sm border-4 border-white/30 text-white px-10 py-5 rounded-lg text-lg font-bold hover:bg-white/20 transition"
                >
                  What We Do
                </Link>
              </div>
            </div>
            <div className="relative h-[400px] md:h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-secondary/30 rounded-2xl shadow-2xl border-4 border-accent/50 backdrop-blur-sm"></div>
              <div className="absolute inset-0 flex items-center justify-center text-9xl opacity-20">
                ⚜️
              </div>
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
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-accent"
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
                className="text-accent font-semibold hover:underline"
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
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-accent"
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
                className="text-accent font-semibold hover:underline"
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
              <h4 className="text-lg font-semibold mb-4">Quote Availability</h4>
              <p className="text-gray-400 mb-2">Get a quote anytime 24/7</p>
              <p className="text-gray-400 mb-2">We respond within 24 hours</p>
              <p className="text-gray-400">Serving all of Acadiana</p>
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
