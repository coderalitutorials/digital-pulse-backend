

// import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   Shield,
//   Home,
//   ArrowUpRight,
//   HelpCircle,
//   Phone,
//   MapPin,
//   SearchCheck,
//   ShieldCheck,
// } from "lucide-react";

// export default function AboutCommitmentSection() {
//   const navigate = useNavigate();

//   const LOCAL = {
//     area: "Walworth",
//     postcode: "SE17",
//     address: "36 Sutherland Square, London SE17 3EE",
//     phone: "07466 565503",
//     phoneTel: "+447466565503",
//     businessName: "SuperGuard Walworth",
//   };

//   const commitments = [
//     {
//       icon: SearchCheck,
//       title: "We Check Before We Act",
//       desc: "We look at pest signs, access points, activity level and property risks before choosing a treatment route.",
//     },
//     {
//       icon: Shield,
//       title: "We Keep Treatments Practical",
//       desc: "Recommendations are based on the pest type, property layout and what makes sense for the customer.",
//     },
//     {
//       icon: Home,
//       title: "We Help Reduce Repeat Issues",
//       desc: `Our advice is built around prevention, proofing and practical aftercare for ${LOCAL.area} properties.`,
//     },
//   ];

//   useEffect(() => {
//     const elements = document.querySelectorAll(".commit-animate");

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) entry.target.classList.add("commit-show");
//         });
//       },
//       { threshold: 0.18 }
//     );

//     elements.forEach((el) => observer.observe(el));
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section className="relative overflow-hidden bg-[#F8F6FF] py-24 sm:py-32">
//       <style>{`
//         .commit-animate {
//           opacity: 0;
//           transform: translateY(26px);
//           transition:
//             opacity 800ms cubic-bezier(0.16, 1, 0.3, 1),
//             transform 800ms cubic-bezier(0.16, 1, 0.3, 1);
//         }

//         .commit-show {
//           opacity: 1;
//           transform: translateY(0);
//         }

//         .commit-delay-1 { transition-delay: 120ms; }
//         .commit-delay-2 { transition-delay: 220ms; }
//         .commit-delay-3 { transition-delay: 320ms; }

//         @media (prefers-reduced-motion: reduce) {
//           .commit-animate {
//             opacity: 1;
//             transform: none;
//             transition: none;
//           }
//         }
//       `}</style>

//       <div className="absolute inset-0 pointer-events-none">
//         <div
//           className="absolute left-0 top-0 h-full w-full bg-[#5F52B5]"
//           style={{
//             clipPath: "polygon(0 0, 42% 0, 30% 100%, 0 100%)",
//           }}
//         />
//         <div className="absolute -left-32 top-[-80px] h-[460px] w-[460px] rounded-full bg-white/18 blur-3xl" />
//         <div className="absolute -right-32 bottom-[-120px] h-[520px] w-[520px] rounded-full bg-[#5F52B5]/16 blur-3xl" />
//       </div>

//       <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
//         <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
//           {/* LEFT PROMISE BLOCK */}
//           <div className="commit-animate lg:col-span-5">
//             <div className="bg-[#17122F] p-8 text-white shadow-2xl shadow-[#17122F]/25 md:p-10">
//               <span className="inline-flex bg-[#5F52B5] px-5 py-3 text-[11px] font-black uppercase tracking-[0.22em] text-white">
//                 <HelpCircle className="mr-2 h-4 w-4" />
//                 Our Commitment
//               </span>

//               <h2 className="mt-7 text-4xl font-black leading-[0.94] tracking-tight sm:text-5xl lg:text-6xl">
//                 Pest Control That Feels Clear, Calm & Practical.
//               </h2>

//               <p className="mt-6 text-base font-medium leading-relaxed text-white/72">
//                 At {LOCAL.businessName}, our commitment is to make pest control
//                 easier to understand with careful checks, honest guidance and
//                 practical prevention support.
//               </p>

//               <div className="mt-8 bg-white/10 p-5 ring-1 ring-white/15">
//                 <MapPin className="mb-3 h-6 w-6 text-[#AFA6FF]" />
//                 <span className="block text-[10px] font-black uppercase tracking-widest text-white/45">
//                   Local Base
//                 </span>
//                 <address className="mt-2 not-italic text-sm font-black leading-relaxed">
//                   {LOCAL.address}
//                 </address>
//               </div>

//               <div className="mt-8 grid gap-3 sm:grid-cols-2">
//                 <button
//                   onClick={() => navigate("/contact-us")}
//                   className="inline-flex items-center justify-center gap-2 bg-white px-6 py-4 text-sm font-black text-[#5F52B5] transition-all hover:bg-[#F4F2FF]"
//                 >
//                   Book Inspection
//                   <ArrowUpRight className="h-4 w-4" />
//                 </button>

//                 <a
//                   href={`tel:${LOCAL.phoneTel}`}
//                   className="inline-flex items-center justify-center gap-2 bg-[#5F52B5] px-6 py-4 text-sm font-black text-white transition-all hover:bg-white hover:text-[#5F52B5]"
//                 >
//                   <Phone className="h-4 w-4" />
//                   Call
//                 </a>
//               </div>
//             </div>
//           </div>

//           {/* RIGHT COMMITMENT WALL */}
//           <div className="lg:col-span-7">
//             <div className="grid gap-6">
//               {commitments.map((item, index) => {
//                 const Icon = item.icon;

//                 return (
//                   <div
//                     key={item.title}
//                     className={`commit-animate commit-delay-${
//                       index + 1
//                     } group bg-white p-7 shadow-xl shadow-[#17122F]/7 transition-all hover:-translate-y-1 ${
//                       index === 1 ? "lg:ml-12" : ""
//                     }`}
//                   >
//                     <div className="grid gap-5 md:grid-cols-[86px_1fr_auto] md:items-center">
//                       <div className="flex h-20 w-20 items-center justify-center bg-[#5F52B5] text-white transition-all group-hover:bg-[#17122F]">
//                         <Icon className="h-8 w-8" />
//                       </div>

//                       <div>
//                         <span className="block text-[10px] font-black uppercase tracking-[0.22em] text-[#5F52B5]">
//                           Commitment 0{index + 1}
//                         </span>

//                         <h3 className="mt-2 text-3xl font-black leading-tight text-[#17122F]">
//                           {item.title}
//                         </h3>

//                         <p className="mt-3 text-sm font-semibold leading-relaxed text-slate-600">
//                           {item.desc}
//                         </p>
//                       </div>

//                       <span className="hidden text-6xl font-black text-[#5F52B5]/10 md:block">
//                         0{index + 1}
//                       </span>
//                     </div>
//                   </div>
//                 );
//               })}

//               <div className="commit-animate commit-delay-3 grid gap-6 md:grid-cols-3">
//                 {[
//                   "No confusing explanations",
//                   "Treatment planned around the property",
//                   "Aftercare and prevention guidance",
//                 ].map((item) => (
//                   <div key={item} className="bg-[#17122F] p-5 text-white">
//                     <ShieldCheck className="mb-4 h-5 w-5 text-[#AFA6FF]" />
//                     <span className="text-sm font-black leading-relaxed">
//                       {item}
//                     </span>
//                   </div>
//                 ))}
//               </div>

//               <div className="commit-animate commit-delay-3 bg-[#5F52B5] p-7 text-white shadow-2xl shadow-[#5F52B5]/20">
//                 <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
//                   <div>
//                     <span className="block text-[10px] font-black uppercase tracking-[0.22em] text-white/60">
//                       SuperGuard Standard
//                     </span>

//                     <h3 className="mt-2 text-2xl font-black">
//                       Simple advice before, during and after treatment.
//                     </h3>
//                   </div>

//                   <a
//                     href={`tel:${LOCAL.phoneTel}`}
//                     className="inline-flex items-center justify-center gap-2 bg-white px-7 py-4 text-sm font-black text-[#5F52B5] transition-all hover:bg-[#F4F2FF]"
//                   >
//                     <Phone className="h-4 w-4" />
//                     {LOCAL.phone}
//                   </a>
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
import { useNavigate } from "react-router-dom";
import {
  Shield,
  Home,
  ArrowUpRight,
  HelpCircle,
  Phone,
  MapPin,
  SearchCheck,
  ShieldCheck,
} from "lucide-react";

export default function AboutCommitmentSection() {
  const navigate = useNavigate();

  const LOCAL = {
    area: "Hammersmith",
    postcode: "W14",
    address: "9 Avonmore Gdns, London W14 BRU",
    phone: "07442 033407",
    phoneTel: "+447442033407",
    businessName: "SuperGuard Hammersmith",
  };

  const commitments = [
    {
      icon: SearchCheck,
      title: "We Inspect Before Acting",
      desc: "We look at pest signs, access points, activity level and property risks before choosing a treatment route.",
    },
    {
      icon: Shield,
      title: "We Keep The Plan Practical",
      desc: "Recommendations are based on the pest type, property layout and what makes sense for your situation.",
    },
    {
      icon: Home,
      title: "We Support Long-Term Prevention",
      desc: `Our advice is built around prevention, proofing and practical aftercare for ${LOCAL.area} properties.`,
    },
  ];

  useEffect(() => {
    const elements = document.querySelectorAll(".commit-animate");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("commit-show");
        });
      },
      { threshold: 0.18 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#0F0B1F] py-24 text-white sm:py-32">
      <style>{`
        .commit-animate {
          opacity: 0;
          transform: translateY(26px);
          transition:
            opacity 800ms cubic-bezier(0.16, 1, 0.3, 1),
            transform 800ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        .commit-show {
          opacity: 1;
          transform: translateY(0);
        }

        .commit-delay-1 { transition-delay: 120ms; }
        .commit-delay-2 { transition-delay: 220ms; }
        .commit-delay-3 { transition-delay: 320ms; }

        @media (prefers-reduced-motion: reduce) {
          .commit-animate {
            opacity: 1;
            transform: none;
            transition: none;
          }
        }
      `}</style>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(95,82,181,0.45),transparent_34%),radial-gradient(circle_at_85%_20%,rgba(255,255,255,0.10),transparent_28%)]" />
      <div className="absolute inset-x-0 bottom-0 h-[34%] bg-[#F8F6FF]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
        <div className="commit-animate mx-auto max-w-5xl text-center">
          <span className="inline-flex items-center gap-3 rounded-full bg-white/10 px-5 py-3 text-[11px] font-black uppercase tracking-[0.22em] text-[#DCD8FF] ring-1 ring-white/15">
            <HelpCircle className="h-4 w-4" />
            Our Commitment
          </span>

          <h2 className="mt-7 text-4xl font-black leading-[0.92] tracking-tight sm:text-5xl lg:text-7xl">
            Pest Control That Feels Clear, Calm And Practical.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base font-semibold leading-relaxed text-white/72 sm:text-lg">
            At {LOCAL.businessName}, our commitment is to make pest control
            easier to understand with careful checks, honest guidance and
            practical prevention support.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {commitments.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className={`commit-animate commit-delay-${
                  index + 1
                } rounded-[38px] bg-white p-7 text-[#17122F] shadow-2xl shadow-black/12`}
              >
                <span className="text-6xl font-black leading-none text-[#5F52B5]/10">
                  0{index + 1}
                </span>

                <div className="mt-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#5F52B5] text-white">
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="mt-7 text-2xl font-black leading-tight">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm font-semibold leading-relaxed text-slate-600">
                  {item.desc}
                </p>

                <div className="mt-7 h-1 w-14 rounded-full bg-[#5F52B5]" />
              </div>
            );
          })}
        </div>

        <div className="commit-animate commit-delay-3 mt-8 grid gap-5 md:grid-cols-3">
          {[
            "No confusing explanations",
            "Treatment planned around the property",
            "Aftercare and prevention guidance",
          ].map((item) => (
            <div
              key={item}
              className="rounded-[30px] bg-[#17122F] p-6 text-white shadow-xl shadow-black/15 ring-1 ring-white/10"
            >
              <ShieldCheck className="mb-4 h-5 w-5 text-[#B8AEFF]" />
              <span className="text-sm font-black leading-relaxed">{item}</span>
            </div>
          ))}
        </div>

        <div className="commit-animate commit-delay-3 mt-8 grid overflow-hidden rounded-[42px] bg-white text-[#17122F] shadow-2xl shadow-[#17122F]/15 lg:grid-cols-[1fr_0.8fr]">
          <div className="p-7 md:p-9">
            <MapPin className="mb-4 h-6 w-6 text-[#5F52B5]" />
            <span className="block text-[10px] font-black uppercase tracking-widest text-[#5F52B5]">
              Local Base
            </span>
            <address className="mt-2 not-italic text-2xl font-black leading-tight">
              {LOCAL.address}
            </address>
          </div>

          <div className="flex flex-col justify-center bg-[#5F52B5] p-7 text-white md:p-9">
            <span className="block text-[10px] font-black uppercase tracking-[0.22em] text-white/60">
              SuperGuard Standard
            </span>

            <h3 className="mt-2 text-2xl font-black">
              Simple advice before, during and after treatment.
            </h3>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              <button
                onClick={() => navigate("/contact-us")}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-black text-[#5F52B5] transition-all hover:bg-[#17122F] hover:text-white"
              >
                Book Inspection
                <ArrowUpRight className="h-4 w-4" />
              </button>

              <a
                href={`tel:${LOCAL.phoneTel}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#17122F] px-6 py-4 text-sm font-black text-white transition-all hover:bg-white hover:text-[#5F52B5]"
              >
                <Phone className="h-4 w-4" />
                {LOCAL.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}