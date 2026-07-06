
// import React from "react";
// import {
//   ShieldCheck,
//   MapPin,
//   Building2,
//   ArrowUpRight,
//   Shield,
//   Phone,
//   CheckCircle2,
//   SearchCheck,
// } from "lucide-react";

// export default function AboutStorySection() {
//   const LOCAL = {
//     area: "Walworth",
//     postcode: "SE17",
//     address: "36 Sutherland Square, London SE17 3EE",
//     phone: "07466 565503",
//     phoneTel: "+447466565503",
//     businessName: "SuperGuard Walworth",
//   };

//   const features = [
//     {
//       icon: SearchCheck,
//       title: "Detailed Property Checks",
//       text: "We inspect pest signs, access points, hiding areas and conditions that may be attracting activity.",
//     },
//     {
//       icon: Shield,
//       title: "Practical Treatment Advice",
//       text: "You get clear guidance on what we found, what treatment is suitable and how to reduce repeat issues.",
//     },
//     {
//       icon: Building2,
//       title: "For Walworth Properties",
//       text: `Supporting homes, flats, landlords, shops and commercial spaces across ${LOCAL.area} and ${LOCAL.postcode}.`,
//     },
//   ];

//   return (
//     <section className="relative mt-10 overflow-hidden bg-[#F8F6FF] py-24 lg:py-32">
//       <style>{`
//         @keyframes storyUp {
//           from { opacity: 0; transform: translateY(26px); }
//           to { opacity: 1; transform: translateY(0); }
//         }

//         .story-up {
//           animation: storyUp .8s ease-out both;
//         }

//         .story-delay-1 { animation-delay: 120ms; }
//         .story-delay-2 { animation-delay: 220ms; }

//         @media (prefers-reduced-motion: reduce) {
//           .story-up { animation: none; }
//         }
//       `}</style>

//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute right-0 top-0 h-full w-[45%] bg-[#5F52B5]" />
//         <div className="absolute left-[-120px] top-[-80px] h-[420px] w-[420px] rounded-full bg-[#5F52B5]/12 blur-3xl" />
//         <div className="absolute right-[-120px] bottom-[-100px] h-[460px] w-[460px] rounded-full bg-[#17122F]/20 blur-3xl" />
//       </div>

//       <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
//         <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
//           {/* LEFT STORY */}
//           <div className="story-up lg:col-span-5">
//             <span className="inline-flex bg-[#5F52B5] px-5 py-3 text-[11px] font-black uppercase tracking-[0.22em] text-white shadow-xl">
//               About {LOCAL.businessName}
//             </span>

//             <h2 className="mt-7 text-4xl font-black leading-[0.95] tracking-tight text-[#17122F] sm:text-5xl lg:text-7xl">
//               Local Pest Control With A Clear Walworth Approach.
//             </h2>

//             <p className="mt-6 text-base font-semibold leading-relaxed text-slate-700 sm:text-lg">
//               {LOCAL.businessName} helps local customers understand pest issues
//               before treatment begins. Our approach is built around careful
//               inspection, clear advice and practical pest control support.
//             </p>

//             <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
//               {["Homes", "Flats", "Businesses"].map((item) => (
//                 <div key={item} className="bg-white p-5 shadow-xl shadow-[#17122F]/6">
//                   <CheckCircle2 className="mb-3 h-5 w-5 text-[#5F52B5]" />
//                   <span className="text-sm font-black text-[#17122F]">
//                     {item}
//                   </span>
//                 </div>
//               ))}
//             </div>

//             <div className="mt-8 flex flex-col gap-4 sm:flex-row">
//               <a
//                 href={`tel:${LOCAL.phoneTel}`}
//                 className="inline-flex items-center justify-center gap-2 bg-[#5F52B5] px-7 py-4 text-sm font-black uppercase tracking-wider text-white shadow-xl transition-all hover:bg-[#17122F]"
//               >
//                 Call Local Team
//                 <ArrowUpRight className="h-4 w-4" />
//               </a>

//               <div className="inline-flex items-center gap-3 bg-[#17122F] px-7 py-4 text-sm font-black text-white">
//                 <MapPin className="h-4 w-4 text-[#AFA6FF]" />
//                 {LOCAL.postcode} Local Support
//               </div>
//             </div>
//           </div>

//           {/* RIGHT VISUAL */}
//           <div className="story-up story-delay-1 lg:col-span-7">
//             <div className="relative">
//               <div
//                 className="relative overflow-hidden bg-white p-3 shadow-2xl shadow-[#17122F]/20"
//                 style={{
//                   clipPath: "polygon(8% 0, 100% 0, 92% 100%, 0% 100%)",
//                 }}
//               >
//                 <img
//                   src="/images/about-story.webp"
//                   alt={`${LOCAL.businessName} pest control in ${LOCAL.area}`}
//                   className="h-[440px] w-full object-cover md:h-[620px]"
//                   loading="lazy"
//                 />

//                 <div className="absolute inset-3 bg-gradient-to-t from-[#17122F]/90 via-[#17122F]/20 to-transparent" />
//               </div>

//               <div className="absolute bottom-8 left-4 right-4 bg-[#17122F] p-6 text-white shadow-2xl md:left-10 md:right-auto md:max-w-md">
//                 <span className="block text-[10px] font-black uppercase tracking-[0.22em] text-[#AFA6FF]">
//                   Local Pest Support
//                 </span>

//                 <h3 className="mt-2 text-3xl font-black leading-tight">
//                   Helping Walworth Properties Deal With Pests Properly
//                 </h3>

//                 <p className="mt-3 text-sm font-medium leading-relaxed text-white/72">
//                   From rodents and cockroaches to bed bugs, fleas, ants, wasps
//                   and prevention work, our focus is practical advice that suits
//                   the property and the situation.
//                 </p>
//               </div>

//               <div className="absolute -right-2 top-8 hidden bg-white p-5 shadow-2xl lg:block">
//                 <MapPin className="mb-4 h-6 w-6 text-[#5F52B5]" />
//                 <span className="block text-[10px] font-black uppercase tracking-widest text-[#5F52B5]">
//                   Local Address
//                 </span>
//                 <p className="mt-2 max-w-[220px] text-sm font-black leading-relaxed text-[#17122F]">
//                   {LOCAL.address}
//                 </p>
//               </div>

//               <a
//                 href={`tel:${LOCAL.phoneTel}`}
//                 className="absolute -left-2 bottom-8 hidden bg-[#5F52B5] p-5 text-white shadow-2xl transition-all hover:bg-[#17122F] lg:block"
//               >
//                 <Phone className="mb-4 h-6 w-6 text-white" />
//                 <span className="block text-[10px] font-black uppercase tracking-widest text-white/60">
//                   Call Direct
//                 </span>
//                 <span className="mt-1 block text-xl font-black">
//                   {LOCAL.phone}
//                 </span>
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* FEATURE CARDS */}
//         <div className="mt-12 grid gap-5 md:grid-cols-3">
//           {features.map((item, index) => {
//             const Icon = item.icon;

//             return (
//               <div
//                 key={item.title}
//                 className="story-up group bg-white p-7 shadow-2xl shadow-[#17122F]/8 transition-all hover:-translate-y-2"
//                 style={{ animationDelay: `${index * 120}ms` }}
//               >
//                 <div className="mb-6 flex h-14 w-14 items-center justify-center bg-[#5F52B5] text-white transition-all group-hover:bg-[#17122F]">
//                   <Icon className="h-6 w-6" />
//                 </div>

//                 <h4 className="mb-3 text-xl font-black text-[#17122F]">
//                   {item.title}
//                 </h4>

//                 <p className="text-sm font-semibold leading-relaxed text-slate-600">
//                   {item.text}
//                 </p>

//                 <div className="mt-6 h-1 w-12 bg-[#5F52B5] transition-all group-hover:w-24" />
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }












import React from "react";
import {
  ShieldCheck,
  MapPin,
  Building2,
  ArrowUpRight,
  Shield,
  Phone,
  CheckCircle2,
  SearchCheck,
} from "lucide-react";

export default function AboutStorySection() {
  const LOCAL = {
    area: "Hammersmith",
    postcode: "W14",
    address: "9 Avonmore Gdns, London W14 BRU",
    phone: "07442 033407",
    phoneTel: "+447442033407",
    businessName: "SuperGuard Hammersmith",
  };

  const features = [
    {
      icon: SearchCheck,
      title: "We Check Before Acting",
      text: "We inspect pest signs, access gaps, hiding areas and property conditions before recommending treatment.",
    },
    {
      icon: Shield,
      title: "Clear Treatment Route",
      text: "You get simple guidance on what was found, what treatment makes sense and how the next step works.",
    },
    {
      icon: Building2,
      title: "Built For Hammersmith",
      text: `Supporting homes, flats, landlords, shops and commercial spaces across ${LOCAL.area} and ${LOCAL.postcode}.`,
    },
  ];

  return (
    <section className="relative mt-10 overflow-hidden bg-[#0F0B1F] py-24 text-white lg:py-32">
      <style>{`
        @keyframes storyUp {
          from { opacity: 0; transform: translateY(26px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .story-up {
          animation: storyUp .8s ease-out both;
        }

        .story-delay-1 { animation-delay: 120ms; }
        .story-delay-2 { animation-delay: 220ms; }

        @media (prefers-reduced-motion: reduce) {
          .story-up { animation: none; }
        }
      `}</style>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_10%,rgba(95,82,181,0.42),transparent_32%),radial-gradient(circle_at_90%_18%,rgba(255,255,255,0.10),transparent_28%)]" />
      <div className="absolute inset-x-0 bottom-0 h-[32%] bg-[#F8F6FF]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
        <div className="story-up mx-auto max-w-5xl text-center">
          <span className="inline-flex items-center gap-3 rounded-full bg-white/10 px-5 py-3 text-[11px] font-black uppercase tracking-[0.22em] text-[#DCD8FF] ring-1 ring-white/15">
            <ShieldCheck className="h-4 w-4" />
            About {LOCAL.businessName}
          </span>

          <h2 className="mt-7 text-4xl font-black leading-[0.92] tracking-tight sm:text-5xl lg:text-7xl">
            A Local Pest Control Approach Made For Hammersmith.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base font-semibold leading-relaxed text-white/72 sm:text-lg">
            {LOCAL.businessName} helps local customers understand pest issues
            before treatment begins. Our approach is based on careful checks,
            clear explanations and practical support for the property.
          </p>
        </div>

        <div className="story-up story-delay-1 mt-16 grid overflow-hidden rounded-[46px] bg-white shadow-2xl shadow-black/25 lg:grid-cols-12">
          <div className="relative min-h-[420px] lg:col-span-7 lg:min-h-[620px]">
            <img
              src="/images/about-story.webp"
              alt={`${LOCAL.businessName} pest control in ${LOCAL.area}`}
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#17122F]/90 via-[#17122F]/25 to-transparent" />

            <div className="absolute left-7 top-7 rounded-full bg-[#5F52B5] px-6 py-4 shadow-xl">
              <span className="text-[10px] font-black uppercase tracking-[0.22em] text-white">
                {LOCAL.area} • {LOCAL.postcode}
              </span>
            </div>

            <a
              href={`tel:${LOCAL.phoneTel}`}
              className="absolute bottom-7 left-7 inline-flex items-center gap-3 rounded-full bg-white px-6 py-4 text-sm font-black uppercase tracking-wider text-[#5F52B5] shadow-xl transition-all hover:bg-[#5F52B5] hover:text-white"
            >
              <Phone className="h-4 w-4" />
              {LOCAL.phone}
            </a>
          </div>

          <div className="flex flex-col justify-center bg-white p-7 text-[#17122F] md:p-10 lg:col-span-5 lg:p-12">
            <span className="text-[10px] font-black uppercase tracking-[0.24em] text-[#5F52B5]">
              Our Story
            </span>

            <h3 className="mt-4 text-4xl font-black leading-tight">
              Helping properties deal with pests properly.
            </h3>

            <p className="mt-5 text-sm font-semibold leading-relaxed text-slate-600 md:text-base">
              From rodents and cockroaches to bed bugs, fleas, ants, wasps and
              prevention work, our focus is to understand the issue first and
              explain the right route clearly.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {["Homes", "Flats", "Businesses"].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-[#F8F6FF] p-4 ring-1 ring-[#5F52B5]/10"
                >
                  <CheckCircle2 className="mb-3 h-5 w-5 text-[#5F52B5]" />
                  <span className="text-sm font-black">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-[28px] bg-[#17122F] p-6 text-white">
              <MapPin className="mb-4 h-6 w-6 text-[#B8AEFF]" />
              <span className="block text-[10px] font-black uppercase tracking-widest text-white/45">
                Local Address
              </span>
              <p className="mt-2 text-sm font-black leading-relaxed">
                {LOCAL.address}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="story-up rounded-[34px] bg-white p-7 text-[#17122F] shadow-2xl shadow-[#17122F]/10"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#5F52B5] text-white">
                  <Icon className="h-6 w-6" />
                </div>

                <h4 className="mb-3 text-xl font-black">{item.title}</h4>

                <p className="text-sm font-semibold leading-relaxed text-slate-600">
                  {item.text}
                </p>

                <div className="mt-6 h-1 w-12 rounded-full bg-[#5F52B5]" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}