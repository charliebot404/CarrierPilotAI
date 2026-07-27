import FeatureCard from "./FeatureCard";

import {
  FaBrain,
  FaLaptopCode,
  FaBriefcase,
  FaChartLine,
} from "react-icons/fa";
const features = [
  {
    title: "AI Resume Review",
    description:
      "Get instant ATS analysis and smart suggestions to improve your resume.",
    icon: FaBrain,
  },

  {
    title: "Internship Tracker",
    description:
      "Track every internship application, interview and offer in one place.",
    icon: FaBriefcase,
  },

  {
    title: "DSA Progress",
    description:
      "Monitor your coding consistency and weekly problem-solving progress.",
    icon: FaLaptopCode,
  },

  {
    title: "Placement Analytics",
    description:
      "Visualize your complete preparation journey with beautiful insights.",
    icon: FaChartLine,
  },
];
function Features() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-0">

      <div className="text-center">

        <h2 className="text-5xl font-bold text-white ">

          Everything You Need

          <br />

          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">

            To Land Your Dream Job

          </span>

        </h2>

        <p className="text-gray-400 max-w-3xl mx-auto mt-8 leading-8">
          CareerPilot AI combines internship tracking, coding preparation,
          resume optimization and analytics into one beautiful platform.
        </p>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">

        {features.map((item) => (

          <FeatureCard
            key={item.title}
            title={item.title}
            description={item.description}
            icon={<item.icon />}
          />

        ))}

      </div>

    </section>
  );
}

export default Features;