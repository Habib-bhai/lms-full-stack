"use client"

import Projects_card from "@/components/projects_card/Projects_card"
import Sidebar from "@/components/sidebar/Sidebar"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import Loading from "@/app/loading"

function Projects() {

  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 1000); // Delay in milliseconds (e.g., 2000ms = 2 seconds)
    
    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);


  return (
    <>
{
  showContent?<> 
  <div className="flex justify-start items-center">
   <div className="hidden md:block static w-1/4 "><Sidebar/></div>


   <div className="w-screen md:w-3/4 flex flex-col justify-end items-center overflow-x-hidden">
    {/* other content */}

<div className="flex flex-col justify-center items-center mt-20">
      <h1 className="text-xl md:text-2xl font-jost font-extrabold md:font-bold ">A collection of my best projects</h1>
      <p className="w-80 md:w-[700px] text-center">Within this whole experience in web development, I&apos;ve acquired extensive knowledge using typeScript and next.js. Lemme show you some of the projects I&apos;ve worked on.</p>

   <Link href={"/contact"}> <button className="mt-10 h-10 w-32 bg-[#5271ff] rounded-2xl flex justify-center gap-1 items-center font-jost text-white font-semibold"><Image src="/north_east.svg" alt="arrow" width={20} height={20}/> HIRE ME</button>
   </Link>
</div>

<div className="flex justify-center items-center gap-3 flex-wrap">
  {/* projects */}
<Projects_card src="/projects/cod-project.png" tags={["Call Of Duty", "Front End", "Next.js"]} objectProperty="cover" href="https://cod-landing-page-six.vercel.app/"/>

<Projects_card src="/projects/teknofest-project.png" tags={["Teknofest Pakistan", "Front End", "UI Clone", "Colaborated", "Next.js"]} objectProperty="cover" href="https://teknofest-clone.vercel.app/"/>

<Projects_card src="/projects/hable-ai-project.png" tags={["Hable Ai", "Front End", "vercel AI", "SDK", "Next.js"]} objectProperty="cover" href="https://assignment-3-vercel-sdk-ai.netlify.app/"/>

<Projects_card src="/projects/resume-builder-project.png" tags={["resume builder", "Front End", "Hackathon","HTML CSS JS"]} objectProperty={"contain"} href="https://hackathon-milestone-4-six.vercel.app/"/>

<Projects_card src="/projects/simple-recipe-app-project.png" tags={["recipe app", "Front End", "next.js 1st proj.", ]} objectProperty={"fill"} href="https://simple-recipe-app-styled-with-tailwindcss.vercel.app/"/>

<Projects_card src="/projects/html-portfolio-project.png" tags={["portfolio", "Front End", "html css JS", ]} objectProperty={"cover"} href="https://bro-habib-portfolio.netlify.app/#"/>

<Projects_card src="/projects/weather-app-project.png" tags={["Weather app", "Front End", "html css JS", ]} objectProperty={"cover"} href="https://habib-bhai.github.io/web-based-weather-app/"/>

<Projects_card src="/projects/password-generator-project.png" tags={["password generator", "Front End", "React.js", ]} objectProperty={"cover"} href="https://password-generator-brohabib.netlify.app/"/>

</div>

   </div>
  </div>
  </> : <> 
  <Loading/>
  <div className="flex justify-start items-center">
   <div className="hidden md:block static w-1/4 "><Sidebar/></div>


   <div className="w-screen md:w-3/4 flex flex-col justify-end items-center overflow-x-hidden">
    {/* other content */}

<div className="flex flex-col justify-center items-center mt-20">
      <h1 className="text-2xl font-jost font-bold ">A collection of my best projects</h1>
      <p className="w-96 md:w-[700px] text-center">Within this whole experience in web development, I&apos;ve acquired extensive knowledge using typeScript and next.js. Lemme show you some of the projects I&apos;ve worked on.</p>

   <Link href={"/contact"}> <button className="mt-10 h-10 w-32 bg-[#5271ff] rounded-2xl flex justify-center gap-1 items-center font-jost text-white font-semibold"><Image src="/north_east.svg" alt="arrow" width={20} height={20}/> HIRE ME</button>
   </Link>
</div>

<div className="flex justify-center items-center gap-3 flex-wrap">
  {/* projects */}
<Projects_card src="/projects/cod-project.png" tags={["Call Of Duty", "Front End", "Next.js"]} objectProperty="cover" href="https://cod-landing-page-six.vercel.app/"/>

<Projects_card src="/projects/teknofest-project.png" tags={["Teknofest Pakistan", "Front End", "UI Clone", "Colaborated", "Next.js"]} objectProperty="cover" href="https://teknofest-clone.vercel.app/"/>

<Projects_card src="/projects/hable-ai-project.png" tags={["Hable Ai", "Front End", "vercel AI", "SDK", "Next.js"]} objectProperty="cover" href="https://assignment-3-vercel-sdk-ai.netlify.app/"/>

<Projects_card src="/projects/resume-builder-project.png" tags={["resume builder", "Front End", "Hackathon","HTML CSS JS"]} objectProperty={"contain"} href="https://hackathon-milestone-4-six.vercel.app/"/>

<Projects_card src="/projects/simple-recipe-app-project.png" tags={["recipe app", "Front End", "next.js 1st proj.", ]} objectProperty={"fill"} href="https://simple-recipe-app-styled-with-tailwindcss.vercel.app/"/>

<Projects_card src="/projects/html-portfolio-project.png" tags={["portfolio", "Front End", "html css JS", ]} objectProperty={"cover"} href="https://bro-habib-portfolio.netlify.app/#"/>

<Projects_card src="/projects/weather-app-project.png" tags={["Weather app", "Front End", "html css JS", ]} objectProperty={"cover"} href="https://habib-bhai.github.io/web-based-weather-app/"/>

<Projects_card src="/projects/password-generator-project.png" tags={["password generator", "Front End", "React.js", ]} objectProperty={"cover"} href="https://password-generator-brohabib.netlify.app/"/>

</div>

   </div>
  </div>
  </>
  }
    </>
  )
}

export default Projects