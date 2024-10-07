"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { Badge } from "./ui/badge";
import { motion,useInView} from "framer-motion";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { useRef } from "react";

interface projectcardprops {
  index:number;
  value: any;
}
const ProjectCards: React.FC<projectcardprops> = ({ index ,value }) => {
   let X=index  % 2 ==0 ? -200 :200; 
   const ref =useRef(null);
   const isInView=useInView(ref,{once:true});
    
  return (

        <motion.div initial={{opacity:0,x:X}}
        key={index}
        ref={ref}
    animate={ isInView ?{opacity:1,x:0}:{opacity:0,x:X}}
    transition={{duration:0.8}}
    exit={{opacity:0}}>
      <CardContainer className="inter-var mr-6 ">
        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl    ">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            <Card className="w-full h-[43rem]   m-1">
              <CardHeader>
                <Image
                  src={value.img}
                  alt="project"
                  className="  mb-2 aspect-video w-full hover:scale-105 hover:transition-transform duration-500"
                />
                <CardTitle>{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base font-poppins">{value.description}</p>
                <div className=" w-full h-fit  mt-2 justify-center flex-row gap-3">
                  {value.tags.map((itm: string, indx: number) => {
                    return (
                      <Badge key={indx} className="m-1">
                        {itm}
                      </Badge>
                    );
                  })}
                </div>
              </CardContent>
              <CardFooter className="items-center justify-center flex flex-col">
                <Link href={value.link} legacyBehavior>
                  <a target="_blank">
                    <button
                      className={cn(
                        buttonVariants({ variant: "default", size: "lg" }),
                        "mb-2"
                      )}
                    >
                      Visit Project
                    </button>
                  </a>
                </Link>
               {value.preview && 
                     <Link  href={value.preview} legacyBehavior>
                     <a target="_blank">
                       <button
             
                       className={cn(
                         buttonVariants({ variant: "subtle", size: "lg" })
                       )}
                       >
                     Preview
                     </button>
                     </a>
                </Link>
                }
              </CardFooter>
            </Card>
          </CardItem>
        </CardBody>
      </CardContainer>
    </motion.div>
 
  );
};

export default ProjectCards;
