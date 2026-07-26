const progress = [
  {
    title: "LeetCode",
    value: 80,
  },
  {
    title: "Projects",
    value: 60,
  },
  {
    title: "Resume",
    value: 100,
  },
  {
    title: "Portfolio",
    value: 75,
  },
];

function ProgressCard() {
  return (
    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 mt-8">

      <h3 className="text-2xl font-semibold text-white mb-8">
        📊 Weekly Progress
      </h3>

      {progress.map((item) => (

        <div key={item.title} className="mb-6">

          <div className="flex justify-between mb-2">

            <span className="text-gray-300">
              {item.title}
            </span>

            <span className="text-cyan-400 font-medium">
              {item.value}%
            </span>

          </div>

          <div className="w-full h-3 rounded-full bg-gray-700 overflow-hidden">

            <div
              className="bg-cyan-400 h-full rounded-full transition-all duration-500"
              style={{ width: `${item.value}%` }}
            ></div>

          </div>

        </div>

      ))}

    </div>
  );
}

export default ProgressCard;