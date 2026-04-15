"use client"
import convertToMoney from "@/app/function/convert";
import Image from "next/image";
import { Trash } from "react-bootstrap-icons";
import { DashLg } from "react-bootstrap-icons";
import { Plus } from "react-bootstrap-icons";
import * as motion from "motion/react-client"

export default function Foodpreview({ index,nama, gambar, harga, id, quantity, deletefunc,increasequantity,decreasequantity }) {
    

    return (
        <div className="w-full h-30 px-1 gap-1  rounded-xl flex justify-between items-center" >
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
                <div className="flex justify-center items-center gap-2" >
                    <h1 className="text-orange-600 font-extrabold" > {convertToMoney(harga * quantity )} </h1>
                    <div className="flex gap-4 bg-white overflow-hidden rounded-xl items-center justify-center" >
                        <motion.button whileTap={{ scale:0.9 }} onClick={() => increasequantity(id,index) } className="p-2 z-1000 text-2xl cursor-pointer  " > <Plus /></motion.button>
                        <h1> {quantity} </h1>
                        <motion.button whileTap={{ scale:0.9 }} disabled={quantity === 1} onClick={ () => decreasequantity(id,index)} className="p-2 z-1000 text-2xl cursor-pointer " > <DashLg /></motion.button>
                    </div>
                </div>
            </div>
        </div>
    )
}