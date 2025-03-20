"use client"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"


function Navbar() {

    const path = usePathname()
    const NavItems = [
        {name: "Home", href: "/", image: "/person.svg"},
        {name: "Projects", href: "/projects",image: "/developer_mode.svg"},
        {name: "resume", href: "/resume", image: "/person_book.svg"},
        {name: "contact", href: "/contact", image: "/contact.svg"}
    ]
  return (
    <div className="z-50 md:hidden w-screen h-20 sticky bottom-0 flex justify-center items-center gap-5 bg-white shadow-custom-all shadow-gray-500">


        {NavItems.map(item => <Link key={item.name} href={item.href}> 
        <div className={`flex justify-center items-center w-12 h-12 ${path === item.href? "bg-[#5271ff]": "bg-gray-400"} rounded-2xl`}>
            <Image src={item.image} alt="person" height={30} width={30} />
        </div> </Link>  
        )}
       
    </div>
  )
}

export default Navbar