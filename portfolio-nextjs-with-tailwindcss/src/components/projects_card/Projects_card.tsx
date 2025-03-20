import Image from "next/image";
import Link from "next/link";


export default function Projects_card({src, tags, objectProperty, href}: {src:string, tags: string[], objectProperty:string , href: string}) {
  return (
   <Link href={href} target="_blank" prefetch={true}>
     <div className="relative bg-gray-400 rounded-2xl  my-5 transition-all duration-300 ease-in-out w-[290px]  md:w-96 h-[480px] flex flex-col items-center md:justify-center justify-start flex-wrap hover:rounded-2xl hover:border-[1px] hover:border-[#5271ff] before:contents-[''] before:absolute before:w-full before:h-full before:rounded-2xl before:bg-gradient-to-t before:from-[#5271ff] before:via-[#52a3ff] before:to-[#52f1ff] before:z-[2] before:top-0 before:left-0 before:scale-x-0 before:transition-transform before:duration-500 before:ease-in-out before:origin-right hover:before:scale-x-100 hover:before:origin-left  ">

       <Image src={src} alt="image" height={300} width={300} className={`z-10 p-2 md:w-[380px] md:h-[300px] w-72 h-72 object-${objectProperty} rounded-3xl `}/>

       <div className="z-10 w-full mt-5 flex flex-wrap justify-center items-center gap-3">
         {
            tags.map((item,index) => <div key={index} className="h-10 w-28 p-4 bg border-[1px] border-gray-800 rounded-3xl flex justify-center items-center text-center"> {item} </div>)
         }
  
       </div>
    </div>
    </Link>
  )
}
