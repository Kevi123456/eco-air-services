"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-slate-900 text-white sticky top-0 z-50 shadow-lg">
      {/* Emergency top bar */}
      <div className="bg-green-700 text-white text-sm py-1.5 text-center font-medium">
        24/7 Emergency Service Available —{" "}
        <a href="tel:+12159924422" className="underline font-bold hover:text-green-100">
          Call Now: (215) 992-4422
        </a>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.jpg"
              alt="Eco Air Services Logo"
              width={44}
              height={44}
              className="rounded-md object-contain bg-white p-0.5"
              priority
            />
            <span className="font-bold text-lg leading-tight">
              Eco Air <span className="text-green-400">Services</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="hover:text-green-400 transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+12159924422"
              className="flex items-center gap-2 bg-green-700 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
            >
              <Phone size={15} />
              (215) 992-4422
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-slate-800"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-slate-800 border-t border-slate-700 px-4 pb-4 pt-2">
          <nav className="flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="py-2 px-3 rounded-md hover:bg-slate-700 hover:text-green-400 transition-colors text-sm font-medium"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <a
              href="tel:+12159924422"
              className="mt-2 flex items-center justify-center gap-2 bg-green-700 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold"
            >
              <Phone size={15} />
              (215) 992-4422
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
