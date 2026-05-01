"use client"

import { useEffect, useState } from "react"
import { Updaterecipient } from "@/app/actions/recipientcrud"
import convertToMoney from "@/app/function/convert"
import supabase from "@/app/supabase/supabase"
import Image from "next/image"
import Recipientname from "./recipientname"

export default function Recipientlist({ tableid, status, harga, id,toppings }) {
    const [data, setData] = useState([])    
    console.log(toppings)

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await supabase
                .from("order")
                .select("id,food(name,gambar,harga),quantity,toppings,table(nomer_meja)")
                .eq("table", tableid)                           
            setData(data || [])
        }
        fetchData()
    }, [tableid])


    return (
        <div className="flex flex-col gap-2 w-full px-4 bg-white py-3 rounded-xl">
            <div className="w-full flex justify-between items-center">
                <h1 className="text-2xl font-semibold text-orange-600">
                    Meja {data[0]?.table.nomer_meja}
                </h1>
                <h2 className="w-max h-max px-3 py-1 rounded-full bg-green-300 font-extrabold text-md">
                    {status}
                </h2>
            </div>

            {toppings.map(e => (
                <Recipientname key={e.nama} name={e.nama} quantity={e.quantity} toppings={e.topping} />
            ))}

            <div className="border-t-2 flex flex-col gap-3 border-orange-950 mt-4 pt-4">
                <div className="flex w-full px-4 items-center justify-between">
                    <h1 className="text-xl font-medium text-orange-950">
                        Total harga
                    </h1>
                    <h1 className="text-2xl font-semibold text-orange-500">
                        {convertToMoney(harga)}
                    </h1>
                </div>
                <form action={Updaterecipient.bind(null, id)}>
                    <button
                        type="submit"
                        className="w-full bg-orange-600 rounded-full flex items-center justify-center text-white font-bold"
                    >
                        Selesai
                    </button>
                </form>
            </div>
        </div>
    )
}