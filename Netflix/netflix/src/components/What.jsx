import React, { useEffect, useState } from 'react'
import Whattrend from './Whattrend';

export default function What() {
  useEffect(()=>{
    api();
    
  },[])
  const [bes,best]=useState([]);
  const [j,j1]=useState(7);
  const [loadstate,loadstates]=useState(true)
  const [state,setstate]=useState([])
  const api= ()=>{fetch(`https://api.themoviedb.org/3/discover/movie?api_key=6509851ee4937c001d4e97bc3e8a5417`).then(async (res)=>{
    var json=await res.json(); 
    setstate(json.results)
    loadstates(false)
    let arr=[];
    for(var i=0;i<7;i++){
      arr.push(json.results[i]);
    }
    best(arr);
    return json;
   })}
   var count=0;
   const right=()=>{
    let ar=[];

    for(var l=j;l<(j)+7;l++){
      ar.push(state[l])
    }
    best(ar);

 }
 const left=()=>{
  let ar1=[];

  for(var l=j-1;l>=(j)-7;l--){
    ar1.push(state[l])
  }
  best(ar1);

}
   
  return (
    <div className='trending py-2'>
      <span className='text-white text-2xl'>What's Popular</span>
      <div className="btn-group group absolute right-0 h-7  " role="group" aria-label="Basic mixed styles example">
  <button  class="" onClick={right}>Left</button>
  <button type="button b" class="btn btn-warning rounded-full py-0" onClick={left}>Middle</button>
  </div>
  <div className='roww'>
    <div className="row h my-2 ">
     
      {
     bes.map(e=>{
      count++;
      if(count<8){
      return <Whattrend image={e.poster_path} title={e.title} loadstate={loadstate} release={e.release_date} percentage={e.vote_average} id={e.id}/>
      } 
    })
    }
    </div>
    </div>
  
  </div>

    
  )
}
