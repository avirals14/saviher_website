import { Home, Download, Info, Mail, Shield } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

const MobileNav = () => {
  const router = useRouter();

  const navItems = [
    { name: 'Home', icon: Home, href: '/' },
    { name: 'Download', icon: Download, href: '/download' },
    { name: 'Safety', icon: Shield, href: '/safety' },
    { name: 'About', icon: Info, href: '/about' },
    { name: 'Contact', icon: Mail, href: '/contact' },
  ];

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="md:hidden fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-md border-t border-gray-200 z-50"
    >
      <div className="flex justify-around items-center h-16 px-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = router.pathname === item.href;
          
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`relative flex flex-col items-center justify-center w-full h-full ${
                isActive
                  ? 'text-primary-600'
                  : 'text-gray-600 hover:text-primary-600'
              } transition-colors`}
            >
              {isActive && (
                <motion.div
                  layoutId="mobileNavIndicator"
                  className="absolute -top-1 left-1/2 -translate-x-1/2 w-12 h-1 bg-primary-600 rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <Icon className={`w-6 h-6 ${isActive ? 'scale-110' : ''} transition-transform`} />
              <span className="text-xs mt-1 font-medium">{item.name}</span>
            </Link>
          );
        })}
      </div>
    </motion.div>
  );
};

export default MobileNav; 