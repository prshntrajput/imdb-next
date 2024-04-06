import React from 'react'
import Link from  "next/link"

const NavBarItem = ({param,title}) => {
  return (
    <div>
       <div>
       <Link href={`/?genre=${param}`}> <h1 className='font-bold text-lg hover:underline text-stone-200'>{title}</h1></Link>
        </div>
    </div>
  )
}

export default NavBarItem