import { ForkKnife } from "react-bootstrap-icons";
import supabase from "../supabase/supabase";
import { createClient } from "../supabase/server";
import Image from "next/image";

export default async function page() {
    const supabaseserver = await createClient()
    const { data: user } = await supabaseserver.auth.getUser()
    const { data: table } = await supabase.from("meja").select("*").eq("uuid", user.user.id).single()
    const { data } = await supabase.from("order").select("id,food(name,gambar,harga),quantity").eq("table", table.id).order("id", { ascending: true }).limit(1).single()
    return (<div className="flex flex-col items-center" >
        <div className="w-screen flex flex-col gap-2  items-center justify-center" >
            <div className={`w-55 h-55 border-4 border-white shadow-2xl shadow-orange-800/50 mt-30 bg-orange-700 rounded-full flex items-center justify-center`} >
                <ForkKnife size={90} />
            </div>
            <h1 className="text-3xl text-center font-semibold text-orange-800" > Chef sedang memasak makanan anda </h1>
        </div>
        <div className="w-[80%] py-3 px-2 flex flex-col gap-2 bg-white rounded-xl" >
           <h1 className="text-3xl font-semibold" > Pesanan anda </h1>
            <div className="w-full flex items-center gap-4" >
                <Image width={100} height={100} alt={data.food.name} src={`https://bmqqribeuxnppfcxittg.supabase.co/storage/v1/object/public/devafood/${data.food.gambar}`} className="w-15 h-15 rounded-xl object-center object-cover" />
                <h1 className="text-md font-medium" > {data.quantity} X {data.food.name} </h1>
             </div>
             <div className="w-full flex justify-between items-center" >
                <div className="flex flex-col gap-2" >
                    <h2> Order-id </h2>
                    <h3> 002321 </h3>
                </div>
                <div className="flex flex-col gap-2" >
                    <h2> table </h2>
                    <h3> {table.id} </h3>
                </div>
             </div>
        </div>
    </div>
    )
}