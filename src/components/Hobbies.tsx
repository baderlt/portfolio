"use client";

import {motion, useInView} from "framer-motion"; 
import { useRef } from "react";
const Hobbies =  ({ children }: { children: React.ReactNode }) => {
    const ref=useRef(null);
    const IsInView=useInView(ref,{once:true});

  return (
    <>
  
          <motion.div className="block hover:bg-secondary/30 p-2 rounded-md w-full" 
          initial={{opacity:0, x:100}}
          animate={IsInView ? {opacity:1, x:0} : {opacity:0, x:100}}
          transition={{duration:0.5}}
          ref={ref}>
    {children}
          </motion.div >
        
   
    </>
  );
};

export default Hobbies;
