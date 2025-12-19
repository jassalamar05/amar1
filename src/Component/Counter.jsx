import { useReducer, useState } from "react"


export default function Counter(){
    //step2:functionality
    const reducer=(state,action)=>{

        if(action.type=="add"){
            return[...state,action.text]
        }
        if(action.type=="remove"){
            return state.filter((item,i)=>i!==action.index)
        }
    }
    //step1:use resucer
    const[state,dispatch]=useReducer(reducer,[])
    const[text,setText]=useState("")

    //step3:event handler
    const handlesubmit=()=>{
        dispatch({type:"add",text:text})
        setText("")
    }
            return(
                <>
                <div className="flex-col">
                <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />
                <button onClick={handlesubmit}>Add</button>
                    <ul>
                {state.map((item,index)=>{
                    return(
                        <>
                        <li key={index}>
                            {item}
                        </li>

                        <button onClick={()=>{
                            dispatch({type:"remove",index})
                        }}>Clear</button>
                        </>
                    )
                })}
                </ul>
                </div>
                </>
            )
    
}