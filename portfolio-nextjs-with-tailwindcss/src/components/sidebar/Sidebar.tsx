
import Image from "next/image";

import Link_btn from "../link-btns/Link_btn";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="fixed top-0 left-0 w-[300px] h-screen bg-[#ededed]  overflow-scroll overflow-x-hidden ">
        <div className=" flex flex-col justify-center  items-center ">

{/* overview */}
         <Image src="/my-img.jpg" alt="logo" height={200} width={180}  className="rounded-full mt-8 "/>   
            <div className="text-center ">
                {/* headings */}
                <h1 className="text-2xl font-jost font-semibold">Habib Ullah</h1>
                <p className="font-jost">front end developer</p>
            </div>  

            <div className="flex gap-4 mt-5 ">
                {/* social icons */}
                <Link href={"https://x.com/bro_habib_15"} target="_blank"> 
                <div className="bg-white broder-[1px] border-black shadow-lg w-7 h-7 rounded-full flex justify-center transition-all duration-300 ease-in-out items-center hover:scale-110 hover:bg-gray-300">
               <Image src={"/twitter.png"} alt={"twitter"} height={15} width={15}  />     
                </div> </Link>

                <Link href={"https://github.com/Habib-bhai"} target="_blank">
                <div className="bg-white broder-[1px] border-black shadow-lg w-7 h-7 rounded-full flex justify-center items-center transition-all duration-300 ease-in-out hover:scale-110 hover:bg-gray-300">
               <Image src={"/github.png"} alt={"github"} height={15} width={15} />     
                </div></Link>

                <Link href={"https://www.linkedin.com/in/habib007ab92282/"} target="_blank">
                <div className="bg-white broder-[1px] border-black shadow-lg w-7 h-7 rounded-full flex justify-center items-center transition-all duration-300 ease-in-out hover:scale-110 hover:bg-gray-300">
               <Image src={"/linkedin-logo.png"} alt={"linkedin"} height={15} width={15} />     
                </div></Link>

                <Link href={"https://www.instagram.com/habibahmed918131/"} target="_blank">
                <div className="bg-white broder-[1px] border-black shadow-lg w-7 h-7 rounded-full flex justify-center items-center transition-all duration-300 ease-in-out hover:scale-110 hover:bg-gray-300">
               <Image src={"/social.png"} alt={"instagram"} height={15} width={15} />     
                </div></Link>

            </div>    

        </div>

            <div className="w-[100%] flex justify-center items-center mt-5">
                {/* horizontal line */}
            <p className="h-[1px] bg-gray-300/90 w-[70%]" ></p>
            </div>

        <div className="w-[100%] flex flex-col justify-center gap-9 items-center my-5">
{/* links */}

       <Link_btn href="/" btnName="About Me">
       <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0a0a0a"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"/></svg>
       </Link_btn>

       <Link_btn href="/projects" btnName="Portfolio">
       <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0a0a0a"><path d="M344-296 160-480l184-184 56 58-126 126 126 126-56 58Zm-144 16h80v40h400v-40h80v160q0 33-23.5 56.5T680-40H280q-33 0-56.5-23.5T200-120v-160Zm80-400h-80v-160q0-33 23.5-56.5T280-920h400q33 0 56.5 23.5T760-840v160h-80v-40H280v40Zm0 520v40h400v-40H280Zm0-640h400v-40H280v40Zm336 504-56-58 126-126-126-126 56-58 184 184-184 184ZM280-800v-40 40Zm0 640v40-40Z"/></svg>
       </Link_btn>

       <Link_btn href="/resume" btnName="Resume">
       <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0a0a0a"><path d="M480-240q-56 0-107 17.5T280-170v10h400v-10q-42-35-93-52.5T480-240Zm0-80q69 0 129 21t111 59v-560H240v560q51-38 111-59t129-21Zm0-160q-25 0-42.5-17.5T420-540q0-25 17.5-42.5T480-600q25 0 42.5 17.5T540-540q0 25-17.5 42.5T480-480ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h480q33 0 56.5 23.5T800-800v640q0 33-23.5 56.5T720-80H240Zm240-320q58 0 99-41t41-99q0-58-41-99t-99-41q-58 0-99 41t-41 99q0 58 41 99t99 41Zm0-140Z"/></svg>
       </Link_btn>

       <Link_btn href="/contact" btnName="Contact">
       <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0a0a0a"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/></svg>
       </Link_btn>  
         
        </div>    

        
    </div>
  )
}
