import ChatBubble from "./ChatBubble";
import { FaRobot } from "react-icons/fa";
import { motion } from "framer-motion";
function AISection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24">

      <div className="text-center">

        <p className="text-cyan-400 font-medium">
          AI ASSISTANT
        </p>

        <h2 className="text-5xl font-bold text-white mt-4">
          Your Personal Career Coach
        </h2>

        <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
          Get instant resume reviews, project ideas,
          interview preparation and career guidance.
        </p>

      </div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="
        mt-16
        bg-white/5
        border
        border-white/10
        rounded-3xl
        backdrop-blur-xl
        p-8
        "
      >

        <div className="flex items-center gap-3 mb-8">

          <FaRobot className="text-cyan-400 text-3xl"/>

          <h3 className="text-2xl text-white font-semibold">
            CareerPilot AI
          </h3>

        </div>

        <div className="space-y-6">

          <ChatBubble
            sender="You"
            message="How can I improve my resume?"
          />

          <ChatBubble
            ai
            sender="CareerPilot AI"
            message="Your ATS score is 87%. Add quantified achievements, improve project descriptions, include GitHub links and optimize keywords for better recruiter visibility."
          />

        </div>

        <button
          className="
          mt-8
          bg-cyan-500
          hover:bg-cyan-600
          text-white
          px-6
          py-3
          rounded-xl
          transition
          "
        >
          Ask AI
        </button>

      </motion.div>

    </section>
  );
}

export default AISection;