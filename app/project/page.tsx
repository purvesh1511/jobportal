import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InnerBanner from "@/components/InnerBanner";
import Testimonial from "@/components/Testimonial";
import Project from "@/components/Project";


export default function ProjectPage() {
  return (
    <div className="body">
      <Header />
      <InnerBanner name="Projects" />
      <Project />
      <Testimonial />
      <Footer />
    </div>
  );
}
