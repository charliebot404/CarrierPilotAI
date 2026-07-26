import StatCard from "./StatCard";
import GoalCard from "./GoalCard";
import ProgressCard from "./ProgressCard";
import {
    FaBriefcase,
    FaUserTie,
    FaAward,
    FaChartLine
} from "react-icons/fa";

function DashboardPreview() {

 const stats = [
    {
      title: "Applications",
      value: 24,
      icon: FaBriefcase,
      change: "+6 this week"
    },
    {
      title: "Interviews",
      value: 5,
      icon: FaUserTie,
    },
    {
      title: "Offers",
      value: 2,
      icon: FaAward,
    },
    {
      title: "ATS Score",
      value: "92%",
      icon: FaChartLine,
    },
  ];


  return (
   <section className="max-w-7xl mx-auto px-6 py-24">

  <h2 className="text-4xl md:text-5xl font-bold text-center text-white">
    Everything in
    <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
    {" "}One Dashboard
  </span>
  </h2>

  <p className="text-gray-400 text-center mt-4 mb-16">
     Track applications, preparation, and progress from one place.
  </p>

  <div className="mb-8">

  <h3 className="text-2xl font-semibold text-white">
    👋 Welcome Back, Charlie
  </h3>

  <p className="text-gray-400 mt-2">
    Here's your placement progress today.
  </p>

</div>

  <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

    {stats.map((item) => (
      <StatCard
        key={item.title}
        title={item.title}
        value={item.value}
        icon={<item.icon />}
        change={item.change}
      />     
  ))}
  </div>
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8 mb-0">

    <GoalCard />

    <ProgressCard />

</div>
  
</div>

    </section>
  );
}

export default DashboardPreview;