import Head from 'next/head';
import Navbar from '../components/Navbar';
import MobileNav from '../components/MobileNav';
import PhoneFrame from '../components/PhoneFrame';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaBell, FaUsers, FaCamera, FaMapMarkerAlt, FaMobileAlt, FaArrowRight, FaReact, FaPython, FaAndroid, FaApple, FaServer } from 'react-icons/fa';
import { SiFlutter } from 'react-icons/si';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const steps = [
    {
      icon: <FaMobileAlt className="text-4xl text-primary-400" />,
      title: "Download & Setup",
      description: "Get the app from App Store or Google Play Store"
    },
    {
      icon: <FaUsers className="text-4xl text-secondary-400" />,
      title: "Add Trusted Contacts",
      description: "Connect with friends and family for instant alerts"
    },
    {
      icon: <FaShieldAlt className="text-4xl text-accent-400" />,
      title: "Start Using",
      description: "Enable features and customize your safety settings"
    }
  ];

  const testimonials = [
    {
      quote: "SaviHer gives me peace of mind when walking home late at night. The instant alert system is a game-changer.",
      author: "Sarah M.",
      role: "College Student"
    },
    {
      quote: "As a working professional, I feel much safer knowing help is just a shake away. The community feature is amazing!",
      author: "Priya K.",
      role: "Software Engineer"
    }
  ];

  // FAQ data
  const faqs = [
    {
      question: 'What is SaviHer?',
      answer: 'SaviHer is a comprehensive personal safety platform designed to empower women with tools and resources for their safety. Our app combines real-time location sharing, emergency alerts, and community support to create a safer environment for everyone.'
    },
    {
      question: 'How does the emergency alert system work?',
      answer: 'When you activate an emergency alert, the app immediately notifies your trusted contacts with your real-time location and situation details. It also provides quick access to emergency services and can share your location with them if needed.'
    },
    {
      question: 'Is my data secure?',
      answer: 'Yes, we take data security very seriously. All personal information and location data are encrypted and stored securely. We only share your location with your trusted contacts when you explicitly allow it.'
    },
    {
      question: 'How do I add trusted contacts?',
      answer: 'You can add trusted contacts through the app by entering their phone numbers or email addresses. They will receive an invitation to connect, and once accepted, they can be notified in case of emergencies.'
    },
    {
      question: 'What features are available in the free version?',
      answer: 'The free version includes basic safety features like emergency alerts, location sharing with trusted contacts, and access to safety resources. Premium features include advanced geofencing, extended location history, and priority emergency response.'
    },
    {
      question: 'How do I set up geofencing?',
      answer: 'Setting up geofencing is easy. Simply open the app, go to the Safety Settings, and select "Set Up Geofencing." You can then draw your safe zones on the map and set up notifications for when you enter or leave these areas.'
    },
    {
      question: 'Can I use SaviHer internationally?',
      answer: 'Yes, SaviHer works internationally. However, some features may be limited depending on local regulations and available emergency services in different countries.'
    },
    {
      question: 'How do I report a safety concern?',
      answer: 'You can report safety concerns through the app\'s "Report" feature or contact our support team directly. All reports are taken seriously and handled with confidentiality.'
    }
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
            className={`w-5 h-5 text-pink-400 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          />
        </button>
        <motion.div
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          {isOpen && <p className="pb-4 text-gray-300">{answer}</p>}
        </motion.div>
      </div>
    );
  }

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <>
      <Head>
        <title>SaviHer - Feel Fun, Feel Safe</title>
        <meta name="description" content="SaviHer - Your personal safety companion. Experience the next generation of personal safety with instant alerts, community support, and smart features." />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/logos/logo.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/logos/logo.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/logos/logo.png" />
        <link rel="mask-icon" href="/images/logos/logo.png" color="#5bbad5" />
        <meta name="theme-color" content="#ffffff" />
        <meta property="og:title" content="SaviHer - Feel Fun, Feel Safe" />
        <meta property="og:description" content="SaviHer - Your personal safety companion. Experience the next generation of personal safety with instant alerts, community support, and smart features." />
        <meta property="og:image" content="/images/logos/logo.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SaviHer - Feel Fun, Feel Safe" />
        <meta name="twitter:description" content="SaviHer - Your personal safety companion. Experience the next generation of personal safety with instant alerts, community support, and smart features." />
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
                  Guarding Anytime<br />
                  <span className="bg-gradient-to-r from-pink-400 to-fuchsia-400 text-transparent bg-clip-text">
                    Anywhere
                  </span>
                </motion.h1>
                <motion.p className="mt-6 text-lg text-gray-200 max-w-xl drop-shadow-md">
                  Experience the next generation of personal safety. One tap to alert trusted contacts, shake to trigger SOS, and connect with a community of verified helpers.
                </motion.p>
                <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
                  <a
                    href="/download"
                    className="bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:scale-105 transition"
                  >
                    Get Started
                  </a>
                  <a
                    href="#features"
                    className="text-white font-semibold px-8 py-4 rounded-full border border-white/20 hover:border-white/40 transition"
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
              <h2 className="text-4xl font-bold text-white drop-shadow-md">How It Works</h2>
              <p className="text-gray-200 mt-2">Three simple steps to start feeling safer</p>
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
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Download Section */}
        {/* Removed as per user request */}

        {/* Features Bento Grid */}
        <section id="features" className="py-28 bg-gray-950 relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16 relative">
              <h2 className="text-5xl font-extrabold bg-gradient-to-r from-pink-400 to-fuchsia-400 text-transparent bg-clip-text drop-shadow-lg mb-4">The SaviHer Toolkit</h2>
              <p className="text-gray-200 text-lg max-w-2xl mx-auto">A suite of features designed for modern life.</p>
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
                  <h3 className="text-2xl font-bold text-white group-hover:text-pink-300 transition-colors duration-300">Instant SOS Alerts</h3>
                  <p className="text-gray-200 mt-3">One tap. Multiple contacts notified. Your location, shared instantly. It's safety, simplified.</p>
                </div>
                <div className="mt-6 text-pink-400 font-semibold hover:text-pink-300 transition-colors duration-300 flex items-center gap-2 group-hover:gap-3">
                  Learn More <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </div>
              </motion.div>

              <motion.div 
                className="p-10 rounded-3xl bg-gray-900/60 backdrop-blur-md border border-fuchsia-400/20 shadow-2xl hover:border-fuchsia-400/40 hover:bg-gray-900/80 transition-all duration-300 group flex flex-col justify-between"
                whileHover={{ y: -8 }}
              >
                <FaMobileAlt className="text-fuchsia-400 text-4xl mb-3 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-bold text-white group-hover:text-fuchsia-300 transition-colors duration-300">Shake Detection</h3>
                <p className="text-gray-200 mt-3">Discreetly trigger an alert by simply shaking your phone.</p>
              </motion.div>

              <motion.div 
                className="p-10 rounded-3xl bg-gray-900/60 backdrop-blur-md border border-pink-400/20 shadow-2xl hover:border-pink-400/40 hover:bg-gray-900/80 transition-all duration-300 group flex flex-col justify-between"
                whileHover={{ y: -8 }}
              >
                <FaMapMarkerAlt className="text-pink-400 text-4xl mb-3 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-bold text-white group-hover:text-pink-300 transition-colors duration-300">Safe Zones</h3>
                <p className="text-gray-200 mt-3">Create geofenced areas and get notified automatically.</p>
              </motion.div>

              <motion.div 
                className="p-10 rounded-3xl bg-gray-900/60 backdrop-blur-md border border-fuchsia-400/20 shadow-2xl hover:border-fuchsia-400/40 hover:bg-gray-900/80 transition-all duration-300 group flex flex-col justify-between"
                whileHover={{ y: -8 }}
              >
                <FaUsers className="text-fuchsia-400 text-4xl mb-3 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-bold text-white group-hover:text-fuchsia-300 transition-colors duration-300">Volunteer Support</h3>
                <p className="text-gray-200 mt-3">Connect with verified helpers in your vicinity.</p>
              </motion.div>

              <motion.div 
                className="md:col-span-2 p-10 rounded-3xl bg-gray-900/60 backdrop-blur-md border border-pink-400/20 shadow-2xl hover:border-pink-400/40 hover:bg-gray-900/80 transition-all duration-300 group flex flex-col justify-between"
                whileHover={{ y: -8 }}
              >
                <div>
                  <FaShieldAlt className="text-pink-400 text-4xl mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-2xl font-bold text-white group-hover:text-pink-300 transition-colors duration-300">Privacy & Security</h3>
                  <p className="text-gray-200 mt-3">Your data is encrypted and your privacy is our priority. Feel safe knowing your information is protected.</p>
                </div>
                <div className="mt-6 text-pink-400 font-semibold hover:text-pink-300 transition-colors duration-300 flex items-center gap-2 group-hover:gap-3">
                  Learn More <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Screenshots Grid replaced with PhoneFrame Slideshow */}
            <div className="mt-20 flex flex-col items-center">
              <h3 className="text-3xl font-bold text-white mb-8 text-center">App Screenshots</h3>
              <PhoneSlideshow />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 bg-gray-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-400 to-fuchsia-400 text-transparent bg-clip-text mb-4">About SaviHer</h2>
              <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">Empowering women through technology and community support. Our mission is to create a safer world for women everywhere.</p>
            </div>
            {/* Mission */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Our Mission</h3>
                <p className="text-gray-300 mb-6">At SaviHer, our mission is to empower every woman to live boldly, confidently, and without fear. We harness the power of technology and community to create a world where safety is a right, not a privilege.</p>
                <p className="text-gray-300">Through our innovative app, we connect women to instant support, trusted contacts, and a caring network—so no one ever feels alone.<br /><br />Together, we're building a future where women uplift, protect, and inspire each other—everywhere, every day.</p>
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
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">Our Values</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                <div className="bg-gray-900/60 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center">
                  <div className="text-4xl mb-4">🛡️</div>
                  <h4 className="text-xl font-semibold text-white mb-2">Safety First</h4>
                  <p className="text-gray-300">Every feature and decision is made with user safety as the top priority.</p>
                </div>
                <div className="bg-gray-900/60 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center">
                  <div className="text-4xl mb-4">💪</div>
                  <h4 className="text-xl font-semibold text-white mb-2">Empowerment</h4>
                  <p className="text-gray-300">We believe in empowering women through technology and community support.</p>
                </div>
                <div className="bg-gray-900/60 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center">
                  <div className="text-4xl mb-4">💡</div>
                  <h4 className="text-xl font-semibold text-white mb-2">Innovation</h4>
                  <p className="text-gray-300">Continuously improving our technology to provide better safety solutions.</p>
                </div>
                <div className="bg-gray-900/60 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center">
                  <div className="text-4xl mb-4">🤝</div>
                  <h4 className="text-xl font-semibold text-white mb-2">Community</h4>
                  <p className="text-gray-300">Building a supportive network of women helping women.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-gray-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-400 to-fuchsia-400 text-transparent bg-clip-text mb-4">Contact Us</h2>
              <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">Get in touch with our team. We're here to help and answer any questions you may have.</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-gray-900/60 rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">First Name</label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">Last Name</label>
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
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
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
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
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
                  <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
                  <p className="text-gray-300 mb-8">We're committed to providing the best support for our community. Reach out to us through any of these channels.</p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">Email</h4>
                      <p className="text-gray-300">hello@saviher.com</p>
                      <p className="text-gray-400 text-sm">We typically respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-fuchsia-500/20 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-fuchsia-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">Phone</h4>
                      <p className="text-gray-300">+1 (555) 123-4567</p>
                      <p className="text-gray-400 text-sm">Monday - Friday, 9 AM - 6 PM EST</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">Office</h4>
                      <p className="text-gray-300">123 Safety Street<br />New York, NY 10001</p>
                      <p className="text-gray-400 text-sm">By appointment only</p>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="pt-6 border-t border-gray-800">
                  <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-pink-500 transition-colors duration-200">
                      <svg className="w-5 h-5 text-gray-300 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                      </svg>
                    </a>
                    <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-pink-500 transition-colors duration-200">
                      <svg className="w-5 h-5 text-gray-300 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                      </svg>
                    </a>
                    <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-pink-500 transition-colors duration-200">
                      <svg className="w-5 h-5 text-gray-300 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                      </svg>
                    </a>
                    <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-pink-500 transition-colors duration-200">
                      <svg className="w-5 h-5 text-gray-300 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
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
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-400 to-fuchsia-400 text-transparent bg-clip-text mb-4">Frequently Asked Questions</h2>
              <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">Find answers to common questions about SaviHer and our safety features.</p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === index}
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                />
              ))}
            </div>
          </div>
        </section>
      </motion.main>

      <MobileNav />
    </>
  );
}

function PhoneSlideshow() {
  const screenshots = [
    '/images/app-screenshots/screen-1.jpg',
    '/images/app-screenshots/screen-2.jpg',
    '/images/app-screenshots/screen-3.jpg',
    '/images/app-screenshots/screen-4.jpg',
    '/images/app-screenshots/screen-5.jpg',
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % screenshots.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [screenshots.length]);

  const prev = () => setIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  const next = () => setIndex((prev) => (prev + 1) % screenshots.length);

  return (
    <div className="flex flex-col items-center">
      <div className="mb-4">
        <PhoneFrame screenshot={screenshots[index]} alt={`App screenshot ${index + 1}`} />
      </div>
      <div className="flex space-x-4">
        <button onClick={prev} className="px-4 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition">&#8592;</button>
        <button onClick={next} className="px-4 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition">&#8594;</button>
      </div>
    </div>
  );
}