

// import React, { useState } from "react";
// import axios from "axios";
// import toast, { Toaster } from "react-hot-toast";
// import { PhoneCall, MapPin, ShieldCheck, Clock, CheckCircle } from "lucide-react";

// export default function AboutCallbackSection() {
//   const [formData, setFormData] = useState({ name: "", postcode: "", phone: "" });
//   const [loading, setLoading] = useState(false);

//   // SINGLE SOURCE OF TRUTH FOR WANDSWORTH NODE
//   const address = "6 Chaplin Cl, London SE1 8TU";
//   const area = "WaterLoo";
//   const businessName = "PrimeShield Wandsworth";

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     toast.promise(
//       axios.post("http://localhost:5000/api/callback", {
//         ...formData,
//         area: area,
//         business: businessName,
//         address: address,
//       }),
//       {
//         loading: "Scheduling callback request...",
//         success: () => {
//           setFormData({ name: "", postcode: "", phone: "" });
//           setLoading(false);
//           return "Request received! Our expert will call you shortly.";
//         },
//         error: () => {
//           setLoading(false);
//           return "Connection issue. Please try again or call us.";
//         },
//       },
//       {
//         style: { 
//           background: "#161619", 
//           color: "#fff", 
//           border: "1px solid rgba(243, 111, 33, 0.2)",
//           fontFamily: "sans-serif"
//         },
//       }
//     );
//   };

//   return (
//     <section className="relative py-24 bg-[#0a0a0c] overflow-hidden border-b border-white/[0.02]">
//       <Toaster position="top-center" />

//       {/* Subtle Grid Background */}
//       <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:32px_32px]" />
      
//       {/* Visual Ambient Light Leak */}
//       <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#F36F21]/5 rounded-full filter blur-[120px] pointer-events-none" />

//       <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
//         <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
//           {/* Left Side: Brand Value Proposition */}
//           <div className="lg:col-span-7 space-y-6">
//             <div className="inline-flex items-center gap-2 text-[#F36F21] bg-[#F36F21]/10 px-3 py-1 rounded text-[11px] font-mono uppercase tracking-widest">
//               <PhoneCall size={12} className="animate-pulse" /> 24/7 Priority Support
//             </div>
            
//             <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight leading-none">
//               Need Expert Advice? <br />
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F36F21] to-[#ff8c42]">
//                 Get A Callback
//               </span>
//             </h2>
            
//             <p className="text-neutral-400 text-base md:text-lg leading-relaxed max-w-xl">
//               Don't let a small pest issue turn into an expensive repair. Leave your details below, and one of our certified {area} technicians will call you back within 1 hour.
//             </p>
            
//             <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg">
//               {[
//                 { icon: Clock, label: "1 hour Response Guarantee" },
//                 { icon: MapPin, label: "Wandsworth Hub Coverage" },
//                 { icon: ShieldCheck, label: "BPCA Certified Specialists" },
//                 { icon: CheckCircle, label: " Commercial Quotes" }
//               ].map((item, i) => (
//                 <div key={i} className="flex items-center gap-3 text-neutral-300 font-medium text-xs tracking-wide uppercase">
//                   <div className="p-2 bg-white/[0.02] border border-white/[0.05] rounded">
//                     <item.icon size={16} className="text-[#F36F21]" />
//                   </div>
//                   {item.label}
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Right Side: Clean Dark SaaS Form Architecture */}
//           <div className="lg:col-span-5 bg-[#121215] border border-white/[0.06] p-8 md:p-10 rounded-lg relative shadow-2xl">
//             {/* Top Border Design Accent */}
//             <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#F36F21] to-[#ff8c42] rounded-t-lg" />
            
//             <h3 className="text-white text-xl font-bold tracking-tight mb-2">Request Free Consultation</h3>
//             <p className="text-neutral-500 text-xs mb-8">Fill the fast response form below to connect with local support.</p>
            
//             <form onSubmit={handleSubmit} className="space-y-5">
//               {[
//                 { id: "name", label: "Full Name", type: "text", placeholder: "e.g. John Doe" },
//                 { id: "postcode", label: "Postcode", type: "text", placeholder: "e.g. SW18 5ND" },
//                 { id: "phone", label: "Phone Number", type: "tel", placeholder: "e.g. 07356 253624" }
//               ].map((field) => (
//                 <div key={field.id} className="space-y-1.5">
//                   <label className="block text-[10px] font-mono uppercase tracking-wider text-neutral-400">
//                     {field.label}
//                   </label>
//                   <input
//                     required
//                     type={field.type}
//                     name={field.id}
//                     value={formData[field.id]}
//                     onChange={(e) => setFormData({ ...formData, [field.id]: e.target.value })}
//                     className="w-full bg-[#18181c] border border-white/[0.08] rounded px-4 py-3 text-sm text-white placeholder-neutral-600 outline-none focus:border-[#F36F21]/80 focus:ring-1 focus:ring-[#F36F21]/30 transition-all font-sans"
//                     placeholder={field.placeholder}
//                   />
//                 </div>
//               ))}
              
//               <button 
//                 disabled={loading}
//                 className="w-full bg-[#F36F21] hover:bg-[#ff7b2e] text-white py-3.5 mt-2 font-bold uppercase text-xs tracking-wider rounded transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2 shadow-lg shadow-[#F36F21]/10"
//               >
//                 {loading ? "Processing..." : "Submit Callback Request"}
//               </button>
//             </form>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }








import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import {
  PhoneCall,
  MapPin,
  ShieldCheck,
  Clock,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

export default function AboutCallbackSection() {
  const [formData, setFormData] = useState({
    name: "",
    postcode: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);

  const LOCAL = {
    area: "Rotherhithe",
    postcode: "SE16",
    address: "10 Someford Way, London SE16 6QW",
    businessName: "SuperGuard Rotherhithe",
    phoneDisplay: "07448 491927",
    phoneTel: "+447448491927",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    toast.promise(
      axios.post("http://localhost:5000/api/callback", {
        ...formData,
        area: LOCAL.area,
        business: LOCAL.businessName,
        address: LOCAL.address,
        phoneNumber: LOCAL.phoneDisplay,
      }),
      {
        loading: "Sending callback request...",
        success: () => {
          setFormData({ name: "", postcode: "", phone: "" });
          setLoading(false);
          return "Request received. SuperGuard will contact you shortly.";
        },
        error: () => {
          setLoading(false);
          return "Something went wrong. Please try again or call us directly.";
        },
      },
      {
        style: {
          background: "#ffffff",
          color: "#111827",
          border: "1px solid rgba(94,80,181,0.18)",
          boxShadow: "0 20px 60px rgba(15,23,42,0.12)",
          fontFamily: "sans-serif",
        },
      }
    );
  };

  const benefits = [
    {
      icon: Clock,
      label: "Fast Local Callback",
    },
    {
      icon: MapPin,
      label: `${LOCAL.area} ${LOCAL.postcode} Support`,
    },
    {
      icon: ShieldCheck,
      label: "Safe Treatment Planning",
    },
    {
      icon: CheckCircle,
      label: "Clear Pest Advice",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#F7F6FF] py-24 lg:py-32">
      <Toaster position="top-center" />

      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white to-transparent" />
      <div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-[#5E50B5]/10 blur-3xl" />
      <div className="absolute bottom-0 -left-24 w-[360px] h-[360px] rounded-full bg-white blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 lg:px-10">
        <div className="rounded-[3rem] bg-white border border-[#5E50B5]/10 shadow-2xl shadow-slate-900/5 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* LEFT CONTENT */}
            <div className="lg:col-span-6 p-7 md:p-10 lg:p-12">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#F6F4FF] border border-[#5E50B5]/15 px-4 py-2 text-[11px] font-black uppercase tracking-[0.18em] text-[#5E50B5] mb-6">
                <PhoneCall className="w-4 h-4" />
                Request A Callback
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black tracking-tight leading-[1.05] text-slate-950 mb-6">
                Need Pest Advice In{" "}
                <span className="text-[#5E50B5]">{LOCAL.area}?</span>
              </h2>

              <p className="text-base text-slate-600 leading-relaxed font-medium max-w-2xl mb-8">
                Tell us what pest signs you are seeing and our local team will
                get back to you. We help with rats, mice, bed bugs, cockroaches,
                ants, fleas, wasps and other pest problems across {LOCAL.postcode}.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {benefits.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.label}
                      className="rounded-2xl bg-[#F7F6FF] border border-[#5E50B5]/10 p-4 flex items-center gap-3"
                    >
                      <div className="w-10 h-10 rounded-xl bg-white text-[#5E50B5] flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-sm font-black text-slate-700">
                        {item.label}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="rounded-[2rem] bg-[#4C4098] text-white p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="block text-[10px] font-black uppercase tracking-widest text-white/60 mb-1">
                    Prefer To Call?
                  </span>
                  <a
                    href={`tel:${LOCAL.phoneTel}`}
                    className="text-2xl font-black"
                  >
                    {LOCAL.phoneDisplay}
                  </a>
                </div>

                <MapPin className="w-7 h-7 text-white/70" />
              </div>
            </div>

            {/* RIGHT FORM */}
            <div className="lg:col-span-6 bg-[#4C4098] p-7 md:p-10 lg:p-12 text-white relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full bg-white/10 blur-3xl" />
              <div className="absolute bottom-0 -left-20 w-52 h-52 rounded-full bg-[#7A6AE6]/30 blur-3xl" />

              <div className="relative z-10">
                <span className="block text-[10px] font-black uppercase tracking-[0.2em] text-[#DDD7FF] mb-3">
                  Fast Response Form
                </span>

                <h3 className="text-2xl md:text-4xl font-black tracking-tight mb-3">
                  Get A Call From Our Team
                </h3>

                <p className="text-sm text-white/75 leading-relaxed font-medium mb-8">
                  Fill in your details below and we will contact you to discuss
                  your pest issue and the best next step.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {[
                    {
                      id: "name",
                      label: "Full Name",
                      type: "text",
                      placeholder: "Your name",
                    },
                    {
                      id: "postcode",
                      label: "Postcode",
                      type: "text",
                      placeholder: `e.g. ${LOCAL.postcode}`,
                    },
                    {
                      id: "phone",
                      label: "Phone Number",
                      type: "tel",
                      placeholder: "Your phone number",
                    },
                  ].map((field) => (
                    <div key={field.id}>
                      <label className="block text-[10px] font-black uppercase tracking-widest text-[#DDD7FF] mb-2">
                        {field.label}
                      </label>

                      <input
                        required
                        type={field.type}
                        name={field.id}
                        value={formData[field.id]}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            [field.id]: e.target.value,
                          })
                        }
                        className="w-full rounded-2xl bg-white/10 border border-white/15 px-5 py-4 text-sm text-white placeholder:text-white/45 outline-none focus:bg-white focus:text-slate-950 focus:placeholder:text-slate-400 focus:border-white transition-all font-semibold"
                        placeholder={field.placeholder}
                      />
                    </div>
                  ))}

                  <button
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-white text-[#4C4098] px-6 py-4 text-sm font-black uppercase tracking-[0.16em] hover:scale-[1.02] transition-all disabled:opacity-60"
                  >
                    {loading ? "Sending..." : "Submit Callback Request"}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>

                <p className="mt-5 text-xs text-white/60 font-medium leading-relaxed">
                  Based near {LOCAL.address}, supporting pest control enquiries
                  across {LOCAL.area} and nearby {LOCAL.postcode}.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}