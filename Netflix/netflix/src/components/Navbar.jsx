import React, { useEffect, useState } from 'react'
import '../index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMugHot } from '@fortawesome/free-solid-svg-icons';
import '@mui/material'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { AcUnit, Airplay, Notifications, Search } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [y,y1]=useState(true)
  const navigate=useNavigate();
  function handlesearch(){
    navigate('/search');
    
  }
  window.onscroll=()=>{
    y1(false)
    if(window.scrollY==0){
      y1(true)
    }
    console.log(y)
  }
  return (
    
      <navbar className={`${y==true?"class":"bg-slate-950"} z-50 fixed text-white h-14 flex width `}>
        <ul className="flex">
<li ><img className="img h-12 w-8" src='../netflix.png' /></li>
            <li className='px-3 py-4 text-xs'>Homepage</li>
            <li className='px-3 py-4 text-xs'>Series</li>
            <li className='px-3 py-4 text-xs'>Movies</li>
            <li className='px-3 py-4 text-xs'>New Popular</li>
        <li className='px-3 py-4 text-xs'>Mylist</li>
        </ul>
        <ul className='flex absolute right-0 '>
          <li className='text-white px-3 py-4 text-xs hover:cursor-pointer' onClick={handlesearch} ><Search /></li>
          <li className='py-4'>KID</li>
          <li className='text-white px-3 py-4'><Notifications /></li>
          <li className="text-white px-3 py-4 text-xs"><div class="dropdown h-1">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Settings</a></li>
    <li><a class="dropdown-item" href="#">Logout</a></li>
  </ul>
</div></li>
        </ul>
      </navbar>
   
  )
}
