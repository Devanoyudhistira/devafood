import { ForkKnife } from "react-bootstrap-icons";
import supabase from "../../supabase/supabase";
import { createClient } from "../../supabase/server";
import Image from "next/image";
import Waitsplash from "../../components/wait/waitsplash";
import convertToMoney from "../../function/convert";

export default async function page({ params }) {
    const { id } = await params
    const supabaseserver = await createClient()
    const { data: user } = await supabaseserver.auth.getUser()
    const { data: table } = await supabase.from("meja").select("*").eq("uuid", user.user.id).single()
    const { data } = await supabase.from("order").select("id,food(name,gambar,harga),quantity").eq("table", table.id).order("id", { ascending: true })
    const { data: recipient } = await supabase.from("recipient").select("*").eq("id", id).single()
    console.log(data)
    return (<div className="flex flex-col pb-8 items-center" >
        <Waitsplash initialdata={recipient} />
        <div className="w-[80%] py-3 mt-8 px-2 flex flex-col gap-2 bg-white rounded-xl" >
            <h1 className="text-3xl font-semibold" > your order </h1>
            <div className="w-full flex flex-col items-start gap-2" >
                {data.map(e =>
                    <div key={e.id} className="flex gap-2 items-center " >
                        <Image width={100} height={100} alt={e.food.name} src={`https://bmqqribeuxnppfcxittg.supabase.co/storage/v1/object/public/devafood/${e.food.gambar}`} className="w-15 h-15 rounded-xl object-center object-cover" />
                        <h1 className="text-md font-medium text-orange-400" > {e.quantity} X {e.food.name} </h1>
                    </div>
                )}
            </div>
            <div className="w-full px-1.5 flex flex-col justify-between items-center" >
                <div className="w-full flex justify-between items-center" >
                    <div className="flex flex-col" >
                        <h2 className="text-xs lg:text-xl font-medium text-orange-500 " > Order-id </h2>
                        <h3 className="text-md lg:text-lg font-semibold  text-orange-900 " > 002321 </h3>
                    </div>
                    <div className="flex flex-col gap-1" >
                        <h2 className="text-xs lg:text-xl font-medium text-orange-500 " > table </h2>
                        <h3 className="text-md lg:text-lg text-center font-semibold text-orange-900 " > {table.nomer_meja} </h3>
                    </div>
                </div>
                <div className="flex self-start justify-between px-1 mt-4 w-full gap-2" >
                    <h2 className="text-xl lg:text-2xl font-semibold text-orange-600" > Total price </h2>
                    <h3 className="text-2xl lg:text-2xl tracking-wider font-bold text-orange-950" > {convertToMoney(recipient.grossprice)} </h3>
                </div>
            </div>
        </div>
    </div>
    )
}