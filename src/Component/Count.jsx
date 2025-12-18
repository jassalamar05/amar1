import { useState } from "react"

export default function Count(){

    const[input,setInput]=useState("")
    const[show,setShow]=useState("")

    const handleclick=()=>{
    setShow(input)
    }

    return (
        <>
       <div>
        <input type="text" onChange={(e)=>setInput(e.target.value)}/>
       </div>


        <div>
            <button onClick={handleclick}>Click me</button>
        </div>

        <div>
        <h2>{input}</h2>
        </div>
        </>
    )
}