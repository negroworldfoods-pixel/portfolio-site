import About from "@/components/about/About";
import Business from "@/components/about/Business";
import EarlyLife from "@/components/about/EarlyLife";
import Hero from "@/components/home/Hero";
import GrowthJourney from "@/components/roadmap/RoadMap";

export default function Home() {
  return <div className="flex flex-col min-h-[300vh]">
    <Hero />
    <About />
    <Business />
    <EarlyLife />
    <GrowthJourney />
  </div>;
}