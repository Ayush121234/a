import logo from './logo.svg';
import './App.css';
import Home from './components/home/Home'
import { useSelector, useDispatch } from 'react-redux'
import { geturl } from './store/createslice';
import { getgeneres } from './store/createslice';
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    api();
  
  },[]);
  const birds=useSelector((state) => state.generes)
 console.log(birds)
  const api= ()=>{fetch(`https://api.themoviedb.org/3/movie/76341?api_key=6509851ee4937c001d4e97bc3e8a5417`).then(async (res)=>{
 const json=await res.json(); 

 dispatch(getgeneres(json));
 
})}
const {generes}=useSelector(state=>
   state.slice)
console.log(generes.budget)

 



  
  return (
    <>
   
   <BrowserRouter>
      <Routes>
        
          <Route path="/" element={<Home />} />
        {/* <Route path="/:media-type/:id" element={<Content />}></Route>
        <Route path="/search/:query" element={<Searchresult />}></Route>
        <Route path="/:media-type/:id" element={<Content />}></Route>
        <Route path="/explore/:media-type" element={<Explore />}></Route> */}
        {/* <Route path="*" element={<Pagenotfound />}></Route> */}

      </Routes>
    </BrowserRouter>
   
    </>
  );
}

export default App;
