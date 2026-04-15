"use client"
import { useActionState } from "react";
import Orderadd from "../flashmessage/orderadd";
import { useRouter } from "next/navigation";

export default function Tableinput({ color, textcolor ,text,nomor,kursi,loginact,email,password}) {
    const router = useRouter()
    const [state,logintable,pending] = useActionState(loginact,null)    
    if(state?.code === 200){
        router.push("/")
    }
    return (
        <form action={logintable} className={`${color} px-2 overflow-hidden py-2 w-34 relative h-32 rounded-xl flex flex-col items-start justify-between`} >
            <Orderadd error={state?.code !== 200} pending={pending} show={state?.message} message={state?.message} />
            <h1 className={`text-2xl font-medium ${textcolor}`} > {text} </h1>
            <div className="" >
                <h3 className={`text-xl font-extrabold ${textcolor}`} > {nomor} </h3>
                <p className={`text-xs font-bold ${textcolor}`} >{kursi} kursi </p>
            </div>
            <input hidden type="text" name="email" id="email" value={email} />            
            <input hidden type="text" name="password" id="password" value={password} />            
            <button className="absolute bg-red-700 opacity-0 left-0 top-0 w-full h-full" type="submit"></button>
        </form>
    )
}