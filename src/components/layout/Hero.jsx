import { motion } from "framer-motion";
function Hero() {
  return (
    
   <section className="relative min-h-[80vh] flex flex-col items-center pt-28 text-center px-6 overflow-hidden">
    <div className="absolute left-[-180px] top-32 w-[450px] h-[450px] rounded-full bg-cyan-500/20 blur-[140px]"></div>
    <div className="absolute right-[-180px] top-44 w-[400px] h-[400px] rounded-full bg-blue-500/20 blur-[140px]"></div>
      <motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="relative z-10 flex flex-col items-center"
>
      <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
  ✨ AI Powered Placement Platform
</div>
      <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
        Track Applications.<br></br>
        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> Prepare Smarter.</span><br></br>
        Get Hired Faster.
      </h1>

      <p className="text-gray-400 text-xl mt-6 max-w-2xl">
        The all-in-one platform to manage internships,
        track DSA progress, prepare for interviews,
        and build your dream career.
      </p>

      <div className="flex gap-5 mt-10">
        <button className="bg-cyan-500 px-6 py-3 rounded-lg text-white hover:bg-cyan-600 hover:scale-105 transition shadow-lg shadow-cyan-500/30">
          Get Started
        </button>

        <button className="border border-cyan-500 px-6 py-3 rounded-lg text-cyan-400 hover:bg-cyan-500 hover:text-white hover:scale-105 transition shadow-lg shadow-cyan-500/30">
          Learn More
        </button>
      </div>
      </motion.div>
    </section>
  );
}

export default Hero;