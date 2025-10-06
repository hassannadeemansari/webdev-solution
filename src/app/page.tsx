"use client";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import { useState, useEffect } from "react";
// import { Code, ShoppingCart, Megaphone, PenTool, Film, MonitorPlay, Brush } from "lucide-react";
// import { AnimatePresence } from "framer-motion";
// import { Menu, X } from "lucide-react";
// import { Palette, Smartphone, Globe, ArrowRight, ChevronRight } from 'lucide-react';



// const testimonials = [
//   {
//     name: "John Smith",
//     role: "CEO, TechCorp",
//     review:
//       "WebDevSolution transformed our online presence. Highly professional and reliable team!",
//   },
//   {
//     name: "Sophia Johnson",
//     role: "Marketing Head, Brandify",
//     review:
//       "Their digital marketing strategy boosted our sales by 150%. Truly outstanding service!",
//   },
//   {
//     name: "David Lee",
//     role: "Founder, StartupX",
//     review:
//       "We loved their web development services. Modern, scalable, and user-friendly design.",
//   },
//   {
//     name: "Emily Davis",
//     role: "Creative Director, MediaWorks",
//     review:
//       "Their video editing and animation work was beyond our expectations. Highly recommended!",
//   },
//   {
//     name: "Michael Brown",
//     role: "E-Commerce Owner",
//     review:
//       "The e-commerce management service saved us so much time. Sales skyrocketed!",
//   },
// ];



// const projects = [
//   {
//     title: "E-Commerce Website",
//     desc: "A modern online store with full cart & payment integration.",
//     // img: "/portfolio1.jpg",
//   },
//   {
//     title: "E-Commerce Website",
//     desc: "A modern online store with full cart & payment integration.",
//     // img: "/portfolio1.jpg",
//   },
//     {
//     title: "E-Commerce Website",
//     desc: "A modern online store with full cart & payment integration.",
//     // img: "/portfolio1.jpg",
//   },
//   {
//     title: "Digital Marketing Campaign",
//     desc: "SEO + Ads campaign that boosted client traffic by 200%.",
//     // img: "/portfolio2.jpg",
//   },
//   {
//     title: "3D Animation Showcase",
//     desc: "Engaging product animation for advertisements.",
//     // img: "/portfolio3.jpg",
//   },
//   {
//     title: "Corporate Branding",
//     desc: "Complete graphic design & brand identity package.",
//     // img: "/portfolio4.jpg",
//   },
// ];



// const services = [
//   {
//     title: "Web Development",
//     desc: "Modern, scalable websites & web apps built with latest technologies.",
//     icon: <Code size={32} />,
//   },
//   {
//     title: "E-Commerce Management",
//     desc: "Grow your online store with expert setup, scaling & optimization.",
//     icon: <ShoppingCart size={32} />,
//   },
//   {
//     title: "Digital Marketing",
//     desc: "SEO, Ads & Marketing strategies to boost your online presence.",
//     icon: <Megaphone size={32} />,
//   },
//   {
//     title: "Graphic Designing",
//     desc: "Creative designs that visually represent your brand identity.",
//     icon: <Brush size={32} />,
//   },
//   {
//     title: "2D / 3D Animation",
//     desc: "Engaging animations that bring your ideas & stories to life.",
//     icon: <MonitorPlay size={32} />,
//   },
//   {
//     title: "Video Editing",
//     desc: "Professional edits for ads, reels, and promotional content.",
//     icon: <Film size={32} />,
//   },
// ];

// export default function HeroSection() {


//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

//       const [isHovered, setIsHovered] = useState(false);


//   // Navbar scroll effect
//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Mouse light effect
//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) =>
//       setMousePos({ x: e.clientX, y: e.clientY });
//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   return (
//     <div>
//     <div className="relative min-h-screen bg-gradient-to-b from-black via-[#0a0f2c] to-[#0d1b4c] overflow-hidden">
//       {/* Background Grid */}
//       <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:50px_50px]" />

//       {/* Mouse highlight effect */}
//       <div
//         className="absolute inset-0 pointer-events-none transition-all duration-75 ease-linear"
//         style={{
//           background: `radial-gradient(200px at ${mousePos.x}px ${mousePos.y}px, rgba(0,123,255,0.25), transparent 70%)`,
//           mixBlendMode: "screen",
//         }}
//       />

//       {/* Dark overlay */}
//       <div className="absolute inset-0 bg-black/40" />

//       {/* ================= NAVBAR ================= */}
// <header
//   className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
//     isScrolled ? "bg-black/90 backdrop-blur-md shadow-lg" : "bg-transparent"
//   }`}
// >
//   <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 py-2 sm:py-3 flex justify-between items-center">
//     {/* Logo */}
//     <div className="flex items-center gap-1 sm:gap-2">
//       <Image
//         src="/logo.jpg"
//         alt="WebDevSolution Logo"
//         width={120}
//         height={120}
//         className="rounded-full w-8 h-8 sm:w-36 sm:h-36 md:w-36 md:h-36"
//       />
//       <motion.span
//         initial={{ opacity: 0, x: -10 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.4 }}
//         className="text-white text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-bold tracking-wide whitespace-nowrap"
//       >
//         WebDevSolution
//       </motion.span>
//     </div>

//     {/* Desktop Menu */}
//     <nav className="hidden md:flex gap-4 lg:gap-6 xl:gap-8 text-white font-medium">
//       {["Home", "Services", "Portfolio", "Contact"].map((item) => (
//         <motion.a
//           key={item}
//           href={`#${item.toLowerCase()}`}
//           whileHover={{ scale: 1.05, color: "#60A5FA" }}
//           whileTap={{ scale: 0.95 }}
//           transition={{ type: "spring", stiffness: 400, damping: 17 }}
//           className="relative group text-sm lg:text-base xl:text-lg px-2 py-1"
//         >
//           {item}
//           <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
//         </motion.a>
//       ))}
//     </nav>

//     {/* Mobile Menu Button */}
//     <button
//       onClick={() => setIsOpen(!isOpen)}
//       className="md:hidden text-white focus:outline-none p-1 rounded-lg hover:bg-white/10 transition-colors duration-200"
//       aria-label="Toggle menu"
//     >
//       {isOpen ? 
//         <X size={22} className="w-5 h-5 xs:w-6 xs:h-6" /> : 
//         <Menu size={22} className="w-5 h-5 xs:w-6 xs:h-6" />
//       }
//     </button>
//   </div>

//   {/* Mobile Dropdown */}
//   <AnimatePresence>
//     {isOpen && (
//       <motion.nav
//         initial={{ opacity: 0, height: 0 }}
//         animate={{ opacity: 1, height: "auto" }}
//         exit={{ opacity: 0, height: 0 }}
//         transition={{ duration: 0.3, ease: "easeInOut" }}
//         className="md:hidden bg-black/95 backdrop-blur-lg border-t border-white/10 overflow-hidden"
//       >
//         <ul className="flex flex-col items-center gap-4 py-4 xs:py-5 sm:py-6 text-white font-medium">
//           {["Home", "Services", "Portfolio", "Contact"].map((item, index) => (
//             <motion.li 
//               key={item}
//               initial={{ opacity: 0, y: -10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.1 }}
//               className="w-full text-center"
//             >
//               <a
//                 href={`#${item.toLowerCase()}`}
//                 onClick={() => setIsOpen(false)}
//                 className="block py-2 xs:py-3 text-base xs:text-lg sm:text-xl hover:text-blue-400 transition-colors duration-200 hover:bg-white/5"
//               >
//                 {item}
//               </a>
//             </motion.li>
//           ))}
//         </ul>
//       </motion.nav>
//     )}
//   </AnimatePresence>
// </header>

//       {/* ================= HERO SECTION ================= */}
//        {/* Hero Section */}
//       <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//             >
//               <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
//                 <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
//                   WebDev
//                 </span>
//                 <br />
//                 <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
//                   Solutions.
//                 </span>
//               </h1>
//               <motion.p
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.2, duration: 0.8 }}
//                 className="text-xl sm:text-2xl text-gray-300 mt-6 mb-8 font-light"
//               >
//                 YOUR PROBLEM WE CAN SOLVE TOGETHER
//               </motion.p>
//               <motion.p
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.4, duration: 0.8 }}
//                 className="text-gray-400 text-lg mb-8 leading-relaxed"
//               >
//                 Transforming ideas into digital reality since 2020. We create stunning, 
//                 high-performance websites and applications that drive results.
//               </motion.p>
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.6, duration: 0.8 }}
//                 className="flex flex-col sm:flex-row gap-4"
//               >
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="bg-gradient-to-r from-blue-500 to-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center gap-2"
//                 >
//                   Start Project <ArrowRight className="w-5 h-5" />
//                 </motion.button>
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="border border-gray-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-800/50 transition-all duration-300"
//                 >
//                   View Portfolio
//                 </motion.button>
//               </motion.div>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, x: 30 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               className="relative"
//             >
//               <div className="bg-gradient-to-br from-blue-500/10 to-cyan-400/10 rounded-2xl p-8 backdrop-blur-sm border border-gray-800">
//                 <div className="grid grid-cols-2 gap-4">
//                   {[1, 2, 3, 4].map((item) => (
//                     <motion.div
//                       key={item}
//                       whileHover={{ y: -5, scale: 1.02 }}
//                       className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-cyan-400/30 transition-all duration-300"
//                     >
//                       <div className="w-10 h-10 bg-cyan-400/20 rounded-lg flex items-center justify-center mb-3">
//                         <Code className="w-5 h-5 text-cyan-400" />
//                       </div>
//                       <h3 className="font-semibold text-white mb-2">Feature {item}</h3>
//                       <p className="text-gray-400 text-sm">Modern solution for your business</p>
//                     </motion.div>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//     </div>

//      <section
//       id="about"
//       className="relative min-h-screen bg-gradient-to-b from-[#070F2D] via-[#070F2D] to-[#060e2b] flex items-center"
//     >
//       <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
//         {/* Left Side - Our Story */}
//         <motion.div
//           initial={{ opacity: 0, x: -100 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
//             Our Story
//           </h2>
//           <p className="text-gray-300 leading-relaxed">
//             We started with a simple idea: to create meaningful digital solutions
//             that empower businesses and individuals. Over the years, our passion
//             for technology and design has helped us deliver impactful results.
//           </p>
//         </motion.div>

//         {/* Right Side - About Us */}
//         <motion.div
//           initial={{ opacity: 0, x: 100 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
//             About Us
//           </h2>
//           <p className="text-gray-300 leading-relaxed">
//             At WebDev Solution, we provide end-to-end digital and creative services designed to help businesses grow, scale, and stand out in today’s competitive world. Our team of experts delivers quality, innovation, and results with every project.

//           </p>
//         </motion.div>
//       </div>
//     </section>

//     <section
//       id="services"
//       className="relative min-h-screen bg-gradient-to-b from-[#060e2b] via-[#060e2b] to-[#030819] py-20 px-6"
//     >
//       <div className="container mx-auto text-center">
//         {/* Heading */}
//         <motion.h2
//           className="text-4xl md:text-5xl font-extrabold text-white mb-6"
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           Our <span className="text-blue-400">Services</span>
//         </motion.h2>
//         <motion.p
//           className="text-gray-300 text-lg max-w-2xl mx-auto mb-12"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//         >
//           We provide full-stack digital solutions to help your business grow and succeed.
//         </motion.p>

//         {/* Services Grid */}
//         <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
//           {services.map((service, index) => (
//             <motion.div
//               key={index}
//               className="group bg-[#0f1f3a] rounded-2xl p-8 shadow-lg border border-gray-800 hover:border-blue-500 transition relative overflow-hidden"
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               whileHover={{ scale: 1.05 }}
//             >
//               {/* Glow Effect */}
//               <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
              
//               {/* Icon */}
//               <div className="text-blue-400 mb-4">{service.icon}</div>
              
//               {/* Title */}
//               <h3 className="text-xl font-semibold text-white mb-3">
//                 {service.title}
//               </h3>
              
//               {/* Description */}
//               <p className="text-gray-400 text-sm leading-relaxed">
//                 {service.desc}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>

//     <section id="whyus" className="bg-gradient-to-b from-[#070F2D] to-black py-20 text-white">
//   <div className="container mx-auto text-center mb-14">
//     <h2 className="text-4xl font-bold mb-4">Why Choose <span className="text-blue-400">Us?</span></h2>
//     <p className="text-gray-400">We combine innovation, creativity, and technology for your success.</p>
//   </div>

//   <div className="grid md:grid-cols-4 gap-8 container mx-auto">
//     {[
//       { title: "Expert Team", desc: "A skilled team of developers, designers, and marketers." },
//       { title: "Latest Tech", desc: "We use the newest and most efficient technologies." },
//       { title: "Fast Delivery", desc: "On-time project completion with premium quality." },
//       { title: "24/7 Support", desc: "Our experts are available around the clock." },
//     ].map((item, i) => (
//       <motion.div
//         key={i}
//         className="p-8 bg-[#0f1f3a]/50 border border-gray-800 rounded-3xl hover:border-blue-400 transition"
//         whileHover={{ y: -10 }}
//       >
//         <h3 className="text-2xl font-semibold mb-3 text-blue-400">{item.title}</h3>
//         <p className="text-gray-300">{item.desc}</p>
//       </motion.div>
//     ))}
//   </div>
// </section>


// <section id="process" className="bg-gradient-to-b from-[#030819] via-[#030819] to-[#010207] py-20 px-6 text-center">
//   <h2 className="text-4xl font-bold text-white mb-12">Our <span className="text-blue-400">Process</span></h2>
//   <div className="grid md:grid-cols-4 gap-10 container mx-auto">
//     {[
//       { step: "1", title: "Research", desc: "We understand your goals and analyze your audience." },
//       { step: "2", title: "Design", desc: "We craft beautiful and user-friendly designs." },
//       { step: "3", title: "Develop", desc: "We bring ideas to life using modern technology." },
//       { step: "4", title: "Launch", desc: "We test, deploy, and maintain for long-term success." },
//     ].map((item, i) => (
//       <motion.div
//         key={i}
//         className="bg-[#0f1f3a]/50 border border-gray-800 rounded-3xl p-8 hover:border-blue-400 transition"
//         whileHover={{ y: -8 }}
//       >
//         <div className="text-5xl font-bold text-blue-400 mb-3">{item.step}</div>
//         <h3 className="text-2xl text-white mb-2">{item.title}</h3>
//         <p className="text-gray-400">{item.desc}</p>
//       </motion.div>
//     ))}
//   </div>
// </section>





//     <section
//       id="portfolio"
//       className="relative min-h-screen bg-gradient-to-b from-[#030819] via-[#030819] to-[#010207] py-20 px-6"
//     >
//       <div className="container mx-auto text-center">
//         {/* Heading */}
//         <motion.h2
//           className="text-4xl md:text-5xl font-extrabold text-white mb-6"
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           Our <span className="text-blue-400">Portfolio</span>
//         </motion.h2>
//         <motion.p
//           className="text-gray-300 text-lg max-w-2xl mx-auto mb-12"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//         >
//           A glimpse of our work across web, design, media, and animation — turning ideas into reality.
//         </motion.p>

//         {/* Portfolio Grid */}
//         <div className="grid md:grid-cols-2 gap-10">
//           {projects.map((project, index) => (
//             <motion.div
//               key={index}
//               className="group relative rounded-2xl overflow-hidden shadow-lg border border-gray-800 hover:border-blue-500 transition-all duration-500"
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.7, delay: index * 0.2 }}
//               whileHover={{ scale: 1.05 }}
//             >
//               {/* Project Image */}
//               {/* <Image
//                 src={project.img}
//                 alt={project.title}
//                 width={600}
//                 height={400}
//                 className="w-full h-72 object-cover group-hover:scale-110 transition duration-700"
//               /> */}

//               {/* Overlay on Hover */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-end p-6">
//                 <h3 className="text-2xl font-bold text-white mb-2">
//                   {project.title}
//                 </h3>
//                 <p className="text-gray-300 text-sm">{project.desc}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>


//     <section
//       id="testimonials"
//       className="relative bg-gradient-to-b from-[#010207] via-[#010207] to-black py-20 overflow-hidden"
//     >
//       <div className="container mx-auto text-center mb-12 px-6">
//         <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
//           What <span className="text-blue-400">Clients Say</span>
//         </h2>
//         <p className="text-gray-300 text-lg max-w-2xl mx-auto">
//           Don’t just take our word for it — here’s what our clients think about us.
//         </p>
//       </div>

//       {/* Continuous Infinite Slider */}
//       <div
//         className="relative flex overflow-hidden"
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//       >
//         <motion.div
//           className="flex gap-6 px-6"
//           animate={{
//             x: isHovered ? 0 : ["0%", "-100%"],
//           }}
//           transition={{
//             x: {
//               repeat: Infinity,
//               repeatType: "loop",
//               ease: "linear",
//               duration: 40, // slower speed for smoothness
//             },
//           }}
//         >
//           {/* Duplicate list for seamless infinite loop */}
//           {[...testimonials, ...testimonials, ...testimonials].map((t, index) => (
//             <div
//               key={index}
//               className="min-w-[320px] md:min-w-[400px] bg-[#0f1f3a] p-6 rounded-2xl shadow-lg border border-gray-800 hover:border-blue-500 transition"
//             >
//               <p className="text-gray-300 mb-4 italic">"{t.review}"</p>
//               <h4 className="text-white font-semibold">{t.name}</h4>
//               <span className="text-blue-400 text-sm">{t.role}</span>
//             </div>
//           ))}
//         </motion.div>
//       </div>
//     </section>


//     {/* CONTACT SECTION */}
// <section
//   id="contact"
//   className="relative bg-gradient-to-b from-black via-[#050A1F] to-[#070F2D] py-20 px-6 overflow-hidden"
// >
//   <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,123,255,0.1),transparent_50%)]" />
//   <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(0,123,255,0.08),transparent_50%)]" />

//   <div className="relative z-10 container mx-auto text-center mb-12">
//     <motion.h2
//       className="text-4xl md:text-5xl font-extrabold text-white mb-4"
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8 }}
//     >
//       Get In <span className="text-blue-400">Touch</span>
//     </motion.h2>
//     <motion.p
//       className="text-gray-300 text-lg max-w-2xl mx-auto"
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8, delay: 0.2 }}
//     >
//       Have a project in mind? Let's talk about how we can build something great together.
//     </motion.p>
//   </div>

//   {/* Contact Form */}
//   <motion.form
//     initial={{ opacity: 0, y: 50 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     transition={{ duration: 0.8 }}
//     className="relative z-10 container mx-auto max-w-3xl bg-[#0f1f3a]/60 border border-gray-800 rounded-3xl p-8 shadow-2xl backdrop-blur-md"
//   >
//     <div className="grid md:grid-cols-2 gap-6 mb-6">
//       <input
//         type="text"
//         placeholder="Your Name"
//         className="w-full p-4 bg-transparent border border-gray-700 text-white rounded-xl focus:border-blue-500 outline-none transition"
//         required
//       />
//       <input
//         type="email"
//         placeholder="Your Email"
//         className="w-full p-4 bg-transparent border border-gray-700 text-white rounded-xl focus:border-blue-500 outline-none transition"
//         required
//       />
//     </div>
//     <textarea
//       placeholder="Your Message"
//       className="w-full p-4 bg-transparent border border-gray-700 text-white rounded-xl h-40 focus:border-blue-500 outline-none transition mb-6"
//       required
//     />
//     <motion.button
//       whileHover={{ scale: 1.05 }}
//       whileTap={{ scale: 0.95 }}
//       type="submit"
//       className="w-full py-4 bg-blue-500 text-white font-semibold rounded-full shadow-lg hover:bg-blue-600 transition"
//     >
//       Send Message
//     </motion.button>
//   </motion.form>
// </section>

// {/* FOOTER SECTION */}
// <footer className="relative bg-gradient-to-b from-[#070F2D] to-black py-14 px-6 border-t border-gray-800">
//   <div className="container mx-auto grid md:grid-cols-3 gap-10 text-gray-400">
//     {/* Company Info */}
//     <div>
//       <div className="flex items-center gap-3 mb-4">
//         <Image src="/logo.png" alt="WebDevSolution" width={40} height={40} />
//         <span className="text-white text-xl font-bold">WebDevSolution</span>
//       </div>
//       <p className="text-gray-400">
//         Building smart, scalable, and creative digital solutions that transform brands and businesses worldwide.
//       </p>
//     </div>

//     {/* Quick Links */}
//     <div>
//       <h3 className="text-white font-semibold mb-4">Quick Links</h3>
//       <ul className="space-y-2">
//         <li><a href="#home" className="hover:text-blue-400 transition">Home</a></li>
//         <li><a href="#services" className="hover:text-blue-400 transition">Services</a></li>
//         <li><a href="#portfolio" className="hover:text-blue-400 transition">Portfolio</a></li>
//         <li><a href="#contact" className="hover:text-blue-400 transition">Contact</a></li>
//       </ul>
//     </div>

//     {/* Contact Info */}
//     <div>
//       <h3 className="text-white font-semibold mb-4">Contact Info</h3>
//       <p>Email: <span className="text-blue-400">info@webdevsolution.com</span></p>
//       <p>Phone: <span className="text-blue-400">+92 300 1234567</span></p>
//       <div className="flex gap-4 mt-4">
//         <a href="#" className="text-gray-400 hover:text-blue-400 transition">
//           <i className="fab fa-facebook-f"></i>
//         </a>
//         <a href="#" className="text-gray-400 hover:text-blue-400 transition">
//           <i className="fab fa-twitter"></i>
//         </a>
//         <a href="#" className="text-gray-400 hover:text-blue-400 transition">
//           <i className="fab fa-linkedin-in"></i>
//         </a>
//         <a href="#" className="text-gray-400 hover:text-blue-400 transition">
//           <i className="fab fa-instagram"></i>
//         </a>
//       </div>
//     </div>
//   </div>

//   {/* Bottom Line */}
//   <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-800 pt-6">
//     © {new Date().getFullYear()} WebDevSolution. All Rights Reserved.
//   </div>
// </footer>


//     </div>
//   );
// }






























import { useState, useEffect , useRef} from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Target, Award, Heart, Rocket, Shield, Star, Quote, Play, Pause, Menu, X, Code, Palette, Smartphone, Globe, ArrowRight, ChevronRight , ShoppingCart, Megaphone, Brush, MonitorPlay, Film, Contact } from 'lucide-react';
import Link from 'next/link';

export default function WebDevSolution() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeService, setActiveService] = useState(0);
 const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [targetPos, setTargetPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setTargetPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);

    let animationFrame: number;
    const smoothFollow = () => {
      setMousePos((prev) => ({
        x: prev.x + (targetPos.x - prev.x) * 0.1, // smoothing factor (0.1 = smoother)
        y: prev.y + (targetPos.y - prev.y) * 0.1,
      }));
      animationFrame = requestAnimationFrame(smoothFollow);
    };
    smoothFollow();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, [targetPos]);

  const services = [
   {
    icon: <Code className="w-8 h-8" />,
    title: "Web Development",
    description: "Modern, scalable websites & web apps built with the latest technologies.",
    features: ["Next.js / React", "Responsive Design", "SEO Optimization"],
  },
  {
    icon: <ShoppingCart className="w-8 h-8" />,
    title: "E-Commerce Management",
    description: "Grow your online store with expert setup, scaling, and optimization.",
    features: ["Shopify / WooCommerce", "Product Management", "Conversion Strategy"],
  },
  {
    icon: <Megaphone className="w-8 h-8" />,
    title: "Digital Marketing",
    description: "Boost your brand visibility through effective marketing strategies.",
    features: ["SEO & SEM", "Google / Meta Ads", "Social Media Growth"],
  },
  {
    icon: <Brush className="w-8 h-8" />,
    title: "Graphic Designing",
    description: "Creative visuals that define and enhance your brand identity.",
    features: ["Logos & Branding", "Posters / Flyers", "Social Media Graphics"],
  },
  {
    icon: <MonitorPlay className="w-8 h-8" />,
    title: "2D / 3D Animation",
    description: "Engaging animations that bring your stories and concepts to life.",
    features: ["Explainer Videos", "Character Animation", "3D Motion Graphics"],
  },
  {
    icon: <Film className="w-8 h-8" />,
    title: "Video Editing",
    description: "Professional edits for ads, reels, and promotional content.",
    features: ["Cinematic Edits", "Color Grading", "Motion Transitions"],
  },
  ];

  const portfolioItems = [
     {
    title: "E-Commerce Platform",
    category: "Web Development",
    image: "/api/placeholder/400/300",
    description: "Full-stack online store with cart, checkout, and payment integration."
  },
  {
    title: "Fitness Mobile App",
    category: "Mobile Development",
    image: "/api/placeholder/400/300",
    description: "Cross-platform app for tracking workouts, goals, and nutrition."
  },
  {
    title: "Corporate Website",
    category: "Web Design",
    image: "/api/placeholder/400/300",
    description: "Professional company site with CMS and responsive design."
  },
  {
    title: "Digital Marketing Campaign",
    category: "Marketing",
    image: "/api/placeholder/400/300",
    description: "SEO, SEM, and social media strategy that increased traffic by 200%."
  },
  {
    title: "3D Product Animation",
    category: "3D Animation",
    image: "/api/placeholder/400/300",
    description: "High-quality product animations for advertisements and branding."
  },
  {
    title: "Social Media Branding",
    category: "Graphic Design",
    image: "/api/placeholder/400/300",
    description: "Visual branding package for Instagram, Facebook, and LinkedIn."
  },
  {
    title: "Portfolio Website",
    category: "Web Development",
    image: "/api/placeholder/400/300",
    description: "Animated personal portfolio with smooth transitions and dark mode."
  },
  {
    title: "Restaurant Ordering App",
    category: "Mobile Development",
    image: "/api/placeholder/400/300",
    description: "Online food ordering app with live order tracking and delivery updates."
  },
  {
    title: "E-Learning Dashboard",
    category: "Web Application",
    image: "/api/placeholder/400/300",
    description: "Interactive learning platform with quizzes, progress tracking, and courses."
  },
  {
    title: "Video Editing Showcase",
    category: "Video Editing",
    image: "/api/placeholder/400/300",
    description: "Dynamic promotional videos and reels for digital marketing."
  },
  {
    title: "Logo & Brand Identity",
    category: "Graphic Design",
    image: "/api/placeholder/400/300",
    description: "Complete logo, typography, and color palette for startups."
  },
  {
    title: "AI Chatbot Assistant",
    category: "AI Development",
    image: "/api/placeholder/400/300",
    description: "Smart chatbot for customer support using OpenAI integration."
  }
  ];



const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc",
      review: "WebDev Solutions transformed our online presence completely. Their attention to detail and technical expertise exceeded our expectations.",
      rating: 5,
      avatar: "/api/placeholder/60/60"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Marketing Director",
      review: "Outstanding work! The team delivered our project ahead of schedule and the results have been phenomenal for our business growth.",
      rating: 5,
      avatar: "/api/placeholder/60/60"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Founder, CreativeStudio",
      review: "Professional, creative, and highly skilled. They understood our vision perfectly and brought it to life better than we imagined.",
      rating: 5,
      avatar: "/api/placeholder/60/60"
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Product Manager",
      review: "The mobile app they developed has received incredible feedback from our users. Performance and design are exceptional.",
      rating: 5,
      avatar: "/api/placeholder/60/60"
    },
    {
      id: 5,
      name: "Lisa Wang",
      role: "E-commerce Director",
      review: "Our conversion rates increased by 40% after launching the new website. Absolutely thrilled with the results!",
      rating: 5,
      avatar: "/api/placeholder/60/60"
    },
    {
      id: 6,
      name: "James Wilson",
      role: "Startup Founder",
      review: "From concept to launch, the team was incredibly supportive and delivered beyond our expectations. Highly recommended!",
      rating: 5,
      avatar: "/api/placeholder/60/60"
    }
  ];



  // Auto-play/pause functionality
  useEffect(() => {
    if (!isPlaying) {
      setIsHovered(true);
    } else {
      setIsHovered(false);
    }
  }, [isPlaying]);

  // Define the type for StarRating props
  interface StarRatingProps {
    rating: number;
  }

  const StarRating = ({ rating }: StarRatingProps) => {
    return (
      <div className="flex justify-center gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className={i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-600"}
          />
        ))}
      </div>
    );
  };




const stats = [
    { icon: <Globe className="w-6 h-6" />, number: "50+", label: "Projects Completed" },
    { icon: <Users className="w-6 h-6" />, number: "30+", label: "Happy Clients" },
    { icon: <Award className="w-6 h-6" />, number: "4.9", label: "Average Rating" },
    { icon: <Rocket className="w-6 h-6" />, number: "2020", label: "Since" }
  ];

  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Passion Driven",
      description: "We pour our heart into every project, ensuring each solution is crafted with care and dedication."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Goal Oriented",
      description: "Every project starts with clear objectives and ends with measurable success and client satisfaction."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Reliable & Secure",
      description: "We build robust, secure solutions that stand the test of time and protect your digital assets."
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Innovation First",
      description: "Staying ahead of technology trends to deliver cutting-edge solutions that give you a competitive edge."
    }
  ];

  const team = [
    {
      name: "hasnain",
      role: "Lead Developer",
      expertise: "Full-Stack & AI",
      experience: "8+ years"
    },
    {
      name: "hassan",
      role: "UI/UX Designer",
      expertise: "Product Design",
      experience: "6+ years"
    },
    {
      name: "iughjhjhy",
      role: "Project Manager",
      expertise: "Agile Development",
      experience: "7+ years"
    },
    {
      name: "Emily Watson",
      role: "DevOps Engineer",
      expertise: "Cloud Infrastructure",
      experience: "5+ years"
    }
  ];






  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Header */}
           <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:50px_50px]" />
           

           {/* Mouse highlight effect */}
    <div
      className="absolute inset-0 pointer-events-none transition-all ease-out duration-200"
      style={{
        background: `radial-gradient(200px at ${mousePos.x}px ${mousePos.y}px, rgba(0,123,255,0.25), transparent 70%)`,
        mixBlendMode: "screen",
      }}
    />

              {/* Dark overlay */}
       {/* <div className="absolute inset-0 bg-black/40" /> */}
    
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-gray-900/95 backdrop-blur-md shadow-xl" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          {/* Logo */}
          <motion.div 
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
              <Code className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                WebDev Solutions
              </span>
              <span className="text-xs text-gray-400">SINCE 2020</span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {["Home", "Services", "Portfolio", "Contact"].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                whileHover={{ y: -2, color: "#60A5FA" }}
                transition={{ type: "spring", stiffness: 400 }}
                className="text-gray-300 hover:text-white font-medium transition-colors duration-200"
              >
                {item}
              </motion.a>
            ))}
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-blue-500 to-cyan-400 px-6 py-2 rounded-lg font-semibold shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
        >
          Get Started
        </motion.a>

          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors duration-200"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-gray-900/95 backdrop-blur-lg border-t border-gray-800"
            >
              <div className="px-4 py-6 space-y-4">
                {["Home", "Services", "Portfolio", "Contact"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setIsOpen(false)}
                    className="block py-3 text-lg font-medium text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </a>
                ))}
                <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 py-3 rounded-lg font-semibold mt-4">
                  Get Started
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  WebDev
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Solutions.
                </span>
              </h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-xl sm:text-2xl text-gray-300 mt-6 mb-8 font-light"
              >
                YOUR PROBLEM WE CAN SOLVE TOGETHER
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-gray-400 text-lg mb-8 leading-relaxed"
              >
                Transforming ideas into digital reality since 2020. We create stunning, 
                high-performance websites and applications that drive results.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-500 to-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Start Project <ArrowRight className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-gray-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-800/50 transition-all duration-300"
                >
                  View Portfolio
                </motion.button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-500/10 to-cyan-400/10 rounded-2xl p-8 backdrop-blur-sm border border-gray-800">
                <div className="grid grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map((item) => (
                    <motion.div
                      key={item}
                      whileHover={{ y: -5, scale: 1.02 }}
                      className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-cyan-400/30 transition-all duration-300"
                    >
                      <div className="w-10 h-10 bg-cyan-400/20 rounded-lg flex items-center justify-center mb-3">
                        <Code className="w-5 h-5 text-cyan-400" />
                      </div>
                      <h3 className="font-semibold text-white mb-2">Feature {item}</h3>
                      <p className="text-gray-400 text-sm">Modern solution for your business</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>





       <section
      id="about"
      className="relative bg-gradient-to-b from-[#010207] via-[#0a1128] to-[#010207] py-24 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">WebDev Solutions</span>
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Since 2020, we've been transforming ideas into digital reality. Our passion for innovation 
            and commitment to excellence has helped businesses worldwide achieve their digital goals.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center p-6 bg-blue-900/20 rounded-2xl border border-blue-500/20 backdrop-blur-sm hover:border-blue-400/40 transition-all duration-300 group"
            >
              <div className="flex justify-center mb-3">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
              </div>
              <div className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300 text-sm md:text-base">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Our Story & Values */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Our Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our <span className="text-blue-400">Story</span>
            </h3>
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                Founded in 2020, WebDev Solutions began as a small team of passionate developers 
                with a shared vision: to create digital solutions that make a real difference.
              </p>
              <p className="text-gray-300 leading-relaxed">
                What started as a humble startup has grown into a trusted partner for businesses 
                worldwide, delivering innovative web and mobile solutions that drive growth and 
                transform digital experiences.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Our journey is built on a foundation of technical excellence, creative innovation, 
                and unwavering commitment to our clients' success.
              </p>
            </div>
            
            {/* Mission & Vision */}
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-blue-900/20 p-6 rounded-2xl border border-blue-500/20 backdrop-blur-sm">
                <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  <Target className="w-5 h-5 text-blue-400" />
                  Our Mission
                </h4>
                <p className="text-gray-300 text-sm">
                  To empower businesses with cutting-edge digital solutions that drive growth, 
                  enhance user experiences, and create lasting value.
                </p>
              </div>
              <div className="bg-blue-900/20 p-6 rounded-2xl border border-blue-500/20 backdrop-blur-sm">
                <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  <Rocket className="w-5 h-5 text-cyan-400" />
                  Our Vision
                </h4>
                <p className="text-gray-300 text-sm">
                  To be the leading digital solutions provider, recognized for innovation, 
                  reliability, and transformative impact on businesses worldwide.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Our Values */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Our <span className="text-cyan-400">Values</span>
            </h3>
            <div className="grid gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex gap-4 p-6 bg-blue-900/20 rounded-2xl border border-blue-500/20 backdrop-blur-sm hover:border-blue-400/40 transition-all duration-300 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">{value.title}</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Expert Team</span>
          </h3>
          <p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto">
            Our diverse team of specialists brings together decades of experience in development, 
            design, and digital strategy to deliver exceptional results.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-blue-900/20 p-6 rounded-2xl border border-blue-500/20 backdrop-blur-sm hover:border-blue-400/40 transition-all duration-300 group text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h4 className="text-white font-bold text-lg mb-1">{member.name}</h4>
                <p className="text-blue-300 text-sm mb-2">{member.role}</p>
                <p className="text-gray-400 text-xs mb-1">{member.expertise}</p>
                <p className="text-cyan-400 text-xs font-semibold">{member.experience}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-500/10 to-cyan-400/10 rounded-2xl p-8 border border-blue-500/20 backdrop-blur-sm">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join dozens of satisfied clients who have transformed their business with our digital solutions.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
            >
              Let's Build Together
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>








      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-gray-800/30 rounded-xl p-6 border border-gray-700 hover:border-cyan-400/30 transition-all duration-300 group cursor-pointer"
                onMouseEnter={() => setActiveService(index)}
              >
                <div className="w-12 h-12 bg-cyan-400/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-cyan-400/30 transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                      <ChevronRight className="w-4 h-4 text-cyan-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
              Our Portfolio
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              See how we've helped businesses transform their digital presence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gray-800/30 rounded-xl overflow-hidden border border-gray-700 hover:border-cyan-400/30 transition-all duration-300 group"
              >
                <div className="h-48 bg-gradient-to-br from-blue-500/20 to-cyan-400/20 flex items-center justify-center">
                  <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center">
                    <Code className="w-8 h-8 text-cyan-400" />
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-cyan-400 text-sm font-medium">{item.category}</span>
                  <h3 className="text-xl font-semibold text-white mt-2 mb-3">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                  <button className="mt-4 text-cyan-400 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                    View Case Study <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



       <section
      id="testimonials"
      className="relative bg-gradient-to-b from-[#010207] via-[#0a1128] to-[#010207] py-24 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
            What <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Clients Say</span>
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Don't just take our word for it — here's what our amazing clients think about working with us.
          </p>
        </motion.div>

        {/* Controls */}
        <div className="flex justify-center mb-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex items-center gap-2 px-6 py-3 bg-blue-600/20 border border-blue-500/30 rounded-full text-white hover:bg-blue-600/30 transition-all duration-300 backdrop-blur-sm"
          >
            {isPlaying ? <Pause size={18} /> : <Play size={18} />}
            {isPlaying ? "Pause" : "Play"} Testimonials
          </motion.button>
        </div>

        {/* Continuous Infinite Slider */}
        <div
          ref={containerRef}
          className="relative flex overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div
            className="flex gap-6 py-4"
            animate={{
              x: isHovered ? 0 : ["0%", "-50%"],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
                duration: 40,
              },
            }}
          >
            {/* Duplicate testimonials for seamless loop */}
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <motion.div
                key={`${testimonial.id}-${index}`}
                whileHover={{ y: -5, scale: 1.02 }}
                className="flex-shrink-0 w-80 md:w-96 bg-gradient-to-br from-slate-900/80 to-blue-900/20 p-6 rounded-2xl shadow-2xl border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 backdrop-blur-sm group relative overflow-hidden"
              >
                {/* Quote Icon */}
                <div className="absolute -top-4 -right-4 w-20 h-20 text-blue-500/10 group-hover:text-blue-500/20 transition-colors duration-300">
                  <Quote size={80} />
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Rating */}
                  <StarRating rating={testimonial.rating} />

                  {/* Review Text */}
                  <p className="text-gray-200 mb-6 text-sm md:text-base leading-relaxed italic">
                    "{testimonial.review}"
                  </p>

                  {/* Client Info */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-white font-semibold text-sm md:text-base truncate">
                        {testimonial.name}
                      </h4>
                      <span className="text-blue-300 text-xs md:text-sm truncate block">
                        {testimonial.role}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          {[
            { number: "50+", label: "Happy Clients" },
            { number: "100+", label: "Projects Completed" },
            { number: "4.9/5", label: "Average Rating" },
            { number: "24/7", label: "Support" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-blue-900/20 rounded-2xl border border-blue-500/20 backdrop-blur-sm hover:border-blue-400/40 transition-all duration-300"
            >
              <div className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300 text-sm md:text-base">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Join Our Happy Clients?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's create something amazing together. Your success story could be next!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
          >
            Start Your Project Today
          </motion.button>
        </motion.div>
      </div>
    </section>



      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
              Let's Solve Together
            </h2>
            <p className="text-xl text-gray-400">
              Ready to transform your ideas into digital reality?
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gray-800/30 rounded-2xl p-8 border border-gray-700"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Project Details</label>
                <textarea 
                  rows={5}
                  className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors duration-300"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
                  <Code className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="text-xl font-bold text-white">WebDev Solutions</span>
                  <p className="text-gray-400 text-sm">SINCE 2020</p>
                </div>
              </div>
              <p className="text-gray-400 max-w-md">
                Transforming ideas into digital reality. Your problem, we can solve together.
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {["Home", "Services", "Portfolio", "Contact"].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">LinkedIn</a></li>
                <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">GitHub</a></li>
                <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">Twitter</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 WebDev Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

