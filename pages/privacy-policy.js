import Head from 'next/head';
import { motion } from 'framer-motion';

const sections = [
  {
    title: 'Information We Collect',
    content: [
      'Personal Information: Name, email address, phone number, and emergency contact information.',
      'Location Data: Real-time location information when using our safety features.',
      'Device Information: Device type, operating system, and unique device identifiers.',
      'Usage Data: How you interact with our app and services.',
      'Communication Data: Messages and alerts sent through our platform.'
    ]
  },
  {
    title: 'How We Use Your Information',
    content: [
      'To provide and maintain our safety services',
      'To send emergency alerts to your trusted contacts',
      'To improve our app and user experience',
      'To communicate with you about our services',
      'To ensure the security of our platform'
    ]
  },
  {
    title: 'Information Sharing',
    content: [
      'We only share your information with your explicit consent',
      'Emergency services when required',
      'Trusted contacts you have designated',
      'Service providers who help us operate our platform',
      'Legal requirements when necessary'
    ]
  },
  {
    title: 'Data Security',
    content: [
      'We implement industry-standard security measures',
      'All data is encrypted in transit and at rest',
      'Regular security audits and updates',
      'Limited access to personal information',
      'Secure data storage and backup systems'
    ]
  },
  {
    title: 'Your Rights',
    content: [
      'Access your personal information',
      'Correct inaccurate data',
      'Request deletion of your data',
      'Opt-out of non-essential communications',
      'Export your data'
    ]
  },
  {
    title: 'Cookies and Tracking',
    content: [
      'We use cookies to improve your experience',
      'Essential cookies for app functionality',
      'Analytics cookies to understand usage',
      'You can control cookie preferences',
      'Third-party tracking is limited'
    ]
  }
];

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy - SaviHer</title>
        <meta name="description" content="Learn about how SaviHer protects your privacy and handles your data." />
      </Head>

      <div className="pt-24 md:pt-32 pb-12 md:pb-16 bg-gradient-to-b from-primary-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mb-4 md:mb-6"
          >
            Privacy Policy
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg text-gray-600 text-center max-w-3xl mx-auto px-4"
          >
            Your privacy is our priority. Learn how we protect your data and maintain your trust.
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
                If you have any questions about our Privacy Policy, please contact us at{' '}
                <a href="mailto:privacy@saviher.com" className="text-primary-600 hover:text-primary-700">
                  privacy@saviher.com
                </a>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
} 