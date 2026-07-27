import { motion } from "framer-motion";

function FeatureCard({ icon, title, description }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      className="
      bg-white/[0.05]
      border border-white/10
      rounded-2xl
      p-8
      backdrop-blur-xl
      hover:border-cyan-400/30
      hover:shadow-[0_10px_35px_rgba(34,211,238,0.12)]
      transition-all duration-300
      "
    >
      <div className="text-cyan-400 text-4xl mb-6">
        {icon}
      </div>

      <h3 className="text-2xl font-semibold text-white">
        {title}
      </h3>

      <p className="text-gray-400 mt-4 leading-7">
        {description}
      </p>
    </motion.div>
  );
}

export default FeatureCard;