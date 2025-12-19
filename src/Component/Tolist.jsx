import { useReducer, useState } from "react"
import icon from "/Images/8922789.png";

export default function TodosAmar(){

    //2: you have to state an action here that is moreover change the things futther
    const reducer=(state,action)=>{
        if(action.type=="add"){
            return[...state,action.text]
        }
        if(action.type=="remove"){
           return state.filter((item,i)=>i!==action.index) 
        }
        if(action.type=="clear"){
            return []
        }
        return state
    }



    //1: you have created a thing that is going to store initail value
    const[state,dispatch]=useReducer(reducer,[])
    const[text,setText]=useState("")


    //3 event handler

    const changeEvent=()=>{
        dispatch({type:"add",text:text})
        setText("")
    }

    //clear all

    const clearEvent=()=>{
        dispatch({type:"clear"})
    }
    



    return(
        <>    
        <section  className="flex items-center justify-center bg-sky-500 h-screen">  
        <div class="h-[500px] bg-gradient-to-br from-sky-600 to-pink-500 w-[40%]">

        <div className="flex items-center justify-center pt-10 relative">
         <h1 className="text-5xl text-center font-bold">TO  <span className="text-pink-700">DO</span> LIST</h1>
           <button className="absolute h-12 ml-96 w-12 bg-red-500 text-white rounded-full" onClick={clearEvent}  >
            🗑️
            </button>
            </div>
       
         <div className="flex justify-center items-center text-red-600 pt-10 gap-2 " >
            <input type="text" name="" id=""  value={text} onChange={(e)=>setText(e.target.value)} placeholder="Add To Do" className=" w-80 h-10 pl-10 ml-6"/>
                <img
                src="/public/Images/8922789.png"
                alt="icon"
                className="h-10 w-10 cursor-pointer hover:scale-125 transition duration-300"
                onClick={changeEvent}
                />
        </div>

        <ul className=" overflow-y-auto h-[300px]" >
        {state.map((item,index)=>{
            return(
                <>
                <div key={index} className="flex items-center justify-center ml-4 mt-2">
                    <div className="bg-gray-300 h-8 w-80 hover:bg-gray-500 text-center whitespace-pre-wrap">{item}</div>
                    <button className="  hover:scale-150 transition duration-300 h-10 w-10 pl-5 " onClick={()=>{
                        dispatch({type:"remove",index})
                    }}>❌</button>
                </div>   
                </>
            )
        })}
        </ul>

           </div> 
        </section>
        
    
        </>
    )
}