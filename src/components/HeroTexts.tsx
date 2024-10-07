"use client";
import TextRotator from "./TextRotator";
import {motion} from "framer-motion";
const HeroTexts = () => {
  return (
    <motion.div  initial={{opacity:0 ,x:-100}}
    animate={{opacity:1,x:0}}
    transition={{duration:0.2}}>
      
      <h3 className="font-poppins text-2xl max-sm:text-xl">My Name is</h3>
      <h1 className="font-rubik text-8xl name_underline text-primary max-sm:text-6xl ">
        Bader <br /> Latrache .
      </h1>
      <TextRotator />
    </ motion.div>
  );
};
export default HeroTexts;
