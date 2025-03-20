"use client"

import Loading from "@/app/loading";
import ContactDivs from "@/components/contact-divs/ContactDivs";
import GetInTouch from "@/components/getintouch/GetInTouch";
import Sidebar from "@/components/sidebar/Sidebar";
import Socials from "@/components/socials/Socials";
import Image from "next/image";
import { useEffect, useState } from "react";
export default function ContactPage() {

  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 1000); // Delay in milliseconds (e.g., 2000ms = 2 seconds)
    
    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);


  return (
<>
{showContent? <> 
    <div className="flex justify-start items-center">
      <div className="hidden md:block static w-1/4 "><Sidebar /></div>

      <div className="w-screen md:w-3/4 flex flex-col justify-end items-center overflow-x-hidden">

        <div className="flex flex-col justify-center items-center mt-20">
          <h1 className="text-2xl font-jost font-bold ">Contact Me</h1>
          <p className="font-jost text-center w-[320px] md:w-[800px]">Interested in hiring me for your project or just want to say hi? You can fill in the contact form below or send me an email to 
            <span className="text-[#5271ff]"> habibahmed918131@gmail.com </span>.Want to get connected? Follow me on the social channels below.</p>

            <div className="flex justify-center items-center gap-4 mt-5 w-[450px] ">
                {/* social icons */}
                <Socials src="/twitter.png" href="https://x.com/bro_habib_15"/>
               <Socials src="/linkedin-logo.png" href="https://www.linkedin.com/in/habib007ab92282/"/> 
               <Socials src="/social.png" href="https://www.instagram.com/habibahmed918131/"/>
               <Socials src="/github.png" href="https://github.com/Habib-bhai"/>
            </div>    
        </div>

        <div className=" my-5 w-full flex justify-center items-center flex-col">
          <div className="ml-5 my-4 w-full flex justify-start items-center ">
            <p className="w-[3px] h-12 bg-[#5271ff]"></p>
            <h1 className="text-3xl md:text-5xl font-jost font-bold md:font-semibold">Contact Details</h1>
          </div>
          
          <div className="w-full my-10 flex ml-10 md:ml-0 md:justify-center items-center gap-10 flex-wrap" >
              <ContactDivs src="/icons/smartphone.png" heading="Phone" details="+92 3343295024" height={80} width={80}/>

              <ContactDivs src="/icons/compass.png" heading="Location" details="Karachi, Pakistan" height={50} width={50}/>

              <ContactDivs src="/icons/email.png" heading="Email" details="habibahmed918131@gmail.com" height={50} width={50}/>


          </div>
        </div>


        <div className="w-full mt-12 flex flex-col justify-start items-center  ">
          <GetInTouch/>
            <div className="w-full border-[1px] border-gray-300 rounded-3xl my-5">
              <form className="flex justify-center items-center flex-col">
                <div className="py-5 w-full flex justify-center flex-wrap items-center gap-5">

                    <div className="flex justify-center items-center gap-5 border-[1px] border-gray-300 rounded-xl pl-5">
                      <Image src={"/icons/dry-clean.png"} alt="image" height={20} width={20}/>
                    <input type="text" placeholder="Your Name" required className=" w-54 md:w-80 h-10 focus:outline-none"/>
                    </div>

                    <div className="flex justify-center items-center gap-5 border-[1px] border-gray-300 rounded-xl pl-5">
                    <Image src={"/icons/email.png"} alt="image" height={20} width={20}/>
                  <input type="email" placeholder="Your Email" required className=" w-54 md:w-80 h-10 focus:outline-none"/>
                    </div>

                    <div className="flex justify-center items-center gap-5 border-[1px] border-gray-300 rounded-xl pl-5">
                    <Image src={"/icons/smartphone.png"} alt="image" height={30} width={30}/>
                  <input type="number" placeholder="Your Phone" required className=" w-54 md:w-80 h-10 focus:outline-none"/>
                    </div>

                    <div className="flex justify-center items-center gap-5 border-[1px] border-gray-300 rounded-xl pl-5">
                    <Image src={"/icons/compass.png"} alt="image" height={20} width={20}/>
                  <input type="text"  placeholder="Your Location" required className=" w-54 md:w-80 h-10 focus:outline-none"/>
                    </div>

                </div>

                  <textarea   placeholder="Your Message" required className="w-[90%] h-10 focus:outline-none border-[1px] border-gray-300 rounded-xl text-center mb-5 "/>

                  <div  className="group relative flex justify-center items-center font-jost bg-gray-400 my-10 h-10 w-52 rounded-2xl before:contents-[''] before:absolute before:w-full before:h-full before:rounded-2xl before:bg-gradient-to-t before:from-[#5271ff] before:via-[#52a3ff] before:to-[#52f1ff] before:z-[2] before:top-0 before:left-0 before:scale-x-0 before:transition-transform before:duration-500 before:ease-in-out before:origin-right hover:before:scale-x-100 hover:before:origin-left "> <button type="submit" className="z-10 group-hover:text-white text-2xl font-jost font-semibold bg-transparent">Submit</button>
                  </div>
              </form>
            </div>
        </div>

      </div>

    </div>
    </> : <> 
    <Loading/>
    <div className="flex justify-start items-center">
      <div className="hidden md:block static w-1/4 "><Sidebar /></div>

      <div className="w-screen md:w-3/4 flex flex-col justify-end items-center overflow-x-hidden">

        <div className="flex flex-col justify-center items-center mt-20">
          <h1 className="text-2xl font-jost font-bold ">Contact Me</h1>
          <p className="font-jost text-center">Interested in hiring me for your project or just want to say hi? You can fill in the contact form below or send me an email to 
            <span className="text-[#5271ff]"> habibahmed918131@gmail.com </span>.Want to get connected? Follow me on the social channels below.</p>

            <div className="flex justify-center items-center gap-4 mt-5 w-[450px] ">
                {/* social icons */}
                <Socials src="/twitter.png" href="https://x.com/bro_habib_15"/>
               <Socials src="/linkedin-logo.png" href="https://www.linkedin.com/in/habib007ab92282/"/> 
               <Socials src="/social.png" href="https://www.instagram.com/habibahmed918131/"/>
               <Socials src="/github.png" href="https://github.com/Habib-bhai"/>
            </div>    
        </div>

        <div className=" my-5 w-full flex justify-center items-center flex-col">
          <div className="ml-5 my-4 w-full flex justify-start items-center ">
            <p className="w-[3px] h-12 bg-[#5271ff]"></p>
            <h1 className="text-5xl font-jost font-semibold">Contact Details</h1>
          </div>
          
          <div className="w-full my-10 flex ml-10 md:ml-0 md:justify-center items-center gap-10 flex-wrap" >
              <ContactDivs src="/icons/smartphone.png" heading="Phone" details="+92 3343295024" height={80} width={80}/>

              <ContactDivs src="/icons/compass.png" heading="Location" details="Karachi, Pakistan" height={50} width={50}/>

              <ContactDivs src="/icons/email.png" heading="Email" details="habibahmed918131@gmail.com" height={50} width={50}/>


          </div>
        </div>


        <div className="w-full mt-12 flex flex-col justify-start items-center  ">
          <GetInTouch/>
            <div className="w-full border-[1px] border-gray-300 rounded-3xl my-5">
              <form className="flex justify-center items-center flex-col">
                <div className="py-5 w-full flex justify-center flex-wrap items-center gap-5">

                    <div className="flex justify-center items-center gap-5 border-[1px] border-gray-300 rounded-xl pl-5">
                      <Image src={"/icons/dry-clean.png"} alt="image" height={20} width={20}/>
                    <input type="text" placeholder="Your Name" required className="w-80 h-10 focus:outline-none"/>
                    </div>

                    <div className="flex justify-center items-center gap-5 border-[1px] border-gray-300 rounded-xl pl-5">
                    <Image src={"/icons/email.png"} alt="image" height={20} width={20}/>
                  <input type="email" placeholder="Your Email" required className="w-80 h-10 focus:outline-none"/>
                    </div>

                    <div className="flex justify-center items-center gap-5 border-[1px] border-gray-300 rounded-xl pl-5">
                    <Image src={"/icons/smartphone.png"} alt="image" height={30} width={30}/>
                  <input type="number" placeholder="Your Phone" required className="w-80 h-10 focus:outline-none"/>
                    </div>

                    <div className="flex justify-center items-center gap-5 border-[1px] border-gray-300 rounded-xl pl-5">
                    <Image src={"/icons/compass.png"} alt="image" height={20} width={20}/>
                  <input type="text"  placeholder="Your Location" required className="w-80 h-10 focus:outline-none"/>
                    </div>

                </div>

                  <textarea   placeholder="Your Message" required className="w-[90%] h-10 focus:outline-none border-[1px] border-gray-300 rounded-xl text-center mb-5 "/>

                  <div  className="group relative flex justify-center items-center font-jost bg-gray-400 my-10 h-10 w-52 rounded-2xl before:contents-[''] before:absolute before:w-full before:h-full before:rounded-2xl before:bg-gradient-to-t before:from-[#5271ff] before:via-[#52a3ff] before:to-[#52f1ff] before:z-[2] before:top-0 before:left-0 before:scale-x-0 before:transition-transform before:duration-500 before:ease-in-out before:origin-right hover:before:scale-x-100 hover:before:origin-left "> <button type="submit" className="z-10 group-hover:text-white text-2xl font-jost font-semibold bg-transparent">Submit</button>
                  </div>
              </form>
            </div>
        </div>

      </div>

    </div>
    </>
    }
    </>
  )
}
