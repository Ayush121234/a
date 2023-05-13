import React from 'react'
import { useNavigate } from 'react-router-dom';
import Design from './Design';

export default function Cont(props) {
  const navigate=useNavigate();
  const handleclick=(e)=>{
    navigate(`/movie/${props.id}`)
  }
  return (
   <>
    <div className='col-2 py-3 h-8'>
      <div class="card w-40 bg-black text-white  border-gray-500 hover:w-44 hover:cursor-pointer" onClick={handleclick}>
       {props.loadstate==false? <div>
  <img src={`https://image.tmdb.org/t/p/w500${props.image}`} class="card-img-top border-y" alt="..."/>
  <div className="progress1"style={{ width: 20, height:20,textSize: '30px'}}>

</div>
 
    <p class="card-text">{props.title.length>15?props.title.substring(0,15)+"...":props.title}</p>
      </div> :<Design />}
    </div> 
  
</div>
   </>
  )
}
