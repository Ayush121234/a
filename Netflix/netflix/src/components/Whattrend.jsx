import React from 'react'
import '../App.css'
import { CircularProgressbar } from 'react-circular-progressbar';
import { useNavigate } from 'react-router-dom';
import Design from './Design';
export default function Whattrend(props) {
  const navigate=useNavigate();
  const handleclick=(e)=>{
    navigate(`/movie/${props.id}`)
  }
  return (
    <div className='col  py-3 hover:w-56 hover:h-28 flex-wrap flex'>
      <div class="card q bg-black text-white border  border-gray-500 hover:w-44 hover:cursor-pointer" onClick={handleclick}>
      {props.loadstate===false? <div>
  <img src={`https://image.tmdb.org/t/p/w500${props.image}`} class="card-img-top border-y" alt="..."/>
  <div className="progress1"style={{ width: 20, height:20,textSize: '30px'}}>
  <CircularProgressbar className="cir"value={props.percentage*10} text={`${props.percentage}`} />
</div>
 
    <p class="card-text">{props.title.length>15?props.title.substring(0,15)+"...":props.title}</p>
      </div>:<Design />}
    </div> 
  
</div>
  )
}
