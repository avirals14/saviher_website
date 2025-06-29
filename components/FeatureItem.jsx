import { motion } from 'framer-motion';

const FeatureItem = ({ feature, index }) => {
  if (!feature || !feature.icon) {
    return null;
  }

  const Icon = feature.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
    >
      {Icon && <Icon className="w-8 h-8 text-primary-600 mb-4" />}
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
      <p className="text-gray-600">{feature.description}</p>
    </motion.div>
  );
};

export default FeatureItem; 