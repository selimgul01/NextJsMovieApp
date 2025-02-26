"use client"

import { BiSearch } from "react-icons/bi";
import MenuItem from "./MenuItem";
import ThemeComp from "./ThemeComp";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Header = () => {

  const [keyword,setKeyword] = useState("")
  
  const router = useRouter()

  console.log(keyword)

  const menu = [
    {
      name:"About",
      url: "/about"
    },
    {
      name:"Sign In",
      url: "/login"
    } 
  ]

  const searchFunc = (e) => {
     if (e.key === "Enter" && keyword.length >= 3 ) {
      router.push(`/search/${keyword}`)
      setKeyword("")
     }
  }

  return (
    <div className='flex items-center gap-10 h-20 p-5'>
      <div onClick={()=>router.push("/")} className="bg-amber-500 p-3 text-2xl cursor-pointer font-bold rounded-lg ">MovieApp</div>
      <div className="flex flex-1 items-center gap-3 border p-3 rounded-lg ">
        <input value={keyword} onKeyDown={searchFunc} onChange={(e)=>setKeyword(e.target.value)} type="text" className="outline-none flex-1" placeholder="Ara..." />
        <BiSearch size={25} />
      </div>
      {
        menu.map((item,i)=>(
          <MenuItem item = {item} key={i}/>
        ))
      }
      <ThemeComp/>
    </div>
  )
}

export default Header
