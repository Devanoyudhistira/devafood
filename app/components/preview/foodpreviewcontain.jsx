"use client"
import { useState, useEffect } from "react"
import Foodpreview from "./foodpreview"
import convertToMoney from "@/app/function/convert";
import supabase from "@/app/supabase/supabase";
import { useActionState } from "react";
import Orderadd from "../flashmessage/orderadd";


export default function Foodcontain({ data, deleteorder,tableid }) {
    const [allquantity, setallquantity] = useState(data.map((e, i) => ({ id: e.id, quantity: e.quantity, harga: e.food.harga })))
    const [state, deleteaction, pending] = useActionState(deleteorder, null)

    async function purchase(e) {
        const baseurl = window.location.origin
        e.preventDefault();      
        const transaction = await fetch(`${baseurl}/api/purchase`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                produk: allquantity[0].id,
                harga: allquantity.reduce((total, item, i) => { return (total + (item.harga * item.quantity)); }, 0),
                quantity: 1,                
                id: 2,     
                namapembeli:tableid           
            }),
        })
        const token = await transaction.json();
        console.log(token);
        window.snap.pay(token, {
            onSuccess: function (result) {
                window.location.href = `/wait`;
            },
            onPending: function (result) {
                window.location.href = `/preview`;
            },
            onError: function (result) {
                window.location.href = `/preview`;
            },
            onClose: function (res) {
                `/preview`
            },
        });
        const responsepurchase = await fetch(
            `https://api.sandbox.midtrans.com/v2/${token}/status`,
            {
                headers: {
                    Authorization: "Basic " + btoa(process.env.NEXT_MIDTRANS_SERVER + ":"),
                },
            },
        );
    }

    useEffect(e => {
        const link = "https://app.sandbox.midtrans.com/snap/snap.js"
        const script = document.createElement("script")
        script.src = link
        script.setAttribute("data-client-key", process.env.NEXT_MIDTRANS_CLIENT)
        script.async = true

        document.body.appendChild(script)

        return () => {
            document.body.removeChild(script)
        }
    }, [])


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
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setallquantity(prev => prev.filter(item => item.id !== state?.id)
            )
        }
    }, [state])


    return (<div className="flex flex-col gap-1 items-center ">
        <Orderadd error={state?.code !== 200} message={state?.message} pending={pending} show={state?.code === 200} />
        <div className="w-full h-98 overflow-x-hidden overflow-y-auto  px-1 mt-7 py-3 flex flex-col gap-y-12"  >
            {data.map((e, i) =>
                <Foodpreview index={i} increasequantity={increasequantity} decreasequantity={decreasequantity} deletefunc={deleteaction} key={e.id} id={e.id} gambar={e.food.gambar} nama={e.food.name} quantity={allquantity[i].quantity} harga={e.food.harga} />
            )}
        </div>

        <div className={`w-[85%] flex justify-between items-center px-3 h-24 bg-orange-200 rounded-2xl mt-8`} >
            <h1 className="text-2xl font-semibold  capitalize" > total </h1>
            <h2 className="text-2xl text-orange-600 font-extrabold " > {convertToMoney(allquantity.reduce((total, item, i) => { return (total + (item.harga * item.quantity)); }, 0))} </h2>
        </div>
        <button className="w-[90%] rounded-2xl h-15 text-xl font-extrabold bg-orange-600" onClick={(e) => purchase(e) } > Purchase </button>

    </div>)
}