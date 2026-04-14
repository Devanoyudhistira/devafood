"use client"

import Orderadd from "../flashmessage/orderadd"
import { useActionState, useEffect, useState } from "react"

export default function Formaction({ children, action }) {
    const [state, addorder, pending] = useActionState(action, null)
    const [Result, setResult] = useState(state?.code === 200)
    console.log(state)

  


    return (
        <>

            <Orderadd error={state?.code !== 200} pending={pending} message={state?.message} show={state?.code === 200} />
            <form action={addorder} >
                {children}
            </form>
        </>
    )
}