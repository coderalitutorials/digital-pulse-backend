

// import React, { useEffect } from "react";
// import {
//   Target,
//   Eye,
//   Activity,
//   MapPin,
//   ShieldCheck,
//   ArrowUpRight,
//   SearchCheck,
//   Check,
// } from "lucide-react";

// export default function MissionVisionSection() {
//   const LOCAL = {
//     area: "Walworth",
//     postcode: "SE17",
//     address: "36 Sutherland Square, London SE17 3EE",
//     phone: "07466 565503",
//     phoneTel: "+447466565503",
//     businessName: "SuperGuard Walworth",
//   };

//   const promises = [
//     "Inspect before treating",
//     "Explain the pest issue clearly",
//     "Plan around the property",
//     "Support better prevention",
//   ];

//   const process = [
//     {
//       icon: SearchCheck,
//       title: "Understand",
//       text: "We check pest signs, activity level and possible access routes.",
//     },
//     {
//       icon: Target,
//       title: "Treat",
//       text: "We recommend a suitable route based on the pest and property.",
//     },
//     {
//       icon: ShieldCheck,
//       title: "Prevent",
//       text: "We give practical advice to help reduce repeat pest activity.",
//     },
//   ];

//   useEffect(() => {
//     const elements = document.querySelectorAll(".mv-animate");

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) entry.target.classList.add("mv-show");
//         });
//       },
//       { threshold: 0.16 }
//     );

//     elements.forEach((el) => observer.observe(el));
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section className="relative overflow-hidden bg-[#F8F6FF] py-24 sm:py-32">
//       <style>{`
//         .mv-animate {
//           opacity: 0;
//           transform: translateY(26px);
//           transition:
//             opacity 800ms cubic-bezier(0.16, 1, 0.3, 1),
//             transform 800ms cubic-bezier(0.16, 1, 0.3, 1);
//         }

//         .mv-show {
//           opacity: 1;
//           transform: translateY(0);
//         }

//         .mv-delay-1 { transition-delay: 120ms; }
//         .mv-delay-2 { transition-delay: 220ms; }
//         .mv-delay-3 { transition-delay: 320ms; }

//         @media (prefers-reduced-motion: reduce) {
//           .mv-animate {
//             opacity: 1;
//             transform: none;
//             transition: none;
//           }
//         }
//       `}</style>

//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute left-0 top-0 h-[52%] w-full bg-[#5F52B5]" />
//         <div className="absolute -left-32 top-[-100px] h-[460px] w-[460px] rounded-full bg-white/20 blur-3xl" />
//         <div className="absolute -right-32 top-32 h-[500px] w-[500px] rounded-full bg-[#17122F]/20 blur-3xl" />
//       </div>

//       <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
//         {/* TOP */}
//         <div className="mv-animate grid gap-8 lg:grid-cols-12 lg:items-end">
//           <div className="lg:col-span-8">
//             <span className="inline-flex bg-white px-5 py-3 text-[11px] font-black uppercase tracking-[0.22em] text-[#5F52B5] shadow-xl">
//               <Activity className="mr-2 h-4 w-4" />
//               Mission & Vision
//             </span>

//             <h2 className="mt-7 max-w-5xl text-4xl font-black leading-[0.92] tracking-tight text-white sm:text-5xl lg:text-7xl">
//               Pest Control Should Feel Clear, Planned & Easy To Understand.
//             </h2>
//           </div>

//           <p className="lg:col-span-4 text-base font-medium leading-relaxed text-white/82 sm:text-lg">
//             At {LOCAL.businessName}, our mission and vision are built around
//             one simple idea: customers should understand the pest problem, why
//             it may be happening and what the next sensible step is.
//           </p>
//         </div>

//         {/* MAIN MANIFESTO */}
//         <div className="mt-16 grid gap-6 lg:grid-cols-12">
//           <div className="mv-animate mv-delay-1 lg:col-span-7">
//             <div className="bg-white p-7 shadow-2xl shadow-[#17122F]/12 md:p-10 lg:p-12">
//               <div className="mb-8 flex h-16 w-16 items-center justify-center bg-[#5F52B5] text-white">
//                 <Target className="h-8 w-8" />
//               </div>

//               <span className="block text-[11px] font-black uppercase tracking-[0.22em] text-[#5F52B5]">
//                 Our Mission
//               </span>

//               <h3 className="mt-4 text-3xl font-black leading-tight tracking-tight text-[#17122F] md:text-5xl lg:text-6xl">
//                 Make every pest control visit practical from the first check.
//               </h3>

//               <p className="mt-6 max-w-3xl text-base font-semibold leading-relaxed text-slate-600">
//                 Our mission is to help {LOCAL.area} customers understand the
//                 pest issue properly before treatment begins. We check the signs,
//                 explain the situation and recommend a route that fits the
//                 property.
//               </p>

//               <div className="mt-10 grid gap-3 sm:grid-cols-2">
//                 {promises.map((item) => (
//                   <div
//                     key={item}
//                     className="flex items-center gap-3 bg-[#F8F6FF] px-4 py-4 ring-1 ring-[#5F52B5]/10"
//                   >
//                     <Check className="h-4 w-4 shrink-0 text-[#5F52B5]" />
//                     <span className="text-sm font-black text-[#17122F]">
//                       {item}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           <div className="mv-animate mv-delay-2 lg:col-span-5">
//             <div className="flex h-full flex-col justify-between bg-[#17122F] p-7 text-white shadow-2xl shadow-[#17122F]/20 md:p-9">
//               <div>
//                 <div className="mb-8 flex h-16 w-16 items-center justify-center bg-white/10 text-[#AFA6FF] ring-1 ring-white/15">
//                   <Eye className="h-8 w-8" />
//                 </div>

//                 <span className="block text-[11px] font-black uppercase tracking-[0.22em] text-[#AFA6FF]">
//                   Our Vision
//                 </span>

//                 <h3 className="mt-4 text-3xl font-black leading-tight tracking-tight md:text-5xl">
//                   A trusted SE17 pest control name.
//                 </h3>

//                 <p className="mt-6 text-base font-medium leading-relaxed text-white/72">
//                   We want {LOCAL.businessName} to be recognised for honest
//                   communication, reliable local support and prevention-focused
//                   pest control for homes, landlords and businesses.
//                 </p>
//               </div>

//               <div className="mt-10 bg-white/10 p-5 ring-1 ring-white/15">
//                 <MapPin className="mb-3 h-6 w-6 text-[#AFA6FF]" />
//                 <span className="mb-1 block text-[10px] font-black uppercase tracking-widest text-white/45">
//                   Local Service Base
//                 </span>
//                 <address className="not-italic text-sm font-black leading-relaxed">
//                   {LOCAL.address}
//                 </address>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* TIMELINE PROCESS */}
//         <div className="mv-animate mv-delay-3 mt-8 bg-[#17122F] p-6 text-white shadow-2xl shadow-[#17122F]/20 md:p-8">
//           <div className="grid gap-6 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
//             <div>
//               <span className="block text-[10px] font-black uppercase tracking-[0.22em] text-[#AFA6FF]">
//                 SuperGuard Standard
//               </span>

//               <h3 className="mt-2 text-3xl font-black leading-tight">
//                 Understand. Treat. Prevent.
//               </h3>
//             </div>

//             <div className="grid gap-4 md:grid-cols-3">
//               {process.map((item, index) => {
//                 const Icon = item.icon;

//                 return (
//                   <div key={item.title} className="bg-white p-6 text-[#17122F]">
//                     <div className="mb-7 flex items-start justify-between gap-5">
//                       <div className="flex h-14 w-14 items-center justify-center bg-[#5F52B5] text-white">
//                         <Icon className="h-6 w-6" />
//                       </div>

//                       <span className="text-5xl font-black text-[#5F52B5]/10">
//                         0{index + 1}
//                       </span>
//                     </div>

//                     <h4 className="mb-3 text-2xl font-black">{item.title}</h4>

//                     <p className="text-sm font-semibold leading-relaxed text-slate-600">
//                       {item.text}
//                     </p>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>

//         {/* CTA */}
//         <div className="mv-animate mv-delay-3 mt-8 flex flex-col gap-5 bg-white p-6 shadow-xl shadow-[#17122F]/8 lg:flex-row lg:items-center lg:justify-between">
//           <div className="flex items-start gap-4">
//             <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#5F52B5] text-white">
//               <ShieldCheck className="h-5 w-5" />
//             </div>

//             <div>
//               <span className="mb-1 block text-[10px] font-black uppercase tracking-[0.18em] text-[#5F52B5]">
//                 Walworth Pest Control Standard
//               </span>
//               <p className="text-sm font-semibold leading-relaxed text-slate-600">
//                 Inspection first, clear explanation, suitable treatment planning
//                 and practical prevention guidance for local customers.
//               </p>
//             </div>
//           </div>

//           <a
//             href={`tel:${LOCAL.phoneTel}`}
//             className="inline-flex items-center justify-center gap-2 bg-[#5F52B5] px-7 py-4 text-sm font-black text-white transition-all hover:bg-[#17122F]"
//           >
//             Call Local Team
//             <ArrowUpRight className="h-4 w-4" />
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }







import React, { useEffect } from "react";
import {
  Target,
  Eye,
  Activity,
  MapPin,
  ShieldCheck,
  ArrowUpRight,
  SearchCheck,
  Check,
} from "lucide-react";

export default function MissionVisionSection() {
  const LOCAL = {
    area: "Hammersmith",
    postcode: "W14",
    address: "9 Avonmore Gdns, London W14 BRU",
    phone: "07442 033407",
    phoneTel: "+447442033407",
    businessName: "SuperGuard Hammersmith",
  };

  const promises = [
    "Inspect before treating",
    "Explain the pest issue clearly",
    "Plan around the property",
    "Support better prevention",
  ];

  const process = [
    {
      icon: SearchCheck,
      title: "Understand",
      text: "We check pest signs, activity level and possible access routes.",
    },
    {
      icon: Target,
      title: "Treat",
      text: "We recommend a suitable route based on the pest and property.",
    },
    {
      icon: ShieldCheck,
      title: "Prevent",
      text: "We give practical advice to help reduce repeat pest activity.",
    },
  ];

  useEffect(() => {
    const elements = document.querySelectorAll(".mv-animate");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("mv-show");
        });
      },
      { threshold: 0.16 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#0F0B1F] py-24 text-white sm:py-32">
      <style>{`
        .mv-animate {
          opacity: 0;
          transform: translateY(26px);
          transition:
            opacity 800ms cubic-bezier(0.16, 1, 0.3, 1),
            transform 800ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        .mv-show {
          opacity: 1;
          transform: translateY(0);
        }

        .mv-delay-1 { transition-delay: 120ms; }
        .mv-delay-2 { transition-delay: 220ms; }
        .mv-delay-3 { transition-delay: 320ms; }

        @media (prefers-reduced-motion: reduce) {
          .mv-animate {
            opacity: 1;
            transform: none;
            transition: none;
          }
        }
      `}</style>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(95,82,181,0.45),transparent_34%),radial-gradient(circle_at_90%_18%,rgba(255,255,255,0.10),transparent_28%)]" />
      <div className="absolute inset-x-0 bottom-0 h-[34%] bg-[#F8F6FF]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
        <div className="mv-animate mx-auto max-w-5xl text-center">
          <span className="inline-flex items-center gap-3 rounded-full bg-white/10 px-5 py-3 text-[11px] font-black uppercase tracking-[0.22em] text-[#DCD8FF] ring-1 ring-white/15">
            <Activity className="h-4 w-4" />
            Mission & Vision
          </span>

          <h2 className="mt-7 text-4xl font-black leading-[0.92] tracking-tight sm:text-5xl lg:text-7xl">
            Pest Control Should Feel Clear, Planned And Easy To Understand.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base font-semibold leading-relaxed text-white/72 sm:text-lg">
            At {LOCAL.businessName}, our mission and vision are built around
            one simple idea: customers should understand the pest problem, why it
            may be happening and what the next sensible step is.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-12">
          {/* MISSION */}
          <div className="mv-animate mv-delay-1 lg:col-span-7">
            <div className="h-full rounded-[42px] bg-white p-7 text-[#17122F] shadow-2xl shadow-black/25 md:p-10 lg:p-12">
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#5F52B5] text-white">
                <Target className="h-8 w-8" />
              </div>

              <span className="block text-[11px] font-black uppercase tracking-[0.22em] text-[#5F52B5]">
                Our Mission
              </span>

              <h3 className="mt-4 text-3xl font-black leading-tight tracking-tight md:text-5xl lg:text-6xl">
                Make every pest control visit practical from the first check.
              </h3>

              <p className="mt-6 max-w-3xl text-base font-semibold leading-relaxed text-slate-600">
                Our mission is to help {LOCAL.area} customers understand the
                pest issue properly before treatment begins. We check the signs,
                explain the situation and recommend a route that fits the
                property.
              </p>

              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                {promises.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl bg-[#F8F6FF] px-4 py-4 ring-1 ring-[#5F52B5]/10"
                  >
                    <Check className="h-4 w-4 shrink-0 text-[#5F52B5]" />
                    <span className="text-sm font-black text-[#17122F]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* VISION */}
          <div className="mv-animate mv-delay-2 lg:col-span-5">
            <div className="flex h-full flex-col justify-between rounded-[42px] bg-[#5F52B5] p-7 text-white shadow-2xl shadow-[#5F52B5]/25 md:p-9">
              <div>
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 text-white ring-1 ring-white/20">
                  <Eye className="h-8 w-8" />
                </div>

                <span className="block text-[11px] font-black uppercase tracking-[0.22em] text-white/65">
                  Our Vision
                </span>

                <h3 className="mt-4 text-3xl font-black leading-tight tracking-tight md:text-5xl">
                  A trusted W14 pest control name.
                </h3>

                <p className="mt-6 text-base font-semibold leading-relaxed text-white/78">
                  We want {LOCAL.businessName} to be recognised for honest
                  communication, reliable local support and prevention-focused
                  pest control for homes, landlords and businesses.
                </p>
              </div>

              <div className="mt-10 rounded-[30px] bg-white/12 p-5 ring-1 ring-white/15">
                <MapPin className="mb-3 h-6 w-6 text-white" />
                <span className="mb-1 block text-[10px] font-black uppercase tracking-widest text-white/55">
                  Local Service Base
                </span>
                <address className="not-italic text-sm font-black leading-relaxed">
                  {LOCAL.address}
                </address>
              </div>
            </div>
          </div>
        </div>

        {/* PROCESS */}
        <div className="mv-animate mv-delay-3 mt-8 rounded-[42px] bg-[#17122F] p-6 text-white shadow-2xl shadow-black/25 md:p-8">
          <div className="grid gap-7 lg:grid-cols-[0.65fr_1.35fr] lg:items-center">
            <div>
              <span className="block text-[10px] font-black uppercase tracking-[0.22em] text-[#B8AEFF]">
                SuperGuard Standard
              </span>

              <h3 className="mt-2 text-3xl font-black leading-tight">
                Understand. Treat. Prevent.
              </h3>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {process.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-[30px] bg-white p-6 text-[#17122F]"
                  >
                    <div className="mb-7 flex items-start justify-between gap-5">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#5F52B5] text-white">
                        <Icon className="h-6 w-6" />
                      </div>

                      <span className="text-5xl font-black text-[#5F52B5]/10">
                        0{index + 1}
                      </span>
                    </div>

                    <h4 className="mb-3 text-2xl font-black">{item.title}</h4>

                    <p className="text-sm font-semibold leading-relaxed text-slate-600">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mv-animate mv-delay-3 mt-8 flex flex-col gap-5 rounded-[36px] bg-white p-6 text-[#17122F] shadow-xl shadow-[#17122F]/8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#5F52B5] text-white">
              <ShieldCheck className="h-5 w-5" />
            </div>

            <div>
              <span className="mb-1 block text-[10px] font-black uppercase tracking-[0.18em] text-[#5F52B5]">
                Hammersmith Pest Control Standard
              </span>
              <p className="text-sm font-semibold leading-relaxed text-slate-600">
                Inspection first, clear explanation, suitable treatment planning
                and practical prevention guidance for local customers.
              </p>
            </div>
          </div>

          <a
            href={`tel:${LOCAL.phoneTel}`}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#5F52B5] px-7 py-4 text-sm font-black text-white transition-all hover:bg-[#17122F]"
          >
            Call Local Team
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}