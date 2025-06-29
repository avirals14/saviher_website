import Head from 'next/head';
import Navbar from '../components/Navbar';
import MobileNav from '../components/MobileNav';
import PhoneFrame from '../components/PhoneFrame';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaBell, FaUsers, FaCamera, FaMapMarkerAlt, FaMobileAlt, FaArrowRight, FaReact, FaPython, FaAndroid, FaApple, FaServer } from 'react-icons/fa';
import { SiFlutter } from 'react-icons/si';
import Link from 'next/link';

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
          className="min-h-[80vh] flex items-center relative bg-gray-950"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="absolute inset-0 bg-grid-pattern opacity-5 z-0"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-950/50 to-gray-950 z-10"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-900/20 via-transparent to-transparent z-0"></div>
          
          <div className="container mx-auto px-12 relative z-20 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="flex flex-col justify-center">
                <div className="mb-6">
                  <Image
                    src="/images/logos/logo.png"
                    alt="SaviHer Logo"
                    width={160}
                    height={54}
                    priority
                  />
                </div>
                <motion.h1 
                  className="text-4xl md:text-6xl font-black uppercase text-white drop-shadow-lg text-left"
                >
                  Your Safety,
                  <br />
                  <span className="bg-gradient-to-r from-primary-400 to-secondary-400 text-transparent bg-clip-text drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                    Reimagined.
                  </span>
                </motion.h1>
                <motion.p 
                  className="mt-3 text-base text-gray-100 max-w-lg drop-shadow-md text-left"
                >
                  Experience the next generation of personal safety. One tap to alert trusted contacts, shake to trigger SOS, and connect with a community of verified helpers.
                </motion.p>
                <motion.div
                  className="mt-6 flex flex-col sm:flex-row items-start gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                >
                  <motion.a 
                    href="/download" 
                    className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-bold px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] hover:shadow-primary-500/50"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get Started
                  </motion.a>
                  <motion.a 
                    href="#features" 
                    className="text-white font-semibold px-6 py-3 rounded-full border border-white/20 hover:border-white/40 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn More
                  </motion.a>
                </motion.div>
              </div>

              {/* Right Illustration (Women) */}
              <div className="flex justify-center lg:justify-end items-center">
                <Image
                  src="/images/hero-women.png"
                  alt="Empowered Women Illustration"
                  width={480}
                  height={540}
                  className="object-contain drop-shadow-xl lg:ml-8"
                  style={{ maxWidth: '100%', height: 'auto' }}
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

        {/* Features Bento Grid */}
        <section id="features" className="py-24 bg-gray-950 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-900/10 via-transparent to-transparent"></div>
          <div className="container mx-auto px-6 relative">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white drop-shadow-md">The SaviHer Toolkit</h2>
              <p className="text-gray-200 mt-2">A suite of features designed for modern life.</p>
            </div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={containerVariants}
            >
              <motion.div 
                className="md:col-span-2 p-8 rounded-2xl bg-gray-900/40 backdrop-blur-md border border-gray-800/50 flex flex-col justify-between hover:border-primary-500/50 hover:bg-gray-900/60 transition-all duration-300 group"
                whileHover={{ y: -5 }}
              >
                <div>
                  <FaBell className="text-primary-400 text-3xl mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-2xl font-bold text-white group-hover:text-primary-300 transition-colors duration-300">Instant SOS Alerts</h3>
                  <p className="text-gray-200 mt-2">One tap. Multiple contacts notified. Your location, shared instantly. It's safety, simplified.</p>
                </div>
                <div className="mt-4 text-primary-400 font-semibold hover:text-primary-300 transition-colors duration-300 flex items-center gap-2 group-hover:gap-3">
                  Learn More <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </div>
              </motion.div>

              <motion.div 
                className="p-8 rounded-2xl bg-gray-900/40 backdrop-blur-md border border-gray-800/50 hover:border-secondary-500/50 hover:bg-gray-900/60 transition-all duration-300 group"
                whileHover={{ y: -5 }}
              >
                <FaMobileAlt className="text-secondary-400 text-3xl mb-2 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-bold text-white group-hover:text-secondary-300 transition-colors duration-300">Shake Detection</h3>
                <p className="text-gray-200 mt-1">Discreetly trigger an alert by simply shaking your phone.</p>
              </motion.div>

              <motion.div 
                className="p-8 rounded-2xl bg-gray-900/40 backdrop-blur-md border border-gray-800/50 hover:border-primary-500/50 hover:bg-gray-900/60 transition-all duration-300 group"
                whileHover={{ y: -5 }}
              >
                <FaMapMarkerAlt className="text-primary-400 text-3xl mb-2 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-bold text-white group-hover:text-primary-300 transition-colors duration-300">Safe Zones</h3>
                <p className="text-gray-200 mt-1">Create geofenced areas and get notified automatically.</p>
              </motion.div>

              <motion.div 
                className="p-8 rounded-2xl bg-gray-900/40 backdrop-blur-md border border-gray-800/50 hover:border-secondary-500/50 hover:bg-gray-900/60 transition-all duration-300 group"
                whileHover={{ y: -5 }}
              >
                <FaUsers className="text-secondary-400 text-3xl mb-2 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-bold text-white group-hover:text-secondary-300 transition-colors duration-300">Community Support</h3>
                <p className="text-gray-200 mt-1">Connect with verified helpers in your vicinity.</p>
              </motion.div>

              <motion.div 
                className="md:col-span-2 p-8 rounded-2xl bg-gray-900/40 backdrop-blur-md border border-gray-800/50 flex flex-col justify-between hover:border-primary-500/50 hover:bg-gray-900/60 transition-all duration-300 group"
                whileHover={{ y: -5 }}
              >
                <div>
                  <FaShieldAlt className="text-primary-400 text-3xl mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-2xl font-bold text-white group-hover:text-primary-300 transition-colors duration-300">Privacy & Security</h3>
                  <p className="text-gray-200 mt-2">Your data is encrypted and your privacy is our priority. Feel safe knowing your information is protected.</p>
                </div>
                <div className="mt-4 text-primary-400 font-semibold hover:text-primary-300 transition-colors duration-300 flex items-center gap-2 group-hover:gap-3">
                  Learn More <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 bg-gray-950 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-900/10 via-transparent to-transparent"></div>
          <div className="container mx-auto px-6 relative">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white drop-shadow-md">What Our Users Say</h2>
              <p className="text-gray-200 mt-2">Join thousands of women who trust SaviHer</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="p-8 rounded-2xl bg-gray-900/40 backdrop-blur-md border border-gray-800/50"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <p className="text-gray-200 text-lg mb-4">"{testimonial.quote}"</p>
                  <div>
                    <p className="text-white font-semibold">{testimonial.author}</p>
                    <p className="text-gray-400">{testimonial.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="py-24 bg-gray-950 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary-900/10 via-transparent to-transparent"></div>
          <div className="container mx-auto px-6 relative">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white drop-shadow-md">Built with Flutter</h2>
              <p className="text-gray-200 mt-2">Cross-platform app for Android and iOS</p>
            </div>

            <div className="flex flex-wrap justify-center gap-12 max-w-4xl mx-auto">
              <motion.div
                className="flex flex-col items-center gap-4 text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <SiFlutter className="text-5xl text-blue-400" />
                <span className="text-lg font-medium">Flutter</span>
              </motion.div>
              <motion.div
                className="flex flex-col items-center gap-4 text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <FaAndroid className="text-5xl text-green-500" />
                <span className="text-lg font-medium">Android</span>
              </motion.div>
              <motion.div
                className="flex flex-col items-center gap-4 text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <FaApple className="text-5xl text-gray-400" />
                <span className="text-lg font-medium">iOS</span>
              </motion.div>
              <motion.div
                className="flex flex-col items-center gap-4 text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <FaServer className="text-5xl text-teal-500" />
                <span className="text-lg font-medium">Backend</span>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Animated Stats Section */}
        <section className="py-20 bg-gray-950 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary-900/10 via-transparent to-transparent"></div>
          <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center relative">
            <motion.div 
              className="border-t-2 border-primary-400 pt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-5xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 text-transparent bg-clip-text drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">99.9%</h3>
              <p className="text-gray-200 mt-2">Uptime on Alert Delivery</p>
            </motion.div>

            <motion.div 
              className="border-t-2 border-secondary-400 pt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-5xl font-bold bg-gradient-to-r from-secondary-400 to-primary-400 text-transparent bg-clip-text drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">1.2s</h3>
              <p className="text-gray-200 mt-2">Average Alert Speed</p>
            </motion.div>

            <motion.div 
              className="border-t-2 border-primary-400 pt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-5xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 text-transparent bg-clip-text drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">100k+</h3>
              <p className="text-gray-200 mt-2">Active Users Protected</p>
            </motion.div>
          </div>
        </section>

        {/* App Showcase Section */}
        <section className="py-24 bg-gray-950 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-900/10 via-transparent to-transparent"></div>
          <div className="container mx-auto px-6 relative">
            <div className="text-center mb-16">
              <motion.h2 
                className="text-4xl font-bold text-white drop-shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Experience SaviHer
              </motion.h2>
              <motion.p 
                className="text-gray-200 mt-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Beautiful, intuitive, and powerful - designed for your safety
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="relative group"
                whileHover={{ y: -10 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <Image
                  src="/images/app-screenshots/screen-3.jpg"
                  alt="SaviHer App - Safety Features"
                  width={300}
                  height={600}
                  className="rounded-2xl shadow-2xl relative z-10 transform group-hover:scale-105 transition-all duration-500 cursor-pointer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex items-end justify-center p-4">
                  <p className="text-white text-sm font-medium">Safety Features</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative group"
                whileHover={{ y: -10 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-secondary-500/20 to-primary-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <Image
                  src="/images/app-screenshots/screen-4.jpg"
                  alt="SaviHer App - Community Features"
                  width={300}
                  height={600}
                  className="rounded-2xl shadow-2xl relative z-10 transform group-hover:scale-105 transition-all duration-500 cursor-pointer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex items-end justify-center p-4">
                  <p className="text-white text-sm font-medium">Community Features</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative group"
                whileHover={{ y: -10 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <Image
                  src="/images/app-screenshots/screen-5.jpg"
                  alt="SaviHer App - Settings"
                  width={300}
                  height={600}
                  className="rounded-2xl shadow-2xl relative z-10 transform group-hover:scale-105 transition-all duration-500 cursor-pointer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex items-end justify-center p-4">
                  <p className="text-white text-sm font-medium">Settings & Preferences</p>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center mt-12"
            >
              <p className="text-gray-200 text-lg max-w-2xl mx-auto">
                Every screen is designed with your safety in mind. From quick SOS alerts to community features, 
                SaviHer puts powerful protection at your fingertips.
              </p>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-pink-600/80 to-rose-800/80 backdrop-blur-md relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent"></div>
          <div className="container mx-auto px-6 text-center relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6 drop-shadow-md">
                Ready to Feel Safe?
              </h2>
              <p className="text-lg text-white/90 max-w-3xl mx-auto mb-8 drop-shadow-sm">
                Join thousands of women who trust SaviHer for their personal safety. Download now and experience the difference.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.a 
                  href="/download"
                  className="inline-block px-8 py-4 bg-white text-primary-900 font-semibold rounded-full hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Download Now
                </motion.a>
                <motion.a 
                  href="/features"
                  className="inline-block px-8 py-4 text-white font-semibold rounded-full border border-white/20 hover:border-white/40 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Features
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </motion.main>

      <MobileNav />
    </>
  );
}