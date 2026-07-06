


// import React, { useEffect } from "react";
// import {
//   CheckCircle,
//   ClipboardCheck,
//   MapPin,
//   PhoneCall,
//   ShieldCheck,
// } from "lucide-react";

// export default function MissionBannerSection() {
//   const LOCAL = {
//     area: "Walworth",
//     postcode: "SE17",
//     businessName: "SuperGuard Walworth",
//     address: "36 Sutherland Square, London SE17 3EE",
//     phoneDisplay: "07466 565503",
//     phoneTel: "+447466565503",
//   };

//   const missionSteps = [
//     {
//       title: "Inspect The Cause",
//       text: "We check pest signs, access routes, hiding spaces and property conditions before choosing the treatment.",
//       icon: ClipboardCheck,
//     },
//     {
//       title: "Treat With Control",
//       text: "The plan is matched to the pest type, activity level and layout of your Walworth property.",
//       icon: ShieldCheck,
//     },
//     {
//       title: "Prevent Re-Activity",
//       text: "We explain practical steps to help reduce future pest activity after the visit.",
//       icon: CheckCircle,
//     },
//   ];

//   useEffect(() => {
//     const elements = document.querySelectorAll(".sg-mission-animate");

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) entry.target.classList.add("sg-mission-show");
//         });
//       },
//       { threshold: 0.18 }
//     );

//     elements.forEach((el) => observer.observe(el));
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section className="relative overflow-hidden bg-[#F8F6FF] py-24 lg:py-32 font-sans">
//       <style>{`
//         .sg-mission-animate {
//           opacity: 0;
//           transform: translateY(28px);
//           transition:
//             opacity 850ms cubic-bezier(0.16, 1, 0.3, 1),
//             transform 850ms cubic-bezier(0.16, 1, 0.3, 1);
//         }

//         .sg-mission-show {
//           opacity: 1;
//           transform: translateY(0);
//         }

//         .sg-delay-1 { transition-delay: 100ms; }
//         .sg-delay-2 { transition-delay: 180ms; }
//         .sg-delay-3 { transition-delay: 260ms; }
//         .sg-delay-4 { transition-delay: 340ms; }

//         @media (prefers-reduced-motion: reduce) {
//           .sg-mission-animate {
//             opacity: 1;
//             transform: none;
//             transition: none;
//           }
//         }
//       `}</style>

//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute right-0 top-0 h-full w-full bg-[linear-gradient(110deg,transparent_0%,transparent_52%,#5F52B5_52%,#5F52B5_100%)]" />
//         <div className="absolute left-[-140px] top-20 h-96 w-96 rounded-full bg-[#5F52B5]/12 blur-3xl" />
//         <div className="absolute right-[-140px] bottom-[-100px] h-[460px] w-[460px] rounded-full bg-[#17122F]/20 blur-3xl" />
//       </div>

//       <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
//         <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
//           {/* LEFT MISSION CONTENT */}
//           <div className="sg-mission-animate lg:col-span-5">
//             <span className="inline-flex bg-[#5F52B5] px-5 py-3 text-[11px] font-black uppercase tracking-[0.22em] text-white shadow-xl">
//               Our Walworth Mission
//             </span>

//             <h2 className="mt-7 text-4xl font-black leading-[0.95] tracking-tight text-[#17122F] sm:text-5xl lg:text-7xl">
//               Pest Control That Makes The Next Step Clear.
//             </h2>

//             <p className="mt-6 text-lg font-semibold leading-relaxed text-slate-700">
//               At {LOCAL.businessName}, our mission is to make pest control feel
//               organised and understandable. We explain what we find, why the
//               issue may be happening and what treatment makes sense for your
//               property.
//             </p>

//             <div className="mt-8 grid gap-4">
//               {missionSteps.map((item, index) => {
//                 const Icon = item.icon;

//                 return (
//                   <div
//                     key={item.title}
//                     className={`sg-mission-animate sg-delay-${
//                       index + 1
//                     } group flex gap-4 bg-white p-5 shadow-xl shadow-[#17122F]/6 transition-all hover:-translate-x-1`}
//                   >
//                     <div className="flex h-14 w-14 shrink-0 items-center justify-center bg-[#5F52B5] text-white transition-all group-hover:bg-[#17122F]">
//                       <Icon className="h-6 w-6" strokeWidth={2.4} />
//                     </div>

//                     <div>
//                       <span className="text-[10px] font-black uppercase tracking-[0.22em] text-[#5F52B5]">
//                         Step 0{index + 1}
//                       </span>
//                       <h4 className="mt-1 text-xl font-black text-[#17122F]">
//                         {item.title}
//                       </h4>
//                       <p className="mt-2 text-sm font-semibold leading-relaxed text-slate-600">
//                         {item.text}
//                       </p>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//           {/* RIGHT VISUAL PANEL */}
//           <div className="sg-mission-animate sg-delay-2 lg:col-span-7">
//             <div className="relative">
//               <div
//                 className="relative overflow-hidden bg-white p-3 shadow-2xl shadow-[#17122F]/20"
//                 style={{
//                   clipPath:
//                     "polygon(8% 0, 100% 0, 92% 100%, 0% 100%)",
//                 }}
//               >
//                 <img
//                   src="/images/mission-superguard.webp"
//                   alt={`${LOCAL.businessName} pest control mission in ${LOCAL.area}`}
//                   className="h-[420px] w-full object-cover md:h-[640px]"
//                   loading="lazy"
//                 />
//                 <div className="absolute inset-3 bg-gradient-to-t from-[#17122F]/90 via-[#17122F]/25 to-transparent" />
//               </div>

//               <div className="absolute bottom-8 left-4 right-4 bg-[#17122F] p-6 text-white shadow-2xl md:left-10 md:right-auto md:max-w-md">
//                 <span className="block text-[10px] font-black uppercase tracking-[0.24em] text-[#AFA6FF]">
//                   Built For Local Properties
//                 </span>

//                 <h3 className="mt-2 text-3xl font-black leading-tight">
//                   Homes, Flats, Shops & Businesses In {LOCAL.postcode}
//                 </h3>

//                 <p className="mt-3 text-sm font-medium leading-relaxed text-white/72">
//                   From shared buildings and rental flats to offices and local
//                   businesses, the treatment plan is adapted around the property.
//                 </p>
//               </div>

//               <div className="absolute -right-2 top-8 hidden bg-white p-5 shadow-2xl lg:block">
//                 <MapPin className="mb-4 h-6 w-6 text-[#5F52B5]" />
//                 <span className="block text-[10px] font-black uppercase tracking-widest text-[#5F52B5]">
//                   Local Base
//                 </span>
//                 <address className="mt-2 max-w-[220px] not-italic text-sm font-black leading-relaxed text-[#17122F]">
//                   {LOCAL.address}
//                 </address>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* BOTTOM CTA */}
//         <div className="sg-mission-animate sg-delay-4 mt-12 bg-[#5F52B5] p-6 text-white shadow-2xl shadow-[#5F52B5]/20 md:p-8">
//           <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
//             <div className="flex items-start gap-4">
//               <div className="flex h-14 w-14 shrink-0 items-center justify-center bg-white text-[#5F52B5]">
//                 <PhoneCall className="h-6 w-6" strokeWidth={2.4} />
//               </div>

//               <div>
//                 <span className="block text-[10px] font-black uppercase tracking-[0.22em] text-white/65">
//                   Need Local Pest Support?
//                 </span>

//                 <h3 className="mt-2 text-2xl font-black sm:text-3xl">
//                   Speak With The {LOCAL.area} Team Today
//                 </h3>

//                 <p className="mt-2 text-sm font-medium text-white/75">
//                   Arrange pest control support around Walworth, Elephant &
//                   Castle, Kennington, Camberwell and nearby SE17 areas.
//                 </p>
//               </div>
//             </div>

//             <a
//               href={`tel:${LOCAL.phoneTel}`}
//               className="bg-white px-8 py-4 text-center text-sm font-black uppercase tracking-wider text-[#5F52B5] shadow-xl transition-all hover:bg-[#F4F2FF]"
//             >
//               Call {LOCAL.phoneDisplay}
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }





import React, { useEffect } from "react";
import {
  CheckCircle,
  ClipboardCheck,
  MapPin,
  PhoneCall,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";

export default function MissionBannerSection() {
  const LOCAL = {
    area: "Hammersmith",
    postcode: "W14",
    businessName: "SuperGuard Hammersmith",
    address: "9 Avonmore Gdns, London W14 BRU",
    phoneDisplay: "07442 033407",
    phoneTel: "+447442033407",
  };

  const missionSteps = [
    {
      title: "Locate The Source",
      text: "We inspect signs, access gaps, nesting areas and conditions that may be helping pests stay active.",
      icon: ClipboardCheck,
    },
    {
      title: "Apply A Focused Plan",
      text: "Treatment is chosen around the pest type, activity level and layout of your Hammersmith property.",
      icon: ShieldCheck,
    },
    {
      title: "Help Reduce Return Risk",
      text: "We provide practical advice to support better protection after the visit is complete.",
      icon: CheckCircle,
    },
  ];

  useEffect(() => {
    const elements = document.querySelectorAll(".sg-mission-animate");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("sg-mission-show");
        });
      },
      { threshold: 0.18 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#0F0B1F] py-24 text-white lg:py-32">
      <style>{`
        .sg-mission-animate {
          opacity: 0;
          transform: translateY(26px);
          transition:
            opacity 850ms cubic-bezier(0.16, 1, 0.3, 1),
            transform 850ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        .sg-mission-show {
          opacity: 1;
          transform: translateY(0);
        }

        .sg-delay-1 { transition-delay: 100ms; }
        .sg-delay-2 { transition-delay: 180ms; }
        .sg-delay-3 { transition-delay: 260ms; }
        .sg-delay-4 { transition-delay: 340ms; }

        @media (prefers-reduced-motion: reduce) {
          .sg-mission-animate {
            opacity: 1;
            transform: none;
            transition: none;
          }
        }
      `}</style>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(95,82,181,0.35),transparent_32%),radial-gradient(circle_at_90%_20%,rgba(255,255,255,0.10),transparent_28%)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-[#F8F6FF]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
        {/* TOP HEADER */}
        <div className="sg-mission-animate mb-12 grid gap-6 lg:grid-cols-[1fr_0.55fr] lg:items-end">
          <div>
            <span className="inline-flex rounded-full bg-[#5F52B5] px-5 py-3 text-[11px] font-black uppercase tracking-[0.22em] text-white">
              Our Hammersmith Mission
            </span>

            <h2 className="mt-7 max-w-4xl text-4xl font-black leading-[0.95] tracking-tight sm:text-5xl lg:text-7xl">
              Pest Control With A Clear Reason Behind Every Step.
            </h2>
          </div>

          <p className="text-lg font-semibold leading-relaxed text-white/70">
            At {LOCAL.businessName}, we focus on understanding the pest issue,
            explaining the treatment route and helping protect the property
            beyond the first visit.
          </p>
        </div>

        {/* MAIN FEATURE CARD */}
        <div className="grid overflow-hidden rounded-[44px] bg-white text-[#17122F] shadow-2xl shadow-black/25 lg:grid-cols-12">
          {/* IMAGE */}
          <div className="sg-mission-animate sg-delay-1 relative min-h-[420px] lg:col-span-6 lg:min-h-[680px]">
            <img
              src="/images/mission-superguard.webp"
              alt={`${LOCAL.businessName} pest control mission in ${LOCAL.area}`}
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#17122F]/90 via-[#17122F]/20 to-transparent" />

            <div className="absolute bottom-7 left-7 right-7 rounded-[30px] bg-white/95 p-6 shadow-2xl backdrop-blur-xl">
              <span className="block text-[10px] font-black uppercase tracking-[0.24em] text-[#5F52B5]">
                Built For Local Properties
              </span>

              <h3 className="mt-2 text-3xl font-black leading-tight">
                Homes, Flats, Shops & Businesses In {LOCAL.postcode}
              </h3>

              <p className="mt-3 text-sm font-semibold leading-relaxed text-slate-600">
                Our treatment approach is adapted around the property type,
                layout and signs found during inspection.
              </p>
            </div>
          </div>

          {/* STEPS */}
          <div className="sg-mission-animate sg-delay-2 flex flex-col justify-center p-6 md:p-10 lg:col-span-6 lg:p-12">
            <div className="flex items-start gap-4 rounded-[30px] bg-[#F8F6FF] p-6 ring-1 ring-[#5F52B5]/10">
              <MapPin className="mt-1 h-6 w-6 shrink-0 text-[#5F52B5]" />
              <div>
                <span className="block text-[10px] font-black uppercase tracking-[0.22em] text-[#5F52B5]">
                  Local Base
                </span>
                <address className="mt-2 not-italic text-sm font-black leading-relaxed text-[#17122F]">
                  {LOCAL.address}
                </address>
              </div>
            </div>

            <div className="mt-7 space-y-4">
              {missionSteps.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className={`sg-mission-animate sg-delay-${
                      index + 1
                    } group rounded-[30px] border border-[#5F52B5]/10 bg-white p-6 shadow-lg shadow-[#17122F]/5 transition-all hover:-translate-y-1 hover:bg-[#5F52B5]`}
                  >
                    <div className="flex gap-5">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#5F52B5] text-white transition-all group-hover:bg-white group-hover:text-[#5F52B5]">
                        <Icon className="h-6 w-6" strokeWidth={2.4} />
                      </div>

                      <div>
                        <span className="text-[10px] font-black uppercase tracking-[0.22em] text-[#5F52B5] group-hover:text-white/65">
                          Step 0{index + 1}
                        </span>

                        <h4 className="mt-1 text-2xl font-black text-[#17122F] group-hover:text-white">
                          {item.title}
                        </h4>

                        <p className="mt-2 text-sm font-semibold leading-relaxed text-slate-600 group-hover:text-white/75">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* CTA BAR */}
        <div className="sg-mission-animate sg-delay-4 mt-10 rounded-[36px] bg-[#5F52B5] p-6 text-white shadow-2xl shadow-[#5F52B5]/25 md:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white text-[#5F52B5]">
                <PhoneCall className="h-6 w-6" strokeWidth={2.4} />
              </div>

              <div>
                <span className="block text-[10px] font-black uppercase tracking-[0.22em] text-white/65">
                  Need Local Pest Support?
                </span>

                <h3 className="mt-2 text-2xl font-black sm:text-3xl">
                  Speak With The {LOCAL.area} Team Today
                </h3>

                <p className="mt-2 text-sm font-medium text-white/75">
                  Arrange pest control support around Hammersmith, Brook Green,
                  Barons Court, West Kensington and nearby W14 areas.
                </p>
              </div>
            </div>

            <a
              href={`tel:${LOCAL.phoneTel}`}
              className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-black uppercase tracking-wider text-[#5F52B5] shadow-xl transition-all hover:-translate-y-1 hover:bg-[#F4F2FF]"
            >
              Call {LOCAL.phoneDisplay}
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}