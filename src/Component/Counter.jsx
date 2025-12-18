import { useState } from "react"

export default function Counter(){
    const[input,setInput]=useState("")  //input feild ka data
    const[show,setShow]=useState("")  //button click par show hoga

    const handleClick=()=>{
        setShow(input)
    }

    const resetclick=()=>{
        setShow()
    }


    return(
        <>
        <section>
            <div>
                <p className="text-blue-700 text-center text-4xl font-semibold">TO-DO-LIST</p>
            </div>

            <div className="flex relative justify-center">
                <input type="text" name="" id=""  placeholder="ADD YOUR TEXT" className="p-2 bg-gray-200 rounded-xl px-20 mt-20 flex absolute" 
                onChange={(e)=>setInput(e.target.value)} />

                <br /><br />
                <button onClick={handleClick} className="p-2 bg-orange-700 px-5 rounded-xl mt-20  flex absolute ml-[280px]">Show Data</button>

                <div className="flex items-center justify-center mt-36">
                 <h2>{show}</h2>
                </div>
              
            </div>
        </section>
    
    <button onClick={resetclick}>Reset</button>
        
        </>
    )
}