import { useReducer, useState } from "react"

export default function Tpl(){

     //step2: functionality lao action ki kruga
    const reducer=(state,action)=>{

        if(action.type=="add"){
            return[...state,action.data]
        }
       
        if(action.type=="remove"){
            return state.filter((item,i)=>i!==action.index)
        }
        return state
    }


    //step 1:use reducer how it work
    const[state,dispatch]=useReducer(reducer,[])
    const[data,setData]=useState("")


    // step 3:event handler
    const handleSubmit=()=>{
        dispatch({type:"add",data:data})
        setData("")
    }

   

    return(
        <>

        <div className="">
            <input type="text" value={data} className="" onChange={(e)=>setData(e.target.value)} />
            <button onClick={handleSubmit}>Submit</button>
        </div>

        <ul>
        
        {state.map((item,index)=>{
            return(
                <>
                
             <li key={index}>
                {item}
                <button onClick={()=>{
                    dispatch({type:"remove",index})
                }}>
                    delete
                </button>
                   </li>
      

                
                
                </>
            )
        })}
        
  </ul>


        </>
    )
}