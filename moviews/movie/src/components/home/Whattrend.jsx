import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
export default function Whattrend(props) {
  return (
    <div className='col '>
      <div class="card q">
        <div>
  <img src={`https://image.tmdb.org/t/p/w500${props.image}`} class="card-img-top" alt="..."/>
  <div className="progress1"style={{ width: 20, height:20,textSize: '30px'}}>
  <CircularProgressbar className="cir"value={props.percentage*10} text={`${props.percentage}`} /></div>
</div>
 
    <p class="card-text">{props.title.length>20?props.title.substring(0,20)+"...":props.title}</p>
    
    </div> 
  
</div>
  )
}
