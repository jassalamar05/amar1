import { useReducer, useState } from "react"
export default function Todo(){

    // use reducer condition check ke action kya krwana chahata hai 
    //step 2 : conditions

    const reducer=(state,action)=>{

        if(action.type =="add"){
            return[...state,action.text]
        }
        if(action.type =="remove"){
            return state.filter((item,i)=>i!==action.index)
        }
    }
    
    //use resucer and use state banyi jo data nal deal krugi
    //sstep 1 
    const[state,dispatch]=useReducer(reducer,[])
    const[text,setText]=useState("")

//event hanlder jai jo button ke click ka event handle krta hai  -- aurr yeh do stated update krega 1st- reducer function wlau, 2nd is your setText wali
    const handleSubmit=()=>{
        dispatch({type:"add",text:text})
        setText("")
    }
    return(
        <>
        <div className="items-center justify-center flex flex-col">
            <h2 className="text-3xl">Simple todo</h2>

            <input type="text" value={text} name="" id="" onChange={(e)=>setText(e.target.value)} />

            <button onClick={handleSubmit} className="bg-red">add to do</button>

            <ul>
                {state.map((item,index)=>{
                    return(
                        <>
                        <li key={index}>
                            {item}
                            <button onClick={()=>{
                                dispatch({type:"remove",index})
                            }}>delete</button>
                        </li>
                        </>
                    )
                })}
            </ul>

        </div>
        
        </>
    )
}