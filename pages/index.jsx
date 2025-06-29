import Head from "next/head";
import Navbar from "../components/Navbar";
import PhoneFrame from "../components/PhoneFrame";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaBell,
  FaUsers,
  FaCamera,
  FaMapMarkerAlt,
  FaMobileAlt,
  FaArrowRight,
  FaReact,
  FaPython,
  FaAndroid,
  FaApple,
  FaServer,
} from "react-icons/fa";
import { SiFlutter } from "react-icons/si";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import Lightbox from "../components/Lightbox";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const steps = [
    {
      icon: <FaMobileAlt className="text-4xl text-primary-400" />,
      title: "Download & Setup",
      description: "Get the app from App Store or Google Play Store",
    },
    {
      icon: <FaUsers className="text-4xl text-secondary-400" />,
      title: "Add Trusted Contacts",
      description: "Connect with friends and family for instant alerts",
    },
    {
      icon: <FaShieldAlt className="text-4xl text-accent-400" />,
      title: "Start Using",
      description: "Enable features and customize your safety settings",
    },
  ];

  const testimonials = [
    {
      quote:
        "SaviHer gives me peace of mind when walking home late at night. The instant alert system is a game-changer.",
      author: "Sarah M.",
      role: "College Student",
    },
    {
      quote:
        "As a working professional, I feel much safer knowing help is just a shake away. The community feature is amazing!",
      author: "Priya K.",
      role: "Software Engineer",
    },
  ];

  // FAQ data
  const faqs = [
    {
      question: "What is SaviHer?",
      answer:
        "SaviHer is a comprehensive personal safety platform designed to empower women with tools and resources for their safety. Our app combines real-time location sharing, emergency alerts, and community support to create a safer environment for everyone.",
    },
    {
      question: "How does the emergency alert system work?",
      answer:
        "When you activate an emergency alert, the app immediately notifies your trusted contacts with your real-time location and situation details. It also provides quick access to emergency services and can share your location with them if needed.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Yes, we take data security very seriously. All personal information and location data are encrypted and stored securely. We only share your location with your trusted contacts when you explicitly allow it.",
    },
    {
      question: "How do I add trusted contacts?",
      answer:
        "You can add trusted contacts through the app by entering their phone numbers or email addresses.",
    },
    
  ];

  // FAQItem component
  function FAQItem({ question, answer, isOpen, onClick }) {
    return (
      <div className="border-b border-gray-800">
        <button
          className="w-full py-4 text-left focus:outline-none flex items-center justify-between"
          onClick={onClick}
        >
          <span className="text-lg font-medium text-white">{question}</span>
          <ChevronDown
            className={`w-5 h-5 text-pink-400 transform transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>
        <motion.div
          initial={false}
          animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          {isOpen && <p className="pb-4 text-gray-300">{answer}</p>}
        </motion.div>
      </div>
    );
  }

  const [openIndex, setOpenIndex] = useState(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const screenshotImages = [
    "/images/app-screenshots/screen-1.jpg",
    "/images/app-screenshots/screen-2.jpg",
    "/images/app-screenshots/screen-3.jpg",
    "/images/app-screenshots/screen-4.jpg",
    "/images/app-screenshots/screen-5.jpg",
  ];

  return (
    <>
      <Head>
        <title>SaviHer - Guarding Anytime Anywhere</title>
        <meta
          name="description"
          content="SaviHer - Your personal safety companion. Experience the next generation of personal safety with instant alerts, community support, and smart features."
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/logos/logo.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/logos/logo.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/logos/logo.png"
        />
        <link rel="mask-icon" href="/images/logos/logo.png" color="#5bbad5" />
        <meta name="theme-color" content="#ffffff" />
        <meta property="og:title" content="SaviHer - Feel Fun, Feel Safe" />
        <meta
          property="og:description"
          content="SaviHer - Your personal safety companion. Experience the next generation of personal safety with instant alerts, community support, and smart features."
        />
        <meta property="og:image" content="/images/logos/logo.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SaviHer - Feel Fun, Feel Safe" />
        <meta
          name="twitter:description"
          content="SaviHer - Your personal safety companion. Experience the next generation of personal safety with instant alerts, community support, and smart features."
        />
        <meta name="twitter:image" content="/images/logos/logo.png" />
      </Head>

      <Navbar />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="pt-20 pb-24 md:pb-0"
      >
        {/* Hero Section */}
        <motion.section
          id="home"
          className="min-h-[80vh] flex items-center bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="container mx-auto px-12 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[70vh]">
              {/* Left: Text Content */}
              <div className="flex flex-col justify-center h-full items-center text-center">
                <div className="mb-8 flex justify-center w-full">
                  <Image
                    src="/images/logos/logo.png"
                    alt="SaviHer Logo"
                    width={180}
                    height={60}
                    priority
                  />
                </div>
                <motion.h1 className="text-5xl md:text-7xl font-black uppercase text-white drop-shadow-lg leading-tight">
                  Guarding Anytime
                  <br />
                  <span className="bg-gradient-to-r from-pink-400 to-fuchsia-400 text-transparent bg-clip-text">
                    Anywhere
                  </span>
                </motion.h1>
                <motion.p className="mt-6 text-lg text-gray-200 max-w-xl drop-shadow-md">
                  Experience the next generation of personal safety. One tap to
                  alert trusted contacts, shake to trigger SOS, and connect with
                  a community of verified helpers.
                </motion.p>
                <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
                  <a
                    href="#features"
                    className="bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:scale-105 transition"
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .querySelector("#features")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Learn More
                  </a>
                </div>
              </div>

              {/* Right: Illustration Only */}
              <div className="flex justify-center items-center h-full relative">
                {/* Decorative Glow */}
                <div className="absolute -z-10 w-96 h-96 bg-pink-400/20 rounded-full blur-3xl left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                {/* Women's SVG Illustration */}
                <img
                  src="/images/hero-women.png"
                  alt="Women talking illustration"
                  className="object-contain drop-shadow-2xl z-10 w-full max-w-lg h-auto"
                />
              </div>
            </div>
          </div>
        </motion.section>

        {/* How It Works Section */}
        <section className="py-24 bg-gray-950 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary-900/10 via-transparent to-transparent"></div>
          <div className="container mx-auto px-6 relative">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white drop-shadow-md">
                How It Works
              </h2>
              <p className="text-gray-200 mt-2">
                Three simple steps to start feeling safer
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="text-center p-6 rounded-2xl bg-gray-900/40 backdrop-blur-md border border-gray-800/50"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="mb-4">{step.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-300">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Download Section */}
        {/* Removed as per user request */}

        {/* Features Bento Grid */}
        <section
          id="features"
          className="py-28 bg-gray-950 relative overflow-hidden"
        >
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16 relative">
              <h2 className="text-5xl font-extrabold bg-gradient-to-r from-pink-400 to-fuchsia-400 text-transparent bg-clip-text drop-shadow-lg mb-4">
                The SaviHer Toolkit
              </h2>
              <p className="text-gray-200 text-lg max-w-2xl mx-auto">
                A suite of features designed for modern life.
              </p>
            </div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={containerVariants}
            >
              <motion.div
                className="p-10 rounded-3xl bg-gray-900/60 backdrop-blur-md border border-pink-400/20 shadow-2xl hover:border-pink-400/40 hover:bg-gray-900/80 transition-all duration-300 group flex flex-col justify-between"
                whileHover={{ y: -8 }}
              >
                <div>
                  <FaBell className="text-pink-400 text-4xl mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-2xl font-bold text-white group-hover:text-pink-300 transition-colors duration-300">
                    Instant SOS Alerts
                  </h3>
                  <p className="text-gray-200 mt-3">
                    Instantly notifies your emergency contacts with your
                    real-time location and distress message, ensuring rapid help
                    during crises.
                  </p>
                </div>
                {/* <div className="mt-6 text-pink-400 font-semibold hover:text-pink-300 transition-colors duration-300 flex items-center gap-2 group-hover:gap-3">
                  Learn More <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </div> */}
              </motion.div>

              <motion.div
                className="p-10 rounded-3xl bg-gray-900/60 backdrop-blur-md border border-fuchsia-400/20 shadow-2xl hover:border-fuchsia-400/40 hover:bg-gray-900/80 transition-all duration-300 group flex flex-col justify-between"
                whileHover={{ y: -8 }}
              >
                <FaMobileAlt className="text-fuchsia-400 text-4xl mb-3 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-bold text-white group-hover:text-fuchsia-300 transition-colors duration-300">
                  Shake Detection
                </h3>
                <p className="text-gray-200 mt-3">
                  Allows a woman in distress to simply shake her phone to send
                  an emergency alert with her real-time location.
                </p>
              </motion.div>

              <motion.div
                className="p-10 rounded-3xl bg-gray-900/60 backdrop-blur-md border border-pink-400/20 shadow-2xl hover:border-pink-400/40 hover:bg-gray-900/80 transition-all duration-300 group flex flex-col justify-between"
                whileHover={{ y: -8 }}
              >
                <FaMapMarkerAlt className="text-pink-400 text-4xl mb-3 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-bold text-white group-hover:text-pink-300 transition-colors duration-300">
                  Safe Zones
                </h3>
                <p className="text-gray-200 mt-3">
                  Creates a virtual boundary that triggers alerts or actions
                  when entering or leaving a defined area.
                </p>
              </motion.div>

              <motion.div
                className="p-10 rounded-3xl bg-gray-900/60 backdrop-blur-md border border-fuchsia-400/20 shadow-2xl hover:border-fuchsia-400/40 hover:bg-gray-900/80 transition-all duration-300 group flex flex-col justify-between"
                whileHover={{ y: -8 }}
              >
                <FaUsers className="text-fuchsia-400 text-4xl mb-3 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-bold text-white group-hover:text-fuchsia-300 transition-colors duration-300">
                  Volunteer Support
                </h3>
                <p className="text-gray-200 mt-3">
                Alerts nearby verified volunteers during emergencies for faster, community-driven help.
                </p>
              </motion.div>

              <motion.div
                className="p-10 rounded-3xl bg-gray-900/60 backdrop-blur-md border border-fuchsia-400/20 shadow-2xl hover:border-fuchsia-400/40 hover:bg-gray-900/80 transition-all duration-300 group flex flex-col justify-between"
                whileHover={{ y: -8 }}
              >
                <FaCamera className="text-fuchsia-400 text-4xl mb-3 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-bold text-white group-hover:text-fuchsia-300 transition-colors duration-300">
                  Real-time Image Capturing
                </h3>
                <p className="text-gray-200 mt-3">
                Instantly captures and processes photos within the app with no delay.
                </p>
              </motion.div>

              <motion.div
                className="p-10 rounded-3xl bg-gray-900/60 backdrop-blur-md border border-pink-400/20 shadow-2xl hover:border-pink-400/40 hover:bg-gray-900/80 transition-all duration-300 group flex flex-col justify-between"
                whileHover={{ y: -8 }}
              >
                <FaShieldAlt className="text-pink-400 text-4xl mb-3 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-bold text-white group-hover:text-pink-300 transition-colors duration-300">
                  Privacy & Security
                </h3>
                <p className="text-gray-200 mt-3">
                Your data is encrypted and protected — your privacy is our top priority.
                </p>
              </motion.div>
            </motion.div>

            {/* App Screenshots Simple Grid with Lightbox */}
            <div className="mt-20">
              <h3 className="text-3xl font-bold text-white mb-8 text-center">
                App Screenshots
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {screenshotImages.map((img, index) => (
                  <button
                    key={img}
                    className="relative w-full aspect-[9/16] rounded-2xl overflow-hidden shadow-lg group focus:outline-none"
                    onClick={() => {
                      setLightboxOpen(true);
                      setLightboxIndex(index);
                    }}
                    aria-label={`Open screenshot ${index + 1}`}
                  >
                    <Image
                      src={img}
                      alt={`App screenshot ${index + 1}`}
                      fill
                      className="object-contain transition-transform duration-200 group-hover:scale-105 group-hover:shadow-2xl"
                    />
                  </button>
                ))}
              </div>
              {lightboxOpen && (
                <Lightbox
                  image={screenshotImages[lightboxIndex]}
                  onClose={() => setLightboxOpen(false)}
                  onNext={() =>
                    setLightboxIndex(
                      (lightboxIndex + 1) % screenshotImages.length
                    )
                  }
                  onPrev={() =>
                    setLightboxIndex(
                      (lightboxIndex - 1 + screenshotImages.length) %
                        screenshotImages.length
                    )
                  }
                  totalImages={screenshotImages.length}
                  currentIndex={lightboxIndex}
                />
              )}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 bg-gray-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-400 to-fuchsia-400 text-transparent bg-clip-text mb-4">
                About SaviHer
              </h2>
              <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
                Empowering women through technology and community support. Our
                mission is to create a safer world for women everywhere.
              </p>
            </div>
            {/* Mission */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  Our Mission
                </h3>
                <p className="text-gray-300 mb-6">
                  At SaviHer, our mission is to empower every woman to live
                  boldly, confidently, and without fear. We harness the power of
                  technology and community to create a world where safety is a
                  right, not a privilege.
                </p>
                <p className="text-gray-300">
                  Through our innovative app, we connect women to instant
                  support, trusted contacts, and a caring network—so no one ever
                  feels alone.
                  <br />
                  <br />
                  Together, we&apos;re building a future where women uplift, protect,
                  and inspire each other—everywhere, every day.
                </p>
              </div>
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl flex items-center justify-center">
                <img
                  src="/images/our-vision-animate.svg"
                  alt="Our Vision Illustration"
                  className="object-contain w-auto h-96"
                />
              </div>
            </div>
            {/* Values */}
            <div className="mb-20">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
                Our Values
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                <div className="bg-gray-900/60 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center">
                  <div className="mb-4">
                    {/* Shield Icon for Safety First */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="w-12 h-12 text-pink-400 mx-auto"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                      />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2">
                    Safety First
                  </h4>
                  <p className="text-gray-300">
                    Every feature and decision is made with user safety as the
                    top priority.
                  </p>
                </div>
                <div className="bg-gray-900/60 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center">
                  <div className="mb-4">
                    {/* Lightning Bolt Icon for Empowerment */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="w-12 h-12 text-fuchsia-400 mx-auto"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2">
                    Empowerment
                  </h4>
                  <p className="text-gray-300">
                    We believe in empowering women through technology and
                    community support.
                  </p>
                </div>
                <div className="bg-gray-900/60 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center">
                  <div className="mb-4">
                    {/* Provided SVG for Innovation */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-12 h-12 text-yellow-400 mx-auto"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                      />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2">
                    Innovation
                  </h4>
                  <p className="text-gray-300">
                    Continuously improving our technology to provide better
                    safety solutions.
                  </p>
                </div>
                <div className="bg-gray-900/60 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center">
                  <div className="mb-4">
                    {/* Users Icon for Community */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="w-12 h-12 text-blue-400 mx-auto"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m9-4a4 4 0 11-8 0 4 4 0 018 0zm6 8v-2a4 4 0 00-3-3.87M6 16.13A4 4 0 003 20v-2a4 4 0 013-3.87"
                      />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2">
                    Community
                  </h4>
                  <p className="text-gray-300">
                    Building a supportive network of women helping women.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-gray-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-400 to-fuchsia-400 text-transparent bg-clip-text mb-4">
                Contact Us
              </h2>
              <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
                Get in touch with our team. We&apos;re here to help and answer any
                questions you may have.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-gray-900/60 rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Send us a Message
                </h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="partnership">Partnership</option>
                      <option value="feedback">Feedback</option>
                      <option value="safety">Safety Concern</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent resize-none"
                      placeholder="Tell us how we can help you..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white font-bold py-3 px-6 rounded-lg hover:scale-105 transition-transform duration-200 shadow-lg"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">
                    Get in Touch
                  </h3>
                  <p className="text-gray-300 mb-8">
                    We&apos;re committed to providing the best support for our
                    community. Reach out to us through any of these channels.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-pink-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">
                        Email
                      </h4>
                      <p className="text-gray-300">saviher.dev@gmail.com</p>
                      <p className="text-gray-400 text-sm">
                        We typically respond within 24 hours
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-fuchsia-500/20 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-fuchsia-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">
                        Phone
                      </h4>
                      <p className="text-gray-300">+91 8005626743</p>
                      <p className="text-gray-400 text-sm">
                        Monday - Friday, 9 AM - 6 PM IST
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-pink-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        ></path>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">
                        Office
                      </h4>
                      <p className="text-gray-300">
                        B-156 Anand Vihar Railway Colony Jagatpura
                        <br />
                        Jaipur, 302017
                      </p>
                      <p className="text-gray-400 text-sm">
                        By appointment only
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="pt-6 border-t border-gray-800">
                  <h4 className="text-lg font-semibold text-white mb-4">
                    Follow Us
                  </h4>
                  <div className="flex space-x-4">
                    
                    <a
                      href="https://youtube.com/shorts/1uPyI5csEHc?si=kGO1tmXwf0cdcjZw"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-pink-500 transition-colors duration-200"
                    >
                      <svg
                        className="w-5 h-5 text-gray-300 hover:text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23.498 6.186a2.994 2.994 0 0 0-2.107-2.12C19.24 3.5 12 3.5 12 3.5s-7.24 0-9.391.566A2.994 2.994 0 0 0 .502 6.186C0 8.338 0 12 0 12s0 3.662.502 5.814a2.994 2.994 0 0 0 2.107 2.12C4.76 20.5 12 20.5 12 20.5s7.24 0 9.391-.566a2.994 2.994 0 0 0 2.107-2.12C24 15.662 24 12 24 12s0-3.662-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-24 bg-gray-950">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-400 to-fuchsia-400 text-transparent bg-clip-text mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
                Find answers to common questions about SaviHer and our safety
                features.
              </p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === index}
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                />
              ))}
            </div>
          </div>
        </section>
      </motion.main>
    </>
  );
}
