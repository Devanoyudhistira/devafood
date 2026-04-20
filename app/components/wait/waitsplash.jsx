"use client"
import { useState, useEffect } from "react"
import { ForkKnife } from "react-bootstrap-icons"
import supabase from "@/app/supabase/supabase"
import { Check } from "react-bootstrap-icons"

export default function Waitsplash({ initialdata }) {
    console.log(initialdata)
    const [orderdata, setorderdata] = useState(initialdata)
    console.log(orderdata.status)
    useEffect(() => {
        const channel = supabase
            .channel("recipient-realtime")
            .on(
                "postgres_changes",
                {
                    event: "*",
                    schema: "public",
                    table: "recipient",
                },
                (payload) => {
                    console.log(payload)
                    if (payload.eventType === "UPDATE") {
                        console.log(payload.new)
                        console.log(orderdata)
                        setorderdata(prev =>
                            prev?.id === payload.new.id ? payload.new : prev
                        )
                    }
                }
            )
            .subscribe()

        return () => {
            supabase.removeChannel(channel)
        }
    }, [])

    return (
        <div className="w-screen flex flex-col gap-6 items-center justify-center " >
            <div className={`w-55 h-55 border-4 border-white shadow-2xl shadow-orange-800/50 mt-30 ${orderdata.status === "done" ? "bg-green-400": "bg-orange-700"  } rounded-full flex items-center justify-center`} >
               {orderdata.status === "done" ? <Check size={125} />  : <ForkKnife size={90} />}
            </div>
           {orderdata.status !== "done" && <h1 className="text-3xl text-center font-semibold text-orange-800" > Chef sedang memasak makanan anda </h1>}
           {orderdata.status === "done" &&
            <h1 className="text-3xl text-center font-semibold text-orange-800" > Makanan anda sudah selesai </h1>}
        </div>
    )
}