import { useState } from "react";

export default function Filter1(){
 const fig = [
    { id: 1, name: "Burger", cat: "Food" },
    { id: 2, name: "Chips", cat: "Snacks" },
    { id: 3, name: "Pizza", cat: "Food" },
  ];
  const[data,setData]=useState(fig)

  const df=()=>{
    const g=fig.filter(item=>(item.cat==="Food"))
    setData(g)
  }
    return(
        <>
        <div className="flex justify-center gap-10">
            <button onClick={df} className="bg-red-400">Onclick</button>
            {data.map((item,index)=>{
                return(
                    <>
                    <div>{item.name}</div>
                    <div>{item.cat}</div>
                    <div>{item.id}</div>
                    </>
                )
            })}
        </div>
        
        
        
        </>
    )
}