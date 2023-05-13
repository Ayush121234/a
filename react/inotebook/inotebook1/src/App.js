
import './App.css';
import Home from './components/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import About from './components/About'
import Notestate from "./context/notes/Notestate";
import Login from './components/Login'
import Signup from './components/Signup'
import Logout from './components/Logout';
import Addnote from './components/Addnote';
import Notescol from './components/Notescol';
import Allnotes from './components/Allnotes';
function App() {
  return (
    <>
    <Notestate>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/addnote" element={<Allnotes/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path ="/login" element={<Login/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/logout" element={<Logout/>}></Route>


        </Routes>
      </BrowserRouter>
      </Notestate>
     
    </>
  );
}

export default App;
