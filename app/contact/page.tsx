import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InnerBanner from "@/components/InnerBanner";
import Testimonial from "@/components/Testimonial";
import Contact from "@/components/Contact";
import Map from "@/components/Map";


export default function ContactPage() {
  return (
    <div className="body">
      <Header />
      <InnerBanner name="Contact Us" />
      <Contact />
      <Map />
      <Footer />
    </div>
  );
}
