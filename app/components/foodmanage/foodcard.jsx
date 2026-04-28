"use client"

import convertToMoney from "@/app/function/convert"
import Image from "next/image"
import Link from "next/link"
import { useActionState } from "react"
import { Pen } from "react-bootstrap-icons"
import { Trash2 } from "react-bootstrap-icons"

export default function Foodcard({ image, nama, desc, harga, deleteact, foodid }) {
    return (
        <div className="flex flex-col w-90  h-max py-4 px-3 bg-gray-50 rounded-xl items-center " >
            <Image width={300} height={300} className="mt-3 object-center object-cover rounded-xl w-[80%] h-50" src={`https://bmqqribeuxnppfcxittg.supabase.co/storage/v1/object/public/devafood/${image}`} alt="haloo" />
            <div className="w-full px-8 mt-2 flex justify-between items-center" >
                <h1 className="text-3xl font-bold text-orange-800" > {nama} </h1>
                <div className="w-max flex items-center justify-between  gap-3" >
                    <Link href={`/admin/update/${foodid}`} className="w-max h-max p-2 justify-center items-center flex rounded-full bg-orange-200" >
                        <Pen className="text-orange-800" size={20} />
                    </Link>
                    <form action={deleteact} className="w-max h-max p-2 flex justify-center items-center rounded-full bg-orange-200" >                                                
                        <button type="submit" > <Trash2 className="text-orange-800" size={20} /> </button>
                    </form>
                </div>
            </div>
            <p className="text-left px-8 text-orange-700 font-medium"> {desc} Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti est, ipsum tenetur magni nisi sunt expedita veniam modi. Doloremque, quia voluptas! Suscipit quisquam iusto dolor ipsum hic natus quis accusantium! </p>
            <h4 className="self-start px-7 text-3xl font-bold mt-5 text-orange-400" > {convertToMoney(harga)} </h4>
        </div>
    )
}