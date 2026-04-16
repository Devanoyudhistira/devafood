"use client"

import { useActionState, useState } from "react"
import { BoxArrowLeft } from "react-bootstrap-icons"
import * as motion from "motion/react-client"
import Orderadd from "../flashmessage/orderadd"
import Logoutprompt from "./logoutprompt"

export default function Navbar({ text, logoutbutton }) {

    const [state, logoutaction, pending] = useActionState(logoutbutton, null)
    const [showprompt,setshowprompt] = useState(false)

    return (<nav className="w-full px-3 h-15 flex items-center justify-between  " >
        <Orderadd error={state?.code !== 200} pending={pending} message={state?.message} show={state?.code === 200} />
        <h1 className="text-2xl font-bold text-orange-700" > Meja {text || 1}</h1>        
            <motion.button whileTap={{ scale:0.8 }} onClick={() => setshowprompt(true)} type="submit" className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-full " >
                <BoxArrowLeft size={26} className="text-orange-600" />
            </motion.button>   
            <Logoutprompt loading={pending} logoutbutton={logoutaction} showcondition={showprompt} cancelbutton={()=> setshowprompt(false)} />     
    </nav>)
}
