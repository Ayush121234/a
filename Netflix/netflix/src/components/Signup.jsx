import React, { useState } from 'react'
import '../index.css'
import {getAuth,sendSignInLinkToEmail} from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import app from './firebase'
export default function Signup() {
  const navigate=useNavigate();  
  const handleclick=()=>{
      navigate('/signin')
    }
    const [value,values]=useState("");
    const [pvalue,pvalues]=useState("");
    const [nvalue,nvalues]=useState("");
    const pvaluerelated=(e)=>{
      pvalues(e.target.value);
    }
    const valuerelated=(e)=>{
        values(e.target.value)
    }
    const nvaluerelated=(e)=>{
        nvalues(e.target.value);
    }   
       const auth = getAuth(app);
       const actionCodeSettings = {
        // URL you want to redirect back to. The domain (www.example.com) for this
        // URL must be in the authorized domains list in the Firebase Console.
        url: 'https://react-app-62437.firebaseapp.com	',
        // This must be true.
        handleCodeInApp: true,
        iOS: {
          bundleId: 'com.example.ios'
        },
        android: {
          packageName: 'com.example.android',
          installApp: true,
          minimumVersion: '12'
        },
        dynamicLinkDomain: 'example.page.link'
      };
    const Register=async (e)=>{
      e.preventDefault();
      // const data1 = { name: nvalue, email: value, password: pvalue };
      
      // const data=fetch('http://localhost:8000/api/auth/register',{
      //   method:'POST',
      //   headers:{
      //     'Content-Type': 'application/json'
      //   },
      //   body:JSON.stringify(data1)
      // })
      // values("");
      // nvalues("")
    
      // pvalues("")
sendSignInLinkToEmail(auth, value,actionCodeSettings)
  .then(() => {
    // The link was successfully sent. Inform the user.
    // Save the email locally so you don't need to ask the user for it again
    // if they open the link on the same device.
    window.localStorage.setItem('emailForSignIn', value);
    alert("Hogya")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(error)
    // ...
  });
    }
    return (
    <div>
        <a href="https://www.freepnglogos.com/pics/netflix-logo-png" className="absolute z-10 left-4 " title="Image from freepnglogos.com"><img src="https://www.freepnglogos.com/uploads/netflix-logo-text-emblem-31.png" width="200" className='h-[17] px-4 ' alt="netflix logo text emblem" /></a>
        <div className="h absolute mt-4 z-50 ml1 w-44 right-5">
        <button type='submit' className='absolute px-2 font-bold rounded-sm bg-[#e50914] opacity-100 ' onClick={handleclick}>Sign in</button>
        </div>
        <div className="h absolute mt-56 z-50 ml1">
         <div className='text-center'>
              <p className='text-white font-extrabold f'>Unlimited movies, TV shows and more</p>
            <p className='text-white text-lg py-2'>Watch anywhere. Cancel anytime.</p>
            <p className='text-white text-lg'>Ready to watch? Enter your email to create or restart your membership.</p>
            <form>
            <input type="name" name='name'  value={nvalue}className='py-2 px-1 ww text-sm decoration-slate-500 bg-black opacity-70 text-white' placeholder='Enter your name' onChange={nvaluerelated}></input>

      <input type="email" name='email'  value={value}className='py-2 px-1 ww text-sm decoration-slate-500 bg-black opacity-70 text-white' placeholder='Enter Your Email' onChange={valuerelated}></input>
      <input type='password' name="password" value={pvalue} className=' mt-3 py-2 px-1 ww text-sm decoration-slate-500 bg-black opacity-70 text-white' onChange={pvaluerelated} placeholder='Enter password'></input>
      <button type='submit' onClick={Register} className='text-white pq px-2 font-bold rounded-sm bg-[#e50914]  '> Get Started</button>
      </form></div></div>
      <div className="absolute bg-black opacity-60">
      <img src='https://assets.nflxext.com/ffe/siteui/vlv3/efb4855d-e702-43e5-9997-bba0154152e0/42f6dd08-d478-46e4-a4a8-e3a93aa7e085/IN-en-20230417-popsignuptwoweeks-perspective_alpha_website_large.jpg' className='' alt="no"></img>
    </div></div>
  )
}
