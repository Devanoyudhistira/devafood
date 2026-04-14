"use client"

import convertToMoney from "@/app/function/convert"
import truncate from "@/app/function/truncat"
import supabase from "@/app/supabase/supabase"
import Image from "next/image"
import Link from "next/link"
import { Plus } from "react-bootstrap-icons"

export default function Foodcard({ nama, harga, image, desc, id, addorder }) {
    return (<div className={`w-40 h-58 bg-white flex flex-col rounded-2xl overflow-hidden shadow-xl shadow-gray-700/30 relative`} >
        <Image width={300} height={300} src={`https://bmqqribeuxnppfcxittg.supabase.co/storage/v1/object/public/devafood/${image}`} className="w-full bg-black h-30 flex-none object-center object-cover" alt={nama} />
        <div className="w-full h-full flex justify-between gap-1 flex-col px-1.5" >
            <form action={addorder} className="absolute z-100 right-4 top-2" >
                <input type="text" name="id" id="id" hidden value={id} />
                <button type="submit" className=" bg-orange-600 text-white w-6 h-6 rounded-full flex items-center justify-center" >
                    <Plus size={28} />
                </button>
            </form>
            <div>
                <h1 className="text-md font-bold text-orange-900" > {nama} </h1>
                <p className="text-xs font-bold text-orange-800" > {convertToMoney(harga)} </p>
                <p className="text-xs h-20  font-medium text-orange-600" > {desc ? truncate(desc, 20) : ""} </p>
            </div>
            <div className="-mt-20 w-full h-20 flex  justify-between items-center " >
                <Link href={`/detail/${id}`} className="inline-block w-max px-4 py-1 text-center text-md rounded-3xl h-max bg-linear-to-t from-orange-500 to-yellow-400" > See detail </Link>
                <h6 className="text-orange-800 font-bold text-xs" > 20 Min </h6>
            </div>
        </div>
    </div>)
}