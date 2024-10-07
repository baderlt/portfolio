"use client";
import {motion} from "framer-motion";
const Heading = ({ children }: { children: React.ReactNode }) => {
  // CUSTOM HEADING FOR ALL PAGE
  return (
    < motion.h1 
    initial={{opacity:0,x:-100}}
    animate={{opacity:1,x:0}}
    transition={{duration:0.5}}
    className="mb-2 font-poppins text-primary font-bold text-4xl name_underline max-sm:text-2xl">
      {children}
    </motion.h1>
  );
};

export default Heading;
