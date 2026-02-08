const Section2 = () => {
  return (
    <section id="about" className="relative scroll-mt-24 py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50"></div>
      <div className="container relative mx-auto px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Left Content */}
          <div>
            <p className="text-sm font-semibold tracking-[0.25em] text-gray-500">
              ABOUT
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight text-gray-900">
              Why businesses trust our cleaning team
            </h2>
            <p className="mt-5 text-lg text-gray-600">
              We provide professional, reliable cleaning services tailored to
              your workspace. Our team delivers spotless results using
              eco-conscious products, modern techniques, and clear
              communication.
            </p>
            <ul className="mt-6 space-y-3 text-gray-700">
              <li className="flex items-center gap-3">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-700">
                  OK
                </span>
                Trusted & experienced team
              </li>
              <li className="flex items-center gap-3">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-700">
                  OK
                </span>
                Eco-friendly cleaning products
              </li>
              <li className="flex items-center gap-3">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-700">
                  OK
                </span>
                Flexible scheduling & affordable rates
              </li>
            </ul>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              Book a Cleaning
            </a>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-indigo-200/60 to-emerald-200/60 blur-xl"></div>
            <img
              src="https://images.pexels.com/photos/4239031/pexels-photo-4239031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Cleaning Service"
              className="relative w-full rounded-3xl border border-white/60 shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
