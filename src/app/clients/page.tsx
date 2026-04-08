"use client";

import Nav from "../../../components/Nav";
import Footer from "../../../components/Footer";
import GetInTouch from "../../../components/GetInTouch";
import Client from "./Client";

export default function FluidRippleClients() {
  return (
    <div className="bg-[var(--color1)] text-white">
      <Nav />

      <title>Our Clients | BigWig Media Digital Portfolio</title>
      <meta name="title" content="Our Clients | BigWig Media Digital Portfolio" />
      <meta
        name="description"
        content="Bigwig Media Digital has partnered with 500+ brands across India & Dubai. See how our Digital Marketing Agency in Delhi drives real growth!"
      />
      <link rel="canonical" href="https://www.bigwigmediadigital.com/clients" />

      {/* <!-- Open Graph Meta Tags --> */}
      <meta property="og:title" content="Our Clients | BigWig Media Digital Portfolio" />
      <meta
        property="og:description"
        content="Bigwig Media Digital has partnered with 500+ brands across India & Dubai. See how our Digital Marketing Agency in Delhi drives real growth!"
      />
      <meta
        property="og:image"
        content="https://res.cloudinary.com/dyum0r6gf/image/upload/v1770032945/WhatsApp_Image_2026-02-02_at_4.12.04_PM_2_qj4azj.jpg"
      />
      <meta
        property="og:url"
        content="https://www.bigwigmediadigital.com/clients"
      />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Bigwig Media Digital" />
      <meta property="og:locale" content="en_IN" />

      <Client />
      <GetInTouch />
      <Footer />
    </div>
  );
}
