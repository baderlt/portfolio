"use client";
import Heading from "@/components/Heading";
import SkillsFooter from "@/components/SkillsFotter";
import { Badge } from "@/components/ui/badge";
import { Lightbulb } from "lucide-react";
import html from "../../../public/html.png";
import css from "../../../public/css.png";
import scss from "../../../public/scss.png";
import js from "../../../public/js.png";
import ts from "../../../public/ts.png";
import php from "../../../public/php.png";
import react from "../../../public/react.png";
import nextjs from "../../../public/nextjs.jpeg";
import cplus from "../../../public/c++.jpeg";
import tailwind from "../../../public/tailwindcss.png";
import github from "../../../public/github.png";
import vscode from "../../../public/vscode.png";
import laravel from "../../../public/laravel.jpeg";
import docker from "../../../public/docker.png";
import Node from "../../../public/node.png"
import Mysql from '../../../public/mysql.png';
import Mongodb from '../../../public/mongodb.jpeg';
import socket from '../../../public/socket.png';
import {motion} from "framer-motion";
import Description from "@/components/desciption";
const skillPage = () => {

  const language = [
    { alt: "html", img: html },
    { alt: "css", img: css },
    { alt: "js", img: js },
    { alt: "ts", img: ts },
    { alt: "php", img: php },
  ];
  const framework = [
    { alt: "react", img: react },
    { alt: "nextjs", img: nextjs },
    { alt: "tailwind", img: tailwind },
    { alt: "github", img: github },
    { alt: "Docker", img: docker },
    { alt: "laravel", img: laravel },
    { alt: "Node.js", img: Node },
    { alt: "socket", img: socket },
  
  ];
  const databases=[
    { alt: "MYSQL", img: Mysql },
    { alt: "Mongodb", img: Mongodb },
  ]

  return (
    // SKILLS PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge className=" mt-16 gap-2">
        <Lightbulb className="h-5 w-5" />
        My Skills
      </Badge>
      <div className="flex flex-col gap-8">
        <Heading>My Technical Experience/Skills.</Heading>

      <Description>
        I have a solid understanding of HTML5, CSS3, JavaScript, and React.js, 
        along with intermediate experience in Next.js and TypeScript, and knowledge of 
        responsive design principles. I am also skilled in database management with MySQL
         and MongoDB. Specializing in web application development, 
        I excel in utilizing JavaScript, Laravel, React, Next.js, and Node.js to build robust and engaging projects.
        </Description>
        <div className="block my-8 border-y p-2">
          <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl">
            Programming Languages
          </h1>
          <div className="w-full flex flex-wrap  justify-start lg:justify-around items-center">
            <SkillsFooter items={language} />
          </div>
        </div>
        <div className="block">
          <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl">
            Framework/Libraries and Version Control
          </h1>
          <div className="w-full  flex-wrap   flex justify-start lg:justify-around items-center">
            <SkillsFooter items={framework} />
          </div>
        </div>
        <div className="block">
          <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl">
          Database management
          </h1>
          <div className="w-full h-fit flex-wrap  flex justify-start lg:justify-start  items-center">
            <SkillsFooter items={databases} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default skillPage;
