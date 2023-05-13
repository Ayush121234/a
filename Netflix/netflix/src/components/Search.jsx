import Card from './Card.jsx'
import React, { useEffect, useState } from 'react'

export default function Search() {
    const [value,value1]=useState("");
    const [movie,movies]=useState([1]);
    const [loadstate,loadstates]=useState(true)

    async function handleclick(e){
            value1(e.target.value)
            console.log(e.target.value);
            
        }
        useEffect(()=>{
            Search();
        },[value])
       const Search=async ()=>{
          const move=await fetch(`https://api.themoviedb.org/3/search/movie?api_key=6509851ee4937c001d4e97bc3e8a5417&query=${value}&page=1`)
          const json=await move.json();
          loadstates(false)
          movies(json.results)
          
          console.log(movie)        }
  return (
    <>
    <div>
    <a href="https://www.freepnglogos.com/pics/netflix-logo-png" className="absolute z-10 left-4 " title="Image from freepnglogos.com"><img src="https://www.freepnglogos.com/uploads/netflix-logo-text-emblem-31.png" width="200" className='h-[17] px-4 ' alt="netflix logo text emblem" /></a>
    
    <div className="h absolute mt-20 ml-32 z-50 ">
     <div className='text-center'>
  <input type="search" className='py-2  text-slate-950  ww text-sm text-center bg-white rounded-lg' placeholder='Enter text' value={value} onChange={handleclick}></input><button type='submit' onClick={Search}   className='text-white ml-2 pq px-4 font-bold rounded-lg bg-[#e50914]  '> Search</button>
  </div></div>
  <div className="absolute bg-black opacity-60">
  <img src='https://assets.nflxext.com/ffe/siteui/vlv3/efb4855d-e702-43e5-9997-bba0154152e0/42f6dd08-d478-46e4-a4a8-e3a93aa7e085/IN-en-20230417-popsignuptwoweeks-perspective_alpha_website_large.jpg' className='' alt="no"></img>
</div>
</div>
    <div className="row absolute py-36 h-80 max-w-max px-16">
     
   {
    movie.map(e=>{
        return <Card image={e.poster_path} loadstate={loadstate} title={e.title} release={e.release_date} percentage={e.vote_average} id={e.id}/>

    })
    }
   
    </div>
  
  </>
  )
}
