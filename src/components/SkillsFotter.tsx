"use client";
import Image from "next/image";
import React from "react";
import {motion} from "framer-motion";

interface MyComponentProps{
    items:Array<{ alt: string; img: any }>
}

const SkillsFooter:React.FC<MyComponentProps> = ({items}) => {
  return (
    <>
      { items && items.map((val, indx) => {
        return (
          <motion.div initial={{opacity:0 ,scale:0}}
    animate={{opacity:1,scale:1}} 
    transition={{duration:0.7}} className="p-4" key={indx}>
            <Image src={val?.img} alt={val?.alt}  className="rounded-full max-w-[100px] max-h-[100px] min-w-[50px] min-h-[50px]" />
          </motion.div>
        );
      })}
    </>
  );
};

export default SkillsFooter;
