import React from "react";
import { useContext } from "react";
import { useState } from "react";
import noteContext from "../context/notes/Notes";

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
    }

  return (
    <>
      <div className="container my-3">
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Add a Note
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              aria-describedby="emailHelp"
              onChange={onclick}
            />
        
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              onChange={onclick}
            />
          </div>
        
          <button type="submit" className="btn btn-primary" onClick={clickhandle}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
