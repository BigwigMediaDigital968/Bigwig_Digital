"use client";

import Nav from "../../../components/Nav";
import Footer from "../../../components/Footer";
import GetInTouch from "../../../components/GetInTouch";
import Client from "./Client";

export default function FluidRippleClients() {
  return (
    <div className="bg-[var(--color1)] text-white">
      <Nav />

      <title>Our Clients | Bigwig Media Digital</title>
      <meta name="title" content="Our Clients | Bigwig Media Digital" />
      <meta
        name="description"
        content="Explore our portfolio of trusted clients and successful digital marketing partnerships across industries."
      />
      <link rel="canonical" href="https://www.bigwigmediadigital.com/clients" />

      {/* <!-- Open Graph Meta Tags --> */}
      <meta property="og:title" content="Our Clients | Bigwig Media Digital" />
      <meta
        property="og:description"
        content="Explore our portfolio of trusted clients and
successful digital marketing partnerships across industries."
      />
      <meta
        property="og:image"
        content="https://www.bigwigmediadigital.com/_next/image?url=%2F_next%2Fstatic%2Fmedi
a%2FBigwig_logo__final.f181d8a8.png&w=1920&q=75"
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
