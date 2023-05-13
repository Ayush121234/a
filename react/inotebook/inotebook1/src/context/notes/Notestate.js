
import { useState } from "react";
import NoteContext from "./Notes.js";
const Notestate=(props)=>{
  const port='http://localhost:3000'
    const state=[]
      const getnotes=async ()=>{
        const response = await fetch(`http://localhost:3000/api/auth/fetchallnotes`, {
          method: 'GET', 
          headers: {
            
            "auth-token":localStorage.getItem('token'),
          
            "Content-Type": "application/json"
            
          }
          
        })

        const j=await response.json();
      
        nextstate(j);
      }
      const [states,nextstate]=useState(state)
      //Add a note
      const addnote=async (title,description)=>{
        const response =await fetch(`${port}/api/auth/createnote`, {
          method: 'POST', 
          headers: {
            
            'auth-token':localStorage.getItem('token'),
            'Content-Type': 'application/json',
            
          },
         body: JSON.stringify({"title":title,"description":description})
        })
          const note=await response.json();
          //adding new note by concatinating 
          nextstate(states.concat(note))
          
      }
      //Delete a note
      const deletenote=async (id)=>{
        //filtering the note content on the basis of the id
        const response = fetch(`${port}/api/auth/deletenote/${id}`, {
          method: 'DELETE', 
          headers: {
            'auth-token':localStorage.getItem('token'),
            'Content-Type': 'application/json'
          },
         })
     
    
        let newnote=states.filter((note)=>{return note._id!==id})
    
        nextstate(newnote)
      }
      //updating a note
  
    const editnote=async (id,title1,description1)=>{
      const response =await fetch(`${port}/api/auth/updatenote/${id}`, {
        method: 'POST', 
        headers: {
          'auth-token':localStorage.getItem("token"),
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({"title":title1,"description":description1}) 
      });
    let i=0;
    let element={};
      for(i=0;i<states.length;i++){
          element=states[i];
          if(element._id==id){
          element['title']=title1;
          element['description']=description1;
          break;
        }
              
         
        }
        
    
     
      let newnote=states.filter((note)=>{return note._id==id?element:note})
      nextstate(newnote)
    }
    return(
//double kerley braces used for giving many parameters at a same time
        <NoteContext.Provider value={{states,addnote,deletenote,editnote,getnotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default Notestate;