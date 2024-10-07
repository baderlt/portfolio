import Heading from "@/components/Heading";
import ProjectCards from "@/components/ProjectsCard";
import { Badge } from "@/components/ui/badge";
import { Key, Layers } from "lucide-react";
import chatApp from "../../../public/chat_app.png";
import ddq from "../../../public/package.png";
import stock from "../../../public/stock.png";
import Description from "@/components/Desciption";

const projectsPage = () => {
  // PROJECTS DATA
  const Projects = [
    {
      title: "Chat App",
      img: chatApp,
      description:
        "Chat App built using the MERN stack (MongoDB, Express.js, React.js, Node.js) and styled with Tailwind CSS. Engage in real-time conversations with secure messaging, showcasing my expertise in modern web development technologies.",
      tags: [
        "Socket.io",
        "React.js",
        "Express.js",
        "Node.js",
        "TailwindCSS",
        "Mongodb",
      ],
      link: "https://github.com/baderlt/Chat_App",
      preview: "https://baderlt.github.io/FrontEnd_ChatApp/#/login",
    },

    {
      title: "Stock Management",
      img: stock,
      description:
        "The simple stock management app, created with Laravel, React.js, Tailwind CSS, and MySQL, allows for  updating of stock levels with a user-friendly interface and a robust backend. This project showcases my skills in modern web development.",
      tags: ["React.js", "Laravel", "Mysql", "TailwindCSS", "MUI"],
      link: "https://github.com/baderlt/Gestion-stock",
    },
    {
      title: "Mysql_lt: Node.js ORM for MySQL",
      img: ddq,
      description:
        "Introducing Mysql_lt: an ORM package tailored for MySQL in Node.js applications. Simplify database operations seamlessly, focusing on efficient querying and data manipulation. With Mysql_lt, manage your MySQL databases effortlessly, making application development a breeze.",
      tags: ["node.js ","jest","Mysql","ORM"],
      link: "https://github.com/baderlt/mysql_LT",
      preview: "https://www.npmjs.com/package/mysql_lt",
    },
  ];

  return (
    // PROJECT PAGE
    <div className="h-full mt-16 w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge className=" gap-2">
        <Layers className="h-5 w-5" />
        Projects
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Projects</Heading>

  
  <Description>
I enjoy creating exciting projects. 
Here, you will discover a curated selection of my creative ventures and technical undertakings
. Each project symbolizes a journey of innovation, problem-solving,
 and continuous learning. I invite you to explore this showcase of my passion and expertise in action.
      </Description>
      </div>

      <div className=" w-full flex flex-col items-center justify-center  md:flex-row md:flex-wrap ">
        {Projects.map((val, index) => {
          return <ProjectCards key={index} index={index} value={val} />;
        })}
      </div>
    </div>
  );
};

export default projectsPage;