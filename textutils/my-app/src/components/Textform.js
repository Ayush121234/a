// import { useState } from "react"
import React, { useState } from 'react'

export default function Textform(props) {
    const click=()=>{
       const t=text.toUpperCase();
       texts(t)
    }
    
    const clicked=(e)=>{
        texts(e.target.value);
    }
    const hlo=()=>{
        const t=text.toLowerCase();
        texts(t);
    }
    const spaceremove=()=>{
        const t=text.split(' ')
        let s="";
        t.forEach(i=>{
            s+=i
        })
        texts(s);
    }
    const [text,texts]=useState("")
   
    return (
    <div className={`form-floating container text-${props.color==='light'?'dark':'white'}`}>
        <h1>this is upper case</h1>

      {/* <label htmlFor='floatingTextarea'>click me</label> */}
      <textarea className='form-control' placeholder='lhjhe' id='floatingTextarea' value={text} onChange={clicked}></textarea><br/>
      <button className='btn btn-primary' onClick={click}>upper case</button>
      <button className='btn btn-primary mx-3' onClick={hlo}>lower case </button>

      <button className='btn btn-primary mx-2' onClick={spaceremove}>Remove space </button>
  {/* <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px"/> */}
  
</div>
  )
}
