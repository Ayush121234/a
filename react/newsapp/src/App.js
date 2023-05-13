
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {Routes} from "react-router-dom";
import { BrowserRouter as Router, Route, Link} 
        from "react-router-dom";
export default class App extends Component {
  render() {
    return (
     <>
     
     <Router>
      <Navbar></Navbar>
        <Routes>
          <Route exact path="/" element={<News key ="1"category="business"/>}></Route>
          <Route exact path="/entertainment" element={<News key ="7"category="entertainment"/>}></Route>
          <Route exact path="/sports" element={<News key ="6"category="sports"/>}></Route>
          <Route exact path="/health" element={<News key ="5"category="health"/>}></Route>
          <Route exact path="/general" element={<News key ="4"category="general"/>}></Route>
          <Route exact path="/science" element={<News key ="3"category="science"/>}></Route>
          <Route exact path="/technology" element={<News key ="2"category="technology"/>}></Route>
        </Routes>
       
      </Router>
      </>
    )
  }
}
