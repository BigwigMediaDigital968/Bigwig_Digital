import Footer from "../../../components/Footer";
import Nav from "../../../components/Nav";

export default function TermsOfUse() {
  return (
    <div>
      <Nav />
      <div className="pt-12 md:pt-12 bg-white min-h-screen text-black">
        <title>Terms & Conditions</title>
        <meta
          name="description"
          content="Review the terms and conditions of using BigWig Digital’s services and website."
        />
        <link
          rel="canonical"
          href="https://www.bigwigmediadigital.com/terms-and-condition"
        />

        <div className=" pb-10 pt-10 px-4 sm:px-8 max-w-5xl mx-auto">
          <h1 className="text-3xl sm:text-3xl font-bold text-center mb-6">
            Terms and Conditions of Use and Employing Bigwig Media Digital
          </h1>
          <p className="mb-6">
            Welcome to the website of{" "}
            <strong>
              {" "}
              <a href="https://www.bigwigmediadigital.com/">
                BigWig Media Digital
              </a>
            </strong>
            . By accessing or using our website or services, you agree to comply
            with and be bound by the following terms and conditions. Please read
            them carefully. If you do not agree, do not use the site or
            services.
          </p>
          <section className="mb-6">
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>General Use:</strong> This site and all materials
                provided (excluding third-party materials) are the property of
                Bigwig Media Digital and protected by copyright laws. You agree
                not to copy, modify, distribute, or exploit any content without
                prior consent.
              </li>
              <li>
                <strong>Limited License: </strong> You are granted a
                non-exclusive, non-transferable license to use the site for
                informational purposes. Any attempt to disrupt the site’s
                functionality is strictly prohibited.
              </li>
              <li>
                <strong>Third-Party Content: </strong> Third-party content made
                available on our site is for informational purposes only. Bigwig
                Media Digital does not endorse, guarantee, or accept liability
                for third-party information, products, or services. Use at your
                own risk.
              </li>
              <li>
                <strong>No Warranties:</strong> All content and services are
                provided &#34;as is&#34; without any warranties, express or
                implied. Bigwig Media Digital makes no guarantees regarding the
                accuracy, reliability, or completeness of the content.
              </li>
              <li>
                <strong>Limitation of Liability:</strong> Bigwig Media Digital
                is not liable for any damages arising from the use or inability
                to use our website or services, including lost profits, data
                loss, or business interruption.
              </li>
              <li>
                <strong>Indemnity: </strong> You agree to indemnify and hold
                harmless Bigwig Media Digital from any claims or losses
                resulting from your use of the website or violation of these
                terms.
              </li>
              <li>
                <strong>Changes: </strong> Bigwig Media Digital reserves the
                right to update these terms at any time. Continued use of the
                website signifies your acceptance of any changes. Bigwig Media
                Digital also reserves the right to change these terms and
                conditions at any time without prior notice.
              </li>
              <li>
                <strong>Intellectual Property: </strong>Client guarantees
                ownership or rights to all content provided to Bigwig Media
                Digital. We retain copyright to all work until full payment is
                received, after which rights are transferred to the client.
              </li>
              <li>
                <strong>Payment Terms:</strong> Payments must be made to “Bigwig
                Media Digital, Delhi.” Delayed payments are subject to a 1.5%
                monthly interest. Additional legal or collection fees may apply.
              </li>
              <li>
                <strong>Termination and Refunds: </strong> Clients may cancel
                agreements with prior written notice. Initial deposits are
                non-refundable. Work completed up to cancellation will be
                billed.
              </li>
              <li>
                <strong>Website Development: </strong> Clear project briefs must
                be provided. Changes after proposal approval may incur
                additional fees. Delays in content delivery or third-party
                integration may affect timelines.
              </li>
              <li>
                <strong>Hosting and Domains: </strong> PClients are responsible
                for timely renewal of hosting and domains. Bigwig Media Digital
                is not liable for data loss due to non-payment. Hosting is
                managed through third-party providers.
              </li>
              <li>
                <strong>Maintenance Plans: </strong> Maintenance packages are
                billed quarterly and cover minor updates only. Unused hours do
                not roll over. Extra hours are billed separately.
              </li>
              <li>
                <strong>Dedicated Resources: </strong> Dedicated staff must be
                fully utilized to avoid project delays. All communications and
                materials must be timely to maintain workflow.
              </li>
              <li>
                <strong>Confidentiality and Non-Solicitation: </strong> Both
                parties agree not to solicit or hire each other&#39;s employees
                for 24 months after project completion. Confidentiality of
                shared information must be maintained.
              </li>
              <li>
                <strong>Governing Law: </strong> This agreement is governed by
                Indian law and any disputes will be resolved in New Delhi
                courts.
              </li>
              <li>
                <strong>Entire Agreement: </strong> These terms represent the
                entire agreement between you and Bigwig Media Digital. All
                amendments must be made in writing.
              </li>
            </ul>
          </section>
        </div>
        <Footer />
      </div>
    </div>
  );
}
