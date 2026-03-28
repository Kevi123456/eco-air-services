import Image from "next/image";
import { Star, MapPin, ExternalLink, Phone } from "lucide-react";

export default function GoogleCTASection() {
  return (
    <section className="py-16 bg-[#faf3e8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left — Google profile card */}
          <div className="bg-white text-slate-900 rounded-2xl p-6 shadow-sm border border-[#e8ddc8]">
            <div className="flex items-start gap-4 mb-4">
              <Image
                src="/logo.jpg"
                alt="Eco Air Services"
                width={56}
                height={56}
                className="rounded-xl object-contain bg-slate-50 p-1 border border-slate-100 shrink-0"
              />
              <div>
                <h3 className="font-bold text-lg leading-tight">Eco Air Services</h3>
                <p className="text-sm text-slate-500">HVAC Contractor</p>
                <div className="flex items-center gap-1.5 mt-1">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} size={13} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm font-semibold">5.0</span>
                  <span className="text-sm text-slate-400">· Google Reviews</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm text-slate-500 mb-4">
              <MapPin size={14} className="shrink-0" />
              <span>Philadelphia, PA &amp; Surrounding Areas</span>
            </div>

            <a
              href="https://g.page/r/YOUR_GOOGLE_PROFILE_LINK"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-green-700 hover:bg-green-600 text-white font-semibold py-2.5 rounded-xl text-sm transition-colors"
            >
              <ExternalLink size={15} />
              View Our Google Profile
            </a>
          </div>

          {/* Right — CTA text */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 leading-tight text-slate-900">
              Ready for Reliable{" "}
              <span className="text-green-700">HVAC Service?</span>
            </h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Whether you need emergency repairs, a routine tune-up, or a brand-new system —
              Eco Air Services is ready to help. Call us today for a free estimate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+12159924422"
                className="flex items-center justify-center gap-2 bg-green-700 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors"
              >
                <Phone size={20} />
                (215) 992-4422
              </a>
              <a
                href="https://g.page/r/YOUR_GOOGLE_REVIEW_LINK"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-700 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-colors"
              >
                <Star size={18} />
                Leave a Review
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
