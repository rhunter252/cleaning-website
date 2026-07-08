import { useState } from "react";
import { Mail } from "lucide-react";

const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setStatus("Thank you! Your message has been sent.");
      form.reset();
    } else {
      setStatus("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="scroll-mt-24 py-16">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 px-6">
        <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
          <h2 className="text-3xl font-bold text-gray-800">Get in Touch</h2>
          <p className="mt-2 text-gray-600">
            Call or text to request a walkthrough or cleaning quote.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label className="block text-gray-700 font-medium">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">Message</label>
              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                required
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-lg hover:bg-indigo-700 transition"
            >
              Send Message
            </button>

            {status && (
              <p className="text-sm font-medium text-green-700">{status}</p>
            )}
          </form>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
          <h2 className="text-3xl font-bold text-gray-800">Our Schedule</h2>
          <p className="mt-2 text-gray-600">
            Operating Hours By appointment and contract schedule.
          </p>

          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-800">Contact Us</h3>
            <p className="text-gray-600 mt-1">📞 (336) 404-2548</p>
            <p className="mt-1 flex items-center gap-2 text-gray-600">
              <Mail size={24} className="text-red-700" />
              <span>kingdomcarecleaningllc@gmail.com</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
