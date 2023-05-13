import React, { useEffect, useState } from 'react'
import Cont from './Cont'
import { useNavigate } from 'react-router-dom';


export default function Continuewatch() {

  useEffect( ()=>{
    api()
  },[])
  const [state,setstate]=useState([1,2,3,4,5,6,7])
  const [loadstate,loadstates]=useState(true)

  const api= ()=>{fetch(`http://localhost:8000/api/auth/continuewatch`,{
    method:'GET',
    headers:{
      'Content-Type':'application/json',
      'auth-token':'eyJhbGciOiJIUzI1NiJ9.NjQ1MjE3OTQwMmQwMTg4N2I0MTNiZjE1.whC8MsC-DIcoj364_DKzDRqGqdNpX7PVTxF3tssR1wA'
    }
  }).then(async (res)=>{
    var json=await res.json(); 
    console.log(json)
    setstate(json)
    loadstates(false)
    console.log(state[0])
    return json;   
    
   })}
   let count=0;
  return (
    <>
    <div className='trending py-2'>
      <span className='text-white text-2xl'>Continue Watch</span>
      <div class="btn-group group absolute right-0 h-7" role="group" aria-label="Basic mixed styles example">
  <button type="button b " class="btn btn-danger py-0 rounded-full">Left</button>
  <button type="button b" class="btn btn-warning py-0 rounded-full">Middle</button>
  </div>
  <div className='roww'>
    <div className="row h my-2 ">
     
      {
     state.map(e=>{
      count++;
      if(count<7){
      return <Cont image={e.poster_path} loadstate={loadstate} title={e.title} release={e.release_date} id={e.id} />
      } 
    })
    }
    </div>
    </div>
  
  </div>

   
    </>
  )
}
