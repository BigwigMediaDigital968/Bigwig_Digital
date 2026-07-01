import React from "react";

// Define the structure for our branch data
interface BranchLocation {
  city: string;
  address: string;
  mapUrl: string;
  phone: string;
  postalCode: string;
  region: string;
}

const branches: BranchLocation[] = [
  {
    city: "Bhopal",
    address:
      "Plot Number 2, near Hanuman Mandir, Idgah Hills, Bhopal, Madhya Pradesh 462001",
    mapUrl:
      "google.com/maps/place/Bigwig+Digital/data=!4m2!3m1!1s0x0:0x39395dc0edfc0c60?sa=X&ved=1t:2428&hl=en-GB&ictx=111",
    phone: "09685892813",
    postalCode: "462001",
    region: "Madhya Pradesh",
  },
  {
    city: "Goa",
    address: "SF-15, Prabhu Chambers, Mapusa, Goa, 403507",
    mapUrl:
      "https://www.google.com/maps/place/Bigwig+Digital/data=!4m2!3m1!1s0x0:0xa54bc66585ac168e?sa=X&ved=1t:2428&hl=en-GB&ictx=111",
    phone: "09685892813",
    postalCode: "403507",
    region: "Goa",
  },
];

export const Branch: React.FC = () => {
  // Generate Local Business Schema dynamically for SEO benefits
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": branches.map((branch, index) => ({
      "@type": "LocalBusiness",
      "@id": `https://bigwig.com/#branch-${index}`,
      name: `Bigwig - ${branch.city} Branch`,
      telephone: branch.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: branch.address.split(`, ${branch.city}`)[0],
        addressLocality: branch.city,
        addressRegion: branch.region,
        postalCode: branch.postalCode,
        addressCountry: "IN",
      },
      hasMap: branch.mapUrl,
    })),
  };

  return (
    <section className="bg-[var(--color1)] py-16 px-4 sm:px-6 lg:px-8 text-white">
      {/* Injecting Local SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-[var(--color5)]">
            Other Branches
          </h2>
          <p className="mt-4 text-xl text-[var(--color4)]">
            Find a Bigwig location near you
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {branches.map((branch, index) => (
            <div
              key={index}
              className="bg-[var(--color2)] rounded-lg shadow-xl overflow-hidden border border-[var(--color3)]/30 flex flex-col justify-between p-6 sm:p-8 hover:border-[var(--color4)] transition-colors duration-300"
            >
              <div>
                <h3 className="text-2xl font-bold text-[var(--color5)] mb-4 flex items-center gap-2">
                  <span className="w-1 h-6 bg-[var(--primary-color)] rounded-full inline-block"></span>
                  {branch.city} Branch
                </h3>

                <div className="space-y-4 text-gray-200">
                  {/* Address Section */}
                  <div className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-[var(--primary-color)] shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <p className="text-base leading-relaxed">
                      {branch.address}
                    </p>
                  </div>

                  {/* Phone Section */}
                  <div className="flex items-center gap-3">
                    <svg
                      className="w-6 h-6 text-[var(--primary-color)] shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <a
                      href={`tel:${branch.phone}`}
                      className="hover:text-[var(--color4)] transition-colors"
                    >
                      {branch.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8">
                <a
                  href={branch.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-5 py-3 text-base font-medium rounded-md text-white bg-[var(--primary-color)] hover:bg-[var(--secondary-color)] transition-all duration-300 shadow-md cursor-pointer"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                    />
                  </svg>
                  Get Directions
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
