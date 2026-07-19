


// import React from 'react'
// import AboutStorySection from '../components/AboutStorySection'
// import AboutPassionSection from '../components/AboutPassionSection'
// import MissionVisionSection from '../components/MissionVisionSection'
// import AboutCommitmentSection from '../components/AboutCommitmentSection'

// const About = () => {
//   return (
//     <>
//     <AboutStorySection/>
//     <AboutPassionSection/>
//     <MissionVisionSection/>
//     <AboutCommitmentSection/>
//     </>
//   )
// }

// export default About




















import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  Target,
  Eye,
  Users,
  Code2,
  Palette,
  SearchCheck,
  Megaphone,
} from "lucide-react";

export default function About() {
  const values = [
    "Clean and modern design",
    "Simple communication",
    "Business-focused strategy",
    "Clear starting prices",
  ];

  const process = [
    {
      icon: Target,
      title: "Understand",
      text: "We first understand your business, goals and what you want to improve online.",
    },
    {
      icon: Palette,
      title: "Design",
      text: "We create clean visuals, layouts and ideas that fit your brand and audience.",
    },
    {
      icon: Code2,
      title: "Build",
      text: "We turn the design into a professional digital presence that works smoothly.",
    },
    {
      icon: Megaphone,
      title: "Grow",
      text: "We support your business with SEO, marketing and better online visibility.",
    },
  ];

  const services = [
    { icon: Code2, title: "Website Design" },
    { icon: Palette, title: "Graphic Design" },
    { icon: SearchCheck, title: "SEO Services" },
    { icon: Megaphone, title: "Digital Marketing" },
  ];

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      {/* HERO */}
      <section className="relative overflow-hidden px-5 pb-24 pt-40 md:px-8 lg:px-10">
        <div className="absolute left-[-180px] top-20 h-[420px] w-[420px] rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute right-[-180px] bottom-[-180px] h-[460px] w-[460px] rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-3 text-xs font-black uppercase tracking-[0.2em] text-blue-400">
            <Sparkles size={15} />
            About PULSE
          </span>

          <h1 className="mt-7 text-4xl font-black leading-tight sm:text-6xl lg:text-7xl">
            Helping businesses build a stronger digital presence.
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-gray-400 sm:text-lg">
            PULSE Digital Marketing Solution Limited is a London-based digital
            agency focused on websites, design, SEO and marketing services for
            modern businesses.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/services"
              className="inline-flex items-center gap-3 rounded-full bg-blue-600 px-8 py-4 text-sm font-black uppercase tracking-wider text-white transition hover:bg-blue-700"
            >
              View Services
              <ArrowUpRight size={17} />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-8 py-4 text-sm font-black uppercase tracking-wider text-white transition hover:bg-white hover:text-[#050505]"
            >
              Start Project
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:px-8 lg:grid-cols-2 lg:items-center lg:px-10">
          <div>
            <span className="text-xs font-black uppercase tracking-[0.22em] text-blue-400">
              Who We Are
            </span>

            <h2 className="mt-4 text-3xl font-black leading-tight sm:text-5xl">
              A simple digital agency for businesses that want to look better online.
            </h2>

            <p className="mt-5 leading-relaxed text-gray-400">
              We help businesses create a professional online image through
              clean websites, creative graphics, better user experience, SEO and
              digital marketing support.
            </p>

            <p className="mt-4 leading-relaxed text-gray-400">
              Our goal is to keep the process simple. You tell us what your
              business needs, and we help you choose the right digital service
              to move forward.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {values.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                >
                  <CheckCircle2 size={18} className="text-blue-400" />
                  <span className="text-sm font-bold text-gray-300">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.04] p-3">
            <img
              src="/images/about-agency-1.webp"
              alt="PULSE Digital Marketing Solution Limited agency work"
              className="h-[420px] w-full rounded-[26px] object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* MISSION VISION */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-[32px] border border-white/10 bg-[#0B0B0F] p-8">
              <Target className="h-10 w-10 text-blue-400" />
              <h3 className="mt-6 text-3xl font-black">Our Mission</h3>
              <p className="mt-4 leading-relaxed text-gray-400">
                To make digital services simple, clear and useful for businesses
                that want a professional online presence without confusion.
              </p>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-[#0B0B0F] p-8">
              <Eye className="h-10 w-10 text-blue-400" />
              <h3 className="mt-6 text-3xl font-black">Our Vision</h3>
              <p className="mt-4 leading-relaxed text-gray-400">
                To become a trusted digital partner for businesses that need
                better websites, stronger branding and long-term online growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-black uppercase tracking-[0.22em] text-blue-400">
              Our Process
            </span>

            <h2 className="mt-4 text-3xl font-black sm:text-5xl">
              Clear steps from idea to growth.
            </h2>

            <p className="mt-5 text-gray-400">
              We keep every project organised so you know what is happening at
              each stage.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {process.map(({ icon: Icon, title, text }, index) => (
              <div
                key={title}
                className="rounded-[30px] border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-blue-500/40"
              >
                <span className="text-xs font-black text-blue-400">
                  0{index + 1}
                </span>

                <div className="mt-5 flex h-13 w-13 items-center justify-center rounded-2xl bg-blue-600 p-4">
                  <Icon size={24} />
                </div>

                <h3 className="mt-6 text-xl font-black">{title}</h3>

                <p className="mt-3 text-sm leading-relaxed text-gray-400">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMAGE + SERVICES */}
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:px-8 lg:grid-cols-2 lg:items-center lg:px-10">
          <div className="overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.04] p-3">
            <img
              src="/images/about-agency-2.webp"
              alt="PULSE digital marketing team planning online growth"
              className="h-[430px] w-full rounded-[26px] object-cover"
              loading="lazy"
            />
          </div>

          <div>
            <span className="text-xs font-black uppercase tracking-[0.22em] text-blue-400">
              What We Help With
            </span>

            <h2 className="mt-4 text-3xl font-black leading-tight sm:text-5xl">
              Services designed for practical business growth.
            </h2>

            <p className="mt-5 leading-relaxed text-gray-400">
              From a new website to social media graphics or SEO, we help you
              choose the right service based on your current business needs.
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {services.map(({ icon: Icon, title }) => (
                <div
                  key={title}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#0B0B0F] p-4"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                    <Icon size={19} />
                  </div>

                  <span className="text-sm font-black text-white">
                    {title}
                  </span>
                </div>
              ))}
            </div>

            <Link
              to="/services"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-blue-600 px-7 py-4 text-sm font-black uppercase tracking-wider text-white transition hover:bg-blue-700"
            >
              Explore Services
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
          <div className="grid overflow-hidden rounded-[34px] border border-white/10 bg-[#0B0B0F] md:grid-cols-3">
            {[
              ["£50+", "Starting Price"],
              ["6+", "Digital Services"],
              ["London", "UK Based Agency"],
            ].map(([num, label]) => (
              <div
                key={label}
                className="border-white/10 p-8 text-center md:border-r last:border-r-0"
              >
                <h3 className="text-4xl font-black text-blue-400">{num}</h3>
                <p className="mt-2 text-sm font-bold uppercase tracking-wider text-gray-400">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-5 py-20 md:px-8 lg:px-10">
        <div className="mx-auto max-w-5xl rounded-[34px] border border-blue-500/20 bg-blue-500/10 p-8 text-center">
          <Users className="mx-auto h-10 w-10 text-blue-400" />

          <h2 className="mt-5 text-3xl font-black sm:text-5xl">
            Let’s build your digital presence.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-gray-400">
            Whether you need a website, graphics, SEO or full digital marketing
            support, PULSE can help you get started.
          </p>

          <Link
            to="/contact"
            className="mt-7 inline-flex items-center gap-3 rounded-full bg-blue-600 px-8 py-4 text-sm font-black uppercase tracking-wider text-white transition hover:bg-blue-700"
          >
            Contact Us
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
}













// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   ArrowUpRight,
//   Sparkles,
//   CheckCircle2,
//   Target,
//   Eye,
//   Users,
//   Code2,
//   Palette,
//   SearchCheck,
//   Megaphone,
// } from "lucide-react";

// export default function About() {
//   const values = [
//     "Clean and modern design",
//     "Simple communication",
//     "Business-focused strategy",
//     "Clear starting prices",
//   ];

//   const process = [
//     {
//       icon: Target,
//       title: "Understand",
//       text: "We first understand your business, goals and what you want to improve online.",
//     },
//     {
//       icon: Palette,
//       title: "Design",
//       text: "We create clean visuals, layouts and ideas that fit your brand and audience.",
//     },
//     {
//       icon: Code2,
//       title: "Build",
//       text: "We turn the design into a professional digital presence that works smoothly.",
//     },
//     {
//       icon: Megaphone,
//       title: "Grow",
//       text: "We support your business with SEO, marketing and better online visibility.",
//     },
//   ];

//   const services = [
//     { icon: Code2, title: "Website Design" },
//     { icon: Palette, title: "Graphic Design" },
//     { icon: SearchCheck, title: "SEO Services" },
//     { icon: Megaphone, title: "Digital Marketing" },
//   ];

//   return (
//     <main className="min-h-screen bg-[#523F9A] text-white">
//       {/* HERO */}
//       <section className="relative overflow-hidden px-5 pb-24 pt-40 md:px-8 lg:px-10">
//         <div className="absolute left-[-180px] top-20 h-[420px] w-[420px] rounded-full bg-white/10 blur-3xl" />
//         <div className="absolute right-[-180px] bottom-[-180px] h-[460px] w-[460px] rounded-full bg-[#F1EFFF]/15 blur-3xl" />

//         <div className="relative z-10 mx-auto max-w-5xl text-center">
//           <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-5 py-3 text-xs font-black uppercase tracking-[0.2em] text-[#E8E2FF]">
//             <Sparkles size={15} />
//             About PULSE
//           </span>

//           <h1 className="mt-7 text-4xl font-black leading-tight sm:text-6xl lg:text-7xl">
//             Helping businesses build a stronger digital presence.
//           </h1>

//           <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-[#E6E0F5] sm:text-lg">
//             PULSE Digital Marketing Solution Limited is a London-based digital
//             agency focused on websites, design, SEO and marketing services for
//             modern businesses.
//           </p>

//           <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
//             <Link
//               to="/services"
//               className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-black uppercase tracking-wider text-[#523F9A] transition hover:bg-[#E8E2FF]"
//             >
//               View Services
//               <ArrowUpRight size={17} />
//             </Link>

//             <Link
//               to="/contact"
//               className="inline-flex items-center gap-3 rounded-full border border-white/25 bg-white/10 px-8 py-4 text-sm font-black uppercase tracking-wider text-white transition hover:bg-white hover:text-[#523F9A]"
//             >
//               Start Project
//               <ArrowUpRight size={17} />
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* INTRO */}
//       <section className="py-20">
//         <div className="mx-auto grid max-w-7xl gap-10 px-5 md:px-8 lg:grid-cols-2 lg:items-center lg:px-10">
//           <div>
//             <span className="text-xs font-black uppercase tracking-[0.22em] text-[#E8E2FF]">
//               Who We Are
//             </span>

//             <h2 className="mt-4 text-3xl font-black leading-tight sm:text-5xl">
//               A simple digital agency for businesses that want to look better online.
//             </h2>

//             <p className="mt-5 leading-relaxed text-[#E6E0F5]">
//               We help businesses create a professional online image through
//               clean websites, creative graphics, better user experience, SEO and
//               digital marketing support.
//             </p>

//             <p className="mt-4 leading-relaxed text-[#E6E0F5]">
//               Our goal is to keep the process simple. You tell us what your
//               business needs, and we help you choose the right digital service
//               to move forward.
//             </p>

//             <div className="mt-7 grid gap-3 sm:grid-cols-2">
//               {values.map((item) => (
//                 <div
//                   key={item}
//                   className="flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 p-4"
//                 >
//                   <CheckCircle2 size={18} className="text-[#E8E2FF]" />

//                   <span className="text-sm font-bold text-white/90">
//                     {item}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="overflow-hidden rounded-[34px] border border-white/25 bg-white/10 p-3">
//             <img
//               src="/images/about-agency-1.webp"
//               alt="PULSE Digital Marketing Solution Limited agency work"
//               className="h-[420px] w-full rounded-[26px] object-cover"
//               loading="lazy"
//             />
//           </div>
//         </div>
//       </section>

//       {/* MISSION VISION */}
//       <section className="py-20">
//         <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
//           <div className="grid gap-6 md:grid-cols-2">
//             <div className="rounded-[32px] border border-white/20 bg-[#463482] p-8">
//               <Target className="h-10 w-10 text-[#E8E2FF]" />

//               <h3 className="mt-6 text-3xl font-black">Our Mission</h3>

//               <p className="mt-4 leading-relaxed text-[#E6E0F5]">
//                 To make digital services simple, clear and useful for businesses
//                 that want a professional online presence without confusion.
//               </p>
//             </div>

//             <div className="rounded-[32px] border border-white/20 bg-[#463482] p-8">
//               <Eye className="h-10 w-10 text-[#E8E2FF]" />

//               <h3 className="mt-6 text-3xl font-black">Our Vision</h3>

//               <p className="mt-4 leading-relaxed text-[#E6E0F5]">
//                 To become a trusted digital partner for businesses that need
//                 better websites, stronger branding and long-term online growth.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* PROCESS */}
//       <section className="py-20">
//         <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
//           <div className="mx-auto max-w-3xl text-center">
//             <span className="text-xs font-black uppercase tracking-[0.22em] text-[#E8E2FF]">
//               Our Process
//             </span>

//             <h2 className="mt-4 text-3xl font-black sm:text-5xl">
//               Clear steps from idea to growth.
//             </h2>

//             <p className="mt-5 text-[#E6E0F5]">
//               We keep every project organised so you know what is happening at
//               each stage.
//             </p>
//           </div>

//           <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
//             {process.map(({ icon: Icon, title, text }, index) => (
//               <div
//                 key={title}
//                 className="rounded-[30px] border border-white/20 bg-white/10 p-6 transition hover:-translate-y-1 hover:border-white/50"
//               >
//                 <span className="text-xs font-black text-[#E8E2FF]">
//                   0{index + 1}
//                 </span>

//                 <div className="mt-5 flex h-13 w-13 items-center justify-center rounded-2xl bg-white p-4 text-[#523F9A]">
//                   <Icon size={24} />
//                 </div>

//                 <h3 className="mt-6 text-xl font-black">{title}</h3>

//                 <p className="mt-3 text-sm leading-relaxed text-[#E6E0F5]">
//                   {text}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* IMAGE + SERVICES */}
//       <section className="py-20">
//         <div className="mx-auto grid max-w-7xl gap-10 px-5 md:px-8 lg:grid-cols-2 lg:items-center lg:px-10">
//           <div className="overflow-hidden rounded-[34px] border border-white/25 bg-white/10 p-3">
//             <img
//               src="/images/about-agency-2.webp"
//               alt="PULSE digital marketing team planning online growth"
//               className="h-[430px] w-full rounded-[26px] object-cover"
//               loading="lazy"
//             />
//           </div>

//           <div>
//             <span className="text-xs font-black uppercase tracking-[0.22em] text-[#E8E2FF]">
//               What We Help With
//             </span>

//             <h2 className="mt-4 text-3xl font-black leading-tight sm:text-5xl">
//               Services designed for practical business growth.
//             </h2>

//             <p className="mt-5 leading-relaxed text-[#E6E0F5]">
//               From a new website to social media graphics or SEO, we help you
//               choose the right service based on your current business needs.
//             </p>

//             <div className="mt-7 grid gap-4 sm:grid-cols-2">
//               {services.map(({ icon: Icon, title }) => (
//                 <div
//                   key={title}
//                   className="flex items-center gap-3 rounded-2xl border border-white/20 bg-[#463482] p-4"
//                 >
//                   <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F1EFFF]/15 text-[#E8E2FF]">
//                     <Icon size={19} />
//                   </div>

//                   <span className="text-sm font-black text-white">
//                     {title}
//                   </span>
//                 </div>
//               ))}
//             </div>

//             <Link
//               to="/services"
//               className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-black uppercase tracking-wider text-[#523F9A] transition hover:bg-[#E8E2FF]"
//             >
//               Explore Services
//               <ArrowUpRight size={17} />
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* STATS */}
//       <section className="py-20">
//         <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
//           <div className="grid overflow-hidden rounded-[34px] border border-white/20 bg-[#463482] md:grid-cols-3">
//             {[
//               ["£50+", "Starting Price"],
//               ["6+", "Digital Services"],
//               ["London", "UK Based Agency"],
//             ].map(([num, label]) => (
//               <div
//                 key={label}
//                 className="border-white/10 p-8 text-center md:border-r last:border-r-0"
//               >
//                 <h3 className="text-4xl font-black text-[#E8E2FF]">
//                   {num}
//                 </h3>

//                 <p className="mt-2 text-sm font-bold uppercase tracking-wider text-[#E6E0F5]">
//                   {label}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* FINAL CTA */}
//       <section className="px-5 py-20 md:px-8 lg:px-10">
//         <div className="mx-auto max-w-5xl rounded-[34px] border border-white/25 bg-white/10 p-8 text-center">
//           <Users className="mx-auto h-10 w-10 text-[#E8E2FF]" />

//           <h2 className="mt-5 text-3xl font-black sm:text-5xl">
//             Let’s build your digital presence.
//           </h2>

//           <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-[#E6E0F5]">
//             Whether you need a website, graphics, SEO or full digital marketing
//             support, PULSE can help you get started.
//           </p>

//           <Link
//             to="/contact"
//             className="mt-7 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-black uppercase tracking-wider text-[#523F9A] transition hover:bg-[#E8E2FF]"
//           >
//             Contact Us
//             <ArrowUpRight size={17} />
//           </Link>
//         </div>
//       </section>
//     </main>
//   );
// }