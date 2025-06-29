import Head from 'next/head';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

const sections = [
  {
    title: 'Acceptance of Terms',
    content: [
      'By accessing and using SaviHer, you agree to be bound by these Terms of Service.',
      'These terms apply to all users of our platform, including both free and premium users.',
      'We reserve the right to modify these terms at any time.',
      'Continued use of our services after changes constitutes acceptance of the new terms.'
    ]
  },
  {
    title: 'User Responsibilities',
    content: [
      'Provide accurate and complete information when creating an account',
      'Maintain the security of your account credentials',
      'Use the service in compliance with all applicable laws',
      'Respect the privacy and safety of other users',
      'Report any safety concerns or violations'
    ]
  },
  {
    title: 'Service Usage',
    content: [
      'Our service is intended for personal safety and emergency assistance',
      'Emergency features should only be used in genuine emergency situations',
      'False alarms may result in account suspension',
      'We reserve the right to limit or terminate service for misuse',
      'Premium features require an active subscription'
    ]
  },
  {
    title: 'Intellectual Property',
    content: [
      'All content and materials on our platform are protected by copyright',
      'Users retain rights to their personal content',
      'We may use anonymized data to improve our services',
      'Trademarks and logos are the property of SaviHer',
      'Unauthorized use of our intellectual property is prohibited'
    ]
  },
  {
    title: 'Limitation of Liability',
    content: [
      'We provide our services "as is" without warranties',
      'We are not liable for indirect or consequential damages',
      'Our liability is limited to the amount paid for the service',
      'We do not guarantee uninterrupted or error-free service',
      'Users are responsible for their own safety decisions'
    ]
  },
  {
    title: 'Termination',
    content: [
      'We may terminate accounts that violate these terms',
      'Users may cancel their account at any time',
      'Premium subscriptions are non-refundable',
      'We may retain data as required by law',
      'Termination does not affect accrued rights'
    ]
  }
];

export default function Terms() {
  return (
    <>
      <Head>
        <title>Terms of Service - SaviHer</title>
        <meta name="description" content="Read SaviHer&apos;s terms of service and user agreement." />
      </Head>

      <Navbar />

      <div className="pt-24 md:pt-32 pb-12 md:pb-16 bg-gradient-to-b from-primary-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mb-4 md:mb-6"
          >
            Terms of Service
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg text-gray-600 text-center max-w-3xl mx-auto px-4"
          >
            Please read these terms carefully before using our services.
          </motion.p>
        </div>
      </div>

      <div className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            <p className="text-gray-600 mb-8">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h2>
                <ul className="list-disc pl-6 space-y-2">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-600">{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-12 p-6 bg-gray-50 rounded-lg"
            >
              <h2 className="text-xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-600">
                If you have any questions about these Terms of Service, please contact us at{' '}
                <a href="mailto:legal@saviher.com" className="text-primary-600 hover:text-primary-700">
                  legal@saviher.com
                </a>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
} 