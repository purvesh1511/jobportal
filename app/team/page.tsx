import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InnerBanner from "@/components/InnerBanner";
import Testimonial from "@/components/Testimonial";
import Team from "@/components/Team";


export default function TeamPage() {
  return (
    <div className="body">
      <Header />
      <InnerBanner name="Our Team" />
      <Team teamSize={0} />
      <Testimonial />
      <Footer />
    </div>
  );
}
