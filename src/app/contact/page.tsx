import { Phone, Mail, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Eco Air Services",
  description:
    "Contact Eco Air Services for HVAC repair, installation, or a free estimate. Call, email, or fill out our form.",
};

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    lines: ["(215) 992-4422", "24/7 for emergencies"],
    href: "tel:+12159924422",
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["ecoairservices@yahoo.com"],
    href: "mailto:ecoairservices@yahoo.com",
  },
  {
    icon: MapPin,
    title: "Service Area",
    lines: ["Philadelphia, PA & Surrounding Areas"],
    href: null,
  },
  {
    icon: Clock,
    title: "Hours",
    lines: ["8am – 5pm, 7 days a week"],
    href: null,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            Contact <span className="text-green-400">Us</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Ready to schedule service or have a question? Reach out — we typically respond within a
            few hours.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left — contact info */}
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900 mb-6">Get in Touch</h2>

              <div className="space-y-5 mb-10">
                {contactInfo.map((info) => (
                  <div key={info.title} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center shrink-0">
                      <info.icon className="text-green-700" size={18} />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 text-sm">{info.title}</p>
                      {info.lines.map((line) =>
                        info.href && info.lines.indexOf(line) === 0 ? (
                          <a
                            key={line}
                            href={info.href}
                            className="text-sm text-green-700 hover:text-green-800 font-medium"
                          >
                            {line}
                          </a>
                        ) : (
                          <p key={line} className="text-sm text-slate-500">
                            {line}
                          </p>
                        )
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="bg-slate-100 rounded-2xl h-56 flex items-center justify-center text-slate-400 text-sm border-2 border-dashed border-slate-200">
                <div className="text-center">
                  <MapPin size={28} className="mx-auto mb-2 text-slate-300" />
                  <p className="font-medium">Embed Google Map here</p>
                  <p className="text-xs mt-1">Maps → Share → Embed a map</p>
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900 mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
