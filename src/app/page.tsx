import SocialLinks from "@/components/SocialLinks";
import HeroTexts from "@/components/HeroTexts";

import GithubBtn from "@/components/GithubBtn";
import DownLoadResumeBtn from "@/components/DownLoadResumeBtn";
import { CardContainer } from "@/components/ui/3d-card";
import MyImage from "@/components/MyImage";

export const siteConfig = {
  name: "BADER LATRACHE",
  description: "I am a Passionate FullStack Developer",
};
export default function Home() {
  return (
    <div className="flex w-full h-screen  ">
      {/* LEFT SIDE  */}
      <div className="relative h-full w-full flex flex-col justify-start gap-4 pt-14 ">
        <div className="flex-1 flex flex-col gap-16">
          <HeroTexts />
          <div className="h-fit w-full  gap-4 flex ">
            <SocialLinks />
          </div>
          <DownLoadResumeBtn />
        </div>
      </div>
      {/* RIGHT SIDE image  */}
      <div className="  w-full .box  block max-lg:hidden " >
<MyImage/>
        <GithubBtn />
      </div>

      {/* GITHUB BUTTON  */}
    </div>
  );
}
