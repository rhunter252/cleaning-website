import { Building2, Stethoscope } from "lucide-react";

const services = [
  {
    icon: <Building2 size={36} className="text-indigo-500" />,
    title: "Office Cleaning",
    description:
      "Professional office cleaning services designed to maintain clean, organized, and healthy workspaces. Services are scheduled to minimize disruption to daily operations.",
    img: "https://images.pexels.com/photos/4239032/pexels-photo-4239032.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    includes: [
      "Trash removal",
      "Surface cleaning",
      "Restroom sanitation",
      "Breakroom cleaning",
      "Floor care",
      "Surface disinfection",
    ],
  },
  {
    icon: <Stethoscope size={36} className="text-emerald-500" />,
    title: "Medical Office Cleaning (Non-Clinical)",
    description:
      "Cleaning services for medical offices including waiting rooms, administrative areas, and restrooms. Services follow non-clinical standards and exclude regulated medical waste.",
    img: "https://images.pexels.com/photos/4239145/pexels-photo-4239145.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    includes: [
      "Waiting rooms",
      "Reception areas",
      "Administrative offices",
      "Restrooms",
      "Trash removal",
      "Floor care",
    ],
  },
];

const CardSection = () => {
  return (
    <section id="services" className="relative scroll-mt-24 py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>
      <div className="container relative mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold tracking-[0.25em] text-gray-500">
            SERVICES
          </p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-gray-900">
            Our cleaning services
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Professional cleaning options designed for busy offices and medical
            spaces.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={index}
              className="group rounded-3xl border border-black/5 bg-white/70 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-center justify-between">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-900/5">
                  {service.icon}
                </div>
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-gray-900">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-600">{service.description}</p>
              <div className="mt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
                  Includes
                </p>
                <ul className="mt-3 grid gap-2 text-sm text-gray-600 sm:grid-cols-2">
                  {service.includes.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 rounded-full bg-gray-900/5 px-3 py-1"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-gray-900/50"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 overflow-hidden rounded-2xl">
                <img
                  src={service.img}
                  alt={service.title}
                  className="h-44 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardSection;
