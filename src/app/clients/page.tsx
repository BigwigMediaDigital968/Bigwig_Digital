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

      <Client />
      <GetInTouch />
      <Footer />
    </div>
  );
}
