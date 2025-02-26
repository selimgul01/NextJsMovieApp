"use client"

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React from 'react'

const Tabs = () => {

    const searchParams = useSearchParams()
    const genre = searchParams.get("genre")

    const tabs = [
        {
            name: "En Populer",
            url: "popular"
        },
        {
            name: "Şimdi Yayında",
            url: "now_playing"
        },
        {
            name: "Yakında Gelecekler",
            url: "upcoming"
        }
    ]

  return (
      
    <div className='flex items-center justify-center gap-10 p-5 m-5 bg-gray-100 dark:bg-gray-800'>
      {
        tabs.map((tab,i)=>(
            <Link className={`hover:opacity-80 transition-all scale-110 ${tab.url === genre ? " underline text-amber-500 underline-offset-8" : ""}`} href={`/?genre=${tab.url}`} key={i}>{tab.name}</Link>
        ))
      }
    </div>
          
  )
}

export default Tabs
