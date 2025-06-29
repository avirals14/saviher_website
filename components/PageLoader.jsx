import { motion } from 'framer-motion';

export default function PageLoader() {
  return (
    <div className="flex items-center justify-center h-[calc(100vh-5rem)]">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col items-center gap-4"
      >
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
        <p className="text-gray-600 font-medium">Loading...</p>
      </motion.div>
    </div>
  );
} 