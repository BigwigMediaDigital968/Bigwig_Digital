// app/components/Location.tsx
import { MapPin } from "lucide-react";

type Location = {
  city: string;
  address: string;
  image: string;
  mapUrl: string;
};

const locations: Location[] = [
  {
    city: "Delhi",
    address: "2, Sanjay Nagar, Gulabi Bagh, Delhi 110007, India",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUQOAYA94K7nXM77wSGlX1svzvszrkWd7O0w&s",
    mapUrl: "https://maps.app.goo.gl/UxoWwYXBFKHmXfgP6",
  },
  {
    city: "Australia",
    address: "Melbourne 80 Lsabella way, Tarneit 3029 Melbourne",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHo7qSHU9pmWI516rGGG1xDOiw0G5U0H54YA&s",
    mapUrl: "https://maps.app.goo.gl/tRCezdMET47G8x9G8",
  },
  {
    city: "New Zealand",
    address: "9/136 Marua Road, Mount Wellington, Auckland 1051",
    image:
      "https://assets.traveltriangle.com/blog/wp-content/uploads/2015/09/Auckland.jpg",
    mapUrl: "https://maps.app.goo.gl/C8LuG1hYk5ejkxX97",
  },
];

const LocationCard = ({ city, address, image, mapUrl }: Location) => {
  return (
    <div className="group [perspective:1000px] mb-10 py-4">
      <div className="relative h-60 w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front Side */}
        <div
          className="absolute inset-0 rounded-xl bg-cover bg-center shadow-md border border-gray-200 overflow-hidden"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div
            className="flex h-full w-full flex-col justify-end rounded-xl 
            bg-gradient-to-t from-white/90 via-white/30 to-transparent p-4"
          >
            <MapPin className="text-orange-500 mb-1" />
            <h3 className="text-xl font-semibold text-gray-900">{city}</h3>
          </div>
        </div>

        {/* Back Side */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center 
            rounded-xl bg-cover bg-center text-center text-gray-900 shadow-md 
            border border-gray-200 [transform:rotateY(180deg)] [backface-visibility:hidden]"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div
            className="flex h-full w-full flex-col justify-end rounded-xl 
            bg-gradient-to-t from-white/95 via-white/40 to-transparent p-4"
          >
            <p className="text-sm text-gray-700 mb-4">{address}</p>
            <a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded bg-orange-500 px-4 py-1 text-sm font-semibold 
              text-white hover:bg-orange-600 transition"
            >
              View on Map
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const LocationsSection = () => {
  return (
    <section className="px-4 md:px-16 lg:px-24 bg-white text-gray-900 mb-6">
      <h2 className="text-5xl font-bold text-center mb-6">Our Presence</h2>

      <div className="overflow-x-auto sm:overflow-x-visible">
        <div className="flex sm:grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {locations.map((location, index) => (
            <div key={index} className="min-w-[220px] sm:min-w-0">
              <LocationCard {...location} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
