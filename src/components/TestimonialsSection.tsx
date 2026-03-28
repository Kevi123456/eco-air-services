import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    location: "Homeowner",
    rating: 5,
    text: "Eco Air Services came out the same day my AC stopped working in the middle of summer. The technician was professional, quick, and the price was fair. Highly recommend!",
  },
  {
    name: "James R.",
    location: "Property Manager",
    rating: 5,
    text: "We use Eco Air Services for all our rental properties. They're reliable, show up on time, and always do great work. Our go-to HVAC company.",
  },
  {
    name: "Maria L.",
    location: "Homeowner",
    rating: 5,
    text: "Had a full HVAC system installed and couldn't be happier. They explained everything, cleaned up after themselves, and the new system is running perfectly.",
  },
  {
    name: "David K.",
    location: "Small Business Owner",
    rating: 5,
    text: "My commercial unit went down on a Friday afternoon. They had a tech out within two hours and got us back up before close of business. Outstanding service.",
  },
  {
    name: "Patricia W.",
    location: "Homeowner",
    rating: 5,
    text: "Very honest company. They told me my unit just needed a cleaning rather than replacing — saved me thousands. I trust them completely.",
  },
  {
    name: "Tom H.",
    location: "Homeowner",
    rating: 5,
    text: "Signed up for their maintenance plan and it's been worth every penny. My system runs more efficiently and I haven't had a single breakdown since.",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-white" id="reviews">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Don&apos;t just take our word for it — here&apos;s what real customers have to say about
            Eco Air Services.
          </p>
          <a
            href="https://g.page/r/YOUR_GOOGLE_REVIEW_LINK"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 text-sm font-semibold text-green-700 hover:text-green-800 underline underline-offset-2"
          >
            <Star size={15} className="fill-yellow-400 text-yellow-400" />
            View all reviews on Google
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col gap-4"
            >
              <Quote size={24} className="text-green-200" />
              <p className="text-slate-600 text-sm leading-relaxed flex-1">{t.text}</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-slate-900 text-sm">{t.name}</p>
                  <p className="text-xs text-slate-400">{t.location}</p>
                </div>
                <Stars count={t.rating} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
