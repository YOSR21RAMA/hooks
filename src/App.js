import { useState } from 'react';
import './App.css';
import Counter from './Componenet/Counter';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  const [show,setShow] = useState(false)
  return (
    <div>
     <h1>Workshop HOOKS</h1>
     <button onClick={()=> setShow(!show)}> {show ? "hide" : "show"} </button>
     {
      show &&  <Counter/>
     }
     

    </div>
  );
}

export default App;
