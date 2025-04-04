import Image from "next/image";
import { faLeaf, faCow, faSeedling } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Image data for the collage
const collageImages = [
  {
    id: 1,
    src: "/CSI/1.jpeg",
    alt: "Organic Farm Products",
    className: "col-span-2 row-span-2" // This will be the largest image
  },
  {
    id: 2,
    src: "/CSI/2.jpeg",
    alt: "Moringa Powder",
    className: "col-span-1 row-span-1"
  },
  {
    id: 3,
    src: "/CSI/3.jpeg",
    alt: "Sahiwal Cows",
    className: "col-span-1 row-span-1"
  },
  {
    id: 4,
    src: "/CSI/4.jpeg", // Add your fourth image
    alt: "Farm Landscape",
    className: "col-span-1 row-span-1"
  },
  {
    id: 5,
    src: "/CSI/5.jpeg", // Add your fifth image
    alt: "Harvest Products",
    className: "col-span-1 row-span-1"
  },
  {
    id: 6,
    src: "/CSI/5.jpeg", // Add your sixth image
    alt: "Harvest Products",
    className: "col-span-1 row-span-1"
  }
];

const Banner3 = () => {
  return (
    <div className="w-full bg-white py-10 px-5 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Content - Same as before */}
        <div className="flex-1 space-y-6">
          <h3 className="text-green-700 text-lg font-semibold uppercase">
            Welcome to Naira Agro
          </h3>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            Organic Farming & Premium Dairy Products
          </h1>

          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="bg-green-100 p-2 rounded-full">
                <FontAwesomeIcon icon={faLeaf} className="text-green-600 w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Moringa Powder</h4>
                <p className="text-gray-600 text-sm">
                  Nutrient-rich superfood packed with vitamins and antioxidants
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="bg-green-100 p-2 rounded-full">
                <FontAwesomeIcon icon={faCow} className="text-green-600 w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Sahiwal Cows</h4>
                <p className="text-gray-600 text-sm">
                  High-yield dairy breed producing 2,000-2,500kg milk per lactation
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="bg-green-100 p-2 rounded-full">
                <FontAwesomeIcon icon={faSeedling} className="text-green-600 w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Organic Farming</h4>
                <p className="text-gray-600 text-sm">
                  Chemical-free cultivation of pulses, dals, and fruit trees
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 p-6 bg-green-50 rounded-xl">
            <h3 className="text-lg font-semibold text-green-700 mb-3">Why Choose Us?</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                <span>Direct from farm to your home</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                <span>100% organic and sustainable practices</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                <span>Supporting local farming communities</span>
              </li>
            </ul>
          </div>        
        </div>

        {/* Right Content - Image Collage */}
        <div className="flex-1 w-full">
          <div className="grid grid-cols-3 grid-rows-3 gap-2 aspect-square">
            {collageImages.map((image) => (
              <div 
                key={image.id}
                className={`relative rounded-lg overflow-hidden ${image.className}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner3;