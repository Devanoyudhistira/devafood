"use client"

import { useEffect, useState } from "react"
import supabase from "@/app/supabase/supabase"
import Recipientlist from "@/app/components/recipient/recipientlist"

export default function Recipientpage({ initialData }) {
    const [recipient, setRecipient] = useState(initialData)

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
                    if (payload.eventType === "INSERT") {
                        setRecipient(prev => [...prev, payload.new])
                    }
                    if (payload.eventType === "UPDATE") {
                        setRecipient(prev =>
                            prev.map(item =>
                                item.id === payload.new.id ? payload.new : item
                            )
                        )
                        if (payload.new.status === "done") {
                            setRecipient(prev =>
                                prev.filter(item =>
                                    item.id !== payload.new.id
                                ))
                        }
                    }
                    if (payload.eventType === "DELETE") {
                        setRecipient(prev =>
                            prev.filter(item => item.id !== payload.old.id)
                        );
                    }
                }
            )
            .subscribe()

        return () => {
            supabase.removeChannel(channel)
        }
    }, [])

    return (
        <>
            <div className="ml-4 w-max h-max bg-orange-100 capitalize px-5 py-1 rounded-full">
                <h1 className="text-orange-800 text-md font-semibold">
                    pesanan aktif: {recipient?.length}
                </h1>
            </div>

            <div className="flex flex-col w-full px-5">
                {recipient?.map(e => (
                    <Recipientlist
                        key={e.id}
                        id={e.id}
                        harga={e.grossprice}
                        status={e.status}
                        tableid={e.meja}
                        toppings={e.pesanan}
                    />
                ))}
            </div>
        </>
    )
}