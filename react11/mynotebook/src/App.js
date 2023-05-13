
import './App.css';
import Home from './components/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import About from './components/About'
import Notestate from "./context/notes/Notestate";
function App() {
  return (
    <>
    <Notestate>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
        </Routes>
      </BrowserRouter>
      </Notestate>
    </>
  );
}

export default App;
