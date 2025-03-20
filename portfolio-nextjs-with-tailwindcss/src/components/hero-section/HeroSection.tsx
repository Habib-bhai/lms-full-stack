"use client"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

gsap.registerPlugin(useGSAP)

export default function HeroSection() {
    const [text] = useTypewriter({
        words: ["Frontend Champ", "Next.js Developer", "JamStack Enthusiast"],
        loop: true
      })

      const imgDiv = useRef<HTMLDivElement | null>(null)


      useGSAP(
        () => { 
          gsap.to(imgDiv.current, {
            keyframes: [
              { rotation: 10, duration: 5,  ease: "power1.inOut", yoyo: true },   // Rotate 50 degrees to the right
              { rotation: -10, duration: 5, ease: "power1.inOut", yoyo:true },  // Rotate 50 degrees to the left
            ],
            repeat: -1,
          
            })
        }
      )

  return (
    <div className="w-full overflow-x-hidden">
    
    <div className="md:ml-3  w-full flex   justify-center items-center flex-wrap md:flex-nowrap ">

    {/* info and my pic */}
    <div className="my-10  flex justify-center font-jost  items-center md:items-start flex-col">
    <h2 className="text-xl md:text-3xl">HI, I&apos;AM A FREELANCER</h2>

    <h1 className="mt-3 mb-6 text-xl w-[320px] md:text-5xl  md:w-[520px] font-sans text-[#5271ff] font-extrabold text-center md:text-start">{text} <Cursor/> 
    </h1> 
    <p className="font-jost  w-80 text-sm text-center">I am a Frontend developer especializing in next.js and JamStack. Explore my <Link href={"/porjects"} className="text-[#5271ff] ">Portfolio</Link>, <Link className="text-[#5271ff]" href={"/resume"}>Resume.</Link></p>

    <div className=" flex w-full justify-center items-center md:justify-start gap-4 mt-5">
      {/* btns */}
      <Link href={"/projects"}><button className="relative text-[12px] md:text-lg text-white font-semibold font-jost h-10 w-24 md:h-12 md:w-40 rounded-[100px] bg-[#292929] after:contents-[''] after:w-full after:h-full after:absolute after:top-0 after:left-0 after:bg-transparent after:scale-0 hover:after:scale-100 hover:after:bg-[#5271ff]/80 after:transition-all after:duration-300 after:ease-in-out after:rounded-3xl    ">View Portfolio</button></Link>
     <Link href={"/resume"}> <button className="relative text-[12px] md:text-lg  text-white font-semibold font-jost h-10 w-24 md:h-12 md:w-40 rounded-[100px] bg-[#292929] after:contents-[''] after:w-full after:h-full after:absolute after:top-0 after:left-0 after:bg-transparent after:scale-0 hover:after:scale-100 hover:after:bg-[#5271ff]/80 after:transition-all after:duration-300 after:ease-in-out after:rounded-3xl  ">View Resume </button> </Link>
    </div>

    </div>


      <div  className="w-96 h-96 md:w-[400px] md:h-[400px] relative flex justify-center items-center ">
        <div ref={imgDiv} className="absolute top-16 z-[-1] w-64 h-64 md:w-[300px] md:h-[300px] bg-[#5271ff]"></div>
       <Image src={"/my-img.jpg"} alt={"logo"} height={300} width={300} className={"z-10 w-64 h-64 md:w-[300px] md:h-[300px] object-cover"}/>
      </div>
  </div>

   

  </div>
  )
}
