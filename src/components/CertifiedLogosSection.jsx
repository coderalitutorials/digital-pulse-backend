import React from "react";
import {
  Code2,
  Paintbrush,
  SearchCheck,
  Megaphone,
  BarChart3,
} from "lucide-react";

export default function CertifiedLogosSection() {
  const items = [
    {
      icon: Code2,
      title: "Web Design",
      text: "Modern websites for businesses that want a clean and professional online presence.",
    },
    {
      icon: Paintbrush,
      title: "UI/UX Design",
      text: "Simple, user-friendly layouts that make your website easy to use.",
    },
    {
      icon: SearchCheck,
      title: "SEO",
      text: "Basic search optimisation to help your business become easier to find online.",
    },
    {
      icon: Megaphone,
      title: "Digital Marketing",
      text: "Online marketing support to promote your services and reach more customers.",
    },
    {
      icon: BarChart3,
      title: "Growth Support",
      text: "Clear guidance to improve your brand, website and digital performance.",
    },
  ];

  return (
    <section className="bg-[#050505] py-20 text-white">
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400">
            What We Do
          </span>

          <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
            Digital services made clear and simple.
          </h2>

          <p className="mt-5 text-base font-medium leading-relaxed text-gray-400">
            PULSE helps businesses with websites, design, SEO and digital
            marketing without making the process complicated.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {items.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-blue-500/40 hover:bg-white/[0.05]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400">
                <Icon size={23} />
              </div>

              <h3 className="mt-5 text-lg font-black text-white">
                {title}
              </h3>

              <p className="mt-3 text-sm font-medium leading-relaxed text-gray-400">
                {text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-blue-500/20 bg-blue-500/10 p-6 text-center">
          <p className="text-sm font-bold text-blue-300">
            Clear starting prices from £50 — choose the service your business needs.
          </p>
        </div>
      </div>
    </section>
  );
}