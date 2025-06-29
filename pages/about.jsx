import Navbar from '../components/Navbar';
import MobileNav from '../components/MobileNav';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function About() {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & CEO',
      image: '/images/team/sarah.jpg',
      bio: 'Passionate about women\'s safety and technology, Sarah founded SaviHer to create a safer world for women everywhere.'
    },
    {
      name: 'Dr. Emily Chen',
      role: 'Head of Safety',
      image: '/images/team/emily.jpg',
      bio: 'With over 15 years of experience in public safety, Emily leads our safety protocols and emergency response systems.'
    },
    {
      name: 'Maria Rodriguez',
      role: 'Lead Developer',
      image: '/images/team/maria.jpg',
      bio: 'Maria brings her expertise in mobile app development to create a seamless and secure user experience.'
    }
  ];

  const values = [
    {
      title: 'Safety First',
      description: 'Every feature and decision is made with user safety as the top priority.',
      icon: '🛡️'
    },
    {
      title: 'Empowerment',
      description: 'We believe in empowering women through technology and community support.',
      icon: '💪'
    },
    {
      title: 'Innovation',
      description: 'Continuously improving our technology to provide better safety solutions.',
      icon: '💡'
    },
    {
      title: 'Community',
      description: 'Building a supportive network of women helping women.',
      icon: '🤝'
    }
  ];

  return (
    <>
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
                About SaviHer
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 sm:mb-12 px-4">
                Empowering women through technology and community support. Our mission is to create a safer world for women everywhere.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-12 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Our Mission
                </h2>
                <p className="text-gray-600 mb-6">
                  At SaviHer, we believe that every woman deserves to feel safe and secure. Our mission is to leverage technology to create a safer world for women, providing them with the tools and support they need to navigate their daily lives with confidence.
                </p>
                <p className="text-gray-600">
                  Through our innovative app, we&apos;re building a community of empowered women who support and protect each other, making safety accessible to all.
                </p>
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
          </div>
        </section>

        {/* Values Section */}
        <section className="py-12 sm:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 sm:mb-12 text-center">
              Our Values
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-12 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 sm:mb-12 text-center">
              Our Team
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="relative aspect-square">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-primary-600 font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-12 sm:py-20 bg-gradient-to-br from-primary-600 to-secondary-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
                Our Impact
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                  <div className="text-4xl font-bold text-white mb-2">10K+</div>
                  <p className="text-white/90">Active Users</p>
                </div>
                <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                  <div className="text-4xl font-bold text-white mb-2">50+</div>
                  <p className="text-white/90">Cities Covered</p>
                </div>
                <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                  <div className="text-4xl font-bold text-white mb-2">24/7</div>
                  <p className="text-white/90">Support Available</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </motion.main>

      <MobileNav />
    </>
  );
}