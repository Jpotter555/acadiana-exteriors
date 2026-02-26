import Link from "next/link";
import Image from "next/image";
import HeroSlideshow from "@/components/HeroSlideshow";
import MobileNav from "@/components/MobileNav";
import StickyMobileCTA from "@/components/StickyMobileCTA";

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
            <MobileNav />
            {/* Desktop nav */}
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
                <a
                  href="tel:+19857099200"
                  className="bg-primary text-white px-5 py-2.5 rounded-full hover:bg-primary-700 transition font-semibold shadow-md"
                >
                  Call (985) 709-9200
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
                Professional exterior cleaning for homes and businesses across
                Lafayette, Breaux Bridge, and all of Acadiana. Pressure washing, windows,
                gutters, and more — done right at a fair price.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link
                  href="/quote"
                  className="bg-primary text-white px-10 py-5 rounded-lg text-lg font-bold hover:bg-primary-700 transition shadow-xl transform hover:scale-105 text-center"
                >
                  Get a Free Quote
                </Link>
                <a
                  href="tel:+19857099200"
                  className="bg-secondary text-white px-10 py-5 rounded-lg text-lg font-bold hover:bg-secondary-700 transition shadow-xl text-center"
                >
                  Call Now
                </a>
              </div>
              <div className="flex items-center gap-6 mt-6 justify-center md:justify-start text-sm text-gray-500">
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                  Free Estimates
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                  No Obligation
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                  Fast Response
                </span>
              </div>
            </div>
            <div className="relative h-[400px] md:h-[500px]">
              <HeroSlideshow />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Here&apos;s What We Offer
            </h2>
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

      {/* Reviews Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don&apos;t just take our word for it - hear from our happy customers across Acadiana.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Review 1 */}
            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                &ldquo;Jonathan and Brandon were exceptional in their services to pressure wash my home and drive way. Definitely would recommend!&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold text-sm">JC</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Jake C.</p>
                  <p className="text-sm text-gray-500">Google Review</p>
                </div>
              </div>
            </div>

            {/* Review 2 */}
            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                &ldquo;Acadiana Exteriors came through and completely transformed our home! The house and driveway look so clean it honestly feels like we just moved in again. Every inch is spotless — they didn&apos;t miss a thing! Super professional, showed up on time, and the results speak for themselves. 10/10 RECOMMEND!&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center">
                  <span className="text-secondary-700 font-bold text-sm">RN</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Raven N.</p>
                  <p className="text-sm text-gray-500">Facebook Review</p>
                </div>
              </div>
            </div>

            {/* Review 3 */}
            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                &ldquo;They made a huge difference on my driveway and sidewalk. The vinyl in the back of my house had huge spots all over and they made it look good as new. Super friendly too.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                  <span className="text-accent font-bold text-sm">CH</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Charlotte H.</p>
                  <p className="text-sm text-gray-500">Facebook Review</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Got questions? We&apos;ve got answers.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "How much does pressure washing cost?",
                answer:
                  "Every job is different, so we provide free quotes based on the size and condition of the area. We pride ourselves on fair, honest pricing with no hidden fees. Fill out our quote form or give us a call and we'll get you a price quickly.",
              },
              {
                question: "What areas do you serve?",
                answer:
                  "We serve all of Acadiana including Lafayette, Broussard, Youngsville, Breaux Bridge, Scott, Carencro, Duson, Rayne, Crowley, and surrounding areas. If you're not sure whether you're in our service area, just give us a call!",
              },
              {
                question: "How do I get a quote?",
                answer:
                  "You can fill out our online quote form anytime 24/7, call us at (985) 709-9200, or send us a message on Facebook or Instagram. We typically respond within 24 hours.",
              },
              {
                question: "Will pressure washing damage my property?",
                answer:
                  "Not when it's done right. We adjust the pressure and technique based on the surface — concrete driveways can handle high pressure, while siding and wood get a gentler soft wash. We know what we're doing and treat your property with care.",
              },
              {
                question: "How often should I get my house or driveway pressure washed?",
                answer:
                  "For most homes in Louisiana, we recommend once a year. Our humidity and weather cause mold, mildew, and algae to build up faster than in drier climates. Regular cleaning keeps your property looking great and prevents long-term damage.",
              },
              {
                question: "Do I need to be home during the service?",
                answer:
                  "Not necessarily. As long as we have access to the areas that need cleaning and a water source, we can get the job done. We'll coordinate everything with you beforehand.",
              },
              {
                question: "What services do you offer?",
                answer:
                  "We offer pressure washing, window cleaning, gutter cleaning, and trash can cleaning. Whether it's your driveway, patio, siding, sidewalks, or the whole exterior — we've got you covered.",
              },
              {
                question: "How long does a typical job take?",
                answer:
                  "It depends on the size and scope of the job. A standard driveway usually takes about 1-2 hours. A full house wash with driveway and sidewalks might take half a day. We'll give you a time estimate when we quote the job.",
              },
            ].map((faq, index) => (
              <details
                key={index}
                className="group border border-gray-200 rounded-xl overflow-hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer px-6 py-5 bg-gray-50 hover:bg-gray-100 transition font-semibold text-gray-900">
                  {faq.question}
                  <svg
                    className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div className="px-6 py-5 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 pb-24 md:pb-12">
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
              <a
                href="https://www.instagram.com/acadianaexteriors/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition mt-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
                Follow us on Instagram
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} Acadiana Exteriors LLC. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Sticky Mobile CTA */}
      <StickyMobileCTA />
    </div>
  );
}
