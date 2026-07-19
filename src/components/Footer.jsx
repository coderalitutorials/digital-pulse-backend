import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Code2,
  Palette,
  SearchCheck,
  Megaphone,
} from "lucide-react";

export default function Footer() {
  const BRAND = {
    company: "PULSE Digital Marketing Solution Limited",
    location: "London, UK",
    email: "info@pulsedigitalmarketing.uk",
  };

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact-us" },
  ];

  const services = [
    { name: "Website Design", icon: Code2 },
    { name: "Graphic Design", icon: Palette },
    { name: "SEO Services", icon: SearchCheck },
    { name: "Digital Marketing", icon: Megaphone },
  ];

  return (
    <footer className="bg-[#050505] text-white">
      <div className="mx-auto max-w-7xl px-5 pt-20 md:px-8 lg:px-10">
        {/* SIMPLE CTA */}
        <div className="rounded-[34px] border border-white/10 bg-[#0B0B0F] p-7 md:p-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.22em] text-blue-400">
                Start Your Digital Project
              </span>

              <h2 className="mt-4 max-w-3xl text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
                Ready to build a better online presence?
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-gray-400">
                Tell us what you need — website design, SEO, graphics or
                digital marketing — and we will help you choose the right
                starting point.
              </p>
            </div>

            <Link
              to="/contact"
              className="inline-flex w-fit items-center gap-3 rounded-full bg-blue-600 px-8 py-4 text-sm font-black uppercase tracking-wider text-white transition hover:bg-blue-700"
            >
              Contact Us
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>

        {/* MAIN FOOTER */}
        <div className="grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-12">
          {/* BRAND */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-block">
              <img
                src="/images/pulse-logo.webp"
                alt="PULSE Digital Marketing Solution Limited Logo"
                className=" h-[220px] w-auto object-contain"
                loading="lazy"
              />
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-relaxed text-gray-400">
              {BRAND.company} helps businesses grow online with professional
              website design, graphic design, SEO and digital marketing
              services.
            </p>

            <div className="mt-6 rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-blue-400" />
                <div>
                  <span className="block text-xs font-black uppercase tracking-widest text-blue-400">
                    Location
                  </span>
                  <p className="mt-1 text-sm font-bold text-gray-300">
                    {BRAND.location}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="lg:col-span-2">
            <h4 className="mb-5 text-xs font-black uppercase tracking-[0.22em] text-blue-400">
              Quick Links
            </h4>

            <nav className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-sm font-semibold text-gray-400 transition hover:text-white"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* SERVICES */}
          <div className="lg:col-span-3">
            <h4 className="mb-5 text-xs font-black uppercase tracking-[0.22em] text-blue-400">
              Services
            </h4>

            <div className="grid gap-3">
              {services.map(({ name, icon: Icon }) => (
                <Link
                  key={name}
                  to="/services"
                  className="flex items-center gap-3 rounded-2xl bg-white/[0.03] p-3 text-sm font-semibold text-gray-300 transition hover:bg-blue-600 hover:text-white"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                    <Icon size={17} />
                  </span>
                  {name}
                </Link>
              ))}
            </div>
          </div>

          {/* CONTACT */}
          <div className="lg:col-span-3">
            <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
              <h4 className="mb-5 text-xs font-black uppercase tracking-[0.22em] text-blue-400">
                Contact
              </h4>

              <div className="flex gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                  <Mail size={18} />
                </div>

                <div>
                  <span className="block text-xs font-black uppercase tracking-widest text-gray-500">
                    Email
                  </span>

                  <a
                    href={`mailto:${BRAND.email}`}
                    className="mt-1 block text-sm font-bold text-gray-300 hover:text-white"
                  >
                    {BRAND.email}
                  </a>
                </div>
              </div>

              <Link
                to="/contact"
                className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-full bg-blue-600 px-6 py-4 text-sm font-black uppercase tracking-wider text-white transition hover:bg-blue-700"
              >
                Send Message
                <Mail size={16} />
              </Link>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col items-center justify-between gap-4 lg:flex-row">
            <p className="text-center text-sm text-gray-500 lg:text-left">
              © {new Date().getFullYear()}{" "}
              <span className="font-bold text-white">{BRAND.company}</span>.
              All Rights Reserved.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-5">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-sm font-semibold text-gray-500 transition hover:text-white"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}