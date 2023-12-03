import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import img from "../assets/bg-pic.jpg";
import img1 from "../assets/ss-1.jpg";
import img2 from "../assets/ss-2.png";
import img3 from "../assets/ss-3.png";

//! Slideshow Component

const SlideShow = () => {
  // Images Array for slideshow
  const images: string[] = [img, img1, img2, img3];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Increment index to show the next image
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change slide every 2 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [images.length]);

  return (
    <div className="w-full max-h-[88.4vh] relative overflow-hidden">
      <AnimatePresence>
        <motion.div
          key={currentIndex}
          initial={{
            opacity: 0,
            x: 300,
          }}
          animate={{ opacity: 1, x: 0 }}
          exit={{
            opacity: 0,
            x: -300,
          }}
          transition={{ duration: 1 }}
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
    </div>
  );
};

export default SlideShow;
