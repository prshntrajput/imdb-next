"use client"
import React from 'react'

import NavBarItem from './NavBarItem'
import { useSearchParams } from 'next/navigation'

const NavBar = () => {
   const searchParams = useSearchParams();
   const genre=  searchParams.get("genre")
  return (
    <div className='w-full h-[8vh] bg-yellow-200 flex gap-8 items-center justify-center mt-4'>
        <NavBarItem title="Trending" param="fetchTrending"/>
        <NavBarItem title="TopRated" param="fetchTopRated"/>
    </div>
  )
}

export default NavBar