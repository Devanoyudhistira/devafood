"use client"

import convertToMoney from "@/app/function/convert"
import truncate from "@/app/function/truncat"
import supabase from "@/app/supabase/supabase"
import Image from "next/image"
import Link from "next/link"
import { Plus } from "react-bootstrap-icons"
import * as motion from "motion/react-client"
import Orderadd from "../flashmessage/orderadd"
import { useActionState } from "react"

export default function Foodcard({ nama, harga, image, desc, id, addorder }) {

    const [state,orderact,pending] = useActionState(addorder,null)
    
    return (<div className={`w-full h-max bg-white flex flex-col rounded-2xl overflow-hidden shadow-xl shadow-gray-700/30 relative`} >
        <Orderadd error={state?.code !== 200} pending={pending} message={state?.message} show={state?.code === 200} />
        <Image width={600} height={600} src={`https://bmqqribeuxnppfcxittg.supabase.co/storage/v1/object/public/devafood/${image}`} className="w-full bg-black h-58 flex-none object-center object-cover" alt={nama} />
        <div className="w-full h-full flex justify-between gap-1 flex-col px-1.5" >
            <form action={orderact} className="absolute z-100 right-4 top-2" >
                <input type="text" name="id" id="id" hidden value={id} />
                <motion.button whileTap={{ scale: 0.7 }} type="submit" className=" bg-orange-600 text-white w-6 h-6 rounded-full flex items-center justify-center" >
                    <Plus size={28} />
                </motion.button>
            </form>
            <div>
                <h1 className="text-md font-bold text-orange-900" > {nama} </h1>
                <p className="text-xs font-bold text-orange-800" > {convertToMoney(harga)} </p>
                <p className="text-xs h-20  font-medium text-orange-600" > {desc ? truncate(desc, 20) : ""} </p>
            </div>
            <div className=" w-full h-15 flex  justify-between items-center " >
                <Link href={`/detail/${id}`}>
                    <motion.button whileTap={{ scale: 0.8 }} className="inline-block w-57 px-4 py-1 text-center text-md rounded-md h-max bg-linear-to-t from-orange-500 to-yellow-400"  >
                        See detail
                    </motion.button>
                </Link>
                <h6 className="text-orange-800 font-bold text-2xl w-max" > 20 Min </h6>
            </div>
        </div>
    </div>)
}