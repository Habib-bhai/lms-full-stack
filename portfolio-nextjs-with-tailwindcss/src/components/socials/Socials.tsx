import Image from "next/image"
import Link from "next/link"

export default function Socials({src, href}: {src:string, href: string}) {
  return (
   <Link href={href} target="_blank"> <div className="w-12 h-10">
                  <div className="bg-white broder-[1px] border-black shadow-lg w-7 h-7 rounded-full flex justify-center transition-all duration-300 ease-in-out items-center hover:scale-110 hover:bg-gray-300">
                  <Image src={src} alt={"socials"} height={15} width={15}  />     
                  </div>
    </div>
    </Link>
  )
}
