"use client"
import { useState } from "react"
import { CheckCircleFill } from "react-bootstrap-icons"
import { AnimatePresence, motion } from "motion/react"
import { useEffect } from "react"
import { ClipLoader } from "react-spinners"
export default function Orderadd({ show, pending,message }) {

    const [showmessage, setshowmessage] = useState(show)

    useEffect(() => {
        if (show || pending) {
            setshowmessage(true)
            const timer = setTimeout(() => {
                setshowmessage(false)
            }, 2000)

            return () => clearTimeout(timer)
        }
    }, [show])
    return (
        <AnimatePresence >
            {showmessage && <motion.div exit={{ opacity: 0, scale: 0 }} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} className="fixed top-14 left-[6vw] text-md bg-green-100 border-2 gap-3 border-green-300 w-85 h-14 flex items-center justify-center rounded-2xl" >                
                    <CheckCircleFill size={20} color="green" />
                    <h1 className="text-green-400 font-bold" > {message} </h1>                         
            </motion.div>}
            {pending && !showmessage && <motion.div exit={{ opacity: 0, scale: 0 }} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} className="fixed top-14 left-[6vw] text-md bg-green-100 border-2 gap-3 border-green-300 w-85 h-14 flex items-center justify-center rounded-2xl" >                
                    <ClipLoader size={25} />
                    <h1 className="text-xl font-extrabold" > loading </h1>                         
            </motion.div>}
        </AnimatePresence>
    )
}