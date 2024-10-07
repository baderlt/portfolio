"use client";
import {motion ,useInView} from "framer-motion";
import { useRef } from "react";
const Education_Description = ({ children }: { children: React.ReactNode }) => {
  const ref=useRef(null);
  const IsInView=useInView(ref,{once:true});
  // CUSTOM HEADING FOR ALL PAGE
  return (
    < motion.p 
    initial={{opacity:0,x:200}}
    animate={IsInView ?  {opacity:1,x:0} :  {opacity:0,x:+200}} 
    transition={{duration:0.5}}
    ref={ref}
    className=" font-poppins text-base w-full text-primary  max-sm:text-xs">
      {children}
    </motion.p>
  );
};

export default Education_Description;
