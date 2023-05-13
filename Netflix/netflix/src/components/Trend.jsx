import React, { useEffect, useState } from 'react'
import Trendcard from './Trendcard';
export default function  Trend () {
  const [state,setstate]=useState([])
const [loadstate,loadstates]=useState(true);
  useEffect( ()=>{
    api()
  },[])
  // useEffect(()=>{
  //   lefth();
  // },[state])
  const [bes,best]=useState([1,2,3,4,5,6,7]);
const [j,j1]=useState(7);
var json;
  const api= ()=>{fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=6509851ee4937c001d4e97bc3e8a5417`).then(async (res)=>{
   const t=await setInterval(()=>{
      console.log("helo")
    },3000)
  var json=await res.json(); 
    setstate(json.results)
    console.log(json.results)
    loadstates(false)
    let arr=[];
    for(var i=0;i<7;i++){
      arr.push(json.results[i]);
    }
    best(arr);
    return json;
    

  

   
    
   })}
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
   var count=0;
   console.log(bes)
   
  return (
    <div className='trending py-2'>
      <span className='text-white text-2xl'>Trending</span>
      <div class="btn-group group absolute right-0 h-7" role="group" aria-label="Basic mixed styles example">
  <button type="button b " class="btn btn-danger py-0 rounded-full" onClick={right}>Left</button>
  <button type="button b" class="btn btn-warning py-0 rounded-full" onClick={left}>Middle</button>
  </div>
  <div className='roww'>
    <div className="row h my-2 ">
     
      {
     bes.map(e=>{
      count++;
      if(count<8){
      return <Trendcard image={e.poster_path} title={e.title} loadstate={loadstate} release={e.release_date} percentage={e.vote_average} id={e.id}/>
      } 
    })
    }
    </div>
    </div>
  
  </div>

    
  )
}
