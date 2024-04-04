import React from 'react'
import Link from "next/link"

const MenuItem = ({title,Icon,address}) => {
  return (
    <div>
        <Link href={address} className='hover:text-amber-500'><Icon className="text-2xl xl:hidden"/> <p className='uppercase hidden xl:inline text-sm font-semibold'>{title}</p> </Link>
    </div>
  )
}

export default MenuItem