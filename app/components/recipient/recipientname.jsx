"use client"
import Image from "next/image"
import { useState, useEffect } from "react"
import supabase from "@/app/supabase/supabase"
import Toppinglist from "../history/toppinglist"

export default function Recipientname({ name, gambar, toppings, quantity }) {
    const [topping, settopping] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const { data: toppingdata, error: toppingerror } = await supabase
                .from("toppings").select("*").in("id", toppings)            
            settopping(toppingdata)
        }
        fetchData()
    }, [toppings])
    return (
        <div className="flex w-full gap-y-6 gap-x-3 items-center relative">
            <h1 className=" bg-orange-500 w-6 h-6 font-semibold z-200 left-11 p-1 text-xs grid place-items-center rounded-full -top-1 text-black">
                {quantity}X
            </h1>
            {/* <Image
                src={`https://bmqqribeuxnppfcxittg.supabase.co/storage/v1/object/public/devafood/${gambar}`}
                width={300}
                height={300}
                alt={name}
                className="w-14 h-14 rounded-md object-cover"
            /> */}
            <div>
                <h1 className="text-xl font-semibold text-orange-950">
                    {name}
                </h1>
                <div className="w-max flex justify-evenly items-center gap-3" >
                    <Toppinglist data={toppings} />
                </div>
            </div>
        </div>
    )
}