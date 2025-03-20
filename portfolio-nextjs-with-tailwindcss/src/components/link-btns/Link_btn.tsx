"use client"
import Link from "next/link"
import React from "react"
import { usePathname } from 'next/navigation'

function Link_btn({href, btnName, children}: {href: string, btnName: string, children: React.ReactNode}) {

  const path = usePathname() 
  const Active = path ===href
  return (
    <Link href={href} prefetch={true} className={`${Active ? "bg-[#5271ff] text-white font-semibold rounded-lg" : "bg-transparent text-gray-500"}`}> <div className={`w-[150px] h-10 flex  justify-start items-center gap-3`}>
        {children}
        <h2 className="font-jost">{btnName}</h2>
    </div> 
    </Link>
  )
}

export default Link_btn