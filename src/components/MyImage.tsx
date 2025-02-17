"use client";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { CardContainer } from "./ui/3d-card";

// Type definition for the image list
const MyImageList: Record<number, string> = {
  1: "Me/me1.jpg",
  2: "Me/me2.jpg",
  3: "Me/me3.jpg",
  4: "Me/me4.jpg"
};

// Function to preload images
const preloadImages = (imageList: Record<number, string>) => {
  Object.values(imageList).forEach((src) => {
    const img = new Image();
    img.src = src;
  });
};

const MyImage = () => {
  const [curentImage, setCurentImage] = useState<number>(1); // curentImage is of type number
  const ref = useRef(null);
  const IsInView = useInView(ref, { once: true });

  // Change image after 3 seconds and preload images
  useEffect(() => {
    preloadImages(MyImageList); // Preload images at the beginning

    const intervalId = setInterval(() => {
      setCurentImage((prevImage) =>
        prevImage === 4 ? 1 : prevImage + 1
      );
    }, 3000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      animate={IsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 200 }}
      transition={{ duration: 0.5 }}
      ref={ref}
      className="font-poppins text-base w-full text-primary max-sm:text-xs"
    >
      <CardContainer>
        <img
          src={MyImageList[curentImage]} // Preloaded image
          className="imgbader"
          alt="bader latrache"
          key={curentImage} // Ensure React updates the image on each state change
        />
      </CardContainer>
    </motion.div>
  );
};

export default MyImage;
