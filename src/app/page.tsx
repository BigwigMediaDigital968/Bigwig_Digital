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
import RainbowSteps from "../../components/RainbowSteps";

export default function Home() {
  return (
    <div>
      <link rel="canonical" href="https://www.bigwigmediadigital.com/" />
      <title>Digital Marketing Agency in Delhi | Bigwig Media Digital</title>
      <meta
        name="title"
        content="Digital Marketing Agency in Delhi | Bigwig Media Digital"
      />
      <meta
        name="description"
        content="Bigwig Media Digital is a leading digital marketing agency in Delhi offering SEO, social media marketing, website development & performance marketing solutions."
      />
      <link rel="canonical" href="https://www.bigwigmediadigital.com/" />

      <Nav />
      <Hero />
      <Partners />
      <Stats />
      <Client />
      <RainbowSteps />
      <ServicesPage />
      {/* <ScrollOverlappingText />
      <FlipCard /> */}
      <ImageSlider />
      {/* <AboutUs /> */}
      <CaseCard />
      {/* <HowWeWork /> */}
      <Blogs />
      <FAQ />

      {/* <LocationsSection /> */}
      <Footer />
    </div>
  );
}
