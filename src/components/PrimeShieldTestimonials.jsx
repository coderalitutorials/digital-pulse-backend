




import React from "react";
import { Link } from "react-router-dom";
import {
  Star,
  Quote,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export default function TestimonialsSection() {
  const reviews = [
    {
      name: "Daniel Carter",
      role: "Small Business Owner",
      title: "Professional website design",
      quote:
        "PULSE made the website process simple. The final design looked clean, modern and much better for our business.",
    },
    {
      name: "Sophie Mitchell",
      role: "Startup Founder",
      title: "Clear and creative support",
      quote:
        "They understood what we needed and helped us with branding, graphics and website direction without overcomplicating anything.",
    },
    {
      name: "James Walker",
      role: "Local Service Provider",
      title: "Helpful digital marketing advice",
      quote:
        "The advice was practical and easy to follow. It helped us improve our online presence and present our services more professionally.",
    },
  ];

  return (
    <section className="bg-[#050505] py-20 text-white">
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
        {/* HEADER */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-3 text-xs font-black uppercase tracking-[0.2em] text-blue-400">
            <Sparkles size={15} />
            Testimonials
          </span>

          <h2 className="mt-5 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
            What clients say about working with PULSE.
          </h2>

          <p className="mt-5 text-base leading-relaxed text-gray-400">
            Simple feedback from businesses that needed better design, clearer
            branding and stronger digital presence.
          </p>
        </div>

        {/* REVIEWS */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <article
              key={review.name}
              className="rounded-[30px] border border-white/10 bg-[#0B0B0F] p-6 transition hover:-translate-y-1 hover:border-blue-500/40"
            >
              <Quote className="h-9 w-9 text-blue-400" />

              <div className="mt-5 flex gap-1">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    className="h-4 w-4 fill-blue-400 text-blue-400"
                  />
                ))}
              </div>

              <h3 className="mt-5 text-xl font-black text-white">
                {review.title}
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-gray-400">
                “{review.quote}”
              </p>

              <div className="mt-6 border-t border-white/10 pt-5">
                <h4 className="text-sm font-black text-white">
                  {review.name}
                </h4>
                <p className="mt-1 text-xs font-medium text-gray-500">
                  {review.role}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* SIMPLE CTA */}
        <div className="mt-10 rounded-[30px] border border-blue-500/20 bg-blue-500/10 p-7 text-center">
          <CheckCircle2 className="mx-auto h-9 w-9 text-blue-400" />

          <h3 className="mt-4 text-2xl font-black">
            Want a clean digital presence for your business?
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-gray-400">
            Start with a small service or request a full digital package based
            on your business needs.
          </p>

          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-3 rounded-full bg-blue-600 px-8 py-4 text-sm font-black uppercase tracking-wider text-white transition hover:bg-blue-700"
          >
            Start Project
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}