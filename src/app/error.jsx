"use client"

import { useEffect } from "react"

export default function({error,reset}){
    useEffect(()=>{console.log(error);},[error]);

    return (
        <div className="text-center mt-12">
            <h1>Something went wrong Please try again</h1>
            <button  onClick={()=>reset()} className="bg-red-400 mt-4 rounded-md p-2 text-white font-semibold">Try again</button>
        </div>
    )
}