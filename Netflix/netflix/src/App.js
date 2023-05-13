import './App.css';
import Featured from './components/Featured';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Register from './components/Register';
import Signup from './components/Signup';
import Trend from './components/Trend';
import What from './components/What';
import Search from './components/Search';
import Homepage from './components/Homepage';
import Signin from './components/Signin';
import Click from './components/Click';
import { SkeletonTheme } from 'react-loading-skeleton';
function App() {
  return (
    <>
    {/* <Signup /> */}
    {/* <Register /> */}
    <SkeletonTheme baseColor='#313131' highlightColor='#f5f5f5' enableAnimation={true} duration={1.5}>
  <BrowserRouter>
  <Routes>
    <Route path='/search' element={<Search />} />
    <Route path='/' element={<Signup />}/>
    <Route path='/signin' element={<Register />}/>
    <Route path='/signup' element={<Signup />}/>

    <Route path='/homepage' element={<Homepage />}/>
<Route path='/movie/:id' element={<Click />}></Route>

  </Routes>
  </BrowserRouter></SkeletonTheme>
   {/* <Navbar />
   <Featured />
   <Trend />
   <What /> */}
    </>
  );
}

export default App;
