import React, { useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const Card2 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: false });
  const controls = useAnimation();

  // Trigger animation when the section is in view
  React.useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      ref={ref}
      className="flex flex-col lg:flex-row items-center justify-center gap-4 py-4 bg-gray-200 sm:py-8 lg:py-20"
    >
      {/* Left Card */}
      <motion.div
        className="bg-white shadow-md rounded-lg p-4 max-w-xs w-full sm:max-w-sm text-center transition-transform duration-300 hover:shadow-2xl hover:scale-105"
        initial="hidden"
        animate={controls}
        variants={cardVariants}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <div className="flex justify-center items-center mb-4">
          <div className="bg-yellow-100 p-2 rounded-full">
            <img
              className="rounded-full w-24 h-24"
              src="../../public/images/principal.png"
              alt=""
            />
          </div>
        </div>
        <h2 className="text-md font-semibold text-gray-800">Hello</h2>
        <p className="text-gray-500 mt-2 mb-4 text-sm">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere
          voluptatibus laborum aspernatur atque voluptate? Id officiis iste nemo
          cupiditate atque recusandae doloremque officia.
        </p>
        <button className="text-orange-500 font-semibold border border-orange-500 rounded-full px-3 py-1 hover:bg-orange-500 hover:text-white transition-colors duration-300 text-sm">
          Read More
        </button>
      </motion.div>

      {/* Middle Card (Larger) */}
      <motion.div
        className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full sm:max-w-lg text-center transition-transform duration-300 hover:shadow-2xl hover:scale-105"
        initial="hidden"
        animate={controls}
        variants={cardVariants}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="flex justify-center items-center mb-4">
          <div className="bg-yellow-100 p-2 rounded-full">
            <img
              className="rounded-full w-28 h-28"
              src="../../public/images/principal.png"
              alt=""
            />
          </div>
        </div>
        <h2 className="text-lg font-semibold text-gray-800">
          Principal's Message
        </h2>
        <p className="text-gray-500 mt-2 mb-4 text-base">
          As you continue your journey in education, remember that every day is
          a new opportunity to learn, grow, and become the best version of
          yourself. Stay curious, work hard ...
        </p>
        <button className="text-orange-500 font-semibold border border-orange-500 rounded-full px-4 py-2 hover:bg-orange-500 hover:text-white transition-colors duration-300 text-sm">
          <a href="principal-message"> Read More </a>
        </button>
      </motion.div>

      {/* Right Card */}
      <motion.div
        className="bg-white shadow-md rounded-lg p-4 max-w-xs w-full sm:max-w-sm text-center transition-transform duration-300 hover:shadow-2xl hover:scale-105"
        initial="hidden"
        animate={controls}
        variants={cardVariants}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <div className="flex justify-center items-center mb-4">
          <div className="bg-yellow-100 p-2 rounded-full">
            <img
              className="rounded-full w-24 h-24"
              src="../../public/images/sports.jpg"
              alt=""
            />
          </div>
        </div>
        <h2 className="text-md font-semibold text-gray-800">
          Annual Sports Meet
        </h2>
        <p className="text-gray-500 mt-2 mb-4 text-sm">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere
          voluptatibus laborum aspernatur atque voluptate? Id officiis iste nemo
          cupiditate atque recusandae doloremque officia.
        </p>
        <button className="text-orange-500 font-semibold border border-orange-500 rounded-full px-3 py-1 hover:bg-orange-500 hover:text-white transition-colors duration-300 text-sm">
          Read More
        </button>
      </motion.div>
    </div>
  );
};

export default Card2;
