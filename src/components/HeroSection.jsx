

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import toast, { Toaster } from "react-hot-toast";
// import {
//   Phone,
//   MapPin,
//   ShieldCheck,
//   ArrowUpRight,
//   Send,
//   CheckCircle2,
//   Bug,
//   Home,
//   Building2,
// } from "lucide-react";

// export default function HeroSection() {
//   const [formData, setFormData] = useState({
//     name: "",
//     postcode: "",
//     phone: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [phoneError, setPhoneError] = useState("");

//   const LOCAL = {
//     area: "Hammersmith",
//     postcode: "W14",
//     businessName: "SuperGuard Hammersmith",
//     address: "9 Avonmore Gdns, London W14 BRU",
//     phoneDisplay: "07442 033407",
//     phoneTel: "+447442033407",
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//     if (name === "phone") setPhoneError("");
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!formData.phone.trim()) {
//       setPhoneError("Please enter your phone number");
//       return;
//     }

//     setLoading(true);

//     toast.promise(
//       axios.post("http://localhost:5000/api/callback", {
//         ...formData,
//         area: LOCAL.area,
//         business: LOCAL.businessName,
//         address: LOCAL.address,
//         phoneNumber: LOCAL.phoneDisplay,
//       }),
//       {
//         loading: "Sending callback request...",
//         success: () => {
//           setLoading(false);
//           setFormData({ name: "", postcode: "", phone: "" });
//           return "Your callback request has been sent.";
//         },
//         error: (error) => {
//           setLoading(false);
//           return error.response?.data?.message || "Something went wrong.";
//         },
//       }
//     );
//   };

//   return (
//     <section
//       itemScope
//       itemType="https://schema.org/PestControlService"
//       className="relative min-h-screen overflow-hidden bg-[#080611] pt-28 text-white md:pt-36"
//     >
//       <Toaster position="top-center" />

//       {/* Background Image */}
//       <img
//         src="/images/superguard-hero.webp"
//         alt={`${LOCAL.businessName} pest control in ${LOCAL.area}`}
//         className="absolute inset-0 h-full w-full object-cover opacity-45"
//         loading="eager"
//       />

//       <div className="absolute inset-0 bg-[linear-gradient(90deg,#080611_0%,rgba(8,6,17,0.94)_38%,rgba(8,6,17,0.55)_72%,rgba(8,6,17,0.88)_100%)]" />
//       <div className="absolute left-[-180px] top-24 h-[520px] w-[520px] rounded-full bg-[#6757B8]/35 blur-3xl" />
//       <div className="absolute bottom-[-220px] right-[-160px] h-[520px] w-[520px] rounded-full bg-[#B8AEFF]/20 blur-3xl" />

//       <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-12 md:px-8 lg:px-10 lg:pt-20">
//         <div className="grid min-h-[72vh] items-center gap-10 lg:grid-cols-12">
//           {/* CONTENT */}
//           <div className="lg:col-span-7">
//             <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-5 py-3 backdrop-blur-xl">
//               <ShieldCheck size={18} className="text-[#B8AEFF]" />
//               <span className="text-[11px] font-black uppercase tracking-[0.24em] text-[#DCD8FF]">
//                 {LOCAL.businessName} • {LOCAL.postcode}
//               </span>
//             </div>

//             <h1 className="mt-7 max-w-5xl text-5xl font-black leading-[0.9] tracking-tight sm:text-7xl lg:text-8xl">
//               Smarter Pest Control For Hammersmith Properties.
//             </h1>

//             <p className="mt-7 max-w-2xl text-lg font-semibold leading-relaxed text-white/75">
//               Professional pest control support for homes, flats, rental
//               properties and local businesses in Hammersmith — with inspection,
//               targeted treatment and prevention guidance built into every visit.
//             </p>

//             <div className="mt-9 flex flex-wrap gap-4">
//               <a
//                 href={`tel:${LOCAL.phoneTel}`}
//                 className="group inline-flex items-center gap-3 rounded-full bg-[#6757B8] px-8 py-4 text-sm font-black uppercase tracking-wider text-white shadow-2xl shadow-[#6757B8]/30 transition-all hover:-translate-y-1 hover:bg-white hover:text-[#080611]"
//               >
//                 <Phone size={18} />
//                 Call {LOCAL.phoneDisplay}
//               </a>

//               <Link
//                 to="/services"
//                 className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-8 py-4 text-sm font-black uppercase tracking-wider text-white backdrop-blur-xl transition-all hover:-translate-y-1 hover:bg-white hover:text-[#080611]"
//               >
//                 View Services
//                 <ArrowUpRight size={18} />
//               </Link>
//             </div>

//             <div className="mt-10 grid max-w-3xl gap-3 sm:grid-cols-3">
//               {[
//                 ["Inspection First", "We check the issue before treatment."],
//                 ["W14 Local Help", "Support around Hammersmith properties."],
//                 ["Clear Next Steps", "Treatment plus prevention advice."],
//               ].map(([title, text]) => (
//                 <div
//                   key={title}
//                   className="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur-xl"
//                 >
//                   <CheckCircle2 size={22} className="text-[#B8AEFF]" />
//                   <h3 className="mt-3 text-base font-black">{title}</h3>
//                   <p className="mt-2 text-sm font-semibold leading-relaxed text-white/65">
//                     {text}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* FORM CARD */}
//           <div className="lg:col-span-5">
//             <div className="ml-auto max-w-[450px] rounded-[36px] border border-white/12 bg-white/95 p-6 text-[#080611] shadow-2xl shadow-black/35 backdrop-blur-2xl">
//               <div className="rounded-[28px] bg-[#F4F1FF] p-5">
//                 <span className="text-[10px] font-black uppercase tracking-[0.24em] text-[#6757B8]">
//                   Request a Callback
//                 </span>

//                 <h2 className="mt-3 text-3xl font-black leading-tight">
//                   Get pest help in {LOCAL.area}
//                 </h2>

//                 <p className="mt-3 text-sm font-semibold leading-relaxed text-zinc-600">
//                   Send your details and the local SuperGuard team can contact
//                   you about the pest issue.
//                 </p>
//               </div>

//               <form onSubmit={handleSubmit} className="mt-5 space-y-3">
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   placeholder="Your name"
//                   required
//                   className="w-full rounded-2xl border border-[#6757B8]/15 bg-white px-4 py-4 text-sm font-bold outline-none focus:border-[#6757B8]"
//                 />

//                 <input
//                   type="text"
//                   name="postcode"
//                   value={formData.postcode}
//                   onChange={handleChange}
//                   placeholder="Postcode"
//                   required
//                   className="w-full rounded-2xl border border-[#6757B8]/15 bg-white px-4 py-4 text-sm font-bold outline-none focus:border-[#6757B8]"
//                 />

//                 <input
//                   type="tel"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   placeholder="Phone number"
//                   required
//                   className={`w-full rounded-2xl border bg-white px-4 py-4 text-sm font-bold outline-none focus:border-[#6757B8] ${
//                     phoneError ? "border-red-500" : "border-[#6757B8]/15"
//                   }`}
//                 />

//                 {phoneError && (
//                   <p className="text-xs font-bold text-red-600">{phoneError}</p>
//                 )}

//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="flex w-full items-center justify-center gap-3 rounded-2xl bg-[#6757B8] px-5 py-4 text-xs font-black uppercase tracking-[0.18em] text-white transition-all hover:bg-[#080611] disabled:opacity-70"
//                 >
//                   {loading ? "Sending..." : "Send Request"}
//                   <Send size={16} />
//                 </button>
//               </form>

//               <div className="mt-5 flex items-start gap-3 rounded-3xl bg-[#080611] p-5 text-white">
//                 <MapPin size={20} className="mt-1 text-[#B8AEFF]" />
//                 <div>
//                   <span className="block text-[10px] font-black uppercase tracking-[0.22em] text-[#B8AEFF]">
//                     Local Base
//                   </span>
//                   <p className="mt-1 text-sm font-bold leading-relaxed text-white/75">
//                     {LOCAL.address}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* BOTTOM PREMIUM STRIP */}
//         <div className="mt-12 grid overflow-hidden rounded-[34px] border border-white/10 bg-white/10 backdrop-blur-2xl md:grid-cols-3">
//           {[
//             [Home, "Residential Pest Control", "For houses, flats and landlords."],
//             [Building2, "Commercial Pest Support", "For shops, offices and premises."],
//             [Bug, "Common Pest Treatments", "Rodents, insects, bed bugs and wasps."],
//           ].map(([Icon, title, text]) => (
//             <div
//               key={title}
//               className="border-white/10 p-6 md:border-r last:border-r-0"
//             >
//               <Icon size={27} className="text-[#B8AEFF]" />
//               <h3 className="mt-4 text-xl font-black">{title}</h3>
//               <p className="mt-2 text-sm font-semibold leading-relaxed text-white/65">
//                 {text}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



















import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Palette,
  Search,
  Sparkles,
  Target,
  Zap,
} from "lucide-react";

export default function HeroSection() {
  const highlights = [
    ["Web Design", "Conversion-focused websites"],
    ["SEO Growth", "Better search visibility"],
    ["Brand Design", "Creative digital identity"],
  ];

  const services = [
    [Palette, "Design", "UI/UX, graphics and brand visuals."],
    [Search, "SEO", "Search optimisation from strategy to content."],
    [BarChart3, "Marketing", "Campaigns built for measurable growth."],
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050505] pt-32 text-white md:pt-40">
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <div className="absolute left-[-180px] top-24 h-[520px] w-[520px] rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute bottom-[-220px] right-[-160px] h-[520px] w-[520px] rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.12),transparent_35%),linear-gradient(180deg,#050505_0%,#07070A_100%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 pb-20 md:px-8 lg:px-10">
        <div className="grid min-h-[70vh] items-center gap-12 lg:grid-cols-12">
          {/* CONTENT */}
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-3 rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-3 backdrop-blur-xl">
              <Sparkles size={18} className="text-blue-400" />
              <span className="text-[11px] font-black uppercase tracking-[0.24em] text-blue-400">
                London Digital Growth Agency
              </span>
            </div>

            <h1 className="mt-7 max-w-5xl text-5xl font-black leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
              Grow Your Brand With{" "}
              <span className="text-blue-500">Smart Digital Marketing.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg font-semibold leading-relaxed text-gray-400">
              PULSE Digital Marketing Solution Limited helps businesses build a
              stronger online presence with modern websites, UI/UX design,
              graphic design, SEO and performance-focused marketing.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/services"
                className="group inline-flex items-center gap-3 rounded-full bg-blue-600 px-8 py-4 text-sm font-black uppercase tracking-wider text-white shadow-2xl shadow-blue-500/30 transition-all hover:-translate-y-1 hover:bg-blue-700"
              >
                View Services
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-8 py-4 text-sm font-black uppercase tracking-wider text-white backdrop-blur-xl transition-all hover:-translate-y-1 hover:bg-white hover:text-[#050505]"
              >
                Start Project
                <Zap size={18} />
              </Link>
            </div>

            <div className="mt-10 grid max-w-3xl gap-3 sm:grid-cols-3">
              {highlights.map(([title, text]) => (
                <div
                  key={title}
                  className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl"
                >
                  <CheckCircle2 size={22} className="text-blue-400" />
                  <h3 className="mt-3 text-base font-black text-white">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm font-semibold leading-relaxed text-gray-400">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="lg:col-span-4">
            <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/40 backdrop-blur-2xl">
              <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-blue-600/20 blur-3xl" />

              <div className="relative">
                <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-blue-600 shadow-xl shadow-blue-500/25">
                  <Target size={30} />
                </div>

                <span className="mt-7 block text-[10px] font-black uppercase tracking-[0.24em] text-blue-400">
                  Start from £50
                </span>

                <h2 className="mt-3 text-3xl font-black leading-tight text-white">
                  Creative services built for business growth.
                </h2>

                <p className="mt-4 text-sm font-semibold leading-relaxed text-gray-400">
                  Choose the service you need and get clear project direction
                  from design to launch.
                </p>

                <div className="mt-6 space-y-3">
                  {[
                    ["Graphic Design", "From £50"],
                    ["Website Design", "From £299"],
                    ["SEO Services", "From £150/mo"],
                  ].map(([service, price]) => (
                    <div
                      key={service}
                      className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4"
                    >
                      <span className="text-sm font-bold text-white">
                        {service}
                      </span>
                      <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-black text-blue-400">
                        {price}
                      </span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/contact"
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-5 py-4 text-sm font-black uppercase tracking-wider text-[#050505] transition hover:bg-blue-600 hover:text-white"
                >
                  Get a Quote
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM STRIP */}
        <div className="mt-12 grid overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl md:grid-cols-3">
          {services.map(([Icon, title, text]) => (
            <div
              key={title}
              className="border-white/10 p-6 md:border-r last:border-r-0"
            >
              <Icon size={27} className="text-blue-400" />
              <h3 className="mt-4 text-xl font-black text-white">{title}</h3>
              <p className="mt-2 text-sm font-semibold leading-relaxed text-gray-400">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}