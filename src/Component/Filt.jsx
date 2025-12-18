import { useState } from "react"

export default function Ailt(){
    const data=["amardeep" , "puneet" , "Diyal SIngh"]

    const[show,setShow]=useState(data)

    const reset=()=>setShow(data)

    const amar=()=>{
        const res=show.filter(item=>item==="amardeep")
        setShow(res)
    }

     const psk=()=>{
        const raj=show.filter(item=>item==="puneet")
        setShow(raj)
    }

     const ds=()=>{
        const res=show.filter(item=>item==="Diyal SIngh")
        setShow(res)
    }


    return(
        <>
        <div className="flex items-center justify-center gap-10">
            <button onClick={reset}>Reset</button>
            <button onClick={amar}>Amardeep</button>
            <button onClick={psk}>Punnet</button>
            <button onClick={ds}>Diyal</button>
            {show.map((item,index)=>{
                return(
                    <>
                    {item}
                    </>
                )
            })}
        </div>
        
        </>
    )
}