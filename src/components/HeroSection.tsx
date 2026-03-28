import Link from "next/link";
import { Phone, CheckCircle } from "lucide-react";

const trustPoints = [
  "Licensed & Insured",
  "24/7 Emergency Service",
  "Free Estimates",
  "Same-Day Service Available",
];

export default function HeroSection() {
  return (
    <section className="relative bg-[#faf3e8] overflow-hidden">
      {/* Subtle green tint in corner */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 10% 50%, #3d8b1e 0%, transparent 55%)",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-green-100 border border-green-300 text-green-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            <span className="w-2 h-2 bg-green-600 rounded-full animate-pulse" />
            Serving Philadelphia &amp; Surrounding Areas
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-slate-900">
            Expert HVAC Service{" "}
            <span className="text-green-700">You Can Trust</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl">
            Eco Air Services delivers professional heating and cooling solutions for homes and
            businesses. Fast response, honest pricing, and work done right the first time.
          </p>

          {/* Trust points */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-10">
            {trustPoints.map((point) => (
              <li key={point} className="flex items-center gap-2 text-slate-700 text-sm">
                <CheckCircle size={17} className="text-green-600 shrink-0" />
                {point}
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+12159924422"
              className="flex items-center justify-center gap-2 bg-green-700 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors shadow-md"
            >
              <Phone size={20} />
              Call (215) 992-4422
            </a>
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-700 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
