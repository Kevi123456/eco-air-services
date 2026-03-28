import { MapPin, Phone } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Service Areas | Eco Air Services",
  description:
    "Eco Air Services provides HVAC repair, installation, and maintenance throughout Philadelphia, South Jersey, and Pennsylvania.",
};

const areas = [
  // Philadelphia
  "Philadelphia",
  "Northeast Philadelphia",
  "South Philadelphia",
  // South Jersey
  "Cherry Hill",
  "Voorhees",
  "Moorestown",
  "Mount Laurel",
  "Marlton",
  "Haddonfield",
  "Collingswood",
  "Gloucester City",
  // Pennsylvania
  "Newtown",
  "Langhorne",
  "Willow Grove",
  "Montgomery County",
  "Delaware County",
  "Chester County",
  "Bucks County",
  "King of Prussia",
  "Norristown",
  "Lansdowne",
  "Media",
];

const regions = [
  { name: "Philadelphia", description: "City neighborhoods and surrounding townships" },
  { name: "South Jersey", description: "Camden County, Burlington County & beyond" },
  { name: "Pennsylvania", description: "Bucks, Montgomery, Delaware & Chester Counties" },
];

export default function ServiceAreasPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            Service <span className="text-green-400">Areas</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Eco Air Services proudly serves Philadelphia, South Jersey, and Pennsylvania.
            Local experts you can trust — right in your backyard.
          </p>
        </div>
      </section>

      {/* Region highlights */}
      <section className="bg-green-700 text-white py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {regions.map((r) => (
              <div key={r.name}>
                <div className="text-xl font-extrabold mb-1">{r.name}</div>
                <div className="text-green-100 text-sm">{r.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-extrabold text-slate-900 mb-2">
              Cities &amp; Communities We Serve
            </h2>
            <p className="text-slate-500">
              Don&apos;t see your city? Call us — we may still be able to help.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-12">
            {areas.map((area) => (
              <div
                key={area}
                className="flex items-center gap-2 bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-sm font-medium text-slate-700 hover:border-green-400 hover:bg-green-50 transition-colors"
              >
                <MapPin size={14} className="text-green-600 shrink-0" />
                {area}
              </div>
            ))}
          </div>

          {/* Map placeholder */}
          <div className="bg-slate-100 rounded-2xl h-72 flex items-center justify-center text-slate-400 text-sm border-2 border-dashed border-slate-200 mb-12">
            <div className="text-center">
              <MapPin size={32} className="mx-auto mb-2 text-slate-300" />
              <p className="font-medium">Embed a Google Map here</p>
              <p className="text-xs mt-1">Google Maps → Share → Embed a map</p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-slate-900 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-extrabold mb-3">Not Sure If We Cover Your Area?</h3>
            <p className="text-slate-300 mb-6">
              Give us a call and we&apos;ll let you know right away.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+12159924422"
                className="flex items-center justify-center gap-2 bg-green-700 hover:bg-green-600 text-white font-bold px-8 py-3 rounded-xl transition-colors"
              >
                <Phone size={18} />
                Call (215) 992-4422
              </a>
              <Link
                href="/contact"
                className="flex items-center justify-center bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-8 py-3 rounded-xl transition-colors"
              >
                Send Us a Message
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
