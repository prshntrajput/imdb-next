import React from 'react'
import MenuItem from './MenuItem'
import {AiFillHome} from "react-icons/ai";
import {BsFillInfoCircleFill} from "react-icons/bs"
import Link from "next/link"
import DarkModeSwitch from './DarkModeSwitch';

const Header = () => {
  return (
    <div className='flex justify-between items-center xl:px-6 px-2  bg-slate-600 h-[8vh] xl:mx-auto'>
        <div className='flex gap-8'>
            <MenuItem title="Home" address="/" Icon={AiFillHome}/>
            <MenuItem title="About" address="/about" Icon={BsFillInfoCircleFill}/>
        </div> 
        <div className='flex gap-2 items-center'>
            <Link href="/"> <span className='text-white px-2 py-1 font-bold bg-amber-500 rounded-md'>IMDb</span></Link>
             <span className='hidden xl:inline text-white font-semibold'>CLONE</span>
        </div>
    </div>
  )
}
export default Header