import StepCard from "./StepCard";
const steps = [
  {
    number: "01",
    title: "Create Your Profile",
    description:
      "Set up your dashboard and organize your placement journey.",
  },

  {
    number: "02",
    title: "Track Applications",
    description:
      "Keep every internship and interview organized in one place.",
  },

  {
    number: "03",
    title: "Prepare Smarter",
    description:
      "Track DSA, improve your resume and monitor progress.",
  },

  {
    number: "04",
    title: "Land Your Dream Job",
    description:
      "Use AI insights and analytics to maximize your chances.",
  },
];
function HowItWorks() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      <div className="text-center">

        <p className="text-cyan-400 font-medium">
          HOW IT WORKS
        </p>

        <h2 className="text-5xl font-bold text-white mt-4">
          Four Simple Steps
        </h2>

        <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
          Everything from internship applications to interview preparation
          in one streamlined workflow.
        </p>

      </div>

      <div className="grid md:grid-cols-2 gap-8 mt-20">

        {steps.map((step) => (
          <StepCard
            key={step.number}
            number={step.number}
            title={step.title}
            description={step.description}
          />
        ))}

      </div>

    </section>
  );
}

export default HowItWorks;