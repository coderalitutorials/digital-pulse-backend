



// import React, { useEffect } from "react";
// import {
//   ShieldCheck,
//   Phone,
//   MapPin,
//   CheckCircle2,
//   SearchCheck,
//   Home,
//   ClipboardCheck,
//   ArrowUpRight,
// } from "lucide-react";

// export default function WhyChooseSuperGuard() {
//   const LOCAL = {
//     area: "Hammersmith",
//     postcode: "W14",
//     baseAddress: "9 Avonmore Gdns, London W14 BRU",
//     businessName: "SuperGuard Hammersmith",
//     phone: "07442 033407",
//     phoneTel: "+447442033407",
//   };

//   const reasons = [
//     {
//       icon: SearchCheck,
//       title: "Cause-Led Inspection",
//       text: "We look beyond the visible pest signs and check entry points, hiding areas and property conditions first.",
//     },
//     {
//       icon: Home,
//       title: "Built Around W14 Properties",
//       text: "Our approach suits Hammersmith homes, flats, landlords, shops, offices and shared buildings.",
//     },
//     {
//       icon: ClipboardCheck,
//       title: "Clear Aftercare Guidance",
//       text: "You receive simple advice on what was found, what was treated and how to reduce return risks.",
//     },
//   ];

//   useEffect(() => {
//     const items = document.querySelectorAll(".why-premium-animate");

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) entry.target.classList.add("why-premium-show");
//         });
//       },
//       { threshold: 0.18 }
//     );

//     items.forEach((item) => observer.observe(item));
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section className="relative overflow-hidden bg-[#0F0B1F] py-24 text-white lg:py-32">
//       <style>{`
//         .why-premium-animate {
//           opacity: 0;
//           transform: translateY(28px);
//           transition:
//             opacity 850ms cubic-bezier(0.16, 1, 0.3, 1),
//             transform 850ms cubic-bezier(0.16, 1, 0.3, 1);
//         }
//         .why-premium-show {
//           opacity: 1;
//           transform: translateY(0);
//         }
//         .why-delay-1 { transition-delay: 100ms; }
//         .why-delay-2 { transition-delay: 180ms; }
//         .why-delay-3 { transition-delay: 260ms; }
//         .why-delay-4 { transition-delay: 340ms; }

//         @media (prefers-reduced-motion: reduce) {
//           .why-premium-animate {
//             opacity: 1;
//             transform: none;
//             transition: none;
//           }
//         }
//       `}</style>

//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(95,82,181,0.45),transparent_32%),radial-gradient(circle_at_90%_25%,rgba(255,255,255,0.10),transparent_30%)]" />
//       <div className="absolute inset-x-0 bottom-0 h-[36%] bg-[#F8F6FF]" />

//       <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
//         {/* HEADER */}
//         <div className="why-premium-animate mx-auto max-w-5xl text-center">
//           <span className="inline-flex items-center gap-3 rounded-full bg-white/10 px-5 py-3 text-[11px] font-black uppercase tracking-[0.22em] text-[#DCD8FF] ring-1 ring-white/15">
//             <ShieldCheck size={16} />
//             Why Choose {LOCAL.businessName}
//           </span>

//           <h2 className="mt-7 text-4xl font-black leading-[0.92] tracking-tight sm:text-5xl lg:text-7xl">
//             Pest Control That Feels Clear From Start To Finish.
//           </h2>

//           <p className="mx-auto mt-6 max-w-3xl text-lg font-semibold leading-relaxed text-white/72">
//             SuperGuard Hammersmith keeps every visit focused, organised and
//             property-specific — from inspection to treatment and aftercare.
//           </p>
//         </div>

//         {/* IMAGE BAND */}
//         <div className="why-premium-animate why-delay-1 relative mt-16 overflow-hidden rounded-[46px] bg-white p-3 shadow-2xl shadow-black/30">
//           <img
//             src="/images/why-choose.webp"
//             alt={`${LOCAL.businessName} pest control service in ${LOCAL.area}`}
//             className="h-[360px] w-full rounded-[36px] object-cover md:h-[520px]"
//             loading="lazy"
//           />

//           <div className="absolute inset-3 rounded-[36px] bg-gradient-to-t from-[#0F0B1F]/90 via-[#0F0B1F]/20 to-transparent" />

//           <div className="absolute left-7 top-7 rounded-full bg-[#5F52B5] px-6 py-4 shadow-xl">
//             <span className="text-[11px] font-black uppercase tracking-[0.22em] text-white">
//               {LOCAL.area} • {LOCAL.postcode}
//             </span>
//           </div>

//           <div className="absolute bottom-7 left-7 right-7 grid gap-4 md:grid-cols-3">
//             {["Inspection First", "Property-Focused", "Aftercare Advice"].map(
//               (item) => (
//                 <div
//                   key={item}
//                   className="rounded-3xl bg-white/95 p-5 text-[#17122F] shadow-xl backdrop-blur-xl"
//                 >
//                   <CheckCircle2 className="h-6 w-6 text-[#5F52B5]" />
//                   <h3 className="mt-3 text-lg font-black">{item}</h3>
//                 </div>
//               )
//             )}
//           </div>
//         </div>

//         {/* REASONS */}
//         <div className="-mt-10 grid gap-5 lg:grid-cols-3">
//           {reasons.map((item, index) => {
//             const Icon = item.icon;

//             return (
//               <div
//                 key={item.title}
//                 className={`why-premium-animate why-delay-${
//                   index + 1
//                 } relative overflow-hidden rounded-[34px] bg-white p-7 text-[#17122F] shadow-2xl shadow-[#17122F]/10 ring-1 ring-[#5F52B5]/10`}
//               >
//                 <span className="absolute right-6 top-5 text-7xl font-black leading-none text-[#5F52B5]/10">
//                   0{index + 1}
//                 </span>

//                 <div className="flex h-15 w-15 items-center justify-center rounded-2xl bg-[#5F52B5] p-4 text-white">
//                   <Icon className="h-7 w-7" strokeWidth={2.4} />
//                 </div>

//                 <h4 className="mt-7 text-2xl font-black leading-tight">
//                   {item.title}
//                 </h4>

//                 <p className="mt-3 text-sm font-semibold leading-relaxed text-slate-600">
//                   {item.text}
//                 </p>

//                 <div className="mt-7 h-1 w-14 rounded-full bg-[#5F52B5]" />
//               </div>
//             );
//           })}
//         </div>

//         {/* CTA */}
//         <div className="why-premium-animate why-delay-4 mt-10 grid overflow-hidden rounded-[36px] bg-[#5F52B5] text-white shadow-2xl shadow-[#5F52B5]/25 lg:grid-cols-[1fr_auto]">
//           <div className="p-7 md:p-9">
//             <div className="flex items-start gap-4">
//               <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white text-[#5F52B5]">
//                 <MapPin className="h-6 w-6" />
//               </div>

//               <div>
//                 <span className="block text-[10px] font-black uppercase tracking-[0.22em] text-white/65">
//                   Local Base
//                 </span>
//                 <address className="mt-2 not-italic text-2xl font-black leading-tight">
//                   {LOCAL.baseAddress}
//                 </address>
//               </div>
//             </div>
//           </div>

//           <a
//             href={`tel:${LOCAL.phoneTel}`}
//             className="flex items-center justify-center gap-3 bg-[#17122F] px-8 py-7 text-sm font-black uppercase tracking-wider transition-all hover:bg-white hover:text-[#5F52B5]"
//           >
//             <Phone className="h-5 w-5" />
//             Call {LOCAL.phone}
//             <ArrowUpRight size={17} />
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }
















import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  CheckCircle2,
  Target,
  Clock,
  Users,
  Sparkles,
} from "lucide-react";

export default function WhyChooseSection() {
  const reasons = [
    {
      icon: Target,
      title: "Focused Strategy",
      text: "We plan every design and marketing step around your business goals.",
    },
    {
      icon: Clock,
      title: "Simple Process",
      text: "Clear communication, easy steps and no confusing technical process.",
    },
    {
      icon: Users,
      title: "Business Friendly",
      text: "Services made for startups, local businesses and growing brands.",
    },
  ];

  return (
    <section className="bg-[#050505] py-20 text-white">
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
        {/* HEADER */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-3 text-xs font-black uppercase tracking-[0.2em] text-blue-400">
            <Sparkles size={15} />
            Why Choose Us
          </span>

          <h2 className="mt-5 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
            Digital support that keeps things clear and professional.
          </h2>

          <p className="mt-5 text-base leading-relaxed text-gray-400">
            PULSE Digital Marketing Solution Limited helps businesses improve
            their brand, website and online growth with a simple and practical
            approach.
          </p>
        </div>

        {/* IMAGE PLACEHOLDER + POINTS */}
        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.04] p-3">
            <img
              src="/images/why-choose-agency.webp"
              alt="PULSE Digital Marketing Solution Limited digital agency team"
              className="h-[360px] w-full rounded-[26px] object-cover"
              loading="lazy"
            />
          </div>

          <div className="grid gap-5">
            {reasons.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="rounded-[28px] border border-white/10 bg-[#0B0B0F] p-6 transition hover:-translate-y-1 hover:border-blue-500/40"
              >
                <div className="flex items-start gap-5">
                  <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl bg-blue-600 p-4 text-white">
                    <Icon size={24} />
                  </div>

                  <div>
                    <h3 className="text-xl font-black text-white">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-400">
                      {text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM CTA */}
        <div className="mt-10 rounded-[32px] border border-blue-500/20 bg-blue-500/10 p-7 text-center">
          <CheckCircle2 className="mx-auto h-9 w-9 text-blue-400" />

          <h3 className="mt-4 text-2xl font-black">
            Ready to improve your online presence?
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-gray-400">
            Tell us what service you need and we will help you choose the right
            starting point for your business.
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