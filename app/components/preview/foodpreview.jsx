"use client"
import convertToMoney from "@/app/function/convert";
import Image from "next/image";
import { Trash } from "react-bootstrap-icons";
import { DashLg } from "react-bootstrap-icons";
import { Plus } from "react-bootstrap-icons";
import * as motion from "motion/react-client"
import { useEffect, useState } from "react";
import supabase from "@/app/supabase/supabase";

export default function Foodpreview({ index, nama, gambar, harga, id, quantity, deletefunc, increasequantity, decreasequantity, toppings,topping_price }) {
    const [topping, settopping] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const { data: toppingdata, error: toppingerror } = await supabase
                .from("toppings").select("*").in("id", toppings)
                 settopping(toppingdata)
        }
        fetchData()
    })


    return (
        <div className="w-full h-max px-1 gap-1  rounded-xl flex justify-between items-center" >
            <Image width={300} height={300} alt={nama} src={`https://bmqqribeuxnppfcxittg.supabase.co/storage/v1/object/public/devafood/${gambar}`} className="w-35 gap-2 h-30 rounded-2xl object-center object-cover" />
            <div className="flex flex-col w-50" >
                <div className="flex w-full justify-between px-2 items-center" >
                    <h1 className="text-xl font-semibold text-orange-950" > {nama} </h1>
                    <form action={deletefunc} className="">
                        <button className="text-stone-700 " > <Trash size={15} /> </button>
                        <input hidden type="text" name="id" id="id" value={id} />
                    </form>
                </div>
                <p className="text-xs font-light text-orange-800" > Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, quae </p>
                <div className="flex flex-col gap-1 text-xs font-semibold text-orange-800 mt-1" >
                    {topping.length > 0 && topping.map(e => 
                    <div key={e.id} className="flex gap-1 bg-orange-300 rounded-full px-2 py-1 w-max" >
                        <h1> {e.nama} </h1>
                        <h2 className="font-semibold text-orange-600" >  + {convertToMoney(e.harga)} </h2>
                    </div>
                    )}
                </div>
                <div className="flex justify-center items-center gap-2" >
                    <h1 className="text-orange-600 font-extrabold" > {convertToMoney(topping_price +  harga * quantity)} </h1>
                    <div className="flex gap-4 bg-white overflow-hidden rounded-xl items-center justify-center" >
                        <motion.button whileTap={{ scale: 0.9 }} onClick={() => increasequantity(id, index)} className="p-2 z-1000 text-2xl cursor-pointer  " > <Plus /></motion.button>
                        <h1> {quantity} </h1>
                        <motion.button whileTap={{ scale: 0.9 }} disabled={quantity === 1} onClick={() => decreasequantity(id, index)} className="p-2 z-1000 text-2xl cursor-pointer " > <DashLg /></motion.button>
                    </div>
                </div>
            </div>
        </div>
    )
}