import { ArrowLeft } from "react-bootstrap-icons";
import {deleteorder} from "../actions/crudorder";
import Footer from "../components/Footer";
import Foodcontain from "../components/preview/foodpreviewcontain";

import supabase from "../supabase/supabase";
import Link from "next/link";
import { createClient } from "../supabase/server";

export default async function Page() {
    const supabaseserver = await createClient()
    const {data:user} =await  supabaseserver.auth.getUser()    
    const {data:table} = await supabase.from("meja").select("*").eq("uuid",user.user.id).single()    
    const { data } = await supabase.from("order").select("id,food(name,gambar,harga),quantity,toppings,toppings_price").eq("table", table.id).order("id", { ascending: true })        
    return (
        <div className="w-full px-2 pb-40" >
            <nav className="w-screen flex items-center justify-start gap-3 h-14" >                
                <h1 className="text-2xl font-bold text-orange-700" > DevaFood </h1>
            </nav>
            <h3 className="text-5xl ml-3 mt-2 font-medium text-orange-900" > Review order </h3>
            <h1 className="text-xl font-bold text-orange-600" > Pilihan anda </h1>
            <Foodcontain tableid={table.id} deleteorder={deleteorder} data={data} />
            <Footer status={"preview"} />
        </div>
    )
}