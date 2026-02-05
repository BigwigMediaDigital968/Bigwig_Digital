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
import OfferPopup from "../../components/OfferPopup";

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

      {/*<!-- Open Graph Meta Tags --> */}
      <meta
        property="og:title"
        content="Digital Marketing Agency in Delhi | Bigwig Media Digital"
      />
      <meta
        property="og:description"
        content="Bigwig Media Digital is a leading digital marketing
agency in Delhi offering SEO, social media marketing, website development & performance
marketing solutions."
      />
      <meta
        property="og:image"
        content="https://res.cloudinary.com/dyum0r6gf/image/upload/v1770032818/WhatsApp_Image_2026-02-02_at_4.12.04_PM_ac0qj8.jpg"
      />
      <meta property="og:url" content="https://www.bigwigmediadigital.com/" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Bigwig Media Digital" />
      <meta property="og:locale" content="en_IN" />

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
      <OfferPopup />
      {/* <LocationsSection /> */}
      <Footer />
    </div>
  );
}
