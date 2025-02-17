"use client";
import React, { useEffect, useState } from "react";
import {motion} from "framer-motion";
function TextRotator() {
const [order,setorder]=useState(false);
useEffect(()=>{
 setTimeout(() => {
  setorder(!order);
 }, 3000);

},[order])
  return (
    <motion.div initial={{opacity:0 ,x:-100}} 
    animate={{opacity:1,x:0}}
    transition={{duration:0.5}}
    className="py-4  rounded-md flex flex-col justify-center items-center overflow-hidden">
      <div className="font-poppins text-base sm:text-2xl [text-wrap:balance] text-gray-700">
        I am a Web Developer &
        <span className="inline-flex ml-2 flex-col h-[1px] sm:h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] overflow-hidden">
          <li className={`text-[#2f7df4] animate-pulse ${order ? "order-2  ":"order-1 "}`}>Contributer</li>
          <li className={`text-[#2f7df4] animate-pulse  ${order ? "order-1 ":"order-2 "} `}>Problem solver </li>
        </span>
      </div>
    </motion.div>
  );
}

export default TextRotator;
