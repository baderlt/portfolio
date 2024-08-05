import { cn } from "@/lib/utils";
import { Facebook, Linkedin, ExternalLink } from "lucide-react";
import { buttonVariants } from "./ui/button";
import Link from "next/link";

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
    <>
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
    </>
  );
};

export default SocialLinks;
