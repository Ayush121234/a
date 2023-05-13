import React, { useContext } from 'react'
import noteContext from '../context/notes/Notes'
const About=()=>{
  const a=useContext(noteContext);
    return (
      <div>
        this is me{a.name}
      </div>
    )
  }

export default About;

