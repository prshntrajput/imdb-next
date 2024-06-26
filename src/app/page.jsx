

import Results from "@/components/Results";
import { Suspense } from "react";
import axios from "./axios";

const API_KEY = process.env.API_KEY

 export default async function Home({searchParams}) {

  const genre = searchParams.genre ||'fetchTrending';

 const {data} = await axios.get(`${genre === 'fetchTopRated' ? `/movie/top_rated` : `/trending/all/week`}`);
 if(!data){
  throw new Error('Failed to fetch')
 }
 const results = data.results; 

 

  return (
   <div className="bg-slate-600">
    <Results results={results}/>
   </div>
  );
}

export function Homee(){
  return(
    <Suspense>
      <Home/>
    </Suspense>
  )
}


