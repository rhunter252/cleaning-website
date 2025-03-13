import { Sparkles, ShieldCheck, Clock } from "lucide-react";

const services = [
  {
    icon: <Sparkles size={40} className="text-indigo-600" />,
    title: "Deep Cleaning",
    description:
      "Thorough cleaning services that leave your space spotless and fresh.",
    img: "https://images.pexels.com/photos/4239032/pexels-photo-4239032.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    icon: <ShieldCheck size={40} className="text-indigo-600" />,
    title: "Eco-Friendly Products",
    description: "We use safe, non-toxic, and eco-friendly cleaning solutions.",
    img: "https://images.pexels.com/photos/4239145/pexels-photo-4239145.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    icon: <Clock size={40} className="text-indigo-600" />,
    title: "Flexible Scheduling",
    description:
      "Book a cleaning session at your convenience with our flexible plans.",
    img: "https://images.pexels.com/photos/6195122/pexels-photo-6195122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const CardSection = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800">
          Our Cleaning Services
        </h2>
        <p className="text-xl mt-4 text-gray-600">
          We offer a range of professional cleaning services tailored to your
          needs.
        </p>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-xl transition transform hover:-translate-y-2"
            >
              <img
                src={service.img}
                alt={service.title}
                className="mt-4 w-full h-40 object-cover rounded-lg pb-2"
              />

              <div className="flex justify-center">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-800 mt-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardSection;
