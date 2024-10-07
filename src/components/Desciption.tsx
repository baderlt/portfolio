"use client";
import {motion , useInView} from "framer-motion";
import { useRef } from "react";
const Description = ({ children }: { children: React.ReactNode }) => {
    
    const ref=useRef(null);
    const isInView=useInView(ref,{once:true});
    // CUSTOM HEADING FOR ALL PAGE

  return (
      <motion.p 
    initial={{opacity:0 ,x:50}}
    animate={isInView ? {opacity:1,x:0} : {opacity:0,x:50}}
    transition={{duration:1}}
    ref={ref}
    className="font-poppins text-xl w-full text-primary max-sm:text-lg">
      {children}
    </motion.p>
  );
};

export default Description;
