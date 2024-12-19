import { useEffect, useState } from "react"
import Button from 'react-bootstrap/Button';
import { Button } from 'react-bootstrap';
const Counter=()=>{
    const [Count,setCount]= useState(0)
    const [stal,setStal] = useState('')
    const [aff,setAff] = useState('')

    const increment=()=> setCount(Count+1)
    //mount
    // useEffect(()=>{
    //     console.log("mount")

    // },[])

    //update

    // useEffect(()=>{
    //     console.log("update")
    // })

    // useEffect(()=>{
    //     console.log("update")
    // },[Count])
   

    //unmount
    //  useEffect(()=>{
    //    return()=> console.log("unmount")
    //  },[])
      

    return(
        <div>
            <h2>Counter Componenet</h2>
            <button onClick={()=>Count > 0 && setCount(Count-1)}>-</button>
            <span> {Count} </span>
            <button onClick={increment}>+</button>
            <br/>
            <h3> {aff} </h3>
            <input type="text" onChange={(e)=> setStal(e.target.value)}/>
            <button onClick={()=> setAff(stal)}>Afficher</button>
           
        </div>
    )
}




export default Counter