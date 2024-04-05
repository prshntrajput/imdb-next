import React from 'react'
import Card from './Card'

const Results = ({results}) => {
  return (
    <div className=' xl:grid xl:grid-cols-4 max-w-6xl grid grid-cols-1 mx-auto p-2'>
        {results.map((result)=>(<Card key={result.id} result={result}/>))}
    </div>
  )
}

export default Results