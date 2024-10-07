"use client";
import { cn } from "@/lib/utils";
import { Download } from "lucide-react";
import Link from "next/link";
import React, { useRef } from "react";
import { buttonVariants } from "./ui/button";
import HackerBtn from "./HackerBtn";
import {motion ,useInView} from "framer-motion";

function DownLoadResumeBtn() {

  
  const motionRef=useRef(null);
  const isInView=useInView(motionRef,{once:true});

  return (
    <motion.div 
    initial={{opacity:0 ,scale:0}}
    animate={ isInView ?{ opacity:1,scale:1} :{opacity:0 ,scale:0}}
    transition={{duration:1}}
    ref={motionRef} className="h-fit w-full mt-2 py-2 px-4">
      <HackerBtn label="Download Resume" />
    </motion.div>
  );
}

export default DownLoadResumeBtn;
