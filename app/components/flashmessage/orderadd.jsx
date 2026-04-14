"use client"
import { useState } from "react"
import { CheckCircleFill } from "react-bootstrap-icons"
import { AnimatePresence,motion } from "motion/react"
export default function Orderadd() {
    return (<motion.div className="fixed top-14 left-[6vw] text-md bg-green-100 border-2 gap-3 border-green-300 w-85 h-14 flex items-center justify-center rounded-2xl" >
        <CheckCircleFill size={20} color="green" />
        <h1 className="text-green-400 font-bold" > Makanan telah di tambah ke order </h1>
    </motion.div>
    )
}