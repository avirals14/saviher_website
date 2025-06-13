import Head from 'next/head';
import { FaBell, FaMapMarkerAlt, FaUsers, FaCamera, FaMobileAlt } from 'react-icons/fa';

const DetailFeature = ({ icon, title, children }) => (
  <div className="flex items-start space-x-4">
    <div className="text-pink-600 mt-1">{icon}</div>
    <div>
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="text-gray-600 mt-1">{children}</p>
    </div>
  </div>
);

export default function Features() {
  return (
    <>
      <Head>
        <title>Features - SaviHer</title>
      </Head>

      <div className="pt-24 pb-12 bg-pink-50">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-center">A Closer Look at Our Features</h1>
          <p className="text-lg text-gray-600 mt-4 text-center max-w-3xl mx-auto">
            SaviHer is packed with cutting-edge technology designed to provide 360-degree protection.
          </p>
        </div>
      </div>

      <div className="py-12 bg-white">
        <div className="container mx-auto px-6 space-y-12 max-w-4xl">
          <DetailFeature icon={<FaBell size={30}/>} title="SOS Alert">
            With just one tap, it sends an automated SMS containing your real-time location and a distress message. This ensures that help is on the way as fast as possible.
          </DetailFeature>
          <DetailFeature icon={<FaCamera size={30}/>} title="Real-Time Image Capturing">
            Instantly take a photo using your device's camera and immediately process or use that image within the app without delay. This can be crucial for evidence or identification.
          </DetailFeature>
          <DetailFeature icon={<FaMapMarkerAlt size={30}/>} title="Geofencing">
            Defines a virtual perimeter around a location. When you enter or exit, it triggers notifications, alerts, or automated tasks for enhanced safety. Perfect for ensuring loved ones are safe.
          </DetailFeature>
          <DetailFeature icon={<FaUsers size={30}/>} title="Local Volunteering">
            Nearby, verified individuals are alerted to assist in emergencies, enabling faster, community-driven responses before official help arrives. This feature builds a strong, supportive community.
          </DetailFeature>
          <DetailFeature icon={<FaMobileAlt size={30}/>} title="Shake Detection">
            Simply shake your phone to activate an emergency alert, notifying contacts and sharing your real-time location instantly. This is a discreet and quick way to call for help when you can't use the screen.
          </DetailFeature>
        </div>
      </div>
    </>
  );
} 