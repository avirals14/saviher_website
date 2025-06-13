import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

const StatCard = ({ value, label, suffix = '', prefix = '', delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, delay }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
      
      <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="text-4xl font-display font-bold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent mb-2">
          {prefix}
          <CountUp
            end={value}
            duration={2.5}
            separator=","
            decimals={0}
            enableScrollSpy
            scrollSpyOnce
          />
          {suffix}
        </div>
        <p className="text-gray-600 font-medium">{label}</p>
      </div>
    </motion.div>
  );
};

export default StatCard; 