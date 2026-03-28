import Link from "next/link";
import { Snowflake, Flame, Wrench, Wind, ShieldCheck, Zap } from "lucide-react";

const services = [
  {
    icon: Snowflake,
    title: "AC Repair & Service",
    description:
      "Fast diagnosis and repair for all makes and models. Get your AC running efficiently again.",
  },
  {
    icon: Flame,
    title: "Heating & Furnace",
    description:
      "Keep warm all winter. We service furnaces, heat pumps, and boilers with expert care.",
  },
  {
    icon: Wrench,
    title: "HVAC Installation",
    description:
      "New system installs done right. We size, source, and install systems built for your space.",
  },
  {
    icon: Wind,
    title: "Preventive Maintenance",
    description:
      "Tune-up plans that extend equipment life, improve efficiency, and prevent costly breakdowns.",
  },
  {
    icon: ShieldCheck,
    title: "Indoor Air Quality",
    description:
      "Air purifiers, humidifiers, and filtration solutions to keep your air clean and healthy.",
  },
  {
    icon: Zap,
    title: "24/7 Emergency Service",
    description:
      "HVAC emergencies don't wait — neither do we. Call anytime and we'll be there fast.",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            Our Services
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            From emergency repairs to full system installations — we handle all your heating and
            cooling needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md hover:border-green-200 transition-all group"
            >
              <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-100 transition-colors">
                <service.icon className="text-green-700" size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{service.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/services"
            className="inline-block bg-slate-900 hover:bg-slate-700 text-white font-semibold px-8 py-3 rounded-xl transition-colors"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
