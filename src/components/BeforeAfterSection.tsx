"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ImageIcon } from "lucide-react";

export type BeforeAfterItem = {
  id: number;
  title: string;
  description: string;
  before: string; // image path or URL
  after: string;
  type: "image" | "video";
};

// Placeholder data — replace with real photos/videos
const items: BeforeAfterItem[] = [
  {
    id: 1,
    title: "Complete AC Unit Replacement",
    description: "Old R-22 system replaced with a high-efficiency Carrier unit.",
    before: "/images/before-after/ac-replace-before.jpg",
    after: "/images/before-after/ac-replace-after.jpg",
    type: "image",
  },
  {
    id: 2,
    title: "Ductwork Repair & Cleaning",
    description: "Severely deteriorated ductwork restored and sealed for maximum efficiency.",
    before: "/images/before-after/duct-before.jpg",
    after: "/images/before-after/duct-after.jpg",
    type: "image",
  },
  {
    id: 3,
    title: "Condenser Coil Cleaning",
    description: "Heavily fouled coils cleaned, restoring full cooling capacity.",
    before: "/images/before-after/coil-before.jpg",
    after: "/images/before-after/coil-after.jpg",
    type: "image",
  },
];

function PlaceholderImage({ label }: { label: string }) {
  return (
    <div className="w-full h-64 bg-slate-200 flex flex-col items-center justify-center gap-2 text-slate-400 rounded-xl">
      <ImageIcon size={36} />
      <span className="text-sm font-medium">{label} Photo</span>
      <span className="text-xs">Add your photo here</span>
    </div>
  );
}

export default function BeforeAfterSection() {
  const [active, setActive] = useState(0);
  const [view, setView] = useState<"before" | "after">("after");

  const prev = () => setActive((i) => (i - 1 + items.length) % items.length);
  const next = () => setActive((i) => (i + 1) % items.length);
  const item = items[active];

  return (
    <section className="py-20 bg-white" id="gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            Our Work
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            See the difference quality HVAC work makes. Real jobs, real results.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Card */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100">
            {/* Before / After toggle */}
            <div className="flex bg-slate-200 p-1 m-4 rounded-xl max-w-xs mx-auto">
              {(["before", "after"] as const).map((v) => (
                <button
                  key={v}
                  onClick={() => setView(v)}
                  className={`flex-1 py-2 rounded-lg text-sm font-semibold capitalize transition-colors ${
                    view === v
                      ? "bg-white text-slate-900 shadow-sm"
                      : "text-slate-500 hover:text-slate-700"
                  }`}
                >
                  {v}
                </button>
              ))}
            </div>

            {/* Image / Video */}
            <div className="px-4 pb-2">
              {item.type === "image" ? (
                <div className="relative w-full h-64 rounded-xl overflow-hidden bg-slate-200">
                  {/* When real images are added, replace PlaceholderImage with Next/Image */}
                  <PlaceholderImage label={view === "before" ? "Before" : "After"} />
                </div>
              ) : null}
            </div>

            {/* Info */}
            <div className="px-6 py-4">
              <h3 className="font-bold text-slate-900 text-lg">{item.title}</h3>
              <p className="text-slate-500 text-sm mt-1">{item.description}</p>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between px-6 pb-5">
              <button
                onClick={prev}
                className="flex items-center gap-1 text-sm text-slate-500 hover:text-slate-900 transition-colors"
              >
                <ChevronLeft size={18} /> Previous
              </button>
              <span className="text-sm text-slate-400 font-medium">
                {active + 1} / {items.length}
              </span>
              <button
                onClick={next}
                className="flex items-center gap-1 text-sm text-slate-500 hover:text-slate-900 transition-colors"
              >
                Next <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Thumbnails */}
          <div className="flex gap-3 mt-4 justify-center">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  i === active ? "bg-green-600" : "bg-slate-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
