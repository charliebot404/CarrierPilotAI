function Navbar() {
  return (
    <nav className="
sticky top-0 z-50
flex items-center justify-between
px-6 md:px-12
py-5
bg-slate-950/70
backdrop-blur-xl
border-b border-white/5
">
      <h1 className="text-2xl font-bold text-cyan-400">
        CareerPilot AI
      </h1>

      <div className="flex gap-8 text-gray-300 hover:text-cyan-400 transition-colors duration-300">
        <a href="#">Home</a>
        <a href="#">Features</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>

      <button className="bg-cyan-500 text-white px-5 py-2 rounded-lg hover:bg-cyan-600 transition">
        Get Started
      </button>
    </nav>
  );
}

export default Navbar;