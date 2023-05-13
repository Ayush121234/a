import React from "react";
import { useContext } from "react";
import { useState } from "react";
import noteContext from "../context/notes/Notes";
import Notescol from "./Notescol";

export default function Addnote() {
    const context=useContext(noteContext)
    const {addnote}=context;
    const [note,setnote]=useState({title:"",description:""})
    const onclick=(e)=>{
        setnote({...note,[e.target.name]:e.target.value})
    }
    const clickhandle=(e)=>{
        e.preventDefault();
        addnote(note.title,note.description);
        setnote({title:"",description:""})
    }

  return (
    <>
      <div className="container my-3">
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              minLength={3} required
              value={note.title}
              aria-describedby="emailHelp"
              onChange={onclick}
            />
        
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Description
            </label>
            <input
              type="text"
              value={note.description}
              className="form-control"
              id="description"
              minLength={5} required
              name="description"
              onChange={onclick}
            />
          </div>
        
          <button type="submit"   disabled={note.title.length<3 || note.description.length<5} className="btn btn-primary" onClick={clickhandle}>
            Submit
            
          </button>
          
        </form>
      </div>
      

    </>
  );
}
