import { useState } from "react";


export default function Filter(){
    const student=["amardeep","puneet","diya","akash"];
    const[data,setData]=useState(student)

    
  const specfic=()=>{
    const f=student.filter(item=>item!=="amardeep")
    setData(f)
  } 
 

    

    return (
        <>
        <button onClick={specfic} className="bg-red-500">Onclick</button>
        <div>
         <div>
            {data.map((item,index)=>{

                return(
                    <>         
            <div>{item}</div>
                </>
              
               )})}
         </div>
        </div>
      

        
        
        </>
    )
}