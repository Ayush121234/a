import React, { useEffect, useState } from 'react'
import '../index.css';
export default function Featured() {
  
    useEffect(()=>{
        api();
        
      },[])
      const [state,setstate]=useState([])
      const api= ()=>{fetch(`https://api.themoviedb.org/3/discover/movie?api_key=6509851ee4937c001d4e97bc3e8a5417&?certification_country=US&certification=R&sort_by=vote_average.desc`).then(async (res)=>{
        var json=await res.json(); 
        setstate(json.results)
        return json;
    
       
        
       })}
       console.log(state)
    return (
    <div className='z-0 '>
      <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active bg-cover">
      <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/706b9474134343.5c239806af449.jpg" class="d-block w-100" alt="..."/>
    </div>
    
    
  </div>
</div>
    </div>
  )
}
