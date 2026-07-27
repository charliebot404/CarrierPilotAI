import Navbar from "../components/layout/Navbar";
import Hero from "../components/layout/Hero";
import DashboardPreview from "../components/dashboard/DashboardPreview";
import Features from "../components/features/Feature";
import HowItWorks from "../components/howItWorks/HowItWorks";
import AISection from "../components/ai/AISection";

function Home() {
  return (
   <div className="min-h-screen bg-slate-950">
  <Navbar />
  <Hero />
  <DashboardPreview />
  <Features />
  <HowItWorks />
</div>
  );
}

export default Home;