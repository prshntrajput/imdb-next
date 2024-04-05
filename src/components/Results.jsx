import React from 'react'

const Results = ({results}) => {
  return (
    <div>
        {results.map((result)=>(<h1 key={result.id}>{result.original_title}</h1>))}
    </div>
  )
}

export default Results