import { motion } from "framer-motion";

function StepCard({ number, title, description }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
      className="
      relative
      bg-white/[0.05]
      border border-white/10
      rounded-2xl
      p-8
      backdrop-blur-xl
      hover:border-cyan-400/30
      transition-all
      "
    >
      <div className="w-14 h-14 rounded-full bg-cyan-500 flex items-center justify-center text-xl font-bold text-white mb-6">
        {number}
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

export default StepCard;