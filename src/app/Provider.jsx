'use client'
import React from 'react'
import { ThemeProvider} from "next-themes"

const Provider = ({childern}) => {
  return (
    <ThemeProvider defaultTheme='system' attribute='class'>
    {childern}
    </ThemeProvider>
  )
}

export default Provider