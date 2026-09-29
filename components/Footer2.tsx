"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedin,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import logo from "../Assets/bigwig digital logo (11).png";
import line2 from "../Assets/line2.png";
import Image from "next/image";
import { BUSINESS } from "@/data/Business";

function Footer2() {
  return (
    <div className="relative">
      <Image
        src={line2}
        alt=""
        className="absolute top-0 left-0 invert"
        draggable="false"
      />
      <footer className="bg-[#1f1f1f] text-white pt-12 pb-6 ">
        <div className="w-11/12 mx-auto px-2 ">
          {/* Top Section */}
          <div className="flex flex-col md:flex-row gap-14 mb-8 ">
            {/* Branding - 1/3 */}
            <div className="md:w-1/3">
              <div className="py-2 md:px-2 md:py-1 flex justify-center md:justify-start mb-4">
                <Image
                  src={logo}
                  alt="Bigwig Logo"
                  className="w-60"
                  draggable="false"
                />
              </div>
              <p className="md:w-2/3 text-sm leading-relaxed">
                Elevating your media presence with innovative solutions and
                unmatched creativity. Let’s build something extraordinary
                together.
              </p>
              <div className="flex gap-3 mt-4">
                <img
                  src="https://media.istockphoto.com/id/482478655/photo/arab-emirates-flag.jpg?s=612x612&w=0&k=20&c=fJfB5DUYTEWrJ96RbIxJoLo7uQrYkCPqo0F2BTNNp8A="
                  alt=""
                  className="w-8"
                  draggable="false"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Flag_of_New_Zealand.svg/1200px-Flag_of_New_Zealand.svg.png"
                  alt=""
                  className="w-8"
                  draggable="false"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg"
                  alt=""
                  className="w-8"
                  draggable="false"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Australia_%28converted%29.svg"
                  alt=""
                  className="w-10"
                  draggable="false"
                />
              </div>
            </div>

            <div className="md:w-1/3">
              <h3 className="text-lg font-semibold mb-3">Our Services</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="/search-engine-optimization"
                    className="hover:text-blue-600"
                  >
                    Search Engine Optimization
                  </a>
                </li>
                <li>
                  <a
                    href="/performance-marketing"
                    className="hover:text-blue-600"
                  >
                    Performance Marketing
                  </a>
                </li>
                <li>
                  <a
                    href="/online-reputation-management"
                    className="hover:text-blue-600"
                  >
                    Online Reputation Management
                  </a>
                </li>
                <li>
                  <a
                    href="/web-desing-and-app-developement"
                    className="hover:text-blue-600"
                  >
                    Web Design & App Development
                  </a>
                </li>
                <li>
                  <a href="/google-my-business" className="hover:text-blue-600">
                    Google My Business
                  </a>
                </li>
                <li>
                  <a
                    href="/social-media-management"
                    className="hover:text-blue-600"
                  >
                    Social Media Management
                  </a>
                </li>
              </ul>
            </div>

            {/* Quick Links, Resources, Contact Info - 2/3 */}
            <div>
              <div>
                <h3 className="text-lg font-semibold mb-3">Contact Info</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                    <a
                      href="mailto:support@bigwigmedia.in"
                      className="hover:underline"
                    >
                      support@bigwigmedia.in
                    </a>
                  </li>
                  <li className="flex items-center">
                    <FontAwesomeIcon icon={faPhone} className="mr-2" />
                    {BUSINESS.telephoneDisplay}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-500 pt-6 flex flex-col items-center gap-6 md:flex-row md:justify-between">
            {/* Social Links */}
            <div className="flex space-x-4">
              {[
                {
                  icon: faFacebookF,
                  href: "https://www.facebook.com/profile.php?id=61575340735142",
                },
                {
                  icon: faInstagram,
                  href: "https://www.instagram.com/bigwigmediadigital/",
                },
                {
                  icon: faYoutube,
                  href: "https://www.youtube.com/@BigwigDigital2024",
                },
                {
                  icon: faXTwitter,
                  href: "https://x.com/bigwig_digital",
                },
                {
                  icon: faLinkedin,
                  href: "https://www.linkedin.com/company/106698073/admin/dashboard/",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl hover:text-blue-600 transition"
                >
                  <FontAwesomeIcon icon={social.icon} />
                </a>
              ))}
            </div>

            {/* Footer Links */}
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a
                href="/privacy-policy"
                className="hover:text-blue-600 transition"
              >
                Privacy Policy
              </a>
              <a
                href="/terms-of-use"
                className="hover:text-blue-600 transition"
              >
                Terms of Service
              </a>
            </div>

            {/* Copyright */}
            <p className="text-sm text-center">
              © 2025 BigwigDigital.in. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer2;
