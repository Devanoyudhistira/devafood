"use client"

import convertToMoney from "@/app/function/convert"
import truncate from "@/app/function/truncat"
import supabase from "@/app/supabase/supabase"
import Image from "next/image"
import { Plus } from "react-bootstrap-icons"

/**
 * @typedef {Object} Food
 * @property {number} id
 * @property {string} name
 * @property {string} status
 * @property {number} harga
 * @property {string} description
 * @property {string} jenis
 * @property {string} gambar
 * @property {string} created_at
 */

export default function Foodcard({ nama, harga, image, desc ,id}) { 
   async function addfood(foodid){
        const {data:food,error} = await supabase.from("order").upsert({
            table:1,            
            food:foodid 
        }).select("*").single()
        console.log(error)
        console.log(food)
    }
    return (<div className={`w-40 h-58 bg-white flex flex-col rounded-2xl overflow-hidden shadow-xl shadow-gray-700/30 relative`} >
        <Image width={300} height={300} src={`https://bmqqribeuxnppfcxittg.supabase.co/storage/v1/object/public/devafood/${image}`} className="w-full bg-black h-30 flex-none object-center object-cover" alt={nama} />
        <div className="w-full h-full flex justify-between gap-1 flex-col px-1.5" >
            <button onClick={() => addfood(id) } className="absolute right-4 top-2 bg-orange-600 text-white w-6 h-6 rounded-full flex items-center justify-center" >
                <Plus size={28}/>
            </button>
            <div>
                <h1 className="text-md font-bold text-orange-900" > {nama} </h1>
                <p className="text-xs font-bold text-orange-800" > { convertToMoney(harga)} </p>
                <p className="text-xs h-20  font-medium text-orange-600" > {desc ? truncate(desc,20) : ""} </p>
            </div>
            <h6 className="text-orange-800  self-end font-bold text-md" > 20 Min </h6>
        </div>
    </div>)
}