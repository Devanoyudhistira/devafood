"use client"
import { useState, useEffect } from "react"
import Foodpreview from "./foodpreview"
import convertToMoney from "@/app/function/convert";
import supabase from "@/app/supabase/supabase";
import { useActionState } from "react";
import Orderadd from "../flashmessage/orderadd";


export default function Foodcontain({ data, deleteorder }) {
    const [allquantity, setallquantity] = useState(data.map((e, i) => ({ id: e.id, quantity: e.quantity, harga: e.food.harga })))    
    const [state, deleteaction, pending] = useActionState(deleteorder, null)    


    async function increasequantity(id, i) {
        setallquantity(prev => prev.map(
            item => item.id === id ? {
                ...item, quantity: item.quantity + 1
            } : item
        ))        
        const { error } = await supabase.rpc("quantity_increase", {
            order_id: id,
        })
    }

    async function decreasequantity(id, i) {
        setallquantity(prev => prev.map(
            item => item.id === id ? {
                ...item, quantity: item.quantity > 1 ? item.quantity - 1 : item.quantity
            } : item
        ))        
        const { error } = await supabase.rpc("quantity_decrease", {
            order_id: id,
        })
    }

    useEffect(() => {
        if (state?.code === 200) {            
            setallquantity(prev =>prev.filter(item => item.id !== state?.id)
        )}
    }, [state])    


    return (<div className="flex flex-col gap-1 items-center">
        <Orderadd error={state?.code !== 200} message={state?.message} pending={pending} show={state?.code === 200} />
        <div className="w-full h-98 overflow-x-hidden overflow-y-auto  px-1 mt-7 py-3 flex flex-col gap-4" >
            {data.map((e, i) =>
                <Foodpreview index={i} increasequantity={increasequantity} decreasequantity={decreasequantity} deletefunc={deleteaction} key={e.id} id={e.id} gambar={e.food.gambar} nama={e.food.name} quantity={allquantity[i].quantity} harga={e.food.harga} />
            )}
        </div>

        <div className={`w-[85%] flex justify-between items-center px-3 h-24 bg-orange-200 rounded-2xl`} >
            <h1 className="text-2xl font-semibold  capitalize" > total </h1>
            <h2 className="text-2xl text-orange-600 font-extrabold " > {convertToMoney(allquantity.reduce((total, item, i) => { return (total + (item.harga * item.quantity)); }, 0))} </h2>
        </div>

    </div>)
}