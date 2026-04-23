"use client"
import { useActionState } from "react";
import { ForkKnife } from "react-bootstrap-icons";
import { ClipLoader } from "react-spinners";
import * as motion from "motion/react-client"


export default function Form ({loginact}){
    const [state,actionlogin,pending] = useActionState(loginact,null)
    return(
        <form action={actionlogin} className="w-[90vw] h-[80vh] px-9 bg-gray-50 shadow-2xl shadow-orange-500/10 flex flex-col items-center rounded-2xl gap-3" >
                <div className="flex w-max h-max p-4 mt-3 items-center justify-center bg-orange-400 rounded-xl" >
                    <ForkKnife color="white" size={30} />
                </div>
                <h1 className="text-2xl font-extrabold capitalize text-orange-600" > Selamat datang admin </h1>                
                <div>
                    <label htmlFor="email" className="flex flex-col gap-1.5">
                        <h3 className="text-xl font-bold text-gray-700" >Email</h3>
                        <input placeholder="tulis email anda" className="text-xl ml-1.5 placeholder:text-gray-400 bg-gray-300 rounded-xl font-medium text-gray-950 py-2 px-2" type="email" id="email" name="email" />
                    </label>
                    <label htmlFor="password">
                        <h3 className="text-xl font-bold text-gray-700" >Password</h3>
                        <input placeholder="tulis password anda" className="text-xl ml-1.5 placeholder:text-gray-400 bg-gray-300 rounded-xl font-medium text-gray-950 py-2 px-2" type="password" id="password" name="password" />
                    </label>
                </div>
                <motion.button whileTap={{ scale:0.2 }} disabled={pending} className="w-full bg-orange-500 rounded-xl flex items-center justify-center shadow-md shadow-orange-800 h-max py-2 font-extrabold text-white text-2xl " >
                   {pending ? <span className="flex gap-2 items-center" > <ClipLoader size={20} /> loading </span> : <span>Login</span> }
                </motion.button>
            </form>
    )
}