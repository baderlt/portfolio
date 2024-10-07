"use client";
import { cn } from "@/lib/utils";
import { Facebook, Linkedin, ExternalLink } from "lucide-react";
import { buttonVariants } from "./ui/button";
import Link from "next/link";
import {motion} from "framer-motion"

const SocialLinks = () => {
  const links = [
    { name: "Facebook", link: "https://www.facebook.com/badr.latrch", icon: <Facebook /> },
    {
      name: "Linkedin",
      link: "https://www.linkedin.com/in/bader-latrache-05388a289",
      icon: <Linkedin />,
    },
    {
      name: "External",
      link: "https://github.com/baderlt",
      icon: <ExternalLink />,
    },
  ];
  return (
    <motion.div initial={{opacity:0,x:-100}}
    animate={{opacity:1,x:0}}
    transition={{duration:0.7}}
    > 
      {links.map((itm, indx) => {
        return (
          <Link
            key={indx}
            target="blank"
            href={itm.link}
            className={cn(buttonVariants({ variant: "outline", size: "icon" }))}
          >
            {itm.icon}
          </Link>
        );
      })}
    </motion.div>
  );
};

export default SocialLinks;
