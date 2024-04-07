"use client"
import  { Suspense } from 'react'

import NavBarItem from './NavBarItem'
import { useSearchParams } from 'next/navigation'

const NavBar = () => {
   const searchParams = useSearchParams();
   const genre=  searchParams.get("genre")
  return (
    <div className='w-full h-[8vh] bg-slate-400 flex gap-8 items-center justify-center'>
        <NavBarItem title="Trending" param="fetchTrending"/>
        <NavBarItem title="TopRated" param="fetchTopRated"/>
    </div>
  )
}

export function NavBarr(){
    return(
                <Suspense>
                <NavBar/>
            </Suspense>)
}