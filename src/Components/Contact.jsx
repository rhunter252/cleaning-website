const Contact = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 px-6">
        {/* Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
          <h2 className="text-3xl font-bold text-gray-800">Get in Touch</h2>
          <p className="mt-2 text-gray-600">
            We'd love to hear from you! Fill out the form below.
          </p>

          <form className="mt-6 space-y-4">
            <div>
              <label className="block text-gray-700 font-medium">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Message</label>
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
              ></textarea>
            </div>
            <button className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-lg hover:bg-indigo-700 transition">
              Send Message
            </button>
          </form>
        </div>

        {/* Schedule / Business Hours */}
        <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
          <h2 className="text-3xl font-bold text-gray-800">Our Schedule</h2>
          <p className="mt-2 text-gray-600">
            Check our availability and book your cleaning session.
          </p>

          <ul className="mt-6 space-y-4 text-gray-700">
            <li className="flex justify-between border-b pb-2">
              <span>Monday - Friday</span>
              <span className="font-semibold">8:00 AM - 6:00 PM</span>
            </li>
            <li className="flex justify-between border-b pb-2">
              <span>Saturday</span>
              <span className="font-semibold">9:00 AM - 4:00 PM</span>
            </li>
            <li className="flex justify-between">
              <span>Sunday</span>
              <span className="font-semibold text-red-600">Closed</span>
            </li>
          </ul>

          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-800">Contact Us</h3>
            <p className="text-gray-600 mt-1">📞 (336) 456-7890</p>
            <p className="text-gray-600">📍 123 Fleming St., Greensboro, NC</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
