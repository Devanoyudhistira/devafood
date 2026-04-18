"use client"

import { useEffect, useState } from "react"
import { Updaterecipient } from "@/app/actions/recipientcrud"
import convertToMoney from "@/app/function/convert"
import supabase from "@/app/supabase/supabase"
import Image from "next/image"

export default function Recipientlist({ tableid, status, harga, id }) {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await supabase
                .from("order")
                .select("id,food(name,gambar,harga),quantity")
                .eq("table", tableid)

            setData(data || [])
        }

        fetchData()
    }, [tableid])

    return (
        <div className="flex flex-col gap-2 w-full px-4 bg-white py-3 rounded-xl">
            <div className="w-full flex justify-between items-center">
                <h1 className="text-2xl font-semibold text-orange-600">
                    Meja {tableid}
                </h1>
                <h2 className="w-max h-max px-3 py-1 rounded-full bg-green-300 font-extrabold text-md">
                    {status}
                </h2>
            </div>

            {data.map(e => (
                <div key={e.id} className="flex w-full gap-y-6 gap-x-3 items-center relative">
                    <h1 className="absolute bg-orange-500 w-6 h-6 font-semibold z-200 left-11 p-1 text-xs grid place-items-center rounded-full -top-1 text-black">
                        {e.quantity}X
                    </h1>

                    <Image
                        src={`https://bmqqribeuxnppfcxittg.supabase.co/storage/v1/object/public/devafood/${e.food.gambar}`}
                        width={300}
                        height={300}
                        alt={e.food.name}
                        className="w-14 h-14 rounded-md object-cover"
                    />

                    <h1 className="text-xl -mt-6 font-semibold text-orange-950">
                        {e.food.name}
                    </h1>
                </div>
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

                {/* server action still works */}
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