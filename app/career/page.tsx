import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InnerBanner from "@/components/InnerBanner";
import Testimonial from "@/components/Testimonial";
import Project from "@/components/Project";
import Career from "@/components/Career";


export default function CareerPage() {
  return (
    <div className="body">
      <Header />
      <InnerBanner name="Career" />
      <Career />
      <Testimonial />
      <Footer />
    </div>
  );
}
