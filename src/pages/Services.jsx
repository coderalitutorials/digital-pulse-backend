


// import React, { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import {
//   ShieldAlert,
//   ArrowUpRight,
//   Bug,
//   Rat,
//   Bird,
//   Sparkles,
//   Home,
//   SlidersHorizontal,
//   Phone,
//   MapPin,
//   ShieldCheck,
// } from "lucide-react";
// import ServicesHeroSection from "../components/ServicesHeroSection";
// import SuperGuardTestimonials from "../components/PrimeShieldTestimonials";

// const Services = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   const LOCAL = {
//     area: "Hammersmith",
//     postcode: "W14",
//     address: "9 Avonmore Gdns, London W14 BRU",
//     phoneNo: "07442 033407",
//     phoneTel: "+447442033407",
//     companyName: "SuperGuard Hammersmith",
//   };

//   const categories = ["All", "Insects", "Rodents & Wildlife", "Birds & Prevention"];

//   const servicesData = [
//     {
//       cat: "Insects",
//       title: `Ants Control ${LOCAL.area}`,
//       image: "/images/ants.webp",
//       icon: Bug,
//       tag: "Ant Activity",
//       guarantee: "Trail Inspection",
//       metric: "Kitchen & Entry Points",
//       details: `Ants can appear around kitchens, doors, garden access points and wall edges. Our ${LOCAL.area} team checks the activity source and recommends a practical treatment route.`,
//     },
//     {
//       cat: "Insects",
//       title: `Bed Bugs Control ${LOCAL.area}`,
//       image: "/images/bedbugs.webp",
//       icon: Bug,
//       tag: "Bedroom Pest Treatment",
//       guarantee: "Room Planning",
//       metric: "Bed Frame Check",
//       details: `Bed bugs can hide in mattress seams, bed frames, headboards and soft furnishings. ${LOCAL.companyName} helps inspect affected rooms and plan targeted treatment across ${LOCAL.postcode}.`,
//     },
//     {
//       cat: "Insects",
//       title: `Carpet Moth Treatment ${LOCAL.area}`,
//       image: "/images/moths.webp",
//       icon: Sparkles,
//       tag: "Fabric Protection",
//       guarantee: "Larvae Guidance",
//       metric: "Fabric Risk",
//       details: `Moths can damage carpets, rugs, stored clothes and soft furnishings. We identify likely activity areas and provide suitable steps to reduce further damage.`,
//     },
//     {
//       cat: "Insects",
//       title: `Carpet Beetle Control ${LOCAL.area}`,
//       image: "/images/beetle.webp",
//       icon: Bug,
//       tag: "Hidden Larvae Support",
//       guarantee: "Lifecycle Advice",
//       metric: "Storage Check",
//       details: `Carpet beetles often hide near skirting boards, wardrobes and storage spaces. Our team checks likely harbourage points and explains the treatment route clearly.`,
//     },
//     {
//       cat: "Insects",
//       title: `Cockroach Control ${LOCAL.area}`,
//       image: "/images/cockroach.webp",
//       icon: Bug,
//       tag: "Kitchen & Hygiene Pests",
//       guarantee: "Harbourage Check",
//       metric: "Risk Areas",
//       details: `Cockroaches can hide behind appliances, pipework, cracks and food areas. We help homes and businesses manage cockroach activity with careful inspection and targeted support.`,
//     },
//     {
//       cat: "Rodents & Wildlife",
//       title: `Rats & Mice Control ${LOCAL.area}`,
//       image: "/images/rodents.webp",
//       icon: Rat,
//       tag: "Rodent Inspection",
//       guarantee: "Entry Point Advice",
//       metric: "Activity Mapping",
//       details: `Rats and mice can damage wiring, contaminate food areas and create stress inside properties. Based near ${LOCAL.address}, our team checks signs, access points and suitable control options.`,
//     },
//     {
//       cat: "Insects",
//       title: `Flea Treatment ${LOCAL.area}`,
//       image: "/images/flea.webp",
//       icon: Bug,
//       tag: "Soft Furnishing Pests",
//       guarantee: "Aftercare Advice",
//       metric: "Furnishing Check",
//       details: `Fleas can spread through carpets, sofas, pet resting areas and soft furnishings. We inspect affected areas and guide customers through suitable preparation and aftercare.`,
//     },
//     {
//       cat: "Insects",
//       title: `Wasp Nest Removal ${LOCAL.area}`,
//       image: "/images/wasps.webp",
//       icon: ShieldAlert,
//       tag: "Nest Treatment Support",
//       guarantee: "Safe Planning",
//       metric: "Nest Location",
//       details: `Wasps around roof edges, sheds, gardens or wall voids can become unsafe quickly. Our team helps locate nest activity and arrange suitable treatment around ${LOCAL.area}.`,
//     },
//     {
//       cat: "Insects",
//       title: `Bee Relocation Support ${LOCAL.area}`,
//       image: "/images/bee.webp",
//       icon: Bug,
//       tag: "Bee Guidance",
//       guarantee: "Careful Advice",
//       metric: "Hive Review",
//       details: `When bees settle close to entrances or living spaces, we provide careful guidance and help you understand the safest next step for your property.`,
//     },
//     {
//       cat: "Rodents & Wildlife",
//       title: `Squirrel Proofing ${LOCAL.area}`,
//       image: "/images/squirrel.webp",
//       icon: Rat,
//       tag: "Loft & Roof Support",
//       guarantee: "Proofing Advice",
//       metric: "Loft Access",
//       details: `Squirrels can damage loft spaces, insulation and roof edges. ${LOCAL.companyName} helps assess activity points and recommend suitable proofing steps.`,
//     },
//     {
//       cat: "Birds & Prevention",
//       title: `Property Proofing & Repairs ${LOCAL.area}`,
//       image: "/images/hygene.webp",
//       icon: Home,
//       tag: "Prevention Work",
//       guarantee: "Access Review",
//       metric: "Gap Check",
//       details: `Proofing helps reduce pest return. We check open gaps, weak points, old nesting areas and practical prevention options for homes and business premises.`,
//     },
//     {
//       cat: "Birds & Prevention",
//       title: `Birds Control & Deterrents ${LOCAL.area}`,
//       image: "/images/birds.webp",
//       icon: Bird,
//       tag: "Bird Prevention",
//       guarantee: "Building Advice",
//       metric: "Roof & Ledge",
//       details: `Bird activity can cause mess around roofs, ledges and shop fronts. We help with practical deterrent advice and suitable prevention options for local properties.`,
//     },
//   ];

//   useEffect(() => {
//     if (location.state) {
//       const targetCategory = location.state.category || "All";
//       setSelectedCategory(targetCategory);

//       if (location.state.scrollToService) {
//         const timer = setTimeout(() => {
//           const incomingText = location.state.scrollToService.toLowerCase();
//           let keyword = incomingText;

//           if (incomingText.includes("rat") || incomingText.includes("mice")) keyword = "rat";
//           else if (incomingText.includes("bed bug")) keyword = "bed bug";
//           else if (incomingText.includes("wasp")) keyword = "wasp";
//           else if (incomingText.includes("moth")) keyword = "moth";

//           const element = Array.from(document.querySelectorAll("[data-title]")).find(
//             (el) => el.getAttribute("data-title").toLowerCase().includes(keyword)
//           );

//           if (element) {
//             const offset = 170;
//             const bodyRect = document.body.getBoundingClientRect().top;
//             const elementRect = element.getBoundingClientRect().top;
//             const elementPosition = elementRect - bodyRect;

//             window.scrollTo({
//               top: elementPosition - offset,
//               behavior: "smooth",
//             });
//           }
//         }, 450);

//         return () => clearTimeout(timer);
//       }
//     }
//   }, [location]);

//   const filteredServices =
//     selectedCategory === "All"
//       ? servicesData
//       : servicesData.filter((service) => service.cat === selectedCategory);

//   return (
//     <main className="min-h-screen overflow-x-hidden bg-[#F8F6FF] font-sans text-[#17122F] selection:bg-[#5F52B5] selection:text-white">
//       <ServicesHeroSection />

//       <section className="bg-[#17122F] text-white">
//         <div className="mx-auto grid max-w-7xl gap-4 px-5 py-5 md:grid-cols-3 md:px-8 lg:px-10">
//           <div className="flex items-center gap-3">
//             <MapPin className="h-5 w-5 text-[#B8AEFF]" />
//             <span className="text-sm font-bold text-white/80">
//               {LOCAL.address}
//             </span>
//           </div>

//           <div className="hidden items-center justify-center md:flex">
//             <span className="rounded-full bg-white/10 px-5 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-[#B8AEFF]">
//               Hammersmith Pest Control Directory
//             </span>
//           </div>

//           <a
//             href={`tel:${LOCAL.phoneTel}`}
//             className="flex items-center gap-3 text-sm font-black text-white transition-colors hover:text-[#B8AEFF] md:justify-end"
//           >
//             <Phone className="h-5 w-5 text-[#B8AEFF]" />
//             {LOCAL.phoneNo}
//           </a>
//         </div>
//       </section>

//       <section className="sticky top-[72px] z-40 border-b border-[#5F52B5]/10 bg-white/95 backdrop-blur-2xl">
//         <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-5 md:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
//           <div>
//             <span className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-[#5F52B5]">
//               <SlidersHorizontal className="h-4 w-4" />
//               Filter Services
//             </span>
//             <p className="mt-1 text-sm font-semibold text-slate-500">
//               Choose a pest category available around {LOCAL.area}.
//             </p>
//           </div>

//           <div className="flex flex-wrap gap-2">
//             {categories.map((cat) => (
//               <button
//                 key={cat}
//                 onClick={() => setSelectedCategory(cat)}
//                 className={`rounded-full px-5 py-3 text-xs font-black uppercase tracking-[0.12em] transition-all ${
//                   selectedCategory === cat
//                     ? "bg-[#5F52B5] text-white shadow-xl shadow-[#5F52B5]/25"
//                     : "bg-[#F8F6FF] text-slate-600 ring-1 ring-[#5F52B5]/10 hover:bg-white hover:text-[#5F52B5]"
//                 }`}
//               >
//                 {cat}
//               </button>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="relative overflow-hidden py-20 lg:py-28">
//         <div className="absolute inset-x-0 top-0 h-[520px] bg-[#5F52B5]" />

//         <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
//           <div className="mb-14 grid gap-8 lg:grid-cols-12 lg:items-end">
//             <div className="lg:col-span-8">
//               <span className="inline-flex rounded-full bg-white/15 px-5 py-3 text-[11px] font-black uppercase tracking-[0.22em] text-white ring-1 ring-white/25">
//                 SuperGuard Hammersmith Services
//               </span>

//               <h2 className="mt-7 max-w-5xl text-4xl font-black leading-[0.92] tracking-tight text-white sm:text-5xl lg:text-7xl">
//                 Pest Control Services With A Clear Inspection Plan.
//               </h2>
//             </div>

//             <p className="text-base font-semibold leading-relaxed text-white/82 sm:text-lg lg:col-span-4">
//               A complete service directory for homes, flats, landlords, shops,
//               offices and commercial premises across {LOCAL.postcode}.
//             </p>
//           </div>

//           <div className="overflow-hidden rounded-[42px] bg-white shadow-2xl shadow-[#17122F]/15">
//             {filteredServices.map((service, index) => {
//               const Icon = service.icon;
//               const reverse = index % 2 === 1;

//               return (
//                 <article
//                   key={service.title}
//                   data-title={service.title}
//                   onClick={() => navigate("/contact-us")}
//                   className="group grid cursor-pointer border-b border-[#5F52B5]/10 last:border-b-0 lg:grid-cols-12"
//                 >
//                   <div
//                     className={`relative min-h-[300px] overflow-hidden lg:col-span-5 ${
//                       reverse ? "lg:order-2" : ""
//                     }`}
//                   >
//                     <img
//                       src={service.image}
//                       alt={`${LOCAL.companyName} - ${service.title}`}
//                       className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
//                       loading="lazy"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-[#17122F]/90 via-[#17122F]/25 to-transparent" />

//                     <div className="absolute left-6 top-6 rounded-full bg-white px-5 py-3 shadow-xl">
//                       <span className="text-[10px] font-black uppercase tracking-widest text-[#5F52B5]">
//                         {service.cat}
//                       </span>
//                     </div>

//                     <div className="absolute bottom-6 left-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#5F52B5] text-white shadow-xl">
//                       <Icon className="h-7 w-7" />
//                     </div>
//                   </div>

//                   <div className="flex flex-col justify-center p-7 md:p-10 lg:col-span-7 lg:p-12">
//                     <span className="text-[10px] font-black uppercase tracking-[0.22em] text-[#5F52B5]">
//                       {service.tag}
//                     </span>

//                     <h3 className="mt-3 max-w-3xl text-3xl font-black leading-tight text-[#17122F] md:text-5xl">
//                       {service.title}
//                     </h3>

//                     <p className="mt-5 max-w-3xl text-sm font-semibold leading-relaxed text-slate-600 md:text-base">
//                       {service.details}
//                     </p>

//                     <div className="mt-7 flex flex-wrap gap-3">
//                       <span className="inline-flex items-center gap-2 rounded-full bg-[#F8F6FF] px-5 py-3 text-xs font-black text-[#17122F] ring-1 ring-[#5F52B5]/10">
//                         <ShieldCheck className="h-4 w-4 text-[#5F52B5]" />
//                         {service.guarantee}
//                       </span>

//                       <span className="inline-flex items-center gap-2 rounded-full bg-[#F8F6FF] px-5 py-3 text-xs font-black text-[#17122F] ring-1 ring-[#5F52B5]/10">
//                         {service.metric}
//                       </span>
//                     </div>

//                     <button
//                       onClick={(e) => {
//                         e.stopPropagation();
//                         navigate("/contact-us");
//                       }}
//                       className="mt-8 inline-flex w-fit items-center gap-3 rounded-full bg-[#5F52B5] px-7 py-4 text-xs font-black uppercase tracking-[0.14em] text-white transition-all hover:bg-[#17122F]"
//                     >
//                       Book Inspection
//                       <ArrowUpRight className="h-4 w-4" />
//                     </button>
//                   </div>
//                 </article>
//               );
//             })}
//           </div>

//           {filteredServices.length === 0 && (
//             <div className="rounded-[34px] bg-white py-20 text-center shadow-xl">
//               <p className="font-bold text-[#17122F]">
//                 No services found in this category.
//               </p>
//             </div>
//           )}

//           <div className="mt-12 grid overflow-hidden rounded-[38px] bg-[#17122F] text-white shadow-2xl shadow-[#17122F]/20 lg:grid-cols-[1fr_0.8fr]">
//             <div className="p-7 md:p-9">
//               <span className="block text-[10px] font-black uppercase tracking-[0.22em] text-[#B8AEFF]">
//                 Need Help Choosing A Service?
//               </span>

//               <h3 className="mt-2 text-3xl font-black leading-tight">
//                 Tell us what signs you are seeing around your property.
//               </h3>

//               <p className="mt-3 max-w-2xl text-sm font-semibold leading-relaxed text-white/70">
//                 Call {LOCAL.companyName} and we will help you choose the right
//                 pest control next step for your Hammersmith property.
//               </p>
//             </div>

//             <div className="flex flex-col justify-center bg-[#5F52B5] p-7 text-white md:p-9">
//               <span className="text-[10px] font-black uppercase tracking-[0.22em] text-white/65">
//                 Call Local Team
//               </span>

//               <a
//                 href={`tel:${LOCAL.phoneTel}`}
//                 className="mt-2 text-4xl font-black hover:text-[#DCD8FF]"
//               >
//                 {LOCAL.phoneNo}
//               </a>

//               <button
//                 onClick={() => navigate("/contact-us")}
//                 className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-black uppercase tracking-wider text-[#5F52B5] transition-all hover:bg-[#17122F] hover:text-white"
//               >
//                 Request Help
//                 <ArrowUpRight className="h-4 w-4" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       <SuperGuardTestimonials />
//     </main>
//   );
// };

// export default Services;




















import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowUpRight,
  Code2,
  Palette,
  SearchCheck,
  Megaphone,
  Layout,
  Video,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

import ServicesHeroSection from "../components/ServicesHeroSection";

export default function Services() {
  const navigate = useNavigate();

  const services = [
    {
      title: "Website Design",
      price: "From £299",
      image: "/images/web-design.webp",
      icon: Code2,
      desc:
        "Professional websites designed with modern layouts, responsive design and smooth user experience.",
      features: ["Business Websites", "Mobile Responsive", "Modern UI"],
    },
    {
      title: "Graphic Design",
      price: "From £50",
      image: "/images/graphic-design.webp",
      icon: Palette,
      desc:
        "Creative graphics for social media, marketing campaigns and professional brand identity.",
      features: ["Social Media Posts", "Brand Graphics", "Marketing Designs"],
    },
    {
      title: "SEO Services",
      price: "From £150/mo",
      image: "/images/seo-service.webp",
      icon: SearchCheck,
      desc:
        "Improve your online visibility with search optimisation and website improvements.",
      features: ["Local SEO", "Website Optimisation", "Keyword Strategy"],
    },
    {
      title: "Digital Marketing",
      price: "From £200/mo",
      image: "/images/digital-marketing.webp",
      icon: Megaphone,
      desc:
        "Grow your business online with content planning and marketing campaigns.",
      features: ["Campaign Planning", "Social Growth", "Online Presence"],
    },
    {
      title: "UI/UX Design",
      price: "From £250",
      image: "/images/ui-ux.webp",
      icon: Layout,
      desc:
        "Clean user interfaces focused on simple navigation and better customer experience.",
      features: ["User Flow", "Wireframes", "Clean Interface"],
    },
    {
      title: "Video Editing",
      price: "From £75",
      image: "/images/video-editing.webp",
      icon: Video,
      desc:
        "Professional video editing for brands, adverts and social media content.",
      features: ["Reels Editing", "Business Videos", "Creative Content"],
    },
  ];

  return (
    <main className="min-h-screen bg-[#050505] text-white">

      <style>{`
        .service-glow-card {
          position: relative;
          overflow: hidden;
        }

        .service-glow-card::before {
          content: "";
          position: absolute;
          inset: -4px;
          border-radius: 34px;
          background: linear-gradient(
            120deg,
            transparent 20%,
            rgba(37,99,235,0.9),
            rgba(147,197,253,1),
            rgba(255,255,255,0.9),
            rgba(37,99,235,0.9),
            transparent 80%
          );

          transform: translateX(-130%) skewX(-20deg);
          opacity:0;
          z-index:0;
        }


        .service-glow-card:hover::before {
          animation: blueFlash 0.65s ease;
        }


        @keyframes blueFlash {

          0%{
            transform:translateX(-130%) skewX(-20deg);
            opacity:0;
          }

          25%{
            opacity:1;
          }

          100%{
            transform:translateX(130%) skewX(-20deg);
            opacity:0;
          }

        }


        .service-inner{
          position:relative;
          z-index:2;
        }

      `}</style>


      <ServicesHeroSection />



      <section className="py-20">

        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10">


          {/* HEADER */}

          <div className="mx-auto max-w-3xl text-center">

            <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-3 text-xs font-black uppercase tracking-[0.2em] text-blue-400">

              <Sparkles size={15}/>

              Digital Services

            </span>


            <h2 className="mt-5 text-3xl font-black sm:text-5xl">

              Services built for modern businesses.

            </h2>


            <p className="mt-5 text-gray-400">

              Choose a service that fits your business. We keep everything
              simple, professional and focused on digital growth.

            </p>

          </div>




          {/* CARDS */}

          <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">


            {services.map(({title,price,image,icon:Icon,desc,features})=>(


              <article
                key={title}
                className="service-glow-card group rounded-[32px] bg-[#0B0B0F] p-[2px] transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/30"
              >


                <div className="service-inner overflow-hidden rounded-[30px] bg-[#0B0B0F]">


                  <div className="relative overflow-hidden">


                    <img
                      src={image}
                      alt={`${title} service by PULSE Digital Marketing Solution Limited`}
                      className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                      loading="lazy"
                    />


                    <div className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600">

                      <Icon size={23}/>

                    </div>



                    <span className="absolute bottom-5 left-5 rounded-full bg-white px-5 py-2 text-xs font-black text-black">

                      {price}

                    </span>


                  </div>




                  <div className="p-6">


                    <h3 className="text-2xl font-black">

                      {title}

                    </h3>


                    <p className="mt-3 text-sm leading-relaxed text-gray-400">

                      {desc}

                    </p>



                    <div className="mt-5 space-y-3">


                      {features.map((item)=>(


                        <div
                          key={item}
                          className="flex items-center gap-2 text-sm text-gray-300"
                        >

                          <CheckCircle2
                            size={16}
                            className="text-blue-400"
                          />

                          {item}

                        </div>


                      ))}


                    </div>




                    <button
                      onClick={()=>navigate("/contact")}
                      className="mt-7 inline-flex items-center gap-3 rounded-full bg-blue-600 px-6 py-3 text-xs font-black uppercase tracking-wider transition hover:bg-blue-700"
                    >

                      Get Service

                      <ArrowUpRight size={15}/>

                    </button>



                  </div>


                </div>


              </article>


            ))}



          </div>





          {/* CTA */}

          <div className="mt-14 rounded-[32px] border border-blue-500/20 bg-blue-500/10 p-8 text-center">


            <h3 className="text-3xl font-black">

              Need a custom digital package?

            </h3>


            <p className="mx-auto mt-3 max-w-2xl text-gray-400">

              Contact PULSE Digital Marketing Solution Limited and tell us what
              you want to build.

            </p>



            <button
              onClick={()=>navigate("/contact-us")}
              className="mt-7 inline-flex items-center gap-3 rounded-full bg-blue-600 px-8 py-4 text-sm font-black uppercase tracking-wider hover:bg-blue-700"
            >

              Start Project

              <ArrowUpRight size={17}/>

            </button>



          </div>


        </div>

      </section>


    </main>
  );
}