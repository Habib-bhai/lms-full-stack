"use client"
import CountUp from "react-countup"

export default function Countup({start, end, delay, duration, text, specialCharacter}: {start: number, end: number, delay: number, duration: number, text: string, specialCharacter:string}) {


  return (
    <>
   

    <div className=" flex justify-center items-center gap-4">
      
    <h1 className="text-5xl font-jost font-bold text-[#5271ff]">
      <CountUp start={start} end={end} duration={duration} delay={delay} />
      {specialCharacter}
    </h1>
    <p className="w-[1px] h-10 bg-gray-500"></p>
    <h2 className="w-20 font-jost">{text}</h2>
  </div>
  
    
    </>
  )
}
