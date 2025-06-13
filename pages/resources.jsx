import Head from 'next/head';
import { motion } from 'framer-motion';
import { Download, FileText, Shield, MapPin, Phone, Users } from 'lucide-react';

const resources = [
  {
    title: 'Emergency Contacts',
    icon: Phone,
    items: [
      {
        name: 'Emergency Services',
        number: '911',
        description: 'For immediate life-threatening emergencies'
      },
      {
        name: 'Poison Control',
        number: '1-800-222-1222',
        description: '24/7 poison information and emergency assistance'
      },
      {
        name: 'National Domestic Violence Hotline',
        number: '1-800-799-7233',
        description: '24/7 support for domestic violence situations'
      }
    ]
  },
  {
    title: 'Safety Guides',
    icon: FileText,
    items: [
      {
        name: 'Personal Safety Guide',
        description: 'Comprehensive guide for personal safety in various situations',
        download: '/resources/personal-safety-guide.pdf'
      },
      {
        name: 'Travel Safety Tips',
        description: 'Essential safety tips for travelers',
        download: '/resources/travel-safety-tips.pdf'
      },
      {
        name: 'Digital Safety Guide',
        description: 'Protecting your digital privacy and security',
        download: '/resources/digital-safety-guide.pdf'
      }
    ]
  },
  {
    title: 'Community Resources',
    icon: Users,
    items: [
      {
        name: 'Local Support Groups',
        description: 'Find support groups in your area',
        link: '/community/support-groups'
      },
      {
        name: 'Safety Workshops',
        description: 'Upcoming safety and self-defense workshops',
        link: '/community/workshops'
      },
      {
        name: 'Volunteer Opportunities',
        description: 'Get involved in community safety initiatives',
        link: '/community/volunteer'
      }
    ]
  }
];

const emergencyProtocols = [
  {
    title: 'Emergency Response Protocol',
    steps: [
      'Assess the situation and ensure your safety',
      'Call emergency services if needed',
      'Activate your SaviHer emergency alert',
      'Follow instructions from emergency responders',
      'Stay in a safe location until help arrives'
    ]
  },
  {
    title: 'Personal Safety Protocol',
    steps: [
      'Trust your instincts',
      'Stay aware of your surroundings',
      'Share your location with trusted contacts',
      'Use the buddy system when possible',
      'Keep emergency contacts easily accessible'
    ]
  }
];

export default function Resources() {
  return (
    <>
      <Head>
        <title>Safety Resources - SaviHer</title>
        <meta name="description" content="Access comprehensive safety resources, guides, and emergency information." />
      </Head>

      <div className="pt-24 md:pt-32 pb-12 md:pb-16 bg-gradient-to-b from-primary-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mb-4 md:mb-6"
          >
            Safety Resources
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg text-gray-600 text-center max-w-3xl mx-auto px-4"
          >
            Essential resources and information to help you stay safe.
          </motion.p>
        </div>
      </div>

      <div className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          {/* Emergency Contacts Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Emergency Contacts</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {resources[0].items.map((contact, index) => (
                <motion.div
                  key={contact.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{contact.name}</h3>
                  <p className="text-2xl font-bold text-primary-600 mb-2">{contact.number}</p>
                  <p className="text-gray-600">{contact.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Safety Guides Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Safety Guides</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {resources[1].items.map((guide, index) => (
                <motion.div
                  key={guide.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{guide.name}</h3>
                      <p className="text-gray-600 mb-4">{guide.description}</p>
                    </div>
                    <Download className="w-6 h-6 text-primary-600" />
                  </div>
                  <a
                    href={guide.download}
                    className="inline-flex items-center text-primary-600 hover:text-primary-700"
                  >
                    Download Guide
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Emergency Protocols Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Emergency Protocols</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {emergencyProtocols.map((protocol, index) => (
                <motion.div
                  key={protocol.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{protocol.title}</h3>
                  <ol className="space-y-3">
                    {protocol.steps.map((step, stepIndex) => (
                      <li key={stepIndex} className="flex items-start">
                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary-100 text-primary-600 text-sm font-medium mr-3">
                          {stepIndex + 1}
                        </span>
                        <span className="text-gray-600">{step}</span>
                      </li>
                    ))}
                  </ol>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Community Resources Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Community Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {resources[2].items.map((resource, index) => (
                <motion.div
                  key={resource.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{resource.name}</h3>
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  <a
                    href={resource.link}
                    className="inline-flex items-center text-primary-600 hover:text-primary-700"
                  >
                    Learn More
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
} 