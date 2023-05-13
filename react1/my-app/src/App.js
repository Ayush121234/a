import logo from './logo.svg';
import './App.css';
import Add from './components/Add';
import Card from './components/Card';
import array from "./array";
import Render from './components/Render';
import Addnote from './components/Addnote';
function App() {
  let count=0;
  let a=array;
  return (
    <>
    <Add number={"jakjdd"} />
    <Addnote array={array} />
    
    
         
  
    </>
  );
}

export default App;