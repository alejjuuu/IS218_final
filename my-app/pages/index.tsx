import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CTA1 from "../components/CTA1";
import Merchandise from "../components/Merchandise";
import Testimonial from "../components/Testimonial";
import Product from "../components/Product";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import "tailwindcss/tailwind.css";
import FeaturesSection from "@/components/FeaturesSection";
import SocialProof from "@/components/SocialProof";
import CookieConsentPopup from "@/components/CookieConsentPopup";

export default function Home() {
  return (
    <div>
      <Banner />
      <Navbar />
      <Hero />
      <Product />
      <FeaturesSection />
      <Testimonial />
      <Newsletter />
      <CookieConsentPopup measurementId="G-7H0L4L9F7E" />
      <Footer />
    </div>
  );
}
