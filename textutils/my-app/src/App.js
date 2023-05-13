import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Textform from "./components/Textform";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Alert from "./components/Alert";
// import About1 from "./components/About1";

import {Routes} from "react-router-dom";
import { BrowserRouter as Router, Route, Link} 
        from "react-router-dom";
function App() {
  const showalert = (mesg, aler1) => {
    setalert({
      msg: mesg,
      alert1: aler1,
    });
    setTimeout(() => {
      setalert(null)  
    }, 2000);
    
  };

  const togglemode = () => {
    if (mode == "dark") {
      modes("light");
      document.body.style.backgroundColor = "white";
      bgcolors("white")
      showalert("light mode enable", "success");
    }
    // else{
    //   modes("dark");
    //   document.body.style.backgroundColor="rgb(5, 41, 94)"
    // }
    else{
      if (document.getElementById("flexRadioDefault1").value == "1") {
        modes("dark");
        document.body.style.backgroundColor = "#064f06";
        bgcolors("primary")
      } else if (document.getElementById("flexRadioDefault2").value == "1") {
        modes("dark");
        bgcolors("primary")
        document.body.style.backgroundColor = "#4b0e0e";
      } else if (document.getElementById("flexRadioDefault3").value == "1") {
        modes("dark");
        bgcolors("primary")
        document.body.style.backgroundColor = "#554e16";
      } else {
        modes("dark");
        bgcolors("primary")
        document.body.style.backgroundColor = "#0e0c47";
      }
      showalert("Dark mode enable", "success");
    
  }
  }

  const [mode, modes] = useState("light");
  const [alert, setalert] = useState(null);
  const [bgcolor,bgcolors]=useState("white")

  return (
    <>
      
      
      <Router>
      <Navbar togglemode={togglemode} mode={mode}></Navbar>
      <Alert alert={alert} />
        <Routes>
          <Route path="/" element={<Textform color={mode} bgcolor={bgcolor}/>}></Route>
          {/* <Route path="page1" element={<Page1 />} /> */}
          <Route path="/about" element={<About color={mode} bgcolor={bgcolor}/>}></Route>
        </Routes>
       
      </Router>
      
    </>
  );
}

export default App;
