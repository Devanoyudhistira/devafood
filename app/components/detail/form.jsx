"use client"

import Orderadd from "../flashmessage/orderadd"
import { useActionState, useEffect, useState } from "react"

export default function Formaction({ children, action }) {
    const [state, addorder, pending] = useActionState(action, null)
    const [Result, setResult] = useState(state?.code === 200)

    useEffect(() => {
        if (state?.code === 200) {
            const timer = setTimeout(() => {
                setResult(false)
            }, 1000)

            return () => clearTimeout(timer) 
        }
    })


    return (
        <>

            {Result && <Orderadd show={Result} />}
            <form action={addorder}>
                {children}
            </form>
        </>
    )
}