import Head from 'next/head';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

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

function FAQItem({ question, answer, isOpen, onClick }) {
  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full py-4 text-left focus:outline-none"
        onClick={onClick}
      >
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium text-gray-900">{question}</h3>
          <ChevronDown
            className={`w-5 h-5 text-gray-500 transform transition-transform ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        </div>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="pb-4 text-gray-600">{answer}</p>
      </motion.div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <>
      <Head>
        <title>FAQ - SaviHer</title>
        <meta name="description" content="Frequently asked questions about SaviHer&apos;s safety features and services." />
      </Head>

      <div className="pt-24 md:pt-32 pb-12 md:pb-16 bg-gradient-to-b from-primary-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mb-4 md:mb-6"
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg text-gray-600 text-center max-w-3xl mx-auto px-4"
          >
            Find answers to common questions about SaviHer and our safety features.
          </motion.p>
        </div>
      </div>

      <div className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-12 text-center"
          >
            <p className="text-gray-600 mb-4">
              Still have questions? We&apos;re here to help.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </div>
    </>
  );
} 