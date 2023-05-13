import React, { useRef } from "react";
import { useEffect } from "react";
import { useContext,useState } from "react";
import noteContext from "../context/notes/Notes";
import Noteitem from "./Noteitem";
import Addnote from "./Addnote";
export default function Notescol() {
  const context = useContext(noteContext);
  const { states, getnotes,editnote } = context;
  useEffect(() => {
    getnotes();
  }, []);
  const [note,setnote]=useState({id:"",title:"",description:""})

  const updatenote=(note,noteid)=>{
    ref.current.click();
    setnote({id:noteid})
  }
  const onclick=(e)=>{
    setnote({...note,[e.target.name]:e.target.value})
}
const clickhandle=(e)=>{
    e.preventDefault();
    
    editnote(note.id,note.title,note.description)
    setnote({id:"",title:"",description:""})
    ref.current.click();
    
}
  const ref = useRef(null);
  return (
    <>
      <button
        ref={ref}
        
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
            <div className="container my-3">
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label" >
              Title
            </label>
            <input
              type="text"
              
              className="form-control"
              id="title"
              name="title"
              value={note.title}
              aria-describedby="emailHelp"
              onChange={onclick}
              minLength={3} required

            />
        
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1"  className="form-label" value={note.description}>
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              value={note.description}
              name="description"
              onChange={onclick}
              minLength={5} required
              
            />
          </div>
        
        
        </form>
      </div>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
          
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary" onClick={clickhandle} >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container row my-3">
        {states.map((note) => {
          return <Noteitem key={note._id} note={note} updatenote={updatenote} />;
        })}
      </div>
      
    </>
  );
}
