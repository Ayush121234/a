import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom';
import Addnote from './Addnote';
import "./back.css"
export default function Login() {
    const [note,setnote]=useState({email:"",password:""})
    let history=useNavigate();
    const change=(e)=>{
        setnote({...note,[e.target.name]:e.target.value})
        
    }
    const handleclick=async (e)=>{
        e.preventDefault()
        const response =await fetch(`http://localhost:3000/api/auth/login`, {

            method: 'POST', 
            headers: {
                   'Content-Type': 'application/json'
            },
            body: JSON.stringify({"email":note.email,"password":note.password}) 
          });

          const js=await response.json();
      
          if(js.success==true){
          localStorage.setItem('token',js.authtoken)
          history('/addnote')
        }
        else{
            alert("Invalid credentials")
        }
    }
  return (
    <>

    <div className="main">
      <div className='form '>
    <form className="container border" onSubmit={handleclick}>
  <div className="mb-3">
    
    <input  type="email" placeholder='Email Id' className="form-control input" id="exampleInputEmail1" name='email'  onChange={change} aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" name='password' v onChange={change} id="exampleInputPassword1"/>
  </div>
  <button type="submit margin" className="btn btn-primary">Submit</button>
</form>
</div>
</div>
    </>
  )
}
