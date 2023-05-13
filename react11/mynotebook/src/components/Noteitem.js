import React from 'react'
import { useContext } from "react";
import { useState } from "react";
import noteContext from "../context/notes/Notes";
export default function Noteitem(props) {
    const title=props.note.title
    const {note}=props;
    const description=props.note.description
    const context=useContext(noteContext)
    const {deletenote}=context;
  return (
    <div className="container col-md-4">
      <div className="card" >
  {/* <img src="..." className="card-img-top" alt="..."> */}
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    {/* only take those note on which i clicked*/ }
    <i className="fa-solid fa-trash-can" onClick={()=>{deletenote(note._id)}}></i>
  
    <i className="fa-regular fa-pen-to-square mx-5"></i>
    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
  </div>
</div>
    </div>
  )
}
