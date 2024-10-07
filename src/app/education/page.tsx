import Education_Description from "@/components/Education_des";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

const educationPage = () => {

  return (
    // ABOUT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 mt-16">
      <Badge className=" gap-2">
        <Briefcase className="h-5 w-5" />
        Education
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Education</Heading>
      </div>
      <div className="w-full h-fit flex flex-col">
        <div className="w-full h-fit flex">
          <div className="w-1/4 font-rubik flex items-center justify-evenly text-lg max-sm:text-base ">
            {" "}
            Jan 2024 - Aug 2024
          </div>
          <div className="relative w-3/4 border-l-4 border-l-[#3c3c3c] p-4 gap-3 education_point">
            <div className="text-2xl font-rubik max-sm:text-xl flex flex-col lg:flex-row md:flex-row gap-5  mb-6">
         <img src="worldskills.svg"  alt="worldskills" width={80} /> Cycle préparatoire de la compétition WorldSkills, <br /> CMC Rabat
            </div>
          
          <Education_Description>
         
Here’s a revised version incorporating the detail about the exams:

From January 2023 to September 2023, I engaged in intensive preparation for the WorldSkills International Competition in Lyon 2024. To participate in this preparation phase, I first qualified through regional and national exams. During this period, I participated in two significant competitions to enhance my skills and gain practical experience.

First, I competed in the 4th Unofficial Web Development Competition 2024, an online event that challenged my abilities in web development. Second, I took part in the 54th National Competition in Taiwan for Web Technologies, where I further honed my skills and tested my knowledge against international standards.

This preparation phase was crucial in refining my expertise and readying myself for the upcoming WorldSkills competition.
          
          </Education_Description>
          </div>
        </div>
      </div>
      <div className="w-full h-fit flex flex-col">
        <div className="w-full h-fit flex">
          <div className="w-1/4 font-rubik flex items-center justify-evenly text-lg max-sm:text-base ">
            {" "}
            Jul 2021 - Jul 2023
          </div>
          <div className="relative w-3/4 border-l-4 border-l-[#3c3c3c] p-4 gap-3 education_point">
            <div className="text-2xl font-rubik max-sm:text-xl flex flex-col lg:flex-row md:flex-row gap-5 mb-6">
             <img src="OFPPT.svg" width={70} alt="" />  TECHNICIAN SPECIALIZED IN DIGITAL DEVELOPMENT FULL STACK WEB
              OPTION, <br /> ISTA TAZA
            </div>
          
          <Education_Description>
              I have obtained a diploma in Digital Development with a Full Stack
              Web Option from ISTA Taza , the Office for Occupational Training
              and Promotion of Employment in Morocco. This program provided me
              with a comprehensive education in both the theoretical and
              practical aspects of web development, equipping me with valuable
              skills for various opportunities in the field.
          
          </Education_Description>
          </div>
        </div>
      </div>
    </div>
  );
};

export default educationPage;
