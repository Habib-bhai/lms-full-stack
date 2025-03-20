import Image from "next/image";

export default function TechCard({techName, techDescription,src}:{techName:string, techDescription:string, src:string}) {
  return (
    <div className="my-5 w-[300px] h-[250px] border-[1px] border-gray-400 bg-[#ededed] flex flex-col justify-center items-start pl-5 hover:scale-110 hover:shadow-custom-all hover:border-[#5271ff] hover:shadow-[#5271ff]  transition-all duration-300 ease-in-out">
          <Image src={src} alt="image" height={30} width={30} className="mb-5"/>
          
        <h2 className="text-2xl font-bold font-jost">{techName}</h2>    
        <p className="font-jost w-[80%]">{techDescription}</p>  
    </div>
  )
}
