function StatCard({ title, value, icon, change }) {
  return (
    <div
      className="
      bg-white/[0.06]
      border border-white/10
      rounded-2xl
      p-6
      transition-all duration-300
      hover:-translate-y-1
      hover:border-cyan-400/30
      hover:shadow-[0_10px_35px_rgba(34,211,238,0.08)]
      "
    >
      <div className="text-cyan-400 text-3xl mb-5">
        {icon}
      </div>

      <p className="text-4xl font-bold text-white">
        {value}
      </p>

      <div className="flex justify-between items-center mt-2">
        <p className="text-gray-400">
          {title}
        </p>

        {change && (
          <span className="text-xs text-cyan-400">
            {change}
          </span>
        )}
      </div>
    </div>
  );
}

export default StatCard;