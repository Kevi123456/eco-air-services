import { ShieldCheck, Users, Clock, ThumbsUp, Phone } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Eco Air Services",
  description:
    "Learn about Eco Air Services — our story, our team, and our commitment to honest, high-quality HVAC service.",
};

const values = [
  {
    icon: ShieldCheck,
    title: "Honest & Transparent",
    description:
      "We give honest assessments and fair prices. You'll always know what we're doing and why.",
  },
  {
    icon: Users,
    title: "Experienced Team",
    description:
      "Our technicians are certified, background-checked, and continuously trained on the latest systems.",
  },
  {
    icon: Clock,
    title: "On Time, Every Time",
    description:
      "We respect your schedule. We show up in the service window we promise and communicate if anything changes.",
  },
  {
    icon: ThumbsUp,
    title: "Satisfaction Guaranteed",
    description:
      "We stand behind every job. If something isn't right, we make it right — no questions asked.",
  },
];

const stats = [
  { value: "10+", label: "Years of Experience" },
  { value: "5★", label: "Google Rating" },
  { value: "24/7", label: "Emergency Service" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            About <span className="text-green-400">Eco Air Services</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            A local HVAC company built on honesty, quality workmanship, and a genuine commitment to
            our customers&apos; comfort.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-green-700 text-white py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-6 text-center max-w-lg mx-auto">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-4xl font-extrabold mb-1">{s.value}</div>
                <div className="text-green-100 text-sm font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Eco Air Services was founded with a simple mission: to provide the kind of HVAC
                  service we&apos;d want in our own homes — honest, skilled, and respectful of your
                  time and property.
                </p>
                <p>
                  What started as a small operation has grown into a trusted local company serving
                  hundreds of homeowners and businesses in the area. Our growth has come entirely
                  from referrals and repeat customers — a track record we&apos;re proud of.
                </p>
                <p>
                  Every technician we hire is background-checked, EPA certified, and trained to
                  diagnose and fix problems right the first time. We don&apos;t upsell unnecessary
                  repairs and we don&apos;t cut corners.
                </p>
                <p>
                  When you call Eco Air Services, you&apos;re calling a company that treats your
                  home like our own.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">What We Stand For</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                <div className="w-11 h-11 bg-green-50 rounded-xl flex items-center justify-center mb-4">
                  <v.icon className="text-green-700" size={22} />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{v.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-900 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold mb-4">
            Ready to Work with Us?
          </h2>
          <p className="text-slate-300 mb-8 text-lg">
            Contact us today for a free estimate. No pressure, no gimmicks — just honest HVAC service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+12159924422"
              className="flex items-center justify-center gap-2 bg-green-700 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors"
            >
              <Phone size={20} />
              Call (215) 992-4422
            </a>
            <Link
              href="/contact"
              className="flex items-center justify-center bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-colors"
            >
              Send a Message
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
