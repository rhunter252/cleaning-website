const Section2 = () => {
  return (
    <section className="container mx-auto px-6 py-16">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-4xl font-bold text-gray-800">
            Why Choose Our Cleaning Services?
          </h2>
          <p className="mt-4 text-gray-600">
            We provide professional and reliable cleaning services tailored to
            your needs. Our team ensures your home or office is spotless, using
            eco-friendly products and advanced cleaning techniques.
          </p>
          <ul className="mt-6 space-y-3 text-gray-700">
            <li className="flex items-center">✅ Trusted & Experienced Team</li>
            <li className="flex items-center">
              ✅ Eco-Friendly Cleaning Products
            </li>
            <li className="flex items-center">
              ✅ Flexible Scheduling & Affordable Rates
            </li>
          </ul>
          <a
            href="#contact"
            className="mt-6 inline-block px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition"
          >
            Book a Cleaning
          </a>
        </div>

        {/* Right Image */}
        <div>
          <img
            src="https://images.pexels.com/photos/4239031/pexels-photo-4239031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Cleaning Service"
            className="max-w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Section2;
