import React, { useEffect, useState } from 'react'
import Trendcard from './Trendcard';
import Usefetch from '../../hooks/Usefetch';

export default function  Trend () {
const a= Usefetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=6509851ee4937c001d4e97bc3e8a5417`)

  useEffect( ()=>{
    api()
  },[])
  const [state,setstate]=useState([])
  const api= ()=>{fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=6509851ee4937c001d4e97bc3e8a5417`).then(async (res)=>{
    var json=await res.json(); 
    setstate(json.results)
    return json;
  

  

   
    
   })}
   var count=0;
   
   
  return (
    <div className='trending'>
      <span>Trending</span>
      <div class="btn-group group" role="group" aria-label="Basic mixed styles example">
  <button type="button b " class="btn btn-danger">Left</button>
  <button type="button b" class="btn btn-warning">Middle</button>
  </div>
  <div className='roww'>
    <div className="row h my-2">
     
      {
     state.map(e=>{
      count++;
      if(count<8){
      return <Trendcard image={e.poster_path} title={e.title} release={e.release_date} percentage={e.vote_average}/>
      } 
    })
    }
    </div>
    </div>
  
  </div>

    
  )
}
