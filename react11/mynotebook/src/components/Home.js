import React from 'react'
import { useContext } from 'react'
import noteContext from '../context/notes/Notes'
import Noteitem from './Noteitem'
import Notescol from './Notescol'
import Addnote from './Addnote'
const Home=(props)=>{

    return (
      <>
      
      <Addnote/>
      <Notescol />
      
      </>
    )
  }

export default Home;