import About from "@/components/about/About";
import Hero from "@/components/home/Hero";
import { NavBar } from "@/components/home/Navigation";

export default function Home() {
  return <div className="flex flex-col min-h-[300vh]">
    <NavBar />
    <Hero />
    <About />
  </div>;
}