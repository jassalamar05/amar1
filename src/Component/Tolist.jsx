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
        <section className="flex items-center justify-center bg-sky-500 h-screen px-4">
  {/* MAIN CARD */}
  <div className="
    h-auto 
    bg-gradient-to-br from-sky-600 to-pink-500 
    w-full 
    sm:w-[90%] 
    md:w-[70%] 
    lg:w-[40%] 
    rounded-xl
    pb-6
  ">

    {/* HEADING */}
    <div className="flex items-center justify-center pt-10 relative px-4">
      <h1 className="text-3xl sm:text-4xl md:text-5xl text-center font-bold">
        TO <span className="text-pink-700">DO</span> LIST
      </h1>

      {/* CLEAR BUTTON */}
      <button
        className="
          absolute 
          right-4 
          h-10 w-10 
          sm:h-12 sm:w-12 
          bg-red-500 text-white rounded-full
        "
        onClick={clearEvent}
      >
        🗑️
      </button>
    </div>

    {/* INPUT AREA */}
    <div className="
      flex 
      flex-col 
      sm:flex-row 
      justify-center 
      items-center 
      text-red-600 
      pt-10 
      gap-4
      px-4
    ">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add To Do"
        className="
          w-full 
          sm:w-80 
          h-10 
          pl-4 
          rounded
        "
      />

      <img
        src="/public/Images/8922789.png"
        alt="icon"
        className="
          h-10 w-10 
          cursor-pointer 
          hover:scale-125 
          transition 
          duration-300
        "
        onClick={changeEvent}
      />
    </div>

    {/* TODO LIST */}
    <ul className="overflow-y-auto max-h-[300px] mt-6 px-4">
      {state.map((item, index) => (
        <div
          key={index}
          className="flex items-center justify-center gap-2 mt-2"
        >
          <div className="
            bg-gray-300 
            h-auto 
            min-h-[32px]
            w-full 
            sm:w-80 
            hover:bg-gray-500 
            text-center 
            px-2 
            break-words
          ">
            {item}
          </div>

          <button
            className="hover:scale-150 transition duration-300 h-8 w-8"
            onClick={() => dispatch({ type: "remove", index })}
          >
            ❌
          </button>
        </div>
      ))}
    </ul>

  </div>
</section>

        
    
        </>
    )
}