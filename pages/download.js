import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Apple, GooglePlay, Shield, MapPin, Bell, Users, Mail, Star, HelpCircle, Play } from 'lucide-react';
import AppStoreItem from '../components/AppStoreItem';
import FeatureItem from '../components/FeatureItem';
import { useState } from 'react';
import Lightbox from '../components/Lightbox';
import Navbar from '../components/Navbar';
import MobileNav from '../components/MobileNav';
import PageLoader from '../components/PageLoader';
import usePageLoading from '../hooks/usePageLoading';

const features = [
  {
    icon: Shield,
    title: 'Emergency Alerts',
    description: 'Instantly notify trusted contacts and emergency services with your location when you need help.'
  },
  {
    icon: MapPin,
    title: 'Real-time Location Sharing',
    description: 'Share your location with trusted contacts and get notified when they reach their destination safely.'
  },
  {
    icon: Bell,
    title: 'Geofencing',
    description: 'Set up virtual boundaries and receive alerts when entering or leaving designated safe zones.'
  },
  {
    icon: Users,
    title: 'Community Support',
    description: 'Connect with local safety networks and access community resources for additional support.'
  }
];

const appStores = [
  {
    name: 'Download on the',
    subtitle: 'App Store',
    logo: 'https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg',
    url: '#',
    color: 'bg-black',
    textColor: 'text-white',
    hoverColor: 'hover:bg-gray-900',
    width: 'w-36',
    height: 'h-10'
  },
  {
    name: 'GET IT ON',
    subtitle: 'Google Play',
    logo: 'https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png',
    url: '#',
    color: 'bg-black',
    textColor: 'text-white',
    hoverColor: 'hover:bg-gray-900',
    width: 'w-36',
    height: 'h-10'
  }
];

const testimonials = [
  {
    name: 'Sarah M.',
    role: 'College Student',
    content: 'SaviHer has given me peace of mind when walking home late at night. The real-time location sharing feature is a game-changer.',
    rating: 5
  },
  {
    name: 'Emily R.',
    role: 'Working Professional',
    content: 'The emergency alert system is incredibly reliable. I feel much safer knowing help is just a tap away.',
    rating: 5
  },
  {
    name: 'Jessica K.',
    role: 'Community Organizer',
    content: 'The community features have helped us create a stronger support network in our neighborhood.',
    rating: 5
  }
];

const faqs = [
  {
    question: 'Is SaviHer free to use?',
    answer: 'SaviHer offers both free and premium features. The basic safety features are free, while advanced features are available through our premium subscription.'
  },
  {
    question: 'How does the emergency alert system work?',
    answer: 'When you activate an emergency alert, SaviHer immediately notifies your trusted contacts with your exact location and sends your information to emergency services if needed.'
  },
  {
    question: 'Can I use SaviHer without an internet connection?',
    answer: 'While some features require an internet connection, our emergency alert system can work with minimal connectivity and will attempt to send alerts through SMS if internet is unavailable.'
  },
  {
    question: 'How do I add trusted contacts?',
    answer: 'You can add trusted contacts through the app by entering their phone numbers or email addresses. They will receive an invitation to connect with you on SaviHer.'
  }
];

export default function Download() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const totalImages = 5;

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
    setSelectedImage(`/images/app-screenshots/screen-${index + 1}.jpg`);
  };

  const handleNext = () => {
    if (currentImageIndex < totalImages - 1) {
      const nextIndex = currentImageIndex + 1;
      setCurrentImageIndex(nextIndex);
      setSelectedImage(`/images/app-screenshots/screen-${nextIndex + 1}.jpg`);
    }
  };

  const handlePrev = () => {
    if (currentImageIndex > 0) {
      const prevIndex = currentImageIndex - 1;
      setCurrentImageIndex(prevIndex);
      setSelectedImage(`/images/app-screenshots/screen-${prevIndex + 1}.jpg`);
    }
  };

  return (
    <>
      <Head>
        <title>Download SaviHer - Personal Safety App</title>
        <meta name="description" content="Download the SaviHer app for iOS and Android to enhance your personal safety." />
      </Head>

      <Navbar />
      <motion.main 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="pt-20 pb-24 md:pb-0"
      >
        {/* Hero Section */}
        <section className="relative py-12 sm:py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-50" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
                Download SaviHer
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 sm:mb-12 px-4">
                Experience the power of SaviHer on your device. Download now and join our community of empowered women.
              </p>
              
              {/* App Store Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 sm:mb-16">
                {appStores.map((store, index) => (
                  <AppStoreItem key={index} store={store} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 sm:mb-12 text-center">
              Key Features
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {features.map((feature, index) => (
                <FeatureItem key={index} feature={feature} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Screenshots Section */}
        <section className="py-12 sm:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 sm:mb-12 text-center">
              App Screenshots
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
              {[1, 2, 3, 4, 5].map((index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative aspect-[9/16] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                  onClick={() => handleImageClick(index - 1)}
                >
                  <Image
                    src={`/images/app-screenshots/screen-${index}.jpg`}
                    alt={`App screenshot ${index}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* System Requirements Section */}
        <section className="py-12 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 sm:mb-12 text-center">
              System Requirements
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
              <div className="bg-gray-50 rounded-2xl p-6 sm:p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">iOS</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• iOS 13.0 or later</li>
                  <li>• iPhone 8 or newer</li>
                  <li>• iPad (6th generation) or newer</li>
                  <li>• 100MB of free storage</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6 sm:p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Android</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• Android 8.0 or later</li>
                  <li>• 2GB RAM or more</li>
                  <li>• 100MB of free storage</li>
                  <li>• Google Play Services</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-12 sm:py-20 bg-gradient-to-br from-primary-600 to-secondary-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
                Stay Updated
              </h2>
              <p className="text-base sm:text-lg text-white/90 mb-6 sm:mb-8">
                Subscribe to our newsletter for the latest updates, features, and safety tips.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 sm:px-6 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
                />
                <button
                  type="submit"
                  className="px-6 sm:px-8 py-3 rounded-xl bg-white text-primary-600 font-semibold hover:bg-white/90 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>
      </motion.main>

      <MobileNav />

      {selectedImage && (
        <Lightbox
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
          onNext={handleNext}
          onPrev={handlePrev}
          totalImages={totalImages}
          currentIndex={currentImageIndex}
        />
      )}
    </>
  );
} 