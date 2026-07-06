import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Sparkles,
  Code2,
  Palette,
  SearchCheck,
} from "lucide-react";

export default function ServicesHeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#050505] px-5 pt-40 pb-24 text-white md:px-8 lg:px-10">
      <style>{`
        @keyframes pulseFadeUp {
          from {
            opacity: 0;
            transform: translateY(28px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .pulse-hero-animate {
          opacity: 0;
          animation: pulseFadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .pulse-delay-1 {
          animation-delay: 0.12s;
        }

        .pulse-delay-2 {
          animation-delay: 0.22s;
        }

        .pulse-delay-3 {
          animation-delay: 0.32s;
        }

        @media (prefers-reduced-motion: reduce) {
          .pulse-hero-animate {
            animation: none;
            opacity: 1;
            transform: none;
          }
        }
      `}</style>

      {/* BACKGROUND */}
      <div className="absolute left-[-180px] top-20 h-[420px] w-[420px] rounded-full bg-blue-600/20 blur-3xl" />
      <div className="absolute right-[-180px] bottom-[-180px] h-[460px] w-[460px] rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.12),transparent_35%)]" />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <div className="pulse-hero-animate inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-3 text-xs font-black uppercase tracking-[0.2em] text-blue-400">
          <Sparkles size={15} />
          Digital Services
        </div>

        <h1 className="pulse-hero-animate pulse-delay-1 mt-7 text-4xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl">
          Digital marketing services designed to grow your business.
        </h1>

        <p className="pulse-hero-animate pulse-delay-2 mx-auto mt-6 max-w-3xl text-base font-medium leading-relaxed text-gray-400 sm:text-lg">
          PULSE Digital Marketing Solution Limited provides website design,
          graphic design, UI/UX, SEO and digital marketing services for modern
          businesses.
        </p>

        <div className="pulse-hero-animate pulse-delay-3 mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/contact-us"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-blue-600 px-8 py-4 text-sm font-black uppercase tracking-wider text-white shadow-xl shadow-blue-500/25 transition hover:-translate-y-1 hover:bg-blue-700"
          >
            Start Project
            <ArrowUpRight size={17} />
          </Link>

          <Link
            to="/about"
            className="inline-flex items-center justify-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-8 py-4 text-sm font-black uppercase tracking-wider text-white transition hover:-translate-y-1 hover:bg-white hover:text-[#050505]"
          >
            Learn About Us
            <ArrowUpRight size={17} />
          </Link>
        </div>

        <div className="pulse-hero-animate pulse-delay-3 mt-12 flex flex-wrap justify-center gap-3">
          {[
            { icon: Code2, text: "Web Design" },
            { icon: Palette, text: "Graphic Design" },
            { icon: SearchCheck, text: "SEO Services" },
          ].map(({ icon: Icon, text }) => (
            <span
              key={text}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-bold text-gray-300"
            >
              <Icon size={16} className="text-blue-400" />
              {text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}