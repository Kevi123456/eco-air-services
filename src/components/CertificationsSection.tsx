import { ShieldCheck, Award, FileCheck, BadgeCheck } from "lucide-react";

const credentials = [
  {
    icon: ShieldCheck,
    title: "Fully Licensed",
    description:
      "State-licensed HVAC contractor. License number available upon request.",
  },
  {
    icon: BadgeCheck,
    title: "Fully Insured",
    description:
      "General liability and workers' compensation insurance for your complete protection.",
  },
  {
    icon: Award,
    title: "Certified Technicians",
    description:
      "Our technicians hold EPA 608 and OSHA certifications with ongoing training.",
  },
  {
    icon: FileCheck,
    title: "Permitted Work",
    description:
      "All applicable permits pulled and inspections passed — no shortcuts, no surprises.",
  },
];


export default function CertificationsSection() {
  return (
    <section className="py-20 bg-white" id="credentials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            Licensed, Certified &amp; Insured
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            When you hire Eco Air Services, you can be confident you&apos;re working with a
            qualified, credentialed professional every single time.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {credentials.map((c) => (
            <div
              key={c.title}
              className="text-center p-6 rounded-2xl bg-green-50 border border-green-100"
            >
              <div className="w-14 h-14 bg-green-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <c.icon className="text-white" size={26} />
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">{c.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{c.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
