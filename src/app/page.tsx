"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Code, ShoppingCart, Megaphone, PenTool, Film, MonitorPlay, Brush } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";


const testimonials = [
  {
    name: "John Smith",
    role: "CEO, TechCorp",
    review:
      "WebDevSolution transformed our online presence. Highly professional and reliable team!",
  },
  {
    name: "Sophia Johnson",
    role: "Marketing Head, Brandify",
    review:
      "Their digital marketing strategy boosted our sales by 150%. Truly outstanding service!",
  },
  {
    name: "David Lee",
    role: "Founder, StartupX",
    review:
      "We loved their web development services. Modern, scalable, and user-friendly design.",
  },
  {
    name: "Emily Davis",
    role: "Creative Director, MediaWorks",
    review:
      "Their video editing and animation work was beyond our expectations. Highly recommended!",
  },
  {
    name: "Michael Brown",
    role: "E-Commerce Owner",
    review:
      "The e-commerce management service saved us so much time. Sales skyrocketed!",
  },
];



const projects = [
  {
    title: "E-Commerce Website",
    desc: "A modern online store with full cart & payment integration.",
    // img: "/portfolio1.jpg",
  },
  {
    title: "E-Commerce Website",
    desc: "A modern online store with full cart & payment integration.",
    // img: "/portfolio1.jpg",
  },
    {
    title: "E-Commerce Website",
    desc: "A modern online store with full cart & payment integration.",
    // img: "/portfolio1.jpg",
  },
  {
    title: "Digital Marketing Campaign",
    desc: "SEO + Ads campaign that boosted client traffic by 200%.",
    // img: "/portfolio2.jpg",
  },
  {
    title: "3D Animation Showcase",
    desc: "Engaging product animation for advertisements.",
    // img: "/portfolio3.jpg",
  },
  {
    title: "Corporate Branding",
    desc: "Complete graphic design & brand identity package.",
    // img: "/portfolio4.jpg",
  },
];



const services = [
  {
    title: "Web Development",
    desc: "Modern, scalable websites & web apps built with latest technologies.",
    icon: <Code size={32} />,
  },
  {
    title: "E-Commerce Management",
    desc: "Grow your online store with expert setup, scaling & optimization.",
    icon: <ShoppingCart size={32} />,
  },
  {
    title: "Digital Marketing",
    desc: "SEO, Ads & Marketing strategies to boost your online presence.",
    icon: <Megaphone size={32} />,
  },
  {
    title: "Graphic Designing",
    desc: "Creative designs that visually represent your brand identity.",
    icon: <Brush size={32} />,
  },
  {
    title: "2D / 3D Animation",
    desc: "Engaging animations that bring your ideas & stories to life.",
    icon: <MonitorPlay size={32} />,
  },
  {
    title: "Video Editing",
    desc: "Professional edits for ads, reels, and promotional content.",
    icon: <Film size={32} />,
  },
];

export default function HeroSection() {


  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

      const [isHovered, setIsHovered] = useState(false);


  // Navbar scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mouse light effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) =>
      setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div>
    <div className="relative min-h-screen bg-gradient-to-b from-black via-[#0a0f2c] to-[#0d1b4c] overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Mouse highlight effect */}
      <div
        className="absolute inset-0 pointer-events-none transition-all duration-75 ease-linear"
        style={{
          background: `radial-gradient(200px at ${mousePos.x}px ${mousePos.y}px, rgba(0,123,255,0.25), transparent 70%)`,
          mixBlendMode: "screen",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* ================= NAVBAR ================= */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-black/80 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-3 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="WebDevSolution Logo"
              width={38}
              height={38}
              className="rounded-full"
            />
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="text-white text-lg sm:text-xl md:text-2xl font-bold tracking-wide"
            >
              WebDevSolution
            </motion.span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-6 lg:gap-10 text-white font-medium">
            {["Home", "Services", "Portfolio", "Contact"].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                whileHover={{ scale: 1.1, color: "#60A5FA" }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative group text-base lg:text-lg"
              >
                {item}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white focus:outline-none"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-black/95 backdrop-blur-lg border-t border-white/10"
            >
              <ul className="flex flex-col items-center gap-6 py-6 text-white font-medium text-lg">
                {["Home", "Services", "Portfolio", "Contact"].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      onClick={() => setIsOpen(false)}
                      className="hover:text-blue-400 transition"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      {/* ================= HERO SECTION ================= */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center h-screen px-6 sm:px-8">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white mb-4 leading-tight"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Building Smart <br className="hidden sm:block" /> Digital Solutions
        </motion.h1>

        <motion.p
          className="text-gray-300 text-base sm:text-lg md:text-xl max-w-xl md:max-w-2xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          From websites to design & media, we help your business grow and stand
          out in the digital world.
        </motion.p>

        <motion.a
          href="#contact"
          className="px-6 py-3 sm:px-8 sm:py-4 bg-blue-500 text-white font-medium rounded-full shadow-lg hover:bg-blue-600 transition text-sm sm:text-base"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Get Started
        </motion.a>
      </section>
    </div>

     <section
      id="about"
      className="relative min-h-screen bg-gradient-to-b from-[#070F2D] via-[#070F2D] to-[#060e2b] flex items-center"
    >
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Our Story */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Story
          </h2>
          <p className="text-gray-300 leading-relaxed">
            We started with a simple idea: to create meaningful digital solutions
            that empower businesses and individuals. Over the years, our passion
            for technology and design has helped us deliver impactful results.
          </p>
        </motion.div>

        {/* Right Side - About Us */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About Us
          </h2>
          <p className="text-gray-300 leading-relaxed">
            At WebDev Solution, we provide end-to-end digital and creative services designed to help businesses grow, scale, and stand out in today’s competitive world. Our team of experts delivers quality, innovation, and results with every project.

          </p>
        </motion.div>
      </div>
    </section>

    <section
      id="services"
      className="relative min-h-screen bg-gradient-to-b from-[#060e2b] via-[#060e2b] to-[#030819] py-20 px-6"
    >
      <div className="container mx-auto text-center">
        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-white mb-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our <span className="text-blue-400">Services</span>
        </motion.h2>
        <motion.p
          className="text-gray-300 text-lg max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          We provide full-stack digital solutions to help your business grow and succeed.
        </motion.p>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group bg-[#0f1f3a] rounded-2xl p-8 shadow-lg border border-gray-800 hover:border-blue-500 transition relative overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
              
              {/* Icon */}
              <div className="text-blue-400 mb-4">{service.icon}</div>
              
              {/* Title */}
              <h3 className="text-xl font-semibold text-white mb-3">
                {service.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section id="whyus" className="bg-gradient-to-b from-[#070F2D] to-black py-20 text-white">
  <div className="container mx-auto text-center mb-14">
    <h2 className="text-4xl font-bold mb-4">Why Choose <span className="text-blue-400">Us?</span></h2>
    <p className="text-gray-400">We combine innovation, creativity, and technology for your success.</p>
  </div>

  <div className="grid md:grid-cols-4 gap-8 container mx-auto">
    {[
      { title: "Expert Team", desc: "A skilled team of developers, designers, and marketers." },
      { title: "Latest Tech", desc: "We use the newest and most efficient technologies." },
      { title: "Fast Delivery", desc: "On-time project completion with premium quality." },
      { title: "24/7 Support", desc: "Our experts are available around the clock." },
    ].map((item, i) => (
      <motion.div
        key={i}
        className="p-8 bg-[#0f1f3a]/50 border border-gray-800 rounded-3xl hover:border-blue-400 transition"
        whileHover={{ y: -10 }}
      >
        <h3 className="text-2xl font-semibold mb-3 text-blue-400">{item.title}</h3>
        <p className="text-gray-300">{item.desc}</p>
      </motion.div>
    ))}
  </div>
</section>


<section id="process" className="bg-gradient-to-b from-[#030819] via-[#030819] to-[#010207] py-20 px-6 text-center">
  <h2 className="text-4xl font-bold text-white mb-12">Our <span className="text-blue-400">Process</span></h2>
  <div className="grid md:grid-cols-4 gap-10 container mx-auto">
    {[
      { step: "1", title: "Research", desc: "We understand your goals and analyze your audience." },
      { step: "2", title: "Design", desc: "We craft beautiful and user-friendly designs." },
      { step: "3", title: "Develop", desc: "We bring ideas to life using modern technology." },
      { step: "4", title: "Launch", desc: "We test, deploy, and maintain for long-term success." },
    ].map((item, i) => (
      <motion.div
        key={i}
        className="bg-[#0f1f3a]/50 border border-gray-800 rounded-3xl p-8 hover:border-blue-400 transition"
        whileHover={{ y: -8 }}
      >
        <div className="text-5xl font-bold text-blue-400 mb-3">{item.step}</div>
        <h3 className="text-2xl text-white mb-2">{item.title}</h3>
        <p className="text-gray-400">{item.desc}</p>
      </motion.div>
    ))}
  </div>
</section>





    <section
      id="portfolio"
      className="relative min-h-screen bg-gradient-to-b from-[#030819] via-[#030819] to-[#010207] py-20 px-6"
    >
      <div className="container mx-auto text-center">
        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-white mb-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our <span className="text-blue-400">Portfolio</span>
        </motion.h2>
        <motion.p
          className="text-gray-300 text-lg max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          A glimpse of our work across web, design, media, and animation — turning ideas into reality.
        </motion.p>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative rounded-2xl overflow-hidden shadow-lg border border-gray-800 hover:border-blue-500 transition-all duration-500"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              {/* Project Image */}
              {/* <Image
                src={project.img}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-72 object-cover group-hover:scale-110 transition duration-700"
              /> */}

              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm">{project.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>


    <section
      id="testimonials"
      className="relative bg-gradient-to-b from-[#010207] via-[#010207] to-black py-20 overflow-hidden"
    >
      <div className="container mx-auto text-center mb-12 px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          What <span className="text-blue-400">Clients Say</span>
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Don’t just take our word for it — here’s what our clients think about us.
        </p>
      </div>

      {/* Continuous Infinite Slider */}
      <div
        className="relative flex overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          className="flex gap-6 px-6"
          animate={{
            x: isHovered ? 0 : ["0%", "-100%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
              duration: 40, // slower speed for smoothness
            },
          }}
        >
          {/* Duplicate list for seamless infinite loop */}
          {[...testimonials, ...testimonials, ...testimonials].map((t, index) => (
            <div
              key={index}
              className="min-w-[320px] md:min-w-[400px] bg-[#0f1f3a] p-6 rounded-2xl shadow-lg border border-gray-800 hover:border-blue-500 transition"
            >
              <p className="text-gray-300 mb-4 italic">"{t.review}"</p>
              <h4 className="text-white font-semibold">{t.name}</h4>
              <span className="text-blue-400 text-sm">{t.role}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>


    {/* CONTACT SECTION */}
<section
  id="contact"
  className="relative bg-gradient-to-b from-black via-[#050A1F] to-[#070F2D] py-20 px-6 overflow-hidden"
>
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,123,255,0.1),transparent_50%)]" />
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(0,123,255,0.08),transparent_50%)]" />

  <div className="relative z-10 container mx-auto text-center mb-12">
    <motion.h2
      className="text-4xl md:text-5xl font-extrabold text-white mb-4"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      Get In <span className="text-blue-400">Touch</span>
    </motion.h2>
    <motion.p
      className="text-gray-300 text-lg max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      Have a project in mind? Let's talk about how we can build something great together.
    </motion.p>
  </div>

  {/* Contact Form */}
  <motion.form
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="relative z-10 container mx-auto max-w-3xl bg-[#0f1f3a]/60 border border-gray-800 rounded-3xl p-8 shadow-2xl backdrop-blur-md"
  >
    <div className="grid md:grid-cols-2 gap-6 mb-6">
      <input
        type="text"
        placeholder="Your Name"
        className="w-full p-4 bg-transparent border border-gray-700 text-white rounded-xl focus:border-blue-500 outline-none transition"
        required
      />
      <input
        type="email"
        placeholder="Your Email"
        className="w-full p-4 bg-transparent border border-gray-700 text-white rounded-xl focus:border-blue-500 outline-none transition"
        required
      />
    </div>
    <textarea
      placeholder="Your Message"
      className="w-full p-4 bg-transparent border border-gray-700 text-white rounded-xl h-40 focus:border-blue-500 outline-none transition mb-6"
      required
    />
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      type="submit"
      className="w-full py-4 bg-blue-500 text-white font-semibold rounded-full shadow-lg hover:bg-blue-600 transition"
    >
      Send Message
    </motion.button>
  </motion.form>
</section>

{/* FOOTER SECTION */}
<footer className="relative bg-gradient-to-b from-[#070F2D] to-black py-14 px-6 border-t border-gray-800">
  <div className="container mx-auto grid md:grid-cols-3 gap-10 text-gray-400">
    {/* Company Info */}
    <div>
      <div className="flex items-center gap-3 mb-4">
        <Image src="/logo.png" alt="WebDevSolution" width={40} height={40} />
        <span className="text-white text-xl font-bold">WebDevSolution</span>
      </div>
      <p className="text-gray-400">
        Building smart, scalable, and creative digital solutions that transform brands and businesses worldwide.
      </p>
    </div>

    {/* Quick Links */}
    <div>
      <h3 className="text-white font-semibold mb-4">Quick Links</h3>
      <ul className="space-y-2">
        <li><a href="#home" className="hover:text-blue-400 transition">Home</a></li>
        <li><a href="#services" className="hover:text-blue-400 transition">Services</a></li>
        <li><a href="#portfolio" className="hover:text-blue-400 transition">Portfolio</a></li>
        <li><a href="#contact" className="hover:text-blue-400 transition">Contact</a></li>
      </ul>
    </div>

    {/* Contact Info */}
    <div>
      <h3 className="text-white font-semibold mb-4">Contact Info</h3>
      <p>Email: <span className="text-blue-400">info@webdevsolution.com</span></p>
      <p>Phone: <span className="text-blue-400">+92 300 1234567</span></p>
      <div className="flex gap-4 mt-4">
        <a href="#" className="text-gray-400 hover:text-blue-400 transition">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#" className="text-gray-400 hover:text-blue-400 transition">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" className="text-gray-400 hover:text-blue-400 transition">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="#" className="text-gray-400 hover:text-blue-400 transition">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </div>
  </div>

  {/* Bottom Line */}
  <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-800 pt-6">
    © {new Date().getFullYear()} WebDevSolution. All Rights Reserved.
  </div>
</footer>


    </div>
  );
}
