import { response } from "express";
import { useState } from "react";
import NoteContext from "./Notes.js";
const Notestate=(props)=>{
  const port='http://localhost:80'
    const state=[]
      const getnotes=async ()=>{
        const response = await fetch(`http://localhost:80/api/auth/fetchallnotes`, {
          method: 'GET', 
          headers: {
            
            "auth-token":"eyJhbGciOiJIUzI1NiJ9.NjNkYjgwMzdiZmY1OTM0Njk5NjAxNmUw.jvZxCLNUBxEYvLnDVwwGnFETerLfKqz-DcJ3r_B4EDg",
          
            "Content-Type": "application/json"
            
          }
          
        })

        const j=await response.json();
        console.log(j)
        nextstate(j);
      }
      const [states,nextstate]=useState(state)
      //Add a note
      const addnote=async (title,description)=>{
        const response = await fetch(`${port}/api/auth/createnote`, {
          method: 'POST', 
          headers: {
            'auth-token':'eyJhbGciOiJIUzI1NiJ9.NjNkYTUzMDM3NjY4MGY4NzEzNGJmYzU4.ZK82U5mRlKQwiH6NRcklluJkyIpqJ_iTU5acCDUrrus',
            'Content-Type': 'application/json'
          },
         
        })
    

          const note={
         
            "title": title,
            "description": description,
          }
          //adding new note by concatinating 
          nextstate(states.concat(note))
          console.log("This title has been updated ")
      }
      //Delete a note
      const deletenote=async (id)=>{
        //filtering the note content on the basis of the id
        const response = await fetch(`${port}/api/auth/deletenote/${id}`, {
          method: 'DELETE', 
          headers: {
            'auth-token':'eyJhbGciOiJIUzI1NiJ9.NjNkYjgwMzdiZmY1OTM0Njk5NjAxNmUw.jvZxCLNUBxEYvLnDVwwGnFETerLfKqz-DcJ3r_B4EDg',
            'Content-Type': 'application/json'
          },
         })
       console.log("deleted")
        let newnote=states.filter((note)=>{return note._id!==id})
    
        nextstate(newnote)
      }
      //updating a note
      const updatenote=(title,description)=>{
        
      }
    const editnote=async (id,title,description)=>{
      const response = await fetch(`${port}/api/auth/updatenote/${id}`, {
        method: 'PUT', 
        headers: {
          'auth-toke':'eyJhbGciOiJIUzI1NiJ9.NjNkN2JmZWVmMjQ4MDcyYWI0YmJkNWNm.OXta3Onk4usOvV2efRUZyZ1TPfmzyFILiEKxOzUV9xM',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(title,description) 
      });
    let i=0;
      for(i=0;i<states.length;i++){
          const element=states[i];
          if(id===i._id){
            element.title=title
            element.description=description
          }
      }
    }
    return(
//double kerley braces used for giving many parameters at a same time
        <NoteContext.Provider value={{states,addnote,deletenote,editnote,getnotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default Notestate;