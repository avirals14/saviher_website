import { motion } from 'framer-motion';
import Image from 'next/image';

const AppStoreItem = ({ store, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="flex-1"
    >
      <a
        href={store.url}
        className={`flex items-center justify-center p-2.5 rounded-xl ${store.color} ${store.textColor} ${store.hoverColor} transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className={`relative ${store.width} ${store.height}`}>
          <Image
            src={store.logo}
            alt={`${store.subtitle} badge`}
            fill
            className="object-contain"
            priority={index === 0}
            sizes="(max-width: 768px) 100vw, 160px"
            unoptimized={store.logo.includes('play.google.com')}
          />
        </div>
      </a>
    </motion.div>
  );
};

export default AppStoreItem; 