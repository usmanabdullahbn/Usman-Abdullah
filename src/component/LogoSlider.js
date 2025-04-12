import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import img1 from "../asserts/logo/img_1.png";
import img2 from "../asserts/logo/img_2.png";
import img3 from "../asserts/logo/img_3.png";
import img4 from "../asserts/logo/img_4.png";
import img5 from "../asserts/logo/img_5.png";

const partners = [
  { name: "Partner 1", logo: img1 },
  { name: "Partner 2", logo: img2 },
  { name: "Partner 3", logo: img3 },
  { name: "Partner 4", logo: img4 },
  { name: "Partner 5", logo: img5 },
];

const LogoSlider = () => {
  const [duplicatedPartners, setDuplicatedPartners] = useState([]);

  useEffect(() => {
    // Duplicate the partners array to create a seamless loop
    setDuplicatedPartners([...partners, ...partners]);
  }, []);

  return (
    <div className="w-full py-12 overflow-hidden bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl text-center text-gray-600 mb-12 relative before:content-[''] before:absolute before:w-48 before:h-[1px] before:bg-gray-300 before:left-0 before:top-1/2 after:content-[''] after:absolute after:w-48 after:h-[1px] after:bg-gray-300 after:right-0 after:top-1/2">
          Technologies I Worked On
        </h2>

        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex"
            animate={{
              x: ["0%", "-40%"], // Moves halfway to keep only a few logos visible
            }}
            transition={{
              duration: 15, // Adjust speed if necessary
              ease: "linear",
              repeat: Number.POSITIVE_INFINITY,
            }}
            style={{ width: "max-content" }} // Ensures smooth movement
          >
            <div className="flex gap-8 items-center">
              {duplicatedPartners.map((partner, index) => (
                <motion.div
                  key={`${partner.name}-${index}`}
                  className="flex-shrink-0 w-40 h-20 relative grayscale hover:grayscale-0 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src={partner.logo || "/placeholder.svg"}
                    alt={`${partner.name} logo`}
                    className="object-contain w-full h-full"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LogoSlider;
