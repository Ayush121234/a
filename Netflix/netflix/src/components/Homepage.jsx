import React from 'react'
import Navbar from './Navbar'
import Featured from './Featured'
import Trend from './Trend'
import What from './What'
import Continuewatch from './Continuewatch'

export default function Homepage() {
  return (
    <>
    <Navbar />
    <Featured />
    <div className="px-8">
    <Continuewatch />
    <Trend />
    <What /></div>
    </>
  )
}
