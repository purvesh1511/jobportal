import Image from "next/image";
import Header from "@/components/Header";
import Fact from "@/components/Fact";
import About from "@/components/About";
import Feature from "@/components/Feature";
import Team from "@/components/Team";
import Footer from "@/components/Footer";
import InnerBanner from "@/components/InnerBanner";


export default function AboutPage() {
  return (
    <div className="body">
      <Header />
      <InnerBanner name="About Us" />
      <Fact />
      <About />
      <Feature />
      <Team />
      <Footer />
    </div>
  );
}
