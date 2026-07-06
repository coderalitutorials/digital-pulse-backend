

// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   Phone,
//   MapPin,
//   ArrowUpRight,
//   ShieldCheck,
//   SearchCheck,
//   ClipboardCheck,
//   LockKeyhole,
// } from "lucide-react";

// export default function AboutIntroSection() {
//   const LOCAL = {
//     area: "Hammersmith",
//     postcode: "W14",
//     businessName: "SuperGuard Hammersmith",
//     address: "9 Avonmore Gdns, London W14 BRU",
//     phoneDisplay: "07442 033407",
//     phoneTel: "+447442033407",
//   };

//   const points = [
//     {
//       icon: SearchCheck,
//       title: "We Inspect The Source",
//       text: "We check pest signs, hiding areas, entry points and property risks before deciding the treatment route.",
//     },
//     {
//       icon: ClipboardCheck,
//       title: "We Plan The Treatment",
//       text: "The treatment is matched to the pest type, activity level and layout of your Hammersmith property.",
//     },
//     {
//       icon: LockKeyhole,
//       title: "We Support Prevention",
//       text: "After treatment, we explain practical steps that can help reduce the chance of pests returning.",
//     },
//   ];

//   return (
//     <section
//       itemScope
//       itemType="https://schema.org/PestControlService"
//       className="relative overflow-hidden bg-white py-24 lg:py-32"
//     >
//       <div className="absolute left-0 top-0 h-full w-[32%] bg-[#161127] max-lg:hidden" />
//       <div className="absolute right-[-180px] top-20 h-[420px] w-[420px] rounded-full bg-[#6757B8]/12 blur-3xl" />
//       <div className="absolute bottom-[-180px] left-20 h-[380px] w-[380px] rounded-full bg-[#6757B8]/10 blur-3xl" />

//       <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
//         <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
//           {/* IMAGE SIDE */}
//           <div className="lg:col-span-5">
//             <div className="relative">
//               <div className="absolute -left-5 -top-5 h-28 w-28 rounded-[2rem] bg-[#6757B8] max-lg:hidden" />

//               <div className="relative overflow-hidden rounded-[42px] bg-[#F4F1FF] p-3 shadow-2xl shadow-[#161127]/15">
//                 <img
//                   src="/images/about-superguard.webp"
//                   alt={`${LOCAL.businessName} pest inspection in ${LOCAL.area}`}
//                   className="h-[420px] w-full rounded-[32px] object-cover md:h-[590px]"
//                   loading="lazy"
//                 />

//                 <div className="absolute bottom-7 left-7 right-7 rounded-[28px] bg-white/95 p-5 shadow-2xl backdrop-blur-xl">
//                   <div className="flex items-start gap-3">
//                     <MapPin size={20} className="mt-1 text-[#6757B8]" />
//                     <div>
//                       <span className="block text-[10px] font-black uppercase tracking-[0.22em] text-[#6757B8]">
//                         Local Hammersmith Base
//                       </span>
//                       <p className="mt-1 text-sm font-bold leading-relaxed text-zinc-700">
//                         {LOCAL.address}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="absolute -right-5 top-10 hidden rounded-3xl bg-[#161127] px-6 py-5 text-white shadow-2xl lg:block">
//                 <span className="block text-[10px] font-black uppercase tracking-[0.24em] text-[#B8AEFF]">
//                   Covering
//                 </span>
//                 <span className="mt-1 block text-3xl font-black">
//                   {LOCAL.postcode}
//                 </span>
//               </div>
//             </div>
//           </div>

//           {/* CONTENT SIDE */}
//           <div className="lg:col-span-7">
//             <div className="inline-flex items-center gap-3 rounded-full bg-[#F4F1FF] px-5 py-3 ring-1 ring-[#6757B8]/15">
//               <ShieldCheck size={18} className="text-[#6757B8]" />
//               <span className="text-[11px] font-black uppercase tracking-[0.22em] text-[#6757B8]">
//                 About {LOCAL.businessName}
//               </span>
//             </div>

//             <h2 className="mt-7 max-w-4xl text-4xl font-black leading-[0.98] tracking-tight text-[#161127] sm:text-5xl lg:text-7xl">
//               Practical Pest Control For Hammersmith Homes And Businesses.
//             </h2>

//             <p className="mt-7 max-w-3xl text-lg font-semibold leading-relaxed text-zinc-700">
//               SuperGuard Hammersmith supports local properties with careful pest
//               inspections, targeted treatment plans and prevention advice. Our
//               work is focused on understanding the cause of the activity, not
//               just treating what is visible on the surface.
//             </p>

//             <div className="mt-8 flex flex-wrap gap-4">
//               <a
//                 href={`tel:${LOCAL.phoneTel}`}
//                 className="inline-flex items-center gap-3 rounded-full bg-[#6757B8] px-7 py-4 text-sm font-black uppercase tracking-wider text-white shadow-xl shadow-[#6757B8]/25 transition-all hover:-translate-y-1 hover:bg-[#161127]"
//               >
//                 <Phone size={17} />
//                 Call {LOCAL.phoneDisplay}
//               </a>

//               <Link
//                 to="/services"
//                 className="inline-flex items-center gap-3 rounded-full bg-[#F4F1FF] px-7 py-4 text-sm font-black uppercase tracking-wider text-[#161127] ring-1 ring-[#6757B8]/15 transition-all hover:-translate-y-1 hover:text-[#6757B8]"
//               >
//                 View Services
//                 <ArrowUpRight size={17} />
//               </Link>
//             </div>

//             <div className="mt-12 grid gap-5 md:grid-cols-3">
//               {points.map(({ icon: Icon, title, text }) => (
//                 <div
//                   key={title}
//                   className="group rounded-[30px] bg-[#F8F6FF] p-6 ring-1 ring-[#6757B8]/10 transition-all hover:-translate-y-1 hover:bg-[#161127]"
//                 >
//                   <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#6757B8] text-white">
//                     <Icon size={24} />
//                   </div>

//                   <h3 className="mt-5 text-xl font-black text-[#161127] group-hover:text-white">
//                     {title}
//                   </h3>

//                   <p className="mt-3 text-sm font-semibold leading-relaxed text-zinc-600 group-hover:text-white/70">
//                     {text}
//                   </p>

//                   <div className="mt-6 flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-[#6757B8] group-hover:text-[#B8AEFF]">
//                     Learn More
//                     <ArrowUpRight size={14} />
//                   </div>
//                 </div>
//               ))}
//             </div>
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
  CheckCircle2,
  Layout,
  PenTool,
  SearchCheck,
} from "lucide-react";

export default function AboutIntroSection() {
  const points = [
    {
      icon: Layout,
      title: "Clean Website Design",
      text: "Modern, responsive websites designed to look professional and guide users towards action.",
    },
    {
      icon: PenTool,
      title: "Creative Brand Support",
      text: "Graphics, social media visuals and UI elements that make your business look consistent online.",
    },
    {
      icon: SearchCheck,
      title: "Growth Focused Strategy",
      text: "SEO and digital marketing support focused on visibility, enquiries and long-term online growth.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#050505] py-24 text-white lg:py-32">
      {/* BACKGROUND */}
      <div className="absolute left-[-180px] top-20 h-[420px] w-[420px] rounded-full bg-blue-600/10 blur-3xl" />
      <div className="absolute bottom-[-180px] right-[-120px] h-[420px] w-[420px] rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-3 rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-3">
              <CheckCircle2 size={18} className="text-blue-400" />
              <span className="text-[11px] font-black uppercase tracking-[0.22em] text-blue-400">
                About PULSE
              </span>
            </div>

            <h2 className="mt-7 max-w-3xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Digital solutions made simple for growing businesses.
            </h2>

            <p className="mt-6 max-w-2xl text-lg font-semibold leading-relaxed text-gray-400">
              PULSE Digital Marketing Solution Limited helps businesses build a
              stronger online presence through professional websites, creative
              design, SEO and digital marketing support.
            </p>

            <p className="mt-4 max-w-2xl text-base font-medium leading-relaxed text-gray-500">
              We keep the process clear, practical and focused on what matters:
              better branding, better visibility and more confidence online.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-3 rounded-full bg-blue-600 px-7 py-4 text-sm font-black uppercase tracking-wider text-white shadow-xl shadow-blue-500/25 transition-all hover:-translate-y-1 hover:bg-blue-700"
              >
                Learn More
                <ArrowUpRight size={17} />
              </Link>

              <Link
                to="/services"
                className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-7 py-4 text-sm font-black uppercase tracking-wider text-white transition-all hover:-translate-y-1 hover:bg-white hover:text-[#050505]"
              >
                View Services
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>

          {/* RIGHT CARDS */}
          <div className="lg:col-span-6">
            <div className="grid gap-5">
              {points.map(({ icon: Icon, title, text }) => (
                <div
                  key={title}
                  className="group rounded-[30px] border border-white/10 bg-white/[0.04] p-6 transition-all hover:-translate-y-1 hover:border-blue-500/30 hover:bg-white/[0.07]"
                >
                  <div className="flex items-start gap-5">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-500/20">
                      <Icon size={24} />
                    </div>

                    <div>
                      <h3 className="text-xl font-black text-white">
                        {title}
                      </h3>

                      <p className="mt-3 text-sm font-semibold leading-relaxed text-gray-400">
                        {text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-[30px] border border-blue-500/20 bg-blue-500/10 p-6">
              <span className="text-[10px] font-black uppercase tracking-[0.24em] text-blue-400">
                Starting from £50
              </span>

              <h3 className="mt-3 text-2xl font-black text-white">
                Flexible services for startups, local businesses and growing brands.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}