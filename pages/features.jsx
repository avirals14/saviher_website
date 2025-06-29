import Head from 'next/head';
import { motion } from 'framer-motion';
import { FaBell, FaMapMarkerAlt, FaUsers, FaCamera, FaMobileAlt } from 'react-icons/fa';

const DetailFeature = ({ icon, title, children }) => (
  <motion.div 
    className="flex items-start space-x-6 p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-primary-100 hover:border-primary-200 transition-all duration-300 hover:shadow-lg"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <div className="text-primary-500 mt-1 p-3 rounded-xl bg-primary-50">{icon}</div>
    <div>
      <h3 className="text-2xl font-bold text-neutral-800">{title}</h3>
      <p className="text-neutral-600 mt-2 leading-relaxed">{children}</p>
    </div>
  </motion.div>
);

export default function Features() {
  return (
    <>
      <Head>
        <title>Features - SaviHer</title>
        <meta name="description" content="Discover SaviHer&apos;s powerful safety features designed to protect women everywhere." />
      </Head>

      <main className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
        {/* Hero Section */}
        <section className="pt-32 pb-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-primary-900/10 via-transparent to-transparent"></div>
          
          <div className="container mx-auto px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-neutral-800">
                A Closer Look at Our
                <span className="bg-gradient-to-r from-primary-500 to-secondary-500 text-transparent bg-clip-text"> Features</span>
              </h1>
              <p className="text-lg text-neutral-600 mt-6 max-w-3xl mx-auto leading-relaxed">
                SaviHer is packed with cutting-edge technology designed to provide 360-degree protection. 
                Every feature is crafted with your safety in mind.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 relative">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <DetailFeature icon={<FaBell size={30}/>} title="SOS Alert">
                With just one tap, it sends an automated SMS containing your real-time location and a distress message. 
                This ensures that help is on the way as fast as possible.
              </DetailFeature>

              <DetailFeature icon={<FaCamera size={30}/>} title="Real-Time Image Capturing">
                Instantly take a photo using your device&apos;s camera and immediately process or use that image within the app without delay. 
                This can be crucial for evidence or identification.
              </DetailFeature>

              <DetailFeature icon={<FaMapMarkerAlt size={30}/>} title="Geofencing">
                Defines a virtual perimeter around a location. When you enter or exit, it triggers notifications, alerts, or automated tasks 
                for enhanced safety. Perfect for ensuring loved ones are safe.
              </DetailFeature>

              <DetailFeature icon={<FaUsers size={30}/>} title="Local Volunteering">
                Nearby, verified individuals are alerted to assist in emergencies, enabling faster, community-driven responses before 
                official help arrives. This feature builds a strong, supportive community.
              </DetailFeature>

              <DetailFeature icon={<FaMobileAlt size={30}/>} title="Shake Detection">
                Simply shake your phone to activate an emergency alert, notifying contacts and sharing your real-time location instantly. 
                This is a discreet and quick way to call for help when you can&apos;t use the screen.
              </DetailFeature>
            </div>
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Experience These Features?
              </h2>
              <p className="text-lg text-white/90 max-w-3xl mx-auto mb-8">
                Download SaviHer now and take control of your safety with our comprehensive suite of features.
              </p>
              <motion.a 
                href="/download"
                className="inline-block px-8 py-4 bg-white text-primary-900 font-semibold rounded-full hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Now
              </motion.a>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
} 