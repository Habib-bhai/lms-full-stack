"use client"

import {  useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
gsap.registerPlugin(useGSAP)

export default function Loading() {
    

    const div1 = useRef<HTMLDivElement | null>(null)
    const div2 = useRef<HTMLDivElement | null>(null)
    const arc1Ref = useRef<HTMLDivElement | null>(null)
    const arc2Ref = useRef<HTMLDivElement | null>(null)

    useGSAP(() => {


      
        gsap.to(div1.current,
            {
                duration: 0.5,
               
                translateX: "-100%",
                 ease:"linear",
                delay: 0.5
            })

        gsap.to(div2.current,
            {
                duration: 0.5,
              
                translateX: "100%",
                 ease:"linear",
                delay: 0.5
            })

            gsap.to(arc1Ref.current, {
                rotation: 360,
                duration: 0.5, // slower speed
                repeat: -1, // infinite loop
                ease: "linear",
                
              });
          
              // Animate the second arc with a faster speed
              gsap.to(arc2Ref.current, {
                rotation: -360,
                duration: 0.5, // faster speed
                repeat: -1, // infinite loop
                ease: "linear",

              });
    
            
    })

    return (
        <div className="z-[60] fixed top-0 left-0  w-screen h-screen flex justify-center items-center overflow-hidden ">
            <div ref={div1} className=" w-[50%] h-screen bg-[#5271ff]/60 z-[70] backdrop-blur-sm  overflow-x-hidden "></div>
            <div ref={div2} className="w-[50%] h-screen bg-[#5271ff]/70 z-[70] backdrop-blur-sm overflow-x-hidden"></div>
            
            <div className="absolute z-[80] flex justify-center items-center w-screen h-screen bg-transparent">
      {/* Arc 1 - Slower Speed */}
      <div
        ref={arc1Ref}
        className="absolute w-32 h-32 border-t-4 border-blue-500 rounded-full"
      ></div>

      {/* Arc 2 - Faster Speed */}
      <div
        ref={arc2Ref}
        className="absolute w-24 h-24 border-t-4 border-green-500 rounded-full"
      ></div>
    </div>

        </div>
    )
}
