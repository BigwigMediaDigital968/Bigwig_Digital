import Footer from "../../../components/Footer";
import Nav from "../../../components/Nav";

export default function PrivacyPolicy() {
  return (
    <div>
      <Nav />
      <div className="pt-16 md:pt-16 bg-white min-h-screen text-black">
        <div>
          <title>Privacy Policy</title>
          <meta
            name="description"
            content="Learn how BigWig Digital collects, uses, and protects your data."
          />
          <link
            rel="canonical"
            href="https://www.bigwigdigital.in/privacy-policy"
          />
        </div>
        <div className=" pb-10 px-4 sm:px-8 max-w-5xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6">
            Privacy Policy
          </h1>
          <p className="text-center text-sm text-gray-500 mb-10">
            Last Modified: July 23, 2025
          </p>

          <section className="mb-6">
            <p>
              At Welcome to the website of{" "}
              <strong>
                {" "}
                <a href="https://www.bigwigmediadigital.com/">
                  BigWig Media Digital
                </a>
              </strong>
              . By accessing or ., we are dedicated to safeguarding and securing
              the privacy of our visitors. This Privacy Policy explains what
              happens to any personal data that you provide to us, or that we
              collect from you simultaneously you visit our site. We do update
              this Policy from regularly so please do review this Policy on
              regular basis. <b>Information We Collect</b> In operating and
              managing our website we may capture and utilize the following data
              about you:
            </p>
          </section>

          <section className="mb-6">
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Details about your use of our website including details of your
                visits such as pages viewed and the resources that you access.
                Such information should be about traffic data, location data and
                other communication data.
              </li>
              <li>
                Information provided willingly by you. For example, when you
                register for information or purchase of a service.
              </li>
              <li>
                Information that you provide when you interact with us by any
                means.
              </li>
            </ul>
          </section>

          <section className="mb-6">
            <p>
              Use of Your Information, we use the information that we collect
              from you to provide our services based on given information. In
              addition to this we may use the information for one or more of the
              following purposes:
            </p>
          </section>

          <section className="mb-6">
            <ul className="list-disc pl-6 space-y-2">
              <li>
                To provide information to you, on your request, relating to our
                services.
              </li>
              <li>
                To provide information about other relating services that may be
                of interest to you. Such additional information will only be
                provided when you have consented to receive such information.
              </li>
              <li>
                To inform you about any changes to our website and services.
              </li>
              <li>
                To improve our website and customer experience to enable us to
                personalize your experience while visiting our website.
              </li>
              <li>
                If you have previously purchased any service from us, we may
                provide to you details of similar service, or other services,
                that you may be interested in.
              </li>
              <li>
                To administer a contest, promotion, survey or other site
                features.
              </li>
            </ul>
          </section>

          <section className="mb-6">
            <p>
              Your information, whether public or private, will not be sold,
              exchanged, transferred, or given to any other person or community
              for any reason whatsoever, without your consent, other than for
              the purpose of delivering the purchased service.
              <b>Storing Your Personal Data</b> Unfortunately, the sending of
              information via the internet is not totally secure but, on some
              occasion, such information can be intercepted. We cannot guarantee
              the security of data that you choose to send us electronically,
              sending such kind of information is entirely at your own risk.
              Once we receive your data, we make sure to implement appropriate
              safeguards to store it securely. <b>Use of Cookies</b> Cookies
              provide information regarding the computer used by a visitor. We
              may use cookies to gather information about your computer in order
              to assist us in improving our website. We may gather information
              about your general internet use by using the cookie. Where used,
              these cookies are downloaded to your computer and stored on the
              computer’s hard drive. Such information will not identify you
              personally. It is statistical data. This statistical data does not
              identify any personal details whatsoever You can adjust the
              settings on your computer to decline any cookies if you wish. This
              can easily be done by activating the reject cookies setting on
              your computer. Our advertisers may also use cookies, over which we
              have no control. Such cookies (if used) would be downloaded once
              you click on advertisements on our website.{" "}
              <b>Disclosing Your Information</b>, we will not disclose your
              personal information to any other party other than in accordance
              with this Privacy Policy and in the circumstances detailed below:
            </p>
          </section>
          <section className="mb-6">
            <ul className="list-disc pl-6 space-y-2">
              <li>
                In the event that we sell any or all of our business to the
                buyer.
              </li>
              <li>
                Where we are legally required by law to disclose your personal
                information.
              </li>
              <li>To further fraud protection and reduce the risk of fraud.</li>
            </ul>
          </section>
          <section className="mb-6">
            <p>
              <b>Third Party Links</b> On occasion, we include links to third
              parties on this website. Where we provide a link, it does not mean
              that we endorse or approve that site’s policy towards visitor
              privacy. You should review their privacy policy before sending
              them any personal data. <b>Online Privacy Policy Only</b> This
              online privacy policy applies only to information collected
              through our website and not to information collected offline.
              <b>Your Consent</b> By using our website, you consent to our
              privacy policy <b>Contacting Us</b> Please do not hesitate to
              contact us regarding any matter relating to this Privacy Policy
              at: www.bigwigdigital.in Bigwig Media Digital, Plot No – 2, Sanjay
              Nagar, Gulabi Bagh, Delhi – 110007,{" "}
              <a href="mailto:vipul@bigwigmedia.in" className="text-blue-600">
                vipul@bigwigmedia.in
              </a>
            </p>
          </section>
        </div>
        <Footer />
      </div>
    </div>
  );
}
