import React from 'react'
import Login from './Login'
export default function Logout() {
    localStorage.clear();
  return (
    <Login/>

  )
}
