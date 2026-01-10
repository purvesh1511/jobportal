import Image from "next/image";
import Header from "@/components/Header";
import Service from "@/components/Service";
import Footer from "@/components/Footer";
import InnerBanner from "@/components/InnerBanner";
import Testimonial from "@/components/Testimonial";


export default function ServicePage() {
  return (
    <div className="body">
      <Header />
      <InnerBanner name="Services" />
      <Service />
      <Testimonial />
      <Footer />
    </div>
  );
}
