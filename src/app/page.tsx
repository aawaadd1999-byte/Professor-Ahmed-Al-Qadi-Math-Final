import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhyUsSection from "@/components/WhyUsSection";
import CoursesSection from "@/components/CoursesSection";
import HallOfFame from "@/components/HallOfFame";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-navy-950">
      <Navbar />
      <HeroSection />
      <WhyUsSection />
      <CoursesSection />
      <HallOfFame />
      <Footer />
    </main>
  );
}
