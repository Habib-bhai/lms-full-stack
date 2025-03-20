"use client"
import Sidebar from "@/components/sidebar/Sidebar";
import Image from "next/image";
import Loading from "@/app/loading";
import { useEffect, useState } from "react";

export default function Resume() {

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
        showContent?<> <div className="flex justify-start items-center">
        <div  className={' hidden md:block static w-1/4 transition-all duration-300 ease-in-out '}><Sidebar/></div>

        <div className="w-screen md:w-3/4 flex flex-col justify-end items-center overflow-x-hidden">
        <Image src={"/resume-pic.png"} alt="resume" height={800} width={800} className="my-10"/>

       <a href="/resume/frontend-dev-resume.pdf" download={true}><div className="group relative flex justify-center items-center font-jost bg-gray-400 my-10 h-10 w-52 rounded-2xl before:contents-[''] before:absolute before:w-full before:h-full before:rounded-2xl before:bg-gradient-to-t before:from-[#5271ff] before:via-[#52a3ff] before:to-[#52f1ff] before:z-[2] before:top-0 before:left-0 before:scale-x-0 before:transition-transform before:duration-500 before:ease-in-out before:origin-right hover:before:scale-x-100 hover:before:origin-left "> <p className="z-10 group-hover:text-white font-jost font-semibold">DOWNLOAD RESUME</p>
        </div>
        </a>
       

        </div>

    </div></>   : <>
    <Loading/>
    <div className="flex justify-start items-center">
    <div  className={' hidden md:block static w-1/4 transition-all duration-300 ease-in-out '}><Sidebar/></div>

    <div className="w-screen md:w-3/4 flex flex-col justify-end items-center overflow-x-hidden">
    <Image src={"/resume-pic.png"} alt="resume" height={800} width={800} className="my-10"/>

   <a href="/resume/frontend-dev-resume.pdf" download={true}><div className="group relative flex justify-center items-center font-jost bg-gray-400 my-10 h-10 w-52 rounded-2xl before:contents-[''] before:absolute before:w-full before:h-full before:rounded-2xl before:bg-gradient-to-t before:from-[#5271ff] before:via-[#52a3ff] before:to-[#52f1ff] before:z-[2] before:top-0 before:left-0 before:scale-x-0 before:transition-transform before:duration-500 before:ease-in-out before:origin-right hover:before:scale-x-100 hover:before:origin-left "> <p className="z-10 group-hover:text-white font-jost font-semibold">DOWNLOAD RESUME</p>
    </div>
    </a>
   

    </div>

</div>
</>
    
   
  }
  </>
  )
}
