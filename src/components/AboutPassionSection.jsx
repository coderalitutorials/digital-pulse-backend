


// import React, { useEffect } from "react";
// import {
//   ArrowUpRight,
//   Crosshair,
//   Phone,
//   Eye,
//   MapPin,
//   Building2,
//   SearchCheck,
//   ClipboardCheck,
//   ShieldCheck,
//   CheckCircle2,
// } from "lucide-react";

// export default function AboutPassionSection() {
//   const LOCAL = {
//     area: "Walworth",
//     postcode: "SE17",
//     address: "36 Sutherland Square, London SE17 3EE",
//     phone: "07466 565503",
//     phoneTel: "+447466565503",
//     businessName: "SuperGuard Walworth",
//   };

//   const targetedPests = [
//     "Rats & Mice",
//     "Bed Bugs",
//     "Cockroaches",
//     "Wasps",
//     "Fleas",
//     "Proofing",
//   ];

//   const focusCards = [
//     {
//       icon: SearchCheck,
//       title: "Trace Activity",
//       text: "We check pest signs, access routes, harbourage points and the property conditions behind the issue.",
//     },
//     {
//       icon: ClipboardCheck,
//       title: "Plan Treatment",
//       text: "You get clear advice on what was found, what treatment fits and what steps should come next.",
//     },
//     {
//       icon: Building2,
//       title: "Protect Spaces",
//       text: `Support for homes, flats, landlords and business premises across ${LOCAL.area}.`,
//     },
//   ];

//   useEffect(() => {
//     const elements = document.querySelectorAll(".passion-animate");

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) entry.target.classList.add("passion-show");
//         });
//       },
//       { threshold: 0.15 }
//     );

//     elements.forEach((el) => observer.observe(el));
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section className="relative overflow-hidden bg-[#F8F6FF] py-24 sm:py-32">
//       <style>{`
//         .passion-animate {
//           opacity: 0;
//           transform: translateY(26px);
//           transition:
//             opacity 800ms cubic-bezier(0.16, 1, 0.3, 1),
//             transform 800ms cubic-bezier(0.16, 1, 0.3, 1);
//         }

//         .passion-show {
//           opacity: 1;
//           transform: translateY(0);
//         }

//         .passion-delay-1 { transition-delay: 120ms; }
//         .passion-delay-2 { transition-delay: 220ms; }
//         .passion-delay-3 { transition-delay: 320ms; }

//         @media (prefers-reduced-motion: reduce) {
//           .passion-animate {
//             opacity: 1;
//             transform: none;
//             transition: none;
//           }
//         }
//       `}</style>

//       <div className="absolute inset-0 pointer-events-none">
//         <div
//           className="absolute right-0 top-0 h-full w-full bg-[#5F52B5]"
//           style={{
//             clipPath: "polygon(58% 0, 100% 0, 100% 100%, 72% 100%)",
//           }}
//         />
//         <div className="absolute -left-32 top-10 h-[430px] w-[430px] rounded-full bg-[#5F52B5]/12 blur-3xl" />
//         <div className="absolute -right-32 bottom-[-120px] h-[500px] w-[500px] rounded-full bg-[#17122F]/20 blur-3xl" />
//       </div>

//       <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
//         {/* TOP EDITORIAL HEADING */}
//         <div className="passion-animate mb-14 grid gap-8 lg:grid-cols-12 lg:items-end">
//           <div className="lg:col-span-8">
//             <span className="inline-flex bg-[#5F52B5] px-5 py-3 text-[11px] font-black uppercase tracking-[0.22em] text-white shadow-xl">
//               Our Pest Control Focus
//             </span>

//             <h2 className="mt-7 max-w-5xl text-4xl font-black leading-[0.92] tracking-tight text-[#17122F] sm:text-5xl lg:text-7xl">
//               We Treat The Cause, Not Just The Visible Pest.
//             </h2>
//           </div>

//           <p className="lg:col-span-4 text-base font-semibold leading-relaxed text-slate-700 sm:text-lg">
//             Pest activity often starts from small gaps, hidden harbourage, food
//             access or conditions around the property. {LOCAL.businessName}
//             focuses on finding the source first, then giving a clear treatment
//             route.
//           </p>
//         </div>

//         {/* MAIN FOCUS GRID */}
//         <div className="grid gap-6 lg:grid-cols-12">
//           {/* LARGE VISUAL PANEL */}
//           <div className="passion-animate passion-delay-1 lg:col-span-7">
//             <div className="relative min-h-[640px] overflow-hidden bg-[#17122F] shadow-2xl shadow-[#17122F]/20">
//               <img
//                 src="/images/about-superguard-banner.webp"
//                 alt={`${LOCAL.businessName} pest control in ${LOCAL.area}`}
//                 className="absolute inset-0 h-full w-full  object-center opacity-82"
//                 loading="lazy"
//               />

//               <div className="absolute inset-0 bg-gradient-to-t from-[#17122F] via-[#17122F]/35 to-transparent" />

//               <div className="absolute left-6 top-6 bg-white px-5 py-4 shadow-xl">
//                 <span className="block text-[10px] font-black uppercase tracking-widest text-[#5F52B5]">
//                   Area
//                 </span>
//                 <span className="block text-xl font-black text-[#17122F]">
//                   {LOCAL.area}
//                 </span>
//               </div>

//               <a
//                 href={`tel:${LOCAL.phoneTel}`}
//                 className="absolute right-6 top-6 bg-[#5F52B5] px-5 py-4 text-white shadow-xl transition-all hover:bg-white hover:text-[#5F52B5]"
//               >
//                 <Phone className="mb-2 h-5 w-5" />
//                 <span className="block text-xs font-black">{LOCAL.phone}</span>
//               </a>

//               <div className="absolute bottom-6 left-6 right-6 bg-white p-6 shadow-2xl md:max-w-xl">
//                 <div className="flex items-start gap-4">
//                   <div className="flex h-14 w-14 shrink-0 items-center justify-center bg-[#5F52B5] text-white">
//                     <Eye className="h-6 w-6" />
//                   </div>

//                   <div>
//                     <h3 className="text-3xl font-black text-[#17122F]">
//                       Inspection Before Treatment
//                     </h3>
//                     <p className="mt-2 text-sm font-semibold leading-relaxed text-slate-600">
//                       We check activity signs and property risks before
//                       recommending the next step.
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               <div className="absolute bottom-6 right-6 hidden bg-[#17122F] p-5 text-white shadow-2xl md:block md:max-w-[260px]">
//                 <MapPin className="mb-3 h-5 w-5 text-[#AFA6FF]" />
//                 <address className="not-italic text-sm font-black leading-relaxed">
//                   {LOCAL.address}
//                 </address>
//               </div>
//             </div>
//           </div>

//           {/* RIGHT PROCESS STACK */}
//           <div className="lg:col-span-5">
//             <div className="grid h-full gap-6">
//               {focusCards.map((item, index) => {
//                 const Icon = item.icon;

//                 return (
//                   <div
//                     key={item.title}
//                     className={`passion-animate passion-delay-${
//                       index + 1
//                     } group bg-white p-7 shadow-xl shadow-[#17122F]/7 transition-all hover:-translate-y-1`}
//                   >
//                     <div className="flex items-start gap-5">
//                       <div className="flex h-16 w-16 shrink-0 items-center justify-center bg-[#5F52B5] text-white transition-all group-hover:bg-[#17122F]">
//                         <Icon className="h-7 w-7" />
//                       </div>

//                       <div>
//                         <span className="block text-[10px] font-black uppercase tracking-[0.22em] text-[#5F52B5]">
//                           Step 0{index + 1}
//                         </span>

//                         <h4 className="mt-2 text-2xl font-black text-[#17122F]">
//                           {item.title}
//                         </h4>

//                         <p className="mt-3 text-sm font-semibold leading-relaxed text-slate-600">
//                           {item.text}
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}

//               <div className="passion-animate passion-delay-3 bg-[#17122F] p-7 text-white shadow-2xl shadow-[#17122F]/20">
//                 <span className="block text-[10px] font-black uppercase tracking-[0.22em] text-[#AFA6FF]">
//                   Pest Issues We Focus On
//                 </span>

//                 <div className="mt-5 flex flex-wrap gap-3">
//                   {targetedPests.map((item) => (
//                     <span
//                       key={item}
//                       className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 text-xs font-black text-white ring-1 ring-white/15"
//                     >
//                       <CheckCircle2 className="h-4 w-4 text-[#AFA6FF]" />
//                       {item}
//                     </span>
//                   ))}
//                 </div>

//                 <div className="mt-7 flex flex-col gap-3 sm:flex-row">
//                   <a
//                     href={`tel:${LOCAL.phoneTel}`}
//                     className="inline-flex flex-1 items-center justify-center gap-2 bg-white px-6 py-4 text-sm font-black text-[#5F52B5] transition-all hover:bg-[#F4F2FF]"
//                   >
//                     Call Local Team
//                     <ArrowUpRight className="h-4 w-4" />
//                   </a>

//                   <div className="inline-flex flex-1 items-center justify-center gap-2 bg-[#5F52B5] px-6 py-4 text-sm font-black text-white">
//                     <ShieldCheck className="h-4 w-4" />
//                     {LOCAL.postcode} Support
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }














import React, { useEffect } from "react";
import {
  ArrowUpRight,
  Phone,
  Eye,
  MapPin,
  Building2,
  SearchCheck,
  ClipboardCheck,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export default function AboutPassionSection() {
  const LOCAL = {
    area: "Hammersmith",
    postcode: "W14",
    address: "9 Avonmore Gdns, London W14 BRU",
    phone: "07442 033407",
    phoneTel: "+447442033407",
    businessName: "SuperGuard Hammersmith",
  };

  const targetedPests = [
    "Rats & Mice",
    "Bed Bugs",
    "Cockroaches",
    "Wasps",
    "Fleas",
    "Proofing",
  ];

  const focusCards = [
    {
      icon: SearchCheck,
      title: "Find The Activity",
      text: "We check pest signs, access routes, harbourage points and property conditions behind the issue.",
    },
    {
      icon: ClipboardCheck,
      title: "Choose The Right Route",
      text: "You get clear advice on what was found, what treatment fits and what should happen next.",
    },
    {
      icon: Building2,
      title: "Support Local Spaces",
      text: `Pest control support for homes, flats, landlords and business premises across ${LOCAL.area}.`,
    },
  ];

  useEffect(() => {
    const elements = document.querySelectorAll(".passion-animate");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("passion-show");
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#0F0B1F] py-24 text-white sm:py-32">
      <style>{`
        .passion-animate {
          opacity: 0;
          transform: translateY(26px);
          transition:
            opacity 800ms cubic-bezier(0.16, 1, 0.3, 1),
            transform 800ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        .passion-show {
          opacity: 1;
          transform: translateY(0);
        }

        .passion-delay-1 { transition-delay: 120ms; }
        .passion-delay-2 { transition-delay: 220ms; }
        .passion-delay-3 { transition-delay: 320ms; }

        @media (prefers-reduced-motion: reduce) {
          .passion-animate {
            opacity: 1;
            transform: none;
            transition: none;
          }
        }
      `}</style>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(95,82,181,0.45),transparent_34%),radial-gradient(circle_at_90%_20%,rgba(255,255,255,0.10),transparent_28%)]" />
      <div className="absolute inset-x-0 bottom-0 h-[34%] bg-[#F8F6FF]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
        <div className="passion-animate mx-auto mb-16 max-w-5xl text-center">
          <span className="inline-flex items-center gap-3 rounded-full bg-white/10 px-5 py-3 text-[11px] font-black uppercase tracking-[0.22em] text-[#DCD8FF] ring-1 ring-white/15">
            <ShieldCheck className="h-4 w-4" />
            Our Pest Control Focus
          </span>

          <h2 className="mt-7 text-4xl font-black leading-[0.92] tracking-tight sm:text-5xl lg:text-7xl">
            We Look For The Cause Before Treatment Begins.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base font-semibold leading-relaxed text-white/72 sm:text-lg">
            Pest activity often starts from small gaps, hidden harbourage, food
            access or property conditions. {LOCAL.businessName} focuses on
            finding the source first, then explaining a clear treatment route.
          </p>
        </div>

        <div className="grid overflow-hidden rounded-[46px] bg-white shadow-2xl shadow-black/25 lg:grid-cols-12">
          <div className="relative min-h-[420px] lg:col-span-6 lg:min-h-[680px]">
            <img
              src="/images/about-superguard-banner.webp"
              alt={`${LOCAL.businessName} pest control in ${LOCAL.area}`}
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#17122F]/92 via-[#17122F]/25 to-transparent" />

            <div className="absolute left-7 top-7 rounded-full bg-[#5F52B5] px-6 py-4 shadow-xl">
              <span className="text-[10px] font-black uppercase tracking-[0.22em] text-white">
                {LOCAL.area} • {LOCAL.postcode}
              </span>
            </div>

            <div className="absolute bottom-7 left-7 right-7 rounded-[32px] bg-white p-6 text-[#17122F] shadow-2xl">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#5F52B5] text-white">
                  <Eye className="h-6 w-6" />
                </div>

                <div>
                  <h3 className="text-3xl font-black leading-tight">
                    Inspection Before Treatment
                  </h3>
                  <p className="mt-2 text-sm font-semibold leading-relaxed text-slate-600">
                    We check activity signs and property risks before
                    recommending the next step.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center p-6 text-[#17122F] md:p-10 lg:col-span-6 lg:p-12">
            <div className="grid gap-5">
              {focusCards.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className={`passion-animate passion-delay-${
                      index + 1
                    } rounded-[32px] bg-[#F8F6FF] p-6 ring-1 ring-[#5F52B5]/10`}
                  >
                    <div className="flex gap-5">
                      <div className="flex h-15 w-15 shrink-0 items-center justify-center rounded-2xl bg-[#5F52B5] p-4 text-white">
                        <Icon className="h-7 w-7" />
                      </div>

                      <div>
                        <span className="text-[10px] font-black uppercase tracking-[0.22em] text-[#5F52B5]">
                          Focus 0{index + 1}
                        </span>

                        <h4 className="mt-2 text-2xl font-black leading-tight">
                          {item.title}
                        </h4>

                        <p className="mt-3 text-sm font-semibold leading-relaxed text-slate-600">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="passion-animate passion-delay-3 mt-6 rounded-[32px] bg-[#17122F] p-7 text-white">
              <span className="block text-[10px] font-black uppercase tracking-[0.22em] text-[#B8AEFF]">
                Pest Issues We Focus On
              </span>

              <div className="mt-5 flex flex-wrap gap-3">
                {targetedPests.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-black text-white ring-1 ring-white/15"
                  >
                    <CheckCircle2 className="h-4 w-4 text-[#B8AEFF]" />
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                <a
                  href={`tel:${LOCAL.phoneTel}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-black text-[#5F52B5] transition-all hover:bg-[#F4F2FF]"
                >
                  Call Local Team
                  <ArrowUpRight className="h-4 w-4" />
                </a>

                <div className="inline-flex items-center justify-center gap-2 rounded-full bg-[#5F52B5] px-6 py-4 text-sm font-black text-white">
                  <MapPin className="h-4 w-4" />
                  {LOCAL.postcode} Support
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-[28px] bg-[#F8F6FF] p-6 ring-1 ring-[#5F52B5]/10">
              <MapPin className="mb-3 h-5 w-5 text-[#5F52B5]" />
              <address className="not-italic text-sm font-black leading-relaxed">
                {LOCAL.address}
              </address>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}