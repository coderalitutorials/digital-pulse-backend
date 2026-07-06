


// import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   ArrowUpRight,
//   Bug,
//   Rat,
//   ShieldAlert,
//   PhoneCall,
//   MapPin,
//   CheckCircle,
//   Sparkles,
// } from "lucide-react";

// export default function SuperGuardServicesSection() {
//   const navigate = useNavigate();

//   const LOCAL = {
//     area: "Hammersmith",
//     postcode: "W14",
//     businessName: "SuperGuard Hammersmith",
//     baseAddress: "9 Avonmore Gdns, London W14 BRU",
//     phone: "07442 033407",
//     phoneTel: "+447442033407",
//   };

//   const services = [
//     {
//       title: "Rats & Mice Control",
//       icon: Rat,
//       image: "/images/rodents.webp",
//       label: "Rodent Control",
//       desc: "Rodents can move through kitchens, loft spaces, wall gaps and storage areas. We inspect signs, entry points and conditions before planning a suitable treatment.",
//       points: ["Entry route checks", "Activity inspection", "Proofing advice"],
//     },
//     {
//       title: "Bed Bug Treatment",
//       icon: Bug,
//       image: "/images/bedbugs.webp",
//       label: "Bed Bug Service",
//       desc: "Bed bugs can hide in bed frames, mattress seams, headboards and nearby furniture. Our Hammersmith team checks affected rooms and provides targeted treatment guidance.",
//       points: ["Room inspection", "Targeted treatment", "Aftercare support"],
//     },
//     {
//       title: "Wasp Nest Control",
//       icon: ShieldAlert,
//       image: "/images/wasps.webp",
//       label: "Wasp Nest Help",
//       desc: "Wasps around rooflines, wall voids, gardens and entrance areas can become risky quickly. We help locate active nest areas and arrange suitable treatment.",
//       points: ["Nest activity check", "Controlled method", "Clear next steps"],
//     },
//   ];

//   useEffect(() => {
//     const items = document.querySelectorAll(".sg-service-animate");

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) entry.target.classList.add("sg-service-show");
//         });
//       },
//       { threshold: 0.16 }
//     );

//     items.forEach((item) => observer.observe(item));
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section className="relative overflow-hidden bg-[#100C21] py-24 lg:py-32">
//       <style>{`
//         .sg-service-animate {
//           opacity: 0;
//           transform: translateY(30px);
//           transition: opacity 850ms cubic-bezier(0.16,1,0.3,1),
//           transform 850ms cubic-bezier(0.16,1,0.3,1);
//         }
//         .sg-service-show { opacity: 1; transform: translateY(0); }
//         .sg-delay-1 { transition-delay: 120ms; }
//         .sg-delay-2 { transition-delay: 220ms; }
//         .sg-delay-3 { transition-delay: 320ms; }
//         @media (prefers-reduced-motion: reduce) {
//           .sg-service-animate { opacity: 1; transform: none; transition: none; }
//         }
//       `}</style>

//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(95,82,181,0.45),transparent_32%),radial-gradient(circle_at_85%_25%,rgba(255,255,255,0.10),transparent_28%)]" />
//       <div className="absolute inset-x-0 bottom-0 h-72 bg-[#F8F6FF]" />

//       <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
//         <div className="sg-service-animate mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
//           <div className="max-w-4xl">
//             <span className="inline-flex items-center gap-3 rounded-full bg-white/10 px-5 py-3 text-[11px] font-black uppercase tracking-[0.22em] text-[#DCD8FF] ring-1 ring-white/15">
//               <Sparkles size={15} />
//               SuperGuard Services • {LOCAL.area} {LOCAL.postcode}
//             </span>

//             <h2 className="mt-7 text-4xl font-black leading-[0.92] tracking-tight text-white sm:text-5xl lg:text-7xl">
//               Focused Pest Treatments For Hammersmith Properties.
//             </h2>
//           </div>

//           <p className="max-w-md text-base font-semibold leading-relaxed text-white/72">
//             No generic approach — each visit starts with inspection, then a
//             treatment route matched to the pest issue and property layout.
//           </p>
//         </div>

//         <div className="overflow-hidden rounded-[42px] bg-white shadow-2xl shadow-black/30">
//           {services.map((service, index) => {
//             const Icon = service.icon;
//             const reverse = index % 2 === 1;

//             return (
//               <article
//                 key={service.title}
//                 className={`sg-service-animate sg-delay-${
//                   index + 1
//                 } grid border-b border-[#5F52B5]/10 last:border-b-0 lg:grid-cols-12`}
//               >
//                 <div
//                   className={`relative min-h-[320px] overflow-hidden lg:col-span-5 ${
//                     reverse ? "lg:order-2" : ""
//                   }`}
//                 >
//                   <img
//                     src={service.image}
//                     alt={`${service.title} in ${LOCAL.area}`}
//                     className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
//                     loading="lazy"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-[#17122F]/85 via-[#17122F]/25 to-transparent" />

//                   <div className="absolute left-6 top-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#5F52B5] text-white shadow-xl">
//                     <Icon className="h-8 w-8" strokeWidth={2.4} />
//                   </div>

//                   <div className="absolute bottom-6 left-6 right-6">
//                     <span className="inline-flex rounded-full bg-white px-5 py-3 text-[10px] font-black uppercase tracking-[0.2em] text-[#5F52B5]">
//                       {service.label}
//                     </span>
//                   </div>
//                 </div>

//                 <div className="flex flex-col justify-center p-7 md:p-10 lg:col-span-7 lg:p-12">
//                   <div className="flex items-start justify-between gap-6">
//                     <div>
//                       <span className="text-[12px] font-black uppercase tracking-[0.25em] text-[#5F52B5]">
//                         Service 0{index + 1}
//                       </span>

//                       <h3 className="mt-3 text-4xl font-black leading-tight text-[#17122F] md:text-5xl">
//                         {service.title}
//                       </h3>
//                     </div>

//                     <span className="hidden text-7xl font-black leading-none text-[#5F52B5]/10 md:block">
//                       0{index + 1}
//                     </span>
//                   </div>

//                   <p className="mt-5 max-w-2xl text-base font-semibold leading-relaxed text-slate-600">
//                     {service.desc}
//                   </p>

//                   <div className="mt-7 flex flex-wrap gap-3">
//                     {service.points.map((point) => (
//                       <span
//                         key={point}
//                         className="inline-flex items-center gap-2 rounded-full bg-[#F8F6FF] px-5 py-3 text-sm font-black text-[#17122F] ring-1 ring-[#5F52B5]/10"
//                       >
//                         <CheckCircle className="h-4 w-4 text-[#5F52B5]" />
//                         {point}
//                       </span>
//                     ))}
//                   </div>

//                   <div className="mt-8 flex flex-wrap gap-3">
//                     <button
//                       onClick={() => navigate("/contact-us")}
//                       className="inline-flex items-center gap-2 rounded-full bg-[#5F52B5] px-7 py-4 text-xs font-black uppercase tracking-[0.16em] text-white transition-all hover:-translate-y-1 hover:bg-[#17122F]"
//                     >
//                       Request Service
//                       <ArrowUpRight className="h-4 w-4" />
//                     </button>

//                     <a
//                       href={`tel:${LOCAL.phoneTel}`}
//                       className="inline-flex items-center gap-2 rounded-full bg-[#17122F] px-7 py-4 text-xs font-black uppercase tracking-[0.16em] text-white transition-all hover:-translate-y-1 hover:bg-[#5F52B5]"
//                     >
//                       <PhoneCall className="h-4 w-4" />
//                       Call Now
//                     </a>
//                   </div>
//                 </div>
//               </article>
//             );
//           })}
//         </div>

//         <div className="sg-service-animate sg-delay-3 mt-10 grid overflow-hidden rounded-[36px] bg-[#5F52B5] text-white shadow-2xl shadow-[#5F52B5]/25 lg:grid-cols-[1fr_auto]">
//           <div className="p-7 md:p-9">
//             <div className="flex items-start gap-4">
//               <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white text-[#5F52B5]">
//                 <MapPin className="h-6 w-6" />
//               </div>

//               <div>
//                 <span className="block text-[10px] font-black uppercase tracking-[0.22em] text-white/65">
//                   Local Hammersmith Service Base
//                 </span>

//                 <h3 className="mt-2 text-2xl font-black">
//                   Based near {LOCAL.baseAddress}
//                 </h3>

//                 <p className="mt-3 text-sm font-semibold leading-relaxed text-white/75">
//                   Covering Hammersmith, Brook Green, Barons Court, West
//                   Kensington and nearby W14 areas.
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="flex items-center bg-[#17122F] p-7 md:p-9">
//             <button
//               onClick={() => navigate("/services")}
//               className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-black uppercase tracking-wider text-[#5F52B5] transition-all hover:bg-[#F4F2FF]"
//             >
//               View All Services
//               <ArrowUpRight size={17} />
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Code2,
  Palette,
  SearchCheck,
  Sparkles,
  CheckCircle,
} from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      title: "Website Design",
      price: "From £299",
      icon: Code2,
      image: "/images/web-design.webp",
      desc: "Modern responsive websites designed to create a professional online presence.",
      points: ["Responsive design", "Modern UI", "Fast loading"],
    },
    {
      title: "Graphic Design",
      price: "From £50",
      icon: Palette,
      image: "/images/graphic-design.webp",
      desc: "Creative graphics and brand visuals for social media and marketing.",
      points: ["Social media", "Brand visuals", "Creative designs"],
    },
    {
      title: "SEO Services",
      price: "From £150/mo",
      icon: SearchCheck,
      image: "/images/seo-service.webp",
      desc: "SEO solutions to improve online visibility and business growth.",
      points: ["Local SEO", "Optimisation", "Growth focus"],
    },
  ];

  return (
    <section className="bg-[#050505] py-20 text-white">
      <style>{`
        .pulse-card {
          position: relative;
          overflow: hidden;
        }

        .pulse-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            120deg,
            transparent,
            rgba(59,130,246,0.7),
            rgba(255,255,255,0.8),
            rgba(59,130,246,0.7),
            transparent
          );
          transform: translateX(-120%);
          opacity: 0;
        }

        .pulse-card:hover::before {
          animation: lightning 0.5s ease;
        }

        @keyframes lightning {
          0% {
            transform: translateX(-120%) skewX(-20deg);
            opacity: 0;
          }

          30% {
            opacity: 1;
          }

          100% {
            transform: translateX(120%) skewX(-20deg);
            opacity: 0;
          }
        }
      `}</style>

      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
        {/* HEADER */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-3 text-xs font-black uppercase tracking-[0.2em] text-blue-400">
            <Sparkles size={15} />
            Our Services
          </span>

          <h2 className="mt-5 text-3xl font-black sm:text-4xl lg:text-5xl">
            Creative solutions to grow your business.
          </h2>

          <p className="mt-5 text-gray-400">
            Simple digital services designed to improve your brand, website and
            online presence.
          </p>
        </div>

        {/* CARDS */}
        <div className="mt-12 grid gap-7 md:grid-cols-3">
          {services.map(({ title, price, icon: Icon, image, desc, points }) => (
            <div
              key={title}
              className="pulse-card group rounded-[30px] border border-white/10 bg-[#0B0B0F] p-[1px] transition hover:-translate-y-2"
            >
              <div className="relative z-10 flex h-full flex-col rounded-[29px] bg-[#0B0B0F] p-5">
                <div className="relative overflow-hidden rounded-3xl">
                  <img
                    src={image}
                    alt={`${title} by PULSE Digital Marketing Solution Limited`}
                    className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                  />

                  <div className="absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600">
                    <Icon size={23} />
                  </div>

                  <span className="absolute bottom-4 left-4 rounded-full bg-white px-4 py-2 text-xs font-black text-black">
                    {price}
                  </span>
                </div>

                <h3 className="mt-6 text-2xl font-black">{title}</h3>

                <p className="mt-3 text-sm leading-relaxed text-gray-400">
                  {desc}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {points.map((item) => (
                    <span
                      key={item}
                      className="flex items-center gap-2 rounded-full bg-white/5 px-3 py-2 text-xs text-gray-300"
                    >
                      <CheckCircle size={14} className="text-blue-400" />
                      {item}
                    </span>
                  ))}
                </div>

                <Link
                  to="/contact-us"
                  className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-xs font-black uppercase tracking-wider text-white transition hover:bg-blue-700"
                >
                  Get Service
                  <ArrowUpRight size={15} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* BUTTON */}
        <div className="mt-12 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-8 py-4 text-sm font-black uppercase tracking-wider text-white transition hover:bg-white hover:text-[#050505]"
          >
            View All Services
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}