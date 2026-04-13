import { ArrowLeft } from "react-bootstrap-icons";
import {deleteorder} from "../actions/crudorder";
import Footer from "../components/Footer";
import Foodcontain from "../components/preview/foodpreviewcontain";

import supabase from "../supabase/supabase";
import Link from "next/link";

export default async function Page() {
    const { data } = await supabase.from("order").select("id,food(name,gambar,harga),quantity").eq("table", 1).order("id", { ascending: true })
    return (
        <div className="w-full px-2 pb-40" >
            <nav className="w-screen flex items-center px-4 justify-start gap-3 h-14" >
                <Link href={"/"} >
                    <ArrowLeft size={20} />
                </Link>
                <h1 className="text-2xl font-bold text-orange-700" > DevaFood </h1>
            </nav>
            <h3 className="text-xl -mt-2 font-medium text-orange-900" > Review order </h3>
            <h1 className="text-5xl font-bold text-orange-600" > Pilihan anda </h1>
            <Foodcontain deleteorder={deleteorder} data={data} />
            <Footer status={"preview"} />
        </div>
    )
}