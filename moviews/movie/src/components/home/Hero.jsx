import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
//  import "./style.scss"
export default function Hero() {
  const [value1,setValue]=useState("")
  const navigate=useNavigate();
  const queryHandler=(event)=>{
    setValue(event.target.value)
    if(event.key=="Enter" && value1.length>0){
      navigate(`/search/${value1}`)
    }
  }
  return (<>
    
    <div className='black'>
        <div className='welcome container'>
            <h1>Welcome</h1>
            <p>million of movies are here</p>
        </div>
        <div className='search container'>
            <input className='input' type='search' value={value1} onChange={queryHandler} onKeyUp={queryHandler}></input>
            <button type='submit' className='button'>Submit</button>
        </div>
    </div>
    </>
  )
}
