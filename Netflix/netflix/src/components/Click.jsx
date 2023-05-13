import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import { useNavigate, useParams } from 'react-router-dom'

export default function Click(props) {
  const [d,d1]=useState("");
  const [gen,gens]=useState([]);
  const {id}=useParams();
  console.log(id)
  
  useEffect(()=>{
    api()
    api2();
  },[])
  const api= ()=>{fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=6509851ee4937c001d4e97bc3e8a5417&language=en-US`).then(async (res)=>{
    var json=await res.json(); 
    d1(json)
    console.log(json.genres)
    gens(json.genres)
    return json;
   })}
   const api2=async ()=>{
    var dat=fetch(`http://localhost:8000/api/auth/addwatch/${id}`,{
      method:'GET',
    headers:{
      'Content-Type':'application/json',
      'auth-token':'eyJhbGciOiJIUzI1NiJ9.NjQ1MjE3OTQwMmQwMTg4N2I0MTNiZjE1.whC8MsC-DIcoj364_DKzDRqGqdNpX7PVTxF3tssR1wA'
    }
    })
   }
  return (
    <div className='flex px-28 py-10'>
      <div className='px-6'>
        <img src={`https://image.tmdb.org/t/p/w500${d.poster_path}`} alt='no'></img>
      </div>
      <div><h1 className='text-white text-3xl'>{d.original_title}</h1>
     
      
      <div className="row py-4">
{
  gen.map((e)=>{
    return <div className='col-1 items-center  text-white text-xs bg-red-500 rounded-lg  w-28  ml-2 mr-2'>{`${e.name}`}</div>
  })
}
      </div>
      <div className='w-96 flex relative right-24 '>
       <CircularProgressbar className="h-20 relative right-26"value={d.vote_average*10} text={`${d.vote_average}`} />
      <span className='text-white w-44 py-3'>watch Trailer</span></div>
      <div className='py-3'>
        <h2 className='text-white'>Overview</h2>
        <p className='text-white py-3 text-sm'>{d.overview}</p>
      </div>
    </div>
    </div>
  )
}
