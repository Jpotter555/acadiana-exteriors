import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-900 via-secondary-800 to-primary-700 relative">
      {/* Organic Texture Overlay - Bayou Water Ripples */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z' fill='%23C2410C' fill-opacity='1'/%3E%3C/svg%3E")`,
        backgroundSize: '100px 100px'
      }}></div>

      {/* Navigation */}
      <nav className="border-b border-accent/30 bg-primary-800/90 backdrop-blur-md sticky top-0 z-50 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center gap-3">
              <span className="text-3xl">🌿</span>
              <Link href="/" className="text-2xl font-bold text-accent tracking-wide">
                Acadiana Exteriors
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
                  className="bg-accent text-white px-6 py-2.5 rounded-lg hover:bg-accent-600 transition font-bold shadow-lg"
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
              <div className="inline-block mb-4 px-6 py-2 bg-accent/20 rounded-full border-2 border-accent/40">
                <span className="text-accent font-bold">🌿 Rooted in Louisiana 🌿</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
                Natural{" "}
                <span className="text-accent">Exterior Care</span>
                <br/>
                <span className="text-3xl md:text-4xl text-gray-200">From the Bayou to Your Property</span>
              </h1>
              <p className="text-xl text-gray-100 mb-8 leading-relaxed">
                Eco-conscious cleaning services that respect Louisiana&apos;s natural beauty.
                Professional pressure washing with organic care.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link
                  href="/quote"
                  className="bg-accent text-white px-10 py-5 rounded-xl text-lg font-bold hover:bg-accent-600 transition shadow-2xl transform hover:scale-105"
                >
                  🌱 Get Free Quote
                </Link>
                <Link
                  href="#services"
                  className="bg-white/10 backdrop-blur-sm border-2 border-white/40 text-white px-10 py-5 rounded-xl text-lg font-bold hover:bg-white/20 transition"
                >
                  Our Services
                </Link>
              </div>
            </div>
            <div className="relative h-[400px] md:h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-600/40 to-accent/30 rounded-3xl shadow-2xl border-4 border-primary-500/30 backdrop-blur-sm"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-8xl opacity-20 space-y-4">
                <span>🌿</span>
                <span>💧</span>
              </div>
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                <svg
                  className="w-32 h-32"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
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
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive exterior maintenance solutions for your property
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                Professional cleaning for driveways, siding, decks, patios, and
                more. Remove dirt, grime, mold, and mildew.
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
                Crystal clear windows inside and out. Residential and
                commercial window washing services available.
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
                Gutter Services
              </h3>
              <p className="text-gray-600 mb-4">
                Keep your gutters flowing freely. Cleaning, maintenance, and
                inspection services to protect your property.
              </p>
              <Link
                href="/services/gutter-services"
                className="text-primary font-semibold hover:underline"
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
            Ready to Transform Your Property?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get a free, no-obligation quote today. Fast, professional service
            you can trust.
          </p>
          <Link
            href="/quote"
            className="inline-block bg-white text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition"
          >
            Get Your Free Quote
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Acadiana Exteriors</h3>
              <p className="text-gray-400">
                Professional exterior maintenance services in Acadiana,
                Louisiana.
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
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <p className="text-gray-400 mb-2">Serving Acadiana, Louisiana</p>
              <p className="text-gray-400">
                Contact: <span className="text-white">Jonathan</span>
              </p>
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
