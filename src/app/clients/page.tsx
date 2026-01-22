"use client";

import Nav from "../../../components/Nav";
import Footer from "../../../components/Footer";
import GetInTouch from "../../../components/GetInTouch";
import Client from "./Client";

export default function FluidRippleClients() {
  return (
    <div className="bg-[var(--color1)] text-white">
      <Nav />

      <title>Our Clients</title>
      <meta
        name="description"
        content="Discover the brands and businesses we’ve proudly partnered with for digital transformation."
      />
      <link rel="canonical" href="https://www.bigwigmediadigital.com/clients" />

      <Client />
      <GetInTouch />
      <Footer />
    </div>
  );
}
