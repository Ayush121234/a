import React,{ useEffect}from 'react'
import { Link, useLocation}from 'react-router-dom'


const Navbar=()=>{
      let location=useLocation();
      useEffect(()=>{
      },[location])
    return (
      <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand"href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/"?"active":""}`} aria-current="page" to="/">Home</Link>
          
        </li>
        <Link className={`nav-link ${location.pathname==="/about"?"active":""}`} aria-current="page" to="/about">About</Link>
       
       
        
      </ul>
    
    
    </div>
    <form className="d-flex">
        <Link className="btn btn-primary mx-2" to={'/login'}type="Login" >Login</Link>
        <Link className="btn btn-primary mx-2" to={'/signup'} type="Signup">Signup</Link>
        <Link className="btn btn-primary" to={'/logout'} type="Logout">Logout</Link>

      </form>
  </div>
</nav>
      </>
    )
  }


  export default Navbar;
