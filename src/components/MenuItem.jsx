import React from 'react'
import Link from "next/link"

const MenuItem = ({title,Icon,address}) => {
  return (
    <div>
        <Link href={address} className='hover:text-amber-500'><Icon className="text-2xl text-white xl:hidden"/> <p className='uppercase hidden xl:inline font-semibold hover:text-amber-500 text-white'>{title}</p> </Link>
    </div>
  )
}

export default MenuItem