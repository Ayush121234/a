import  {  useEffect, useState } from 'react'

const  Usefetch=(url)=> {  
    const [data,Data1]=useState({})
    const b=async ()=>{
        const a=await fetch(url)
        const json1=await a.json();
        Data1(json1)
        console.log(data)
}
useEffect(()=>{
    const a=async()=>{const s=await b();
    return s;}
    const aq=a()
    console.log(aq)
},[url])
return (data)
}
export default Usefetch;