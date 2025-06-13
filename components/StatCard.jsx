import { motion } from 'framer-motion';

const StatCard = ({ title, value, icon: Icon, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-primary-100 hover:border-primary-200"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
      
      <div className="relative">
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center group-hover:bg-primary-500/20 transition-colors duration-300">
            {Icon && <Icon className="w-6 h-6 text-primary-600" />}
          </div>
          <span className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
            {value}
          </span>
        </div>
        
        <h3 className="text-lg font-semibold text-neutral-800 group-hover:text-primary-600 transition-colors duration-300">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

export default StatCard; 