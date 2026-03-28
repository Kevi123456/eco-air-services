import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-3">
              <Image
                src="/logo.jpg"
                alt="Eco Air Services Logo"
                width={40}
                height={40}
                className="rounded-md object-contain bg-white p-0.5"
              />
              <span className="font-bold text-lg text-white leading-tight">
                Eco Air <span className="text-green-400">Services</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              Professional HVAC solutions for your home and business. Licensed, insured, and
              dedicated to your comfort.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/", label: "Home" },
                { href: "/services", label: "Services" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-green-400 transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>AC Repair &amp; Service</li>
              <li>Heating &amp; Furnace Repair</li>
              <li>HVAC Installation</li>
              <li>Preventive Maintenance</li>
              <li>Indoor Air Quality</li>
              <li>24/7 Emergency Service</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone size={15} className="text-green-500 mt-0.5 shrink-0" />
                <a href="tel:+12159924422" className="hover:text-green-400 transition-colors">
                  (215) 992-4422
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={15} className="text-green-500 mt-0.5 shrink-0" />
                <a
                  href="mailto:ecoairservices@yahoo.com"
                  className="hover:text-green-400 transition-colors"
                >
                  ecoairservices@yahoo.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={15} className="text-green-500 mt-0.5 shrink-0" />
                <span className="text-slate-400">Philadelphia, PA &amp; Surrounding Areas</span>
              </li>
            </ul>
            <div className="flex gap-3 mt-4">
              <a
                href="#"
                aria-label="Facebook"
                className="bg-slate-800 hover:bg-green-700 p-2 rounded-md transition-colors text-slate-300"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="bg-slate-800 hover:bg-green-700 p-2 rounded-md transition-colors text-slate-300"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Eco Air Services. All rights reserved.</p>
          <p>Licensed &amp; Insured | HVAC Contractor</p>
        </div>
      </div>
    </footer>
  );
}
