import Head from 'next/head';
import Navbar from '../components/Navbar';
import MobileNav from '../components/MobileNav';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaBell, FaUsers, FaCamera, FaMapMarkerAlt, FaMobileAlt } from 'react-icons/fa';
import Link from 'next/link';

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  return (
    <>
      <Head>
        <title>SaviHer - Feel Fun, Feel Safe</title>
        <meta name="description" content="SaviHer - Your personal safety companion" />
        <link rel="icon" href="/favicon.ico" />
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
          className="min-h-screen flex items-center justify-center text-center relative bg-gray-950"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="absolute inset-0 bg-grid-pattern opacity-5 z-0"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-950/50 to-gray-950 z-10"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-900/20 via-transparent to-transparent z-0"></div>
          
          <div className="z-20">
            <motion.h1 
              className="text-5xl md:text-7xl font-black uppercase text-white drop-shadow-lg"
            >
              Your Safety,
              <br />
              <span className="bg-gradient-to-r from-primary-400 to-secondary-400 text-transparent bg-clip-text drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                Reimagined.
              </span>
            </motion.h1>
            <motion.p 
              className="mt-4 text-lg text-gray-100 max-w-xl mx-auto drop-shadow-md"
            >
              Experience the next generation of personal safety. SaviHer combines powerful protection with a design you'll love to use.
            </motion.p>
            <motion.div className="mt-8">
              <motion.a 
                href="/download" 
                className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] hover:shadow-primary-500/50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.a>
            </motion.div>
          </div>
        </motion.section>

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
                className="md:col-span-2 p-8 rounded-2xl bg-gray-900/40 backdrop-blur-md border border-gray-800/50 hover:border-secondary-500/50 hover:bg-gray-900/60 transition-all duration-300 group"
                whileHover={{ y: -5 }}
              >
                <div>
                  <FaUsers className="text-secondary-400 text-3xl mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-2xl font-bold text-white group-hover:text-secondary-300 transition-colors duration-300">Community Help</h3>
                  <p className="text-gray-200 mt-2">Alert nearby verified volunteers from the SaviHer community to get help even faster. Power in numbers.</p>
                </div>
                <div className="mt-4 text-secondary-400 font-semibold hover:text-secondary-300 transition-colors duration-300 flex items-center gap-2 group-hover:gap-3">
                  Join the Network <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </div>
              </motion.div>
            </motion.div>
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

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary-900/80 to-secondary-900/80 backdrop-blur-md relative">
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
              <motion.a 
                href="/download"
                className="inline-block px-8 py-4 bg-white text-primary-900 font-semibold rounded-full hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.a>
            </motion.div>
          </div>
        </section>
      </motion.main>

      <MobileNav />
    </>
  );
}