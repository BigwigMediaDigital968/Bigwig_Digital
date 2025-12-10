import AboutUs from "../../components/About";
import Blogs from "../../components/Blog";
import CaseCard from "../../components/CaseCard";
import Client from "../../components/Clients";
import FlipCard from "../../components/FlipCard";
import Hero from "../../components/Hero";
import HowWeWork from "../../components/HowWeWork";
import ImageSlider from "../../components/ImageSlider";
import Nav from "../../components/Nav";
import Partners from "../../components/Partners";
import ScrollOverlappingText from "../../components/ScrollSection";
import Stats from "../../components/Stats";
import FAQ from "../../components/Faq";
import LocationsSection from "../../components/Location";
import Footer from "../../components/Footer";
import ServicesPage from "../../components/Services";

export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <Partners />
      <Stats />
      <Client />
      <ServicesPage />
      {/* <ScrollOverlappingText />
      <FlipCard /> */}
      <ImageSlider />
      <AboutUs />
      <CaseCard />
      <HowWeWork />
      <Blogs />
      <FAQ />
      <LocationsSection />
      <Footer />
    </div>
  );
}
