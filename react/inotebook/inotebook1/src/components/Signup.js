import React,{useState} from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

export default function Signup() {
  const navigate=useNavigate();
  const handleclick=async (e)=>{
    e.preventDefault()
    const response =await fetch(`http://localhost:3000/api/auth/creatuser`, {

        method: 'POST', 
        headers: {
              'Content-Type': 'application/json'
        },
        body: JSON.stringify({"name":note.name,"email":note.email,"password":note.password}) 
      });
      alert("Account created successfully")
      navigate('/login')
      
  }
  const [note,setnote]=useState({name:"",email:"",password:""})
    let history=useNavigate();
    const change=(e)=>{
        setnote({...note,[e.target.name]:e.target.value})
       
    }
  return (
    <>
    <form className="container" onSubmit={handleclick}>
    <div className="mb-3">
    <label htmlFor="Name" className="form-label">Name</label>
    <input type="Name" className="form-control " id="Name1" name='name'  onChange={change} aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control " id="exampleInputEmail1" name='email'  onChange={change} aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" name='password' v onChange={change} id="exampleInputPassword1"/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </>
  )
}
