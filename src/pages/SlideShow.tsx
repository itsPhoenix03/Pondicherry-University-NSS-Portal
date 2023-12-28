import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import img from "../assets/bg-pic.jpg";
import img1 from "../assets/ss-1.jpg";
import img2 from "../assets/ss-2.png";
import img3 from "../assets/ss-3.png";
import { useNavigate } from "react-router-dom";

//! Slideshow Component

const SlideShow = () => {
  // Navigate Hook
  const navigate = useNavigate();

  // Images Array for slideshow
  const images: string[] = [img, img1, img2, img3];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Increment index to show the next image
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1500); // Change slide every 2 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [images.length]);

  return (
    <div className="w-full h-[87vh] lg:max-h-[88.4vh] relative overflow-hidden">
      <AnimatePresence>
        <motion.div
          key={currentIndex}
          initial={{
            opacity: 0,
          }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
          }}
          transition={{ duration: 1.5 }}
          className="w-full h-full "
        >
          {/* <div className="absolute top-0 left-0 w-full h-full bg-neutral-900/30" /> */}
          <img
            src={images[currentIndex]}
            alt="slideshow-image"
            className="object-cover h-full w-full"
          />
        </motion.div>
      </AnimatePresence>

      <button
        onClick={() => navigate("/events")}
        className="px-6 py-4 bg-accent text-white font-semibold text-xs md:text-lg cursor-pointer absolute bottom-[5rem] right-0 hover:bg-primary
              transition-all duration-300 ease-in-out"
      >
        Go to Pondicherry University NSS Portal
      </button>
    </div>
  );
};

export default SlideShow;
