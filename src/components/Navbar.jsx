



// import React, { useEffect, useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import { MapPin, Phone, Menu, X, ShieldCheck } from "lucide-react";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   const LOCAL = {
//     company: "SuperGuard Hammersmith",
//     brand: "SuperGuard Pest Control",
//     area: "Hammersmith",
//     postcode: "W14",
//     fullAddress: "9 Avonmore Gdns, London W14 BRU",
//     phoneDisplay: "07442 033407",
//     phoneTel: "+447442033407",
//   };

//   useEffect(() => {
//     const onScroll = () => setIsScrolled(window.scrollY > 12);
//     onScroll();
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   const menuItems = [
//     ["Home", "/"],
//     ["Services", "/services"],
//     ["About", "/about-us"],
//     ["Contact", "/contact-us"],
//   ];

//   const navClass = ({ isActive }) =>
//     `group relative px-1 py-2 text-[13px] font-black uppercase tracking-[0.18em] transition-all duration-300 ${
//       isActive ? "text-[#6757B8]" : "text-zinc-700 hover:text-[#6757B8]"
//     }`;

//   const mobileNavClass = ({ isActive }) =>
//     `flex items-center justify-between rounded-2xl px-5 py-4 text-sm font-black uppercase tracking-[0.16em] transition-all ${
//       isActive
//         ? "bg-[#6757B8] text-white shadow-lg shadow-[#6757B8]/25"
//         : "bg-white text-zinc-900 ring-1 ring-[#6757B8]/12"
//     }`;

//   return (
//     <header
//       className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
//         isScrolled
//           ? "bg-white/90 shadow-2xl shadow-black/10 backdrop-blur-2xl"
//           : "bg-[#F4F1FF]"
//       }`}
//     >
//       {/* HAMMERSMITH INFO STRIP */}
//       <div
//         itemScope
//         itemType="https://schema.org/LocalBusiness"
//         className="hidden lg:block bg-[#0E0B19] text-white"
//       >
//         <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-2">
//           <div className="flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.22em] text-white/70">
//             <ShieldCheck size={15} className="text-[#8B7CDE]" />
//             <span>
//               Trusted Pest Control Response in{" "}
//               <span itemProp="areaServed" className="text-[#B8AEFF]">
//                 {LOCAL.area} {LOCAL.postcode}
//               </span>
//             </span>
//           </div>

//           <div className="flex items-center gap-6 text-[11px] font-bold text-white/75">
//             <span
//               itemProp="address"
//               itemScope
//               itemType="https://schema.org/PostalAddress"
//               className="flex items-center gap-2"
//             >
//               <MapPin size={14} className="text-[#B8AEFF]" />
//               <span itemProp="streetAddress">{LOCAL.fullAddress}</span>
//             </span>

//             <a
//               href={`tel:${LOCAL.phoneTel}`}
//               className="flex items-center gap-2 font-black text-[#B8AEFF] transition hover:text-white"
//             >
//               <Phone size={14} />
//               <span itemProp="telephone">{LOCAL.phoneDisplay}</span>
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* MAIN NAV */}
//       <nav className="border-b border-[#6757B8]/10">
//         <div className="mx-auto flex h-[86px] max-w-7xl items-center justify-between px-5 md:px-8 lg:px-10">
//           {/* LOGO AREA */}
//           <Link
//             to="/"
//             onClick={() => setOpen(false)}
//             aria-label={`${LOCAL.company} Home`}
//             className="flex items-center gap-3"
//           >
//             <div className="relative">
//               <div className="absolute -inset-2 rounded-[28px] bg-[#6757B8]/10 blur-xl" />
//               <div className="relative flex items-center rounded-[24px] bg-white px-4 py-2.5 shadow-xl shadow-[#6757B8]/10 ring-1 ring-[#6757B8]/15">
//                 <img
//                   src="/images/superguard-logo.webp"
//                   alt={`${LOCAL.company} Logo`}
//                   className="h-12 w-auto object-contain md:h-16"
//                   loading="eager"
//                 />
//               </div>
//             </div>

//             <div className="hidden xl:block leading-tight">
//               <span className="block text-[10px] font-black uppercase tracking-[0.24em] text-[#6757B8]">
//                 Local Protection
//               </span>
//               <span className="block text-sm font-black text-zinc-950">
//                 {LOCAL.area} Pest Team
//               </span>
//             </div>
//           </Link>

//           {/* DESKTOP MENU */}
//           <div className="hidden md:flex items-center gap-9">
//             <ul className="m-0 flex list-none items-center gap-8 p-0 lg:gap-10">
//               {menuItems.map(([label, path]) => (
//                 <li key={path}>
//                   <NavLink to={path} className={navClass}>
//                     {({ isActive }) => (
//                       <>
//                         {label}
//                         <span
//                           className={`absolute -bottom-1 left-0 h-[3px] rounded-full bg-[#6757B8] transition-all duration-300 ${
//                             isActive ? "w-full" : "w-0 group-hover:w-full"
//                           }`}
//                         />
//                       </>
//                     )}
//                   </NavLink>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* DESKTOP CTA */}
//           <div className="hidden lg:flex items-center gap-4">
//             <div className="hidden xl:block text-right">
//               <p className="m-0 text-[10px] font-black uppercase tracking-[0.22em] text-zinc-500">
//                 Need pest help?
//               </p>
//               <p className="m-0 text-sm font-black text-zinc-950">
//                 Call {LOCAL.area} Team
//               </p>
//             </div>

//             <a
//               href={`tel:${LOCAL.phoneTel}`}
//               className="group relative overflow-hidden rounded-2xl bg-[#6757B8] px-6 py-4 text-sm font-black text-white shadow-xl shadow-[#6757B8]/25 transition-all hover:-translate-y-0.5 hover:bg-[#0E0B19]"
//             >
//               <span className="relative z-10 flex items-center gap-2">
//                 <Phone size={16} />
//                 {LOCAL.phoneDisplay}
//               </span>
//               <span className="absolute inset-y-0 -left-10 w-8 rotate-12 bg-white/25 transition-all duration-500 group-hover:left-[120%]" />
//             </a>
//           </div>

//           {/* MOBILE BUTTON */}
//           <button
//             onClick={() => setOpen((prev) => !prev)}
//             className="md:hidden flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0E0B19] text-white shadow-lg shadow-black/20 transition active:scale-95"
//             aria-label="Toggle navigation"
//           >
//             {open ? <X size={22} /> : <Menu size={24} />}
//           </button>
//         </div>

//         {/* MOBILE MENU */}
//         {open && (
//           <div className="absolute left-0 top-full w-full border-t border-[#6757B8]/10 bg-[#F4F1FF] shadow-2xl shadow-black/20 md:hidden">
//             <div className="space-y-3 p-5">
//               <div className="relative overflow-hidden rounded-[30px] bg-[#0E0B19] p-5 text-white">
//                 <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#6757B8]/40" />
//                 <div className="absolute bottom-0 left-0 h-24 w-24 rounded-tr-full bg-white/5" />

//                 <div className="relative z-10">
//                   <span className="block text-[10px] font-black uppercase tracking-[0.24em] text-[#B8AEFF]">
//                     {LOCAL.postcode} Pest Control Support
//                   </span>

//                   <span className="mt-2 block text-2xl font-black">
//                     {LOCAL.company}
//                   </span>

//                   <span className="mt-3 flex items-start gap-2 text-xs font-semibold leading-relaxed text-white/75">
//                     <MapPin size={15} className="mt-0.5 text-[#B8AEFF]" />
//                     {LOCAL.fullAddress}
//                   </span>
//                 </div>
//               </div>

//               {menuItems.map(([label, path]) => (
//                 <NavLink
//                   key={path}
//                   onClick={() => setOpen(false)}
//                   to={path}
//                   className={mobileNavClass}
//                 >
//                   {label}
//                   <span>→</span>
//                 </NavLink>
//               ))}

//               <a
//                 href={`tel:${LOCAL.phoneTel}`}
//                 className="flex items-center justify-center gap-2 rounded-2xl bg-[#6757B8] py-4 text-sm font-black uppercase tracking-widest text-white shadow-xl shadow-[#6757B8]/25"
//               >
//                 <Phone size={16} />
//                 Call Now: {LOCAL.phoneDisplay}
//               </a>
//             </div>
//           </div>
//         )}
//       </nav>
//     </header>
//   );
// }













// import React, { useEffect, useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import {
//   MapPin,
//   Menu,
//   X,
//   Sparkles,
//   ArrowRight,
// } from "lucide-react";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   const BRAND = {
//     company: "PULSE Digital Marketing Solution Limited",
//     shortName: "PULSE",
//     location: "London, UK",
//   };

//   useEffect(() => {
//     const onScroll = () => setIsScrolled(window.scrollY > 12);

//     onScroll();

//     window.addEventListener("scroll", onScroll, {
//       passive: true,
//     });

//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   const menuItems = [
//     ["Home", "/"],
//     ["Services", "/services"],
//     ["About", "/about"],
//     ["Contact", "/contact"],
//   ];

//   const navClass = ({ isActive }) =>
//     `group relative px-1 py-2 text-[13px] font-black uppercase tracking-[0.18em] transition-all duration-300 ${
//       isActive
//         ? "text-blue-400"
//         : "text-gray-300 hover:text-white"
//     }`;

//   const mobileNavClass = ({ isActive }) =>
//     `flex items-center justify-between rounded-2xl px-5 py-4 text-sm font-black uppercase tracking-[0.16em] transition-all ${
//       isActive
//         ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25"
//         : "bg-white/5 text-white ring-1 ring-white/10"
//     }`;

//   return (
//     <header
//       className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
//         isScrolled
//           ? "bg-[#050505]/90 shadow-2xl shadow-black/30 backdrop-blur-2xl"
//           : "bg-[#050505]"
//       }`}
//     >

//       {/* TOP STRIP */}
//       <div className="hidden lg:block bg-[#0B0B0F] border-b border-white/10">
//         <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-2">

//           <div className="flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.22em] text-white/60">
//             <Sparkles
//               size={15}
//               className="text-blue-400"
//             />

//             <span>
//               Creative Digital Growth Agency in{" "}
//               <span className="text-blue-400">
//                 {BRAND.location}
//               </span>
//             </span>
//           </div>


//           <div className="flex items-center gap-2 text-[11px] font-bold text-white/70">
//             <MapPin
//               size={14}
//               className="text-blue-400"
//             />

//             {BRAND.location}
//           </div>

//         </div>
//       </div>



//       {/* MAIN NAV */}
//       <nav className="border-b border-white/10">
//         <div className="mx-auto flex h-[86px] max-w-7xl items-center justify-between px-5 md:px-8 lg:px-10">


//           {/* LOGO */}
//           <Link
//             to="/"
//             onClick={() => setOpen(false)}
//             aria-label={`${BRAND.company} Home`}
//             className="flex items-center gap-3"
//           >

//             <div className="relative">
//               <div className="absolute -inset-2 rounded-[28px] bg-blue-600/20 blur-xl" />

//               <div className="relative flex items-center rounded-[24px] bg-white/5 px-4 py-2.5 shadow-xl shadow-blue-500/10 ring-1 ring-white/10">

//                 <img
//                   src="/images/pulse-logo.webp"
//                   alt="PULSE Digital Marketing Solution Limited Logo"
//                   className="h-12 w-auto object-contain md:h-16"
//                   loading="eager"
//                 />

//               </div>
//             </div>


//             <div className="hidden xl:block leading-tight">
//               <span className="block text-[10px] font-black uppercase tracking-[0.24em] text-blue-400">
//                 Digital Marketing
//               </span>

//               <span className="block text-sm font-black text-white">
//                 Solution Limited
//               </span>
//             </div>

//           </Link>



//           {/* DESKTOP LINKS */}
//           <div className="hidden md:flex items-center gap-9">

//             <ul className="flex items-center gap-8 lg:gap-10">

//               {menuItems.map(([label, path]) => (

//                 <li key={path}>

//                   <NavLink
//                     to={path}
//                     className={navClass}
//                   >

//                     {({ isActive }) => (
//                       <>
//                         {label}

//                         <span
//                           className={`absolute -bottom-1 left-0 h-[3px] rounded-full bg-blue-500 transition-all duration-300 ${
//                             isActive
//                               ? "w-full"
//                               : "w-0 group-hover:w-full"
//                           }`}
//                         />

//                       </>
//                     )}

//                   </NavLink>

//                 </li>

//               ))}

//             </ul>

//           </div>




//           {/* CTA */}
//           <div className="hidden lg:flex items-center gap-4">

//             <div className="hidden xl:block text-right">

//               <p className="m-0 text-[10px] font-black uppercase tracking-[0.22em] text-gray-500">
//                 Need digital growth?
//               </p>

//               <p className="m-0 text-sm font-black text-white">
//                 Start your project
//               </p>

//             </div>


//             <Link
//               to="/contact"
//               className="group relative overflow-hidden rounded-2xl bg-blue-600 px-6 py-4 text-sm font-black text-white shadow-xl shadow-blue-500/25 transition-all hover:-translate-y-0.5 hover:bg-blue-700"
//             >

//               <span className="relative z-10 flex items-center gap-2">
//                 Get Started
//                 <ArrowRight size={16}/>
//               </span>


//               <span className="absolute inset-y-0 -left-10 w-8 rotate-12 bg-white/25 transition-all duration-500 group-hover:left-[120%]" />


//             </Link>

//           </div>



//           {/* MOBILE BUTTON */}
//           <button
//             onClick={() => setOpen(!open)}
//             className="md:hidden flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white ring-1 ring-white/10"
//             aria-label="Toggle navigation"
//           >

//             {open ? <X/> : <Menu/>}

//           </button>


//         </div>




//         {/* MOBILE MENU */}
//         {open && (

//           <div className="absolute left-0 top-full w-full bg-[#050505] border-t border-white/10 md:hidden">

//             <div className="space-y-3 p-5">


//               <div className="rounded-[30px] bg-[#0B0B0F] p-5 ring-1 ring-white/10">

//                 <span className="text-[10px] uppercase tracking-[0.24em] text-blue-400 font-black">
//                   London Digital Growth Agency
//                 </span>


//                 <h3 className="mt-2 text-2xl font-black text-white">
//                   PULSE
//                 </h3>


//                 <p className="mt-3 flex gap-2 text-white/70 text-sm">

//                   <MapPin
//                     size={16}
//                     className="text-blue-400"
//                   />

//                   London, UK

//                 </p>


//               </div>




//               {menuItems.map(([label,path]) => (

//                 <NavLink
//                   key={path}
//                   to={path}
//                   onClick={() => setOpen(false)}
//                   className={mobileNavClass}
//                 >

//                   {label}

//                   <span>→</span>


//                 </NavLink>

//               ))}



//               <Link
//                 to="/contact"
//                 onClick={() => setOpen(false)}
//                 className="flex justify-center gap-2 rounded-2xl bg-blue-600 py-4 text-sm font-black uppercase tracking-widest text-white"
//               >

//                 Start Project

//                 <ArrowRight size={16}/>

//               </Link>



//             </div>

//           </div>

//         )}


//       </nav>

//     </header>
//   );
// }














import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  MapPin,
  Menu,
  X,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const BRAND = {
    company: "PULSE Digital Marketing Solution Limited",
    location: "London, UK",
  };

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);


  const menuItems = [
    ["Home", "/"],
    ["Services", "/services"],
    ["About", "/about"],
    ["Contact", "/contact-us"],
  ];


  const navClass = ({ isActive }) =>
    `group relative px-1 py-2 text-[13px] font-black uppercase tracking-[0.18em] transition-all duration-300 ${
      isActive
        ? "text-blue-400"
        : "text-gray-300 hover:text-white"
    }`;


  const mobileNavClass = ({ isActive }) =>
    `flex items-center justify-between rounded-2xl px-5 py-4 text-sm font-black uppercase tracking-[0.16em] transition-all ${
      isActive
        ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25"
        : "bg-white/5 text-white ring-1 ring-white/10"
    }`;


  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-[#050505]/90 shadow-2xl shadow-black/30 backdrop-blur-2xl"
          : "bg-[#050505]"
      }`}
    >


      {/* TOP BAR */}
      <div className="hidden lg:block bg-[#0B0B0F] border-b border-white/10">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-2">

          <div className="flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.22em] text-white/60">

            <Sparkles
              size={15}
              className="text-blue-400"
            />

            Creative Digital Growth Agency in

            <span className="text-blue-400">
              {BRAND.location}
            </span>

          </div>


          <div className="flex items-center gap-2 text-[11px] font-bold text-white/70">

            <MapPin
              size={14}
              className="text-blue-400"
            />

            {BRAND.location}

          </div>

        </div>

      </div>





      {/* MAIN NAV */}

      <nav className="border-b border-white/10">

        <div className="mx-auto flex h-[95px] max-w-7xl items-center justify-between px-5 md:px-8 lg:px-10">



          {/* LOGO */}

           {/* <Link
            to="/"
            onClick={() => setOpen(false)}
            className="flex items-center gap-4"
            aria-label={BRAND.company}
          >

            <div className="relative">

              <div className="absolute -inset-3 rounded-[30px] bg-blue-600/20 blur-xl" />


           

              <div className="
              relative
              flex
              h-[78px]
              w-[155px]
              items-center
              justify-center
              overflow-hidden
              rounded-[24px]
              bg-white
              shadow-xl
              shadow-blue-500/20
              ring-1
              ring-white/10
              ">


                <img
                  src="/images/pulse-logo.webp"
                  alt="PULSE Digital Marketing Solution Limited Logo"
                  className="
                  h-full
                  w-full
                  object-contain
                  scale-[1.8]
                  "
                  loading="eager"
                />


              </div>

            </div>


          </Link>  */}

<Link
  to="/"
  onClick={() => setOpen(false)}
  className="flex shrink-0 items-center"
  aria-label={BRAND.company}
>
  <div className="relative">
    {/* Glow */}
    <div className="absolute inset-0 bg-blue-600/15 blur-2xl rounded-full" />

    <img
      src="/images/pulse-logo.webp"
      alt="PULSE Digital Marketing Solution Limited"
      className="
        relative
        h-[220px]
        w-auto
        object-contain
        select-none
      "
      loading="eager"
      draggable={false}
    />
  </div>
</Link>




          {/* MENU */}

          <div className="hidden md:flex items-center">

            <ul className="flex items-center gap-10">

              {menuItems.map(([label,path])=>(

                <li key={path}>

                  <NavLink
                    to={path}
                    className={navClass}
                  >

                    {({isActive})=>(

                      <>

                      {label}


                      <span
                        className={`absolute -bottom-1 left-0 h-[3px] rounded-full bg-blue-500 transition-all ${
                          isActive
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                        }`}
                      />


                      </>

                    )}

                  </NavLink>

                </li>


              ))}


            </ul>


          </div>





          {/* CTA */}

          <div className="hidden lg:flex items-center gap-4">


            <div className="hidden xl:block text-right">

              <p className="text-[10px] font-black uppercase tracking-[0.22em] text-gray-500">

                Need digital growth?

              </p>


              <p className="text-sm font-black text-white">

                Start your project

              </p>


            </div>



            <Link
              to="/contact-us"
              className="
              group
              relative
              overflow-hidden
              rounded-2xl
              bg-blue-600
              px-6
              py-4
              text-sm
              font-black
              text-white
              shadow-xl
              shadow-blue-500/25
              transition
              hover:bg-blue-700
              "
            >

              <span className="flex items-center gap-2">

                Get Started

                <ArrowRight size={16}/>

              </span>


            </Link>


          </div>





          {/* MOBILE BUTTON */}

          <button
            onClick={()=>setOpen(!open)}
            className="
            md:hidden
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-2xl
            bg-white/10
            text-white
            "
          >

            {open ? <X/> : <Menu/>}

          </button>



        </div>





        {/* MOBILE MENU */}

        {open && (

          <div className="absolute left-0 top-full w-full bg-[#050505] border-t border-white/10 md:hidden">


            <div className="space-y-3 p-5">


              {menuItems.map(([label,path])=>(


                <NavLink
                  key={path}
                  to={path}
                  onClick={()=>setOpen(false)}
                  className={mobileNavClass}
                >

                  {label}

                  <span>→</span>


                </NavLink>


              ))}



              <Link
                to="/contact-us"
                onClick={()=>setOpen(false)}
                className="
                flex
                justify-center
                rounded-2xl
                bg-blue-600
                py-4
                font-black
                uppercase
                text-white
                "
              >

                Start Project


              </Link>


            </div>


          </div>


        )}



      </nav>


    </header>
  );
}