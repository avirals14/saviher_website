import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Toaster } from 'react-hot-toast';
import ScrollToTop from './ScrollToTop';

const Layout = ({ children }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Page transition variants
  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Loading Screen */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-white"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              className="w-16 h-16 border-4 border-primary-500 border-t-transparent rounded-full animate-spin"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="flex-grow">
        <Navbar />
        
        <AnimatePresence mode="wait">
          <motion.main
            key={router.route}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            className="relative"
          >
            {/* Background Pattern */}
            <div className="fixed inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
            
            {/* Content */}
            <div className="relative z-10">
              {children}
            </div>
          </motion.main>
        </AnimatePresence>
      </div>

      {/* Scroll to Top Button */}
      <ScrollToTop />

      {/* Toast Notifications */}
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: '#fff',
            color: '#333',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            borderRadius: '0.5rem',
            padding: '1rem',
          },
          success: {
            iconTheme: {
              primary: '#10B981',
              secondary: '#fff',
            },
          },
          error: {
            iconTheme: {
              primary: '#EF4444',
              secondary: '#fff',
            },
          },
        }}
      />

      <Footer />
    </div>
  );
};

export default Layout; 