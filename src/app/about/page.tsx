import Image from "next/image";
import Footer from "../../../components/Footer";
import Nav from "../../../components/Nav";
import ceo from "../../../Assets/ceo.png";

function About() {
  return (
    <div className="bg-white  text-gray-800 ">
      <Nav />
      <title>About BigWig Digital</title>
      <meta
        name="description"
        content="Learn about BigWig Digital, our mission, team, and approach to delivering digital success."
      />
      <link rel="canonical" href="https://www.bigwigmediadigital.com/about" />{" "}
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* About Us */}
        <section className="mb-12">
          <h1 className="text-3xl font-bold mb-4 text-[var(--primary-color)]">
            About Us
          </h1>
          <p className="mb-4">
            Based in New Delhi, India, we are a thriving digital media agency.
            Experienced and diligent social bees who live and breathe digital
            make up our team. Algorithm changes on Google, YouTube, Instagram,
            Facebook, and Twitter? Don&#39;t worry,, we know about it as soon as
            it&#39;s released. We provide a rich digital experience for our
            clients by fusing our years of experience in developing integrated
            social solutions with creative output. We believe that we conduct
            research, produce, and strive to provide our clients with the best
            solutions for all of their issues. The goal of Bigwig Media Digital,
            a 360° digital marketing firm, is to turn brands into market
            leaders. With more than eight years of expertise, we have
            continuously assisted companies in expanding, interacting with
            customers, and maintaining their competitive edge in the digital
            market. Our team produces quantifiable outcomes that stimulate
            growth, engage audiences, and return on investment, regardless of
            whether you&#39;re a startup trying to make an impression or an
            established company hoping to grow. Bigwig creates digital
            experiences that engage, convert, and have an impact we Don&#39;t
            just market.
          </p>
        </section>

        {/* Why Choose Us */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-[var(--primary-color)]">
            Why Choose Us?
          </h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>
              <strong>Results-Driven Approach:</strong> We focus on what matters
              most like ROI. Every click, impression, and post are backed by
              data and enhanced for performance.
            </li>
            <li>
              <strong>Customized Strategies:</strong> No one-size-fits-all here.
              We tailor each plan to match your brand’s goals, engage audiences,
              and growth potential.
            </li>
            <li>
              <strong>Expert Team, Real Results:</strong>Our team of seasoned
              marketers, dynamic creatives, and analysts combine deep industry
              knowledge with cutting-edge tools to deliver measurable outcomes.
            </li>
            <li>
              <strong>Transparent Reporting:</strong> You’ll always know where
              your budget is getting spent. We provide clear, actionable reports
              and insights no shoptalk, just results.
            </li>
            <li>
              <strong>Creative Meets Strategy:</strong> We execute bold ideas
              with strategic precision. From compelling content to
              high-converting campaigns, creativity is our superpower.
            </li>
            <li>
              <strong>360° Digital Solutions 24x7:</strong> Whether it’s SEO,
              social media, PPC or web development, we’ve got you covered across
              every digital touchpoint.
            </li>
          </ul>
        </section>

        {/* What We Do */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-[var(--primary-color)]">
            What We Do
          </h2>
          <p>
            We are working with clients from India, U.A.E. New Zealand,
            Australia etc across verticals like ecommerce, technology, retail
            and events. At Bigwig Digital, we help brands grow, engage
            audiences, and convert in the digital world. From SEO and social
            media to paid ads, content creation, and web strategy we craft
            data-driven campaigns and strategies that deliver real, live
            results. Whether you&#39;re building your brand or boosting sales,
            we deliver smart digital solutions tailored to your goals. We are
            hungry for creativity and passionate about driving results. Our
            clients below can attest to our efforts!
          </p>
        </section>

        {/* Founder’s Message */}
        <section className="flex flex-col md:flex-row items-start gap-6 md:gap-10 my-10">
          {/* CEO Image - Left */}
          <div className="w-full md:w-1/3 mt-12">
            <Image
              src={ceo}
              alt="Vipul Dutta - Founder of Bigwig Digital"
              className="w-full h-auto rounded-xl shadow-lg object-cover"
            />
          </div>

          {/* Text Content - Right */}
          <div className="w-full md:w-2/3">
            <h2 className="text-2xl font-semibold mb-4 text-[var(--primary-color)]">
              From the Founder’s Desk
            </h2>
            <p>
              <strong>Vipul Dutta, Founder – Bigwig Digital</strong>
            </p>
            <p className="mt-2">
              At{" "}
              <strong>
                <a href="https://www.bigwigmediadigital.com/">Bigwig Digital</a>
              </strong>
              , our purpose has always been well-defined: to empower brands in
              navigating the ever-evolving digital landscape with confidence,
              creativity, and measurable results.
            </p>
            <p className="mt-2">
              When I started this journey over a decade ago, digital marketing
              was still finding its place. Today, it’s at the core of how brands
              engage with their audience, and we take pride in being part of
              that transformation.
            </p>
            <p className="mt-4">
              Bigwig Digital isn’t just a company , it’s a team of passionate
              thinkers, creators, and strategists who believe in turning bold
              ideas into real business growth. We don’t chase trends; we create
              solutions that last, rooted in data, creativity, and purpose. As
              we continue to grow and evolve, our commitment remains the same:
              to deliver meaningful impact, build strong digital foundations,
              and be a trusted partner for every brand we work with.
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default About;
