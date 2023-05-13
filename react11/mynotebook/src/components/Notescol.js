import React from 'react'
import { useEffect } from 'react';
import { useContext } from 'react'
import noteContext from '../context/notes/Notes'
import Noteitem from './Noteitem'
export default function Notescol() {
    const context=useContext(noteContext);
    const {states,getnotes}=context;
    useEffect(()=>{
        getnotes();
    },[])
  return (
   <>
        <div className="container row my-3">
            {states.map((note)=>{
                return <Noteitem key={note._id} note={note}/>
            })}
        </div>
   </>
  )
}
