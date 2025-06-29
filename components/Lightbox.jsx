import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide-react';
import { useEffect, useState } from 'react';

const Lightbox = ({ image, onClose, onNext, onPrev, totalImages, currentIndex }) => {
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNext, onPrev]);

  // Reset scale and position when image changes
  useEffect(() => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  }, [image]);

  // Handle touch gestures
  const handleTouchStart = (e) => {
    setTouchStart({
      x: e.targetTouches[0].clientX,
      y: e.targetTouches[0].clientY,
    });
    setIsDragging(true);
  };

  const handleTouchMove = (e) => {
    if (!touchStart) return;
    
    const currentX = e.targetTouches[0].clientX;
    const currentY = e.targetTouches[0].clientY;
    
    setTouchEnd({
      x: currentX,
      y: currentY,
    });

    // Handle panning when zoomed
    if (scale > 1) {
      const deltaX = currentX - touchStart.x;
      const deltaY = currentY - touchStart.y;
      setPosition({
        x: position.x + deltaX,
        y: position.y + deltaY,
      });
      setTouchStart({ x: currentX, y: currentY });
    }
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const deltaX = touchStart.x - touchEnd.x;
    const deltaY = touchStart.y - touchEnd.y;
    
    // Only handle swipe if not zoomed and not dragging
    if (scale === 1 && Math.abs(deltaX) > Math.abs(deltaY)) {
      if (deltaX > 50 && currentIndex < totalImages - 1) {
        onNext();
      } else if (deltaX < -50 && currentIndex > 0) {
        onPrev();
      }
    }

    setTouchStart(null);
    setTouchEnd(null);
    setIsDragging(false);
  };

  const handleDoubleTap = () => {
    setScale(scale === 1 ? 2 : 1);
    setPosition({ x: 0, y: 0 });
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="relative max-w-5xl w-full mx-4"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors p-2 rounded-full hover:bg-white/10 z-[101]"
            aria-label="Close lightbox"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Navigation arrows - hidden on mobile */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors p-3 rounded-full hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed z-[101]"
            disabled={currentIndex === 0}
            aria-label="Previous image"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors p-3 rounded-full hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed z-[101]"
            disabled={currentIndex === totalImages - 1}
            aria-label="Next image"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          {/* Mobile controls */}
          <div className="md:hidden absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4 text-white/60 text-sm z-[101]">
            <button
              onClick={() => setScale(scale === 1 ? 2 : 1)}
              className="p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
            >
              {scale === 1 ? <ZoomIn className="w-5 h-5" /> : <ZoomOut className="w-5 h-5" />}
            </button>
            <span>Double tap to zoom</span>
          </div>

          {/* Image counter */}
          <div className="absolute top-4 left-4 text-white text-lg z-[101]">
            {currentIndex + 1} / {totalImages}
          </div>

          {/* Image container with touch events */}
          <div 
            className="relative aspect-[9/16] w-full max-h-[85vh] rounded-xl overflow-hidden shadow-2xl"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onDoubleClick={handleDoubleTap}
          >
            <motion.div
              style={{
                scale,
                x: position.x,
                y: position.y,
              }}
              className="w-full h-full"
            >
              <Image
                src={image}
                alt="Full size screenshot"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 800px"
                priority
              />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Lightbox; 