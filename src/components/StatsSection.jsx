



// import React, { useEffect, useRef, useState } from "react";
// import { Bug, Clock, Home, ShieldCheck, MapPin, PhoneCall } from "lucide-react";
// import { Link } from "react-router-dom";

// function AnimatedCounter({ value, duration = 1400 }) {
//   const [count, setCount] = useState(0);
//   const ref = useRef(null);
//   const done = useRef(false);

//   const isStatic = value === "24/7";
//   const numericValue = parseInt(value.replace(/[^0-9]/g, ""), 10) || 0;
//   const suffix = value.replace(/[0-9]/g, "");

//   useEffect(() => {
//     if (isStatic) return;
//     const el = ref.current;
//     if (!el) return;

//     const observer = new IntersectionObserver(([entry]) => {
//       if (entry.isIntersecting && !done.current) {
//         done.current = true;
//         let start = null;

//         const run = (time) => {
//           if (!start) start = time;
//           const progress = Math.min((time - start) / duration, 1);
//           setCount(Math.round(progress * numericValue));
//           if (progress < 1) requestAnimationFrame(run);
//         };

//         requestAnimationFrame(run);
//       }
//     });

//     observer.observe(el);
//     return () => observer.disconnect();
//   }, [duration, isStatic, numericValue]);

//   if (isStatic) return <span ref={ref}>{value}</span>;

//   return (
//     <span ref={ref}>
//       {count}
//       {suffix}
//     </span>
//   );
// }

// export default function SuperGuardStatsSection() {
//   const LOCAL = {
//     area: "Bloomsbury",
//     postcode: "WC1H",
//     businessName: "SuperGuard Bloomsbury",
//     address: "14 Tavistock Pl, London WC1H 9RD",
//     phoneDisplay: "07405 110450",
//     phoneTel: "+447405110450",
//   };

//   const stats = [
//     {
//       number: "24/7",
//       label: "Callback Access",
//       desc: "Send pest enquiries anytime and our local team can respond quickly.",
//       icon: Clock,
//     },
//     {
//       number: "12+",
//       label: "Pest Services",
//       desc: "Rodents, bed bugs, cockroaches, ants, fleas, moths, wasps and more.",
//       icon: Bug,
//     },
//     {
//       number: "100%",
//       label: "WC1H Focus",
//       desc: "Built around Bloomsbury homes, flats, shops and commercial premises.",
//       icon: Home,
//     },
//     {
//       number: "4",
//       label: "Service Stages",
//       desc: "Inspection, identification, treatment and prevention guidance.",
//       icon: ShieldCheck,
//     },
//   ];

//   return (
//     <section className="relative overflow-hidden bg-[#4B4095] py-24 md:py-32">
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(27,23,56,0.55),transparent_38%)]" />
//         <div className="absolute top-0 left-0 right-0 h-px bg-white/20" />
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 lg:px-10">
//         <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
//           <div className="lg:col-span-5">
//             <span className="inline-flex items-center gap-2 rounded-full bg-white text-[#4B4095] px-4 py-2 text-[11px] font-black uppercase tracking-[0.18em] shadow-xl">
//               <span className="w-2 h-2 rounded-full bg-[#4B4095]" />
//               SuperGuard Bloomsbury Standard
//             </span>

//             <h2 className="mt-7 text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight leading-[0.95] text-white">
//               Local Pest Control Built Around Bloomsbury
//             </h2>

//             <p className="mt-6 text-base sm:text-lg text-white/80 leading-relaxed font-medium">
//               These points show how {LOCAL.businessName} handles enquiries,
//               inspections and treatments across {LOCAL.postcode}. Clean process,
//               local coverage and clear pest control support for homes and
//               businesses.
//             </p>

//             <div className="mt-8 rounded-[2.2rem] bg-white/10 border border-white/20 backdrop-blur-xl p-6">
//               <div className="flex items-start gap-4">
//                 <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shrink-0">
//                   <MapPin className="w-6 h-6 text-[#4B4095]" strokeWidth={2.5} />
//                 </div>

//                 <div>
//                   <span className="block text-[10px] font-black uppercase tracking-widest text-white/60">
//                     Local Base
//                   </span>
//                   <address className="not-italic mt-2 text-xl font-black text-white leading-snug">
//                     {LOCAL.address}
//                   </address>
//                 </div>
//               </div>
//             </div>

//             <div className="mt-6 flex flex-col sm:flex-row gap-3">
//               <a
//                 href={`tel:${LOCAL.phoneTel}`}
//                 className="rounded-full bg-white text-[#4B4095] px-7 py-4 text-center text-sm font-black uppercase tracking-wider hover:bg-[#F5F4FF] transition-all shadow-xl"
//               >
//                 {LOCAL.phoneDisplay}
//               </a>

//               <Link
//                 to="/contact-us"
//                 className="rounded-full bg-[#15122D] text-white px-7 py-4 text-center text-sm font-black uppercase tracking-wider hover:bg-[#2B2458] transition-all shadow-xl"
//               >
//                 Get Help
//               </Link>
//             </div>
//           </div>

//           <div className="lg:col-span-7">
//             <div className="relative rounded-[3rem] bg-white p-5 sm:p-7 lg:p-8 shadow-2xl shadow-black/25 overflow-hidden">
//               <div className="absolute -top-24 -right-20 w-72 h-72 rounded-full bg-[#4B4095]/10 blur-3xl" />
//               <div className="absolute -bottom-24 -left-20 w-72 h-72 rounded-full bg-[#15122D]/10 blur-3xl" />

//               <div className="relative z-10">
//                 <div className="grid sm:grid-cols-2 gap-5 mb-5">
//                   <div className="sm:col-span-2 rounded-[2.4rem] bg-[#15122D] text-white p-7 sm:p-8 overflow-hidden relative">
//                     <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full border-[28px] border-white/10" />

//                     <span className="block text-[11px] font-black uppercase tracking-[0.22em] text-[#D8D2FF]">
//                       Coverage Area
//                     </span>

//                     <div className="mt-5 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5">
//                       <div>
//                         <h3 className="text-7xl sm:text-8xl font-black leading-none">
//                           {LOCAL.postcode}
//                         </h3>
//                         <p className="mt-3 text-white/70 font-medium max-w-md">
//                           Focused pest control support for Bloomsbury, Tavistock
//                           Place, Russell Square, King’s Cross and nearby WC1
//                           locations.
//                         </p>
//                       </div>

//                       <div className="rounded-2xl bg-white text-[#4B4095] px-5 py-4 text-center shrink-0">
//                         <span className="block text-[10px] font-black uppercase tracking-widest">
//                           Area
//                         </span>
//                         <span className="block text-xl font-black">
//                           {LOCAL.area}
//                         </span>
//                       </div>
//                     </div>
//                   </div>

//                   {stats.map((item, index) => {
//                     const Icon = item.icon;

//                     return (
//                       <div
//                         key={item.label}
//                         className="group rounded-[2rem] bg-[#F7F5FF] border border-[#4B4095]/10 p-6 hover:bg-[#4B4095] hover:text-white transition-all duration-300"
//                       >
//                         <div className="flex items-start justify-between gap-4 mb-6">
//                           <div className="w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center">
//                             <Icon
//                               className="w-6 h-6 text-[#4B4095]"
//                               strokeWidth={2.5}
//                             />
//                           </div>

//                           <span className="rounded-full bg-white px-3 py-1 text-[10px] font-black uppercase tracking-widest text-[#4B4095]">
//                             0{index + 1}
//                           </span>
//                         </div>

//                         <div className="text-5xl font-black tracking-tight text-[#15122D] group-hover:text-white">
//                           <AnimatedCounter value={item.number} />
//                         </div>

//                         <h3 className="mt-3 text-lg font-black text-[#15122D] group-hover:text-white">
//                           {item.label}
//                         </h3>

//                         <p className="mt-2 text-sm leading-relaxed font-medium text-slate-600 group-hover:text-white/75">
//                           {item.desc}
//                         </p>
//                       </div>
//                     );
//                   })}
//                 </div>

//                 <div className="rounded-[2rem] bg-[#4B4095] text-white p-6 sm:p-7">
//                   <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
//                     <div className="flex items-start gap-4">
//                       <div className="w-13 h-13 rounded-2xl bg-white flex items-center justify-center shrink-0 p-3">
//                         <PhoneCall
//                           className="w-6 h-6 text-[#4B4095]"
//                           strokeWidth={2.5}
//                         />
//                       </div>

//                       <div>
//                         <h3 className="text-2xl font-black">
//                           Need pest control in {LOCAL.area}?
//                         </h3>
//                         <p className="text-sm text-white/75 font-medium mt-1">
//                           Speak directly with the {LOCAL.businessName} local
//                           response team.
//                         </p>
//                       </div>
//                     </div>

//                     <a
//                       href={`tel:${LOCAL.phoneTel}`}
//                       className="rounded-full bg-white text-[#4B4095] px-7 py-4 text-center text-sm font-black uppercase tracking-wider hover:bg-[#F5F4FF] transition-all"
//                     >
//                       Call Now
//                     </a>
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






import React, { useEffect, useRef, useState } from "react";
import { Bug, Clock, Home, ShieldCheck, MapPin, PhoneCall } from "lucide-react";
import { Link } from "react-router-dom";

function AnimatedCounter({ value, duration = 1400 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const done = useRef(false);

  const isStatic = value === "24/7";
  const numericValue = parseInt(value.replace(/[^0-9]/g, ""), 10) || 0;
  const suffix = value.replace(/[0-9]/g, "");

  useEffect(() => {
    if (isStatic) return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !done.current) {
        done.current = true;
        let start = null;

        const run = (time) => {
          if (!start) start = time;
          const progress = Math.min((time - start) / duration, 1);
          setCount(Math.round(progress * numericValue));
          if (progress < 1) requestAnimationFrame(run);
        };

        requestAnimationFrame(run);
      }
    });

    observer.observe(el);
    return () => observer.disconnect();
  }, [duration, isStatic, numericValue]);

  if (isStatic) return <span ref={ref}>{value}</span>;

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function SuperGuardStatsSection() {
  const LOCAL = {
    area: "Walworth",
    postcode: "SE17",
    businessName: "SuperGuard Walworth",
    address: "36 Sutherland Square, London SE17 3EE",
    phoneDisplay: "07466 565503",
    phoneTel: "+447466565503",
  };

  const stats = [
    {
      number: "24/7",
      label: "Callback Access",
      desc: "Send your pest enquiry anytime for local response support.",
      icon: Clock,
    },
    {
      number: "12+",
      label: "Pest Services",
      desc: "Rodents, bed bugs, cockroaches, ants, fleas, moths, wasps and more.",
      icon: Bug,
    },
    {
      number: "100%",
      label: "SE17 Focus",
      desc: "Built around Walworth homes, flats, landlords and business premises.",
      icon: Home,
    },
    {
      number: "4",
      label: "Control Stages",
      desc: "Inspection, pest identification, treatment and prevention guidance.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#F8F6FF] py-24 md:py-32">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-0 h-[420px] w-full bg-[#5F52B5]" />
        <div className="absolute left-[-120px] top-[-120px] h-[420px] w-[420px] rounded-full bg-white/20 blur-3xl" />
        <div className="absolute right-[-120px] top-24 h-[420px] w-[420px] rounded-full bg-[#17122F]/20 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
        <div className="max-w-4xl">
          <span className="inline-flex bg-white px-5 py-3 text-[11px] font-black uppercase tracking-[0.22em] text-[#5F52B5] shadow-xl">
            SuperGuard Walworth Standard
          </span>

          <h2 className="mt-7 text-4xl font-black leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-7xl">
            Numbers That Show How We Protect Walworth Properties
          </h2>

          <p className="mt-6 max-w-3xl text-lg font-medium leading-relaxed text-white/85">
            SuperGuard Walworth follows a clear pest control process across
            SE17 — from fast enquiries and local inspections to targeted
            treatments and prevention advice.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-12">
          {/* LEFT COMMAND CARD */}
          <div className="lg:col-span-4">
            <div className="h-full bg-[#17122F] p-7 text-white shadow-2xl shadow-[#17122F]/20">
              <div className="flex h-16 w-16 items-center justify-center bg-[#5F52B5]">
                <MapPin className="h-7 w-7" strokeWidth={2.5} />
              </div>

              <span className="mt-8 block text-[10px] font-black uppercase tracking-[0.24em] text-[#AFA6FF]">
                Local Coverage
              </span>

              <h3 className="mt-3 text-6xl font-black leading-none">
                {LOCAL.postcode}
              </h3>

              <p className="mt-5 text-base font-medium leading-relaxed text-white/75">
                Focused pest control support for Walworth, Elephant & Castle,
                Kennington, Camberwell and nearby South London areas.
              </p>

              <div className="mt-8 border-t border-white/15 pt-6">
                <span className="block text-[10px] font-black uppercase tracking-widest text-white/45">
                  Local Base
                </span>
                <address className="mt-2 not-italic text-lg font-black leading-snug">
                  {LOCAL.address}
                </address>
              </div>

              <div className="mt-8 grid gap-3">
                <a
                  href={`tel:${LOCAL.phoneTel}`}
                  className="bg-white px-6 py-4 text-center text-sm font-black uppercase tracking-wider text-[#5F52B5] transition-all hover:bg-[#F4F2FF]"
                >
                  {LOCAL.phoneDisplay}
                </a>

                <Link
                  to="/contact-us"
                  className="border border-white/15 bg-white/10 px-6 py-4 text-center text-sm font-black uppercase tracking-wider text-white transition-all hover:bg-[#5F52B5]"
                >
                  Get Help
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT STATS BOARD */}
          <div className="lg:col-span-8">
            <div className="grid gap-6 sm:grid-cols-2">
              {stats.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className={`group relative overflow-hidden p-7 shadow-xl transition-all hover:-translate-y-1 ${
                      index === 0 || index === 3
                        ? "bg-white text-[#17122F]"
                        : "bg-[#5F52B5] text-white"
                    }`}
                  >
                    <div className="absolute -right-8 -top-8 text-[9rem] font-black leading-none opacity-[0.06]">
                      {item.number}
                    </div>

                    <div
                      className={`flex h-14 w-14 items-center justify-center ${
                        index === 0 || index === 3
                          ? "bg-[#5F52B5] text-white"
                          : "bg-white text-[#5F52B5]"
                      }`}
                    >
                      <Icon className="h-6 w-6" strokeWidth={2.5} />
                    </div>

                    <div className="mt-8 text-6xl font-black tracking-tight">
                      <AnimatedCounter value={item.number} />
                    </div>

                    <h3 className="mt-3 text-2xl font-black">{item.label}</h3>

                    <p
                      className={`mt-3 text-sm font-semibold leading-relaxed ${
                        index === 0 || index === 3
                          ? "text-slate-600"
                          : "text-white/75"
                      }`}
                    >
                      {item.desc}
                    </p>

                    <div
                      className={`mt-7 h-1 w-14 transition-all group-hover:w-24 ${
                        index === 0 || index === 3
                          ? "bg-[#5F52B5]"
                          : "bg-white"
                      }`}
                    />
                  </div>
                );
              })}
            </div>

            <div className="mt-6 bg-white p-6 shadow-xl shadow-[#17122F]/8">
              <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center bg-[#5F52B5] text-white">
                    <PhoneCall className="h-6 w-6" strokeWidth={2.5} />
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-[#17122F]">
                      Need pest control in {LOCAL.area}?
                    </h3>
                    <p className="mt-1 text-sm font-semibold text-slate-600">
                      Speak directly with the {LOCAL.businessName} local team.
                    </p>
                  </div>
                </div>

                <a
                  href={`tel:${LOCAL.phoneTel}`}
                  className="bg-[#5F52B5] px-7 py-4 text-center text-sm font-black uppercase tracking-wider text-white transition-all hover:bg-[#17122F]"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}





