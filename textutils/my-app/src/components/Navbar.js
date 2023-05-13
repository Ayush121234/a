import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
    const dark=()=>{
        console.log("hoo")
    }
   const green=()=>{
    document.getElementById("flexRadioDefault1").value="1";
    document.getElementById("flexRadioDefault3").value="0";
    document.getElementById("flexRadioDefault2").value="0";
   }
   const red=()=>{
    document.getElementById("flexRadioDefault1").value="0";
    document.getElementById("flexRadioDefault3").value="0";
    document.getElementById("flexRadioDefault2").value="1";
    console.log(document.getElementById("flexRadioDefault1").value);
} 
   const blue=()=>{
    document.getElementById("flexRadioDefault2").value="0";
    document.getElementById("flexRadioDefault1").value="0";
    document.getElementById("flexRadioDefault3").value="1";
   }
  
  return (
    
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a
                className="nav-link disabled"
                href="#"
                tabIndex="-1"
                aria-disabled="true"
              >
                Disabled
              </a>
            </li>
          </ul>
          <div className="form-check">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="0" onClick={green}/>
  <label className="form-check-label" htmlFor="flexRadioDefault1">
    green
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value="0" onClick={red}/>
  <label className="form-check-label" htmlFor="flexRadioDefault1">
    red
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" value="0" onClick={blue}></input>
  <label className="form-check-label" htmlFor="flexRadioDefault1">
    yellow
  </label>
</div>
          <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.togglemode}></input>
  <label className={`form-check-label text-${props.mode==='dark'?'white':'dark'}`} htmlFor="flexSwitchCheckDefault">{`Enable-${props.mode==='dark'?'light':'dark'}-mode`}</label>
</div>

        
        </div>
      </div>
    </nav>
  );
}
