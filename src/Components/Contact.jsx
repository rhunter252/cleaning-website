import { Mail } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("xzdlqgzj");

  return (
    <section id="contact" className="scroll-mt-24 py-16">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 px-6">
        <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
          <h2 className="text-3xl font-bold text-gray-800">Get in Touch</h2>
          <p className="mt-2 text-gray-600">
            Call or text to request a walkthrough or cleaning quote.
          </p>

          {state.succeeded ? (
            <p className="mt-6 text-green-700 font-semibold">
              Thank you! Your message has been sent.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  rows="4"
                  required
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                ></textarea>
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>

              <button
                type="submit"
                disabled={state.submitting}
                className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-lg hover:bg-indigo-700 transition disabled:opacity-60"
              >
                {state.submitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
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
