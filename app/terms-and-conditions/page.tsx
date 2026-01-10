import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InnerBanner from "@/components/InnerBanner";
import Testimonial from "@/components/Testimonial";
import Team from "@/components/Team";
import Cms from "@/components/Cms";


export default function TermPage() {
  return (
    <div className="body">
      <Header />
      <InnerBanner name="Terms & Conditions" />
      <Cms id={2} />
      <Testimonial />
      <Footer />
    </div>
  );
}
