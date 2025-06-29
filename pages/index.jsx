import Head from 'next/head';
import Navbar from '../components/Navbar';
import MobileNav from '../components/MobileNav';
import PhoneFrame from '../components/PhoneFrame';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaBell, FaUsers, FaCamera, FaMapMarkerAlt, FaMobileAlt, FaArrowRight, FaReact, FaPython, FaAndroid, FaApple, FaServer } from 'react-icons/fa';
import { SiFlutter } from 'react-icons/si';
import Link from 'next/link';
import { useState } from 'react';
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
                  Your Safety,<br />
                  <span className="bg-gradient-to-r from-pink-400 to-fuchsia-400 text-transparent bg-clip-text">
                    Reimagined.
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
                {/* Women's Illustration */}
                <Image
                  src="/images/hero-women.png"
                  alt="Empowered Women Illustration"
                  width={500}
                  height={600}
                  className="object-contain drop-shadow-2xl z-10"
                  priority
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
                <h3 className="text-2xl font-bold text-white group-hover:text-fuchsia-300 transition-colors duration-300">Community Support</h3>
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

            {/* Screenshots Grid */}
            <div className="mt-20">
              <h3 className="text-3xl font-bold text-white mb-8 text-center">App Screenshots</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {[1,2,3,4,5].map((index) => (
                  <div key={index} className="relative aspect-[9/16] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <Image
                      src={`/images/app-screenshots/screen-${index}.jpg`}
                      alt={`App screenshot ${index}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
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
                <p className="text-gray-300 mb-6">At SaviHer, we believe that every woman deserves to feel safe and secure. Our mission is to leverage technology to create a safer world for women, providing them with the tools and support they need to navigate their daily lives with confidence.</p>
                <p className="text-gray-300">Through our innovative app, we're building a community of empowered women who support and protect each other, making safety accessible to all.</p>
              </div>
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/about/mission.jpg"
                  alt="Women supporting each other"
                  fill
                  className="object-cover"
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
            {/* Team */}
            <div className="mb-20">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">Our Team</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-gray-900/60 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="relative aspect-square">
                    <Image src="/images/team/sarah.jpg" alt="Sarah Johnson" fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-semibold text-white mb-1">Sarah Johnson</h4>
                    <p className="text-pink-400 font-medium mb-3">Founder & CEO</p>
                    <p className="text-gray-300">Passionate about women's safety and technology, Sarah founded SaviHer to create a safer world for women everywhere.</p>
                  </div>
                </div>
                <div className="bg-gray-900/60 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="relative aspect-square">
                    <Image src="/images/team/emily.jpg" alt="Dr. Emily Chen" fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-semibold text-white mb-1">Dr. Emily Chen</h4>
                    <p className="text-pink-400 font-medium mb-3">Head of Safety</p>
                    <p className="text-gray-300">With over 15 years of experience in public safety, Emily leads our safety protocols and emergency response systems.</p>
                  </div>
                </div>
                <div className="bg-gray-900/60 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="relative aspect-square">
                    <Image src="/images/team/maria.jpg" alt="Maria Rodriguez" fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-semibold text-white mb-1">Maria Rodriguez</h4>
                    <p className="text-pink-400 font-medium mb-3">Lead Developer</p>
                    <p className="text-gray-300">Maria brings her expertise in mobile app development to create a seamless and secure user experience.</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Impact */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">Our Impact</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="bg-gray-900/80 rounded-2xl p-6 backdrop-blur-sm text-center">
                  <div className="text-4xl font-bold text-pink-400 mb-2">10K+</div>
                  <p className="text-gray-200">Active Users</p>
                </div>
                <div className="bg-gray-900/80 rounded-2xl p-6 backdrop-blur-sm text-center">
                  <div className="text-4xl font-bold text-pink-400 mb-2">50+</div>
                  <p className="text-gray-200">Cities Covered</p>
                </div>
                <div className="bg-gray-900/80 rounded-2xl p-6 backdrop-blur-sm text-center">
                  <div className="text-4xl font-bold text-pink-400 mb-2">24/7</div>
                  <p className="text-gray-200">Support Available</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section id="resources" className="py-24 bg-gray-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-400 to-fuchsia-400 text-transparent bg-clip-text mb-4">Safety Resources</h2>
              <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">Essential resources and information to help you stay safe.</p>
            </div>
            {/* Emergency Contacts */}
            <div className="mb-20">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">Emergency Contacts</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-900/60 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="text-lg font-semibold text-white mb-2">Emergency Services</h4>
                  <p className="text-2xl font-bold text-pink-400 mb-2">911</p>
                  <p className="text-gray-300">For immediate life-threatening emergencies</p>
                </div>
                <div className="bg-gray-900/60 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="text-lg font-semibold text-white mb-2">Poison Control</h4>
                  <p className="text-2xl font-bold text-pink-400 mb-2">1-800-222-1222</p>
                  <p className="text-gray-300">24/7 poison information and emergency assistance</p>
                </div>
                <div className="bg-gray-900/60 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="text-lg font-semibold text-white mb-2">National Domestic Violence Hotline</h4>
                  <p className="text-2xl font-bold text-pink-400 mb-2">1-800-799-7233</p>
                  <p className="text-gray-300">24/7 support for domestic violence situations</p>
                </div>
              </div>
            </div>
            {/* Safety Guides */}
            <div className="mb-20">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">Safety Guides</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-900/60 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="text-lg font-semibold text-white mb-2">Personal Safety Guide</h4>
                  <p className="text-gray-300 mb-4">Comprehensive guide for personal safety in various situations</p>
                  <a href="/resources/personal-safety-guide.pdf" className="inline-flex items-center text-pink-400 hover:text-pink-300">Download Guide</a>
                </div>
                <div className="bg-gray-900/60 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="text-lg font-semibold text-white mb-2">Travel Safety Tips</h4>
                  <p className="text-gray-300 mb-4">Essential safety tips for travelers</p>
                  <a href="/resources/travel-safety-tips.pdf" className="inline-flex items-center text-pink-400 hover:text-pink-300">Download Guide</a>
                </div>
                <div className="bg-gray-900/60 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="text-lg font-semibold text-white mb-2">Digital Safety Guide</h4>
                  <p className="text-gray-300 mb-4">Protecting your digital privacy and security</p>
                  <a href="/resources/digital-safety-guide.pdf" className="inline-flex items-center text-pink-400 hover:text-pink-300">Download Guide</a>
                </div>
              </div>
            </div>
            {/* Emergency Protocols */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">Emergency Protocols</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-900/60 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="text-xl font-semibold text-white mb-4">Emergency Response Protocol</h4>
                  <ol className="space-y-3 list-decimal list-inside text-gray-300">
                    <li>Assess the situation and ensure your safety</li>
                    <li>Call emergency services if needed</li>
                    <li>Activate your SaviHer emergency alert</li>
                    <li>Follow instructions from emergency responders</li>
                    <li>Stay in a safe location until help arrives</li>
                  </ol>
                </div>
                <div className="bg-gray-900/60 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="text-xl font-semibold text-white mb-4">Personal Safety Protocol</h4>
                  <ol className="space-y-3 list-decimal list-inside text-gray-300">
                    <li>Trust your instincts</li>
                    <li>Stay aware of your surroundings</li>
                    <li>Share your location with trusted contacts</li>
                    <li>Use the buddy system when possible</li>
                    <li>Keep emergency contacts easily accessible</li>
                  </ol>
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