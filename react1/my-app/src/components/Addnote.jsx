import React, { useState } from 'react'
import Card from './Card'
import Render from './Render'
import array from '../array';

export default function Addnote(props) {
    let count=0;
    const [title,ctitle]=useState({
        name:"",
        des:""
    })
    const [arr,arr1]=useState([])
        function handlechange(e){
            ctitle({
                name:e.target.value,
                des:title.des
            })
            console.log(title.name)
        
        }
        function handlechange1(e){
            ctitle({
                name:title.name,
                des:e.target.value
            })
          
        }
function render(){
    arr1(setnotes=>{
        return [...arr,title]}
    )  

 
   
    console.log(arr)
}
  return (
    <>
    
    <div className='note container'>
        <form>
      <input className="border" value={title.name} placeholder='Title...' onChange={handlechange}></input>
      <textarea rows={3} class="border" value={title.des}placeholder='Enter the note' onChange={handlechange1}></textarea>
      <button type='button' class="button" onClick={render} ></button>
      </form>
      
    </div>
    {
        arr.map((e) => {
          return (
              <Card key={e} name={e.name} des={e.des} />
          );
      })
      }
    
  </>
  )
}
