"use client"
import Countup from "@/components/countup/Countup";
import HeroSection from "@/components/hero-section/HeroSection"
import Sidebar from "@/components/sidebar/Sidebar";
import TechCard from "@/components/techCard/techCard";
import { useEffect, useState } from "react";
import Loading from "./loading";


export default function Home() {

  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 1000); // Delay in milliseconds (e.g., 2000ms = 2 seconds)
    
    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  
  return (
    
    <div className="flex justify-center items-center">
      { showContent?<>  
      <div className="hidden md:block static w-1/4 "><Sidebar/></div>


  <div className="w-3/4">  
    <HeroSection/> {/* hero seciton ends here*/}

    <div className="w-[100%] flex flex-col justify-center items-center overflow-x-hidden">
{/* new section starts */}

<div className=" mt-16 flex flex-wrap justify-center items-center gap-10">

       <Countup start={0} end={5} delay={0} duration={2} text={"Years of Experience"} specialCharacter=""/>
       <Countup start={0} end={10} delay={0} duration={2} text={"Projects Completed"} specialCharacter="+" />
       <Countup start={0} end={500} delay={0} duration={2} text={"LinkedIn Connections"} specialCharacter="+"/>    
</div>

<div className="relative overflow-x-hidden w-[100%] flex flex-col  justify-center  items-start md:ml-5 mt-10">
  <div className="w-full  flex text-start  ">
  <p className="w-[3px]  h-12 bg-[#5271ff]"></p>
  <h1 className="font-jost font-bold text-5xl ">What I do</h1>
  </div>

  <p className="w-96 md:w-[600px] mt-5  font-jost">
    I&apos;ve more than 8-Months of experience in building interactive and responsive web applications. I&apos;m a skilled developer with a passion for creating engaging and user-friendly interfaces. Want to find more about my experience?  Below is the overview of my main technical skill set and technologies I use.
  </p>
</div>

<div className="w-full flex justify-start items-center ">
<div className=" flex justify-center  items-center flex-wrap gap-2  ">
<TechCard src="/html.png" techName="HTML" techDescription="HTML structures web content, creating headings, paragraphs, links, and images, forming the foundation of web pages."/>

<TechCard src="/java-script.png" techName="JAVASCRIPT" techDescription="JavaScript is a versatile programming language for adding interactivity to web pages, enabling dynamic content, animations, and responsive user interactions."/>

<TechCard src="/typescript-logo.png" techName="TYPESCRIPT" techDescription="TypeScript is a superset of JavaScript that adds static typing, improving code quality, reducing errors, and enhancing development efficiency and maintainability."/>

<TechCard src="/library.png" techName="REACT.JS" techDescription="React.js is a JavaScript library for building user interfaces, enabling efficient, component-based development of dynamic, interactive, and responsive web applications."/>

<TechCard src="/nextjs-logo.jpeg" techName="NEXT.JS" techDescription="Next.js is a React framework for building fast, server-rendered applications with features like routing, static generation, and API routes for optimized performance."/>

<TechCard src="/tailwind.jpeg" techName="TAILWIND CSS" techDescription="ailwind CSS is a utility-first CSS framework enabling rapid UI development with pre-defined classes, making styling efficient, customizable, and responsive."/>
</div>
</div>

    </div>

    </div> </> :
    <>
    
     <Loading/>    
      <div className="hidden md:block static w-1/4 "><Sidebar/></div>
  <div className="w-3/4">  
    <HeroSection/> {/* hero seciton ends here*/}

    <div className="w-[100%] flex flex-col justify-center items-center overflow-x-hidden">
{/* new section starts */}

<div className=" mt-16 flex flex-wrap justify-center items-center gap-10">

       <Countup start={0} end={9} delay={0} duration={2} text={"Months of Experience"} specialCharacter=""/>
       <Countup start={0} end={10} delay={0} duration={2} text={"Projects Completed"} specialCharacter="+" />
       <Countup start={0} end={500} delay={0} duration={2} text={"LinkedIn Connections"} specialCharacter="+"/>    
</div>

<div className="relative overflow-x-hidden w-[100%] flex flex-col  justify-center  items-start md:ml-5 mt-10">
  <div className="w-full  flex text-start  ">
  <p className="w-[3px]  h-12 bg-[#5271ff]"></p>
  <h1 className="font-jost font-bold text-5xl ">What I do</h1>
  </div>

  <p className="w-96 md:w-[600px] mt-5  font-jost">
    I&apos;ve more than 8-Months of experience in building interactive and responsive web applications. I&apos;m a skilled developer with a passion for creating engaging and user-friendly interfaces. Want to find more about my experience?  Below is the overview of my main technical skill set and technologies I use.
  </p>
</div>

<div className="w-full flex justify-start items-center ">
<div className=" flex justify-center  items-center flex-wrap gap-2  ">
<TechCard src="/html.png" techName="HTML" techDescription="HTML structures web content, creating headings, paragraphs, links, and images, forming the foundation of web pages."/>

<TechCard src="/java-script.png" techName="JAVASCRIPT" techDescription="JavaScript is a versatile programming language for adding interactivity to web pages, enabling dynamic content, animations, and responsive user interactions."/>

<TechCard src="/typescript-logo.png" techName="TYPESCRIPT" techDescription="TypeScript is a superset of JavaScript that adds static typing, improving code quality, reducing errors, and enhancing development efficiency and maintainability."/>

<TechCard src="/library.png" techName="REACT.JS" techDescription="React.js is a JavaScript library for building user interfaces, enabling efficient, component-based development of dynamic, interactive, and responsive web applications."/>

<TechCard src="/nextjs-logo.jpeg" techName="NEXT.JS" techDescription="Next.js is a React framework for building fast, server-rendered applications with features like routing, static generation, and API routes for optimized performance."/>

<TechCard src="/tailwind.jpeg" techName="TAILWIND CSS" techDescription="ailwind CSS is a utility-first CSS framework enabling rapid UI development with pre-defined classes, making styling efficient, customizable, and responsive."/>
</div>
</div>

    </div>

    </div> 
    
    </>

}
    </div>
    
    
  );
}
