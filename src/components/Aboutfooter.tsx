"use client";
import { Dna, Globe2, Languages } from "lucide-react";
import {motion, useInView} from "framer-motion"; 
import { useRef } from "react";
const Aboutfooter = () => {

  const ref=useRef(null);
  const IsInView=useInView(ref,{once:true});

  const items = [
    {
      name: "Language",
      answer: "English - French - Arabic",
      icon: <Languages className="h-11 w-11" />,
    },
    {
      name: "Nationality",
      answer: "Morocco",
      icon: <Globe2 className="h-8 w-8" />,
    },
    { name: "Gender", answer: "Male", icon: <Dna className="h-8 w-8" /> },
  ];

  return (
    <>
      {items.map((val, indx) => {
        return (
          <motion.div className="p-1 w-fit relative pb-8" key={indx}
          initial={{opacity:0, x:-50}}
          animate={IsInView ? {opacity:1, x:0} : {opacity:0, x:-50}}
          transition={{duration:0.5}}
          ref={ref}>
            <h1 className="gap-2 text-3xl font-poppins text-primary font-semibold relative flex icon_underline max-sm:text-2xl">
              {val.icon}
              {val.name}
            </h1>
            <div className="flex gap-2 justify-center items-center flex-row text-xl text-primary pt-3 max-lg:justify-start">
              {val.answer}
            </div>
          </motion.div >
        );
      })}
    </>
  );
};

export default Aboutfooter;
