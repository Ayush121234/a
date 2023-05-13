import React from 'react'
import { useContext } from 'react'
import noteContext from '../context/notes/Notes'
import Noteitem from './Noteitem'
import Notescol from './Notescol'
import Addnote from './Addnote'
import Login from './Login'

const Home=(props)=>{

    return (
      <>
      <div className="background">
      <Login/>
        </div>
      </>
    )
  }

export default Home;