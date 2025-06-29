import Image from 'next/image';
import { motion } from 'framer-motion';

const PhoneFrame = ({ screenshot, alt, className = "" }) => {
  return (
    <motion.div
      className={`relative group ${className}`}
      whileHover={{ scale: 1.05, rotate: 0 }}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
    >
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/30 to-secondary-500/30 rounded-[3rem] blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
      
      {/* Phone frame */}
      <div className="relative bg-gray-900 rounded-[3rem] p-3 shadow-2xl border border-gray-700">
        {/* Phone body */}
        <div className="relative bg-black rounded-[2.5rem] overflow-hidden">
          {/* Status bar */}
          <div className="absolute top-0 left-0 right-0 h-6 bg-black z-10 flex items-center justify-between px-6 text-white text-xs">
            <span>9:41</span>
            <div className="flex items-center space-x-1">
              <div className="w-4 h-2 bg-white rounded-sm"></div>
              <div className="w-1 h-2 bg-white rounded-sm"></div>
              <div className="w-1 h-2 bg-white rounded-sm"></div>
            </div>
          </div>
          
          {/* Screenshot */}
          <div className="relative w-full h-full pt-6">
            <Image
              src={screenshot}
              alt={alt}
              width={240}
              height={480}
              className="w-full h-full object-cover rounded-b-[2.5rem]"
            />
            
            {/* Home indicator */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white rounded-full opacity-60"></div>
          </div>
        </div>
        
        {/* Camera notch */}
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-black rounded-full border border-gray-700"></div>
        
        {/* Side buttons */}
        <div className="absolute top-16 -left-1 w-1 h-8 bg-gray-700 rounded-l-full"></div>
        <div className="absolute top-24 -left-1 w-1 h-8 bg-gray-700 rounded-l-full"></div>
        <div className="absolute top-32 -left-1 w-1 h-8 bg-gray-700 rounded-l-full"></div>
        
        {/* Volume buttons */}
        <div className="absolute top-20 -right-1 w-1 h-6 bg-gray-700 rounded-r-full"></div>
        <div className="absolute top-28 -right-1 w-1 h-6 bg-gray-700 rounded-r-full"></div>
      </div>
      
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[3rem] flex items-end justify-center p-4">
        <p className="text-white text-sm font-medium">SaviHer App Interface</p>
      </div>
    </motion.div>
  );
};

export default PhoneFrame; 