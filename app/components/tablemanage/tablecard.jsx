'use client'
import { useActionState, useState, useEffect } from "react";
import { LockFill } from "react-bootstrap-icons";
import { Lock } from "react-bootstrap-icons";
import { People } from "react-bootstrap-icons";
import { AnimatePresence, motion } from "motion/react"

export default function Tablecard({ nomer, status, kursi, updateact }) {
    const [state, updateaction, pending] = useActionState(updateact, null)
    const [showcode, setshowcode] = useState(false)
    useEffect(() => {
        if (state?.success && state?.status === "berisi") {
            setshowcode(true)
        }
    }, [state])
    return (
        <div className="w-[85%] h-max rounded-md relative bg-white shadow-xl shadow-orange-600/20 px-3 pt pb-2-2 flex flex-col  " >
            <AnimatePresence>
                {showcode &&
                    <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0, opacity: 0 }} onClick={e => { setshowcode(false); e.stopPropagation() }} className="fixed flex items-center justify-center top-0 left-0 w-screen h-screen bg-black/15 z-999" >
                        <div className="bg-white w-[85vw] h-max -mt-10 px-2 py-6 rounded-xl flex flex-col items-center gap-5" >
                            <div className="w-max h-max p-4 bg-orange-100 text-orange-800 rounded-2xl " >
                                <LockFill size={45} />
                            </div>
                            <h2 className="text-2xl font-semibold text-center text-orange-950" > tunjukan kode ini ke pelanggan  </h2>
                            <div className="w-max p-6 rounded-xl bg-orange-200 text-orange-800 mt-15 " >
                                <h1 className="font-bold text-5xl " > {state?.code} </h1>
                            </div>
                        </div>
                    </motion.div>
                }
            </AnimatePresence>
            <div className="w-full h-max py-2 flex justify-between items-center" >
                <h1 className="text-2xl font-bold text-orange-900" >meja {nomer} </h1>
                <h1 className={`${status === "kosong" ? "bg-green-400" : "bg-orange-400"} py-1 px-2 text-xs font-medium rounded-full`} > {status} </h1>
            </div>
            <h2 className="text-md gap-3 mt-4 font-semibold text-orange-800 flex items-center" ><People />  {kursi} kursi </h2>
            <form action={updateaction} className="h-17 flex  items-center justify-center w-full border-t border-orange-500 mt-10 justify-self-end self-end px-6" >
                <button className={`text-2xl text-center ${status == "kosong" ? "bg-green-400" : "bg-orange-500"} w-full h-max py-2 font-semibold capitalize rounded-md `} > {status === "kosong" ? "tandai telah dipakai" : "kosongkan"} </button>
            </form>
        </div>
    )
}