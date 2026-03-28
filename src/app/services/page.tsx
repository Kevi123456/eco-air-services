import { Snowflake, Flame, Wrench, Wind, ShieldCheck, Zap, CheckCircle, Phone } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HVAC Services | Eco Air Services",
  description:
    "Full-service HVAC company offering AC repair, heating, installation, maintenance, and 24/7 emergency service.",
};

const services = [
  {
    icon: Snowflake,
    title: "AC Repair & Service",
    description:
      "Is your air conditioner not cooling, making strange noises, or cycling too often? Our certified technicians diagnose and repair all AC makes and models — fast.",
    includes: [
      "Refrigerant leak detection & recharge",
      "Compressor diagnostics",
      "Thermostat calibration",
      "Capacitor & contactor replacement",
      "Evaporator & condenser coil service",
    ],
  },
  {
    icon: Flame,
    title: "Heating & Furnace Repair",
    description:
      "Don't suffer through a cold night. We service and repair gas furnaces, heat pumps, electric heaters, and boilers — often same-day.",
    includes: [
      "Furnace ignitor & heat exchanger service",
      "Heat pump diagnostics",
      "Gas valve & burner repair",
      "Carbon monoxide safety inspection",
      "Blower motor repair",
    ],
  },
  {
    icon: Wrench,
    title: "HVAC Installation",
    description:
      "Whether replacing an aging system or installing in a new construction, we size and install the right system for your space and budget.",
    includes: [
      "Free in-home load calculation",
      "All major brand installations",
      "Mini-split systems",
      "Permits & inspections handled",
    ],
  },
  {
    icon: Wind,
    title: "Preventive Maintenance",
    description:
      "Regular tune-ups keep your system running efficiently, extend equipment life, and catch small issues before they become expensive repairs.",
    includes: [
      "Full system inspection",
      "Filter replacement",
      "Coil cleaning",
      "Electrical connection check",
      "Refrigerant level verification",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Indoor Air Quality",
    description:
      "Breathe easier with cleaner indoor air. We install and service air purification and humidity control systems.",
    includes: [
      "Whole-home humidifiers & dehumidifiers",
      "HEPA filtration upgrades",
      "Air quality testing",
    ],
  },
  {
    icon: Zap,
    title: "24/7 Emergency Service",
    description:
      "HVAC emergencies happen at the worst times. Our emergency team is available around the clock — nights, weekends, and holidays.",
    includes: [
      "Same-day response",
      "After-hours availability",
      "Weekend & holiday service",
      "No surprise emergency fees",
      "Rapid diagnosis & repair",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            HVAC <span className="text-green-400">Services</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Comprehensive heating and cooling services for residential and commercial customers.
            Licensed, insured, and ready to help.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl border border-slate-100 bg-slate-50 p-8 hover:border-green-200 hover:shadow-md transition-all"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-green-700 rounded-xl flex items-center justify-center shrink-0">
                    <s.icon className="text-white" size={22} />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-slate-900">{s.title}</h2>
                    <p className="text-slate-500 text-sm mt-1 leading-relaxed">{s.description}</p>
                  </div>
                </div>
                <ul className="space-y-1.5 mt-4">
                  {s.includes.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle size={14} className="text-green-600 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-green-700 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold mb-4">Need Service Today?</h2>
          <p className="text-green-100 mb-8 text-lg">
            Call us now for a free estimate or to schedule service. Same-day appointments
            available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+12159924422"
              className="flex items-center justify-center gap-2 bg-white text-green-700 hover:bg-green-50 font-bold px-8 py-4 rounded-xl text-lg transition-colors"
            >
              <Phone size={20} />
              Call (215) 992-4422
            </a>
            <Link
              href="/contact"
              className="flex items-center justify-center bg-green-700 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-colors"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
