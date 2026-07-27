function GoalCard() {
  return (
    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 mt-8 hover:border-cyan-400/40 transition-all duration-300">

      <h3 className="text-xl font-semibold text-white">
        🎯 Today's Goal
      </h3>

      <p className="text-gray-400 mt-4">
        Solve 2 LeetCode Problems
      </p>

      <div className="w-full h-3 bg-gray-700 rounded-full mt-6 overflow-hidden">
        <div className="w-1/2 h-full bg-cyan-400 rounded-full"></div>
      </div>

      <p className="text-cyan-400 mt-3 font-medium">
        Progress: 50%
      </p>

    </div>
  );
}

export default GoalCard;