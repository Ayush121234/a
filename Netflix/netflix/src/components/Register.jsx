import React, { useState } from 'react'
import '../index.css'
import Signin from './Signin'
import { useNavigate } from 'react-router-dom';
export default function Register() {
    const [bg,bg1]=useState("white");
    const [email,emails]=useState("");
    const [pass,passs]=useState("");
    function clickhandle(){
        if(bg=="white"){
            bg1("gray-400")
        }
        else{
            bg1("white")
        }

    }
    const change=(e)=>{
        emails(e.target.value)
    }
    const changes=(e)=>{
        passs(e.target.value)
    }
    const navigate=useNavigate();

    const Register1=async (e)=>{
        e.preventDefault();
        const data1 = { email: email, password: pass };
        
        const data=await fetch('http://localhost:8000/app/auth/login',{
          method:'POST',
          headers:{
            'Content-Type': 'application/json'
          },
          body:JSON.stringify(data1)
          
        })
       const res=await data.json();

      console.log(res)
            localStorage.setItem('auth-token',res.jwt)
        console.log(localStorage.getItem('auth-token'))

        
       emails("");
       passs("")
       navigate("/homepage")
  }
    return (
   

    <div>
        <a href="https://www.freepnglogos.com/pics/netflix-logo-png" className="absolute z-10 left-4 " title="Image from freepnglogos.com"><img src="https://www.freepnglogos.com/uploads/netflix-logo-text-emblem-31.png" width="200" className='h-[17] px-4 ' alt="netflix logo text emblem" /></a>
        
        <div className="bg-black h1 absolute mt-16 z-50 ml">
         
               <form className="px-16 py-14">
               <p className="text-white text-2xl py-2 font-semibold mb-3">Sign In</p>       
                <form>
                <input placeholder='Enter Email Address' name='email' value={email} onChange={change} type='email' className='block px-2 w-60 mb-3 py-3 text-xs bg-[#333] rounded-md mt-1' > 
                </input>
                <input placeholder='Enter Password' type='password' name='password' value={pass} onChange={changes} className='block px-2 w-60 mb-3 py-3 text-xs bg-[#333] rounded-md mt-1'></input>
                <button type='submit' onClick={Register1} className='bg-[#e50914] text-white py-2 font-bold pxa rounded-md text-xs block' >Sign in</button>
                </form>
                <span className={` text1 absolute left-16 mt-1 text-gray-400 `}><input type="checkbox" className={`bg-${bg}`} onClick={clickhandle}></input>Remember me</span>
                <span className='absolute right-16 mt-1 pr-0 text-gray-400 text1'>Need Help?</span>
               </form>
               <div className="absolute mt-14 text-gray-400 left-6 px-10">
                <span className='text-xs'>New to Netflix? <a href='/signup' className='text-white '>Sign up now</a></span>
                <p className='tet'>This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.</p>
               </div>
      </div>
      <div className="absolute bg-black opacity-60">
      <img src='https://assets.nflxext.com/ffe/siteui/vlv3/efb4855d-e702-43e5-9997-bba0154152e0/42f6dd08-d478-46e4-a4a8-e3a93aa7e085/IN-en-20230417-popsignuptwoweeks-perspective_alpha_website_large.jpg' className='' alt="no"></img>
    </div></div>
  )
}
