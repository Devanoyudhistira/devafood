import deleteorder from "../actions/crudorder";
import Footer from "../components/Footer";
import Foodcontain from "../components/preview/foodpreviewcontain";

import supabase from "../supabase/supabase";

export default async function Page() {
    const { data } = await supabase.from("order").select("id,food(name,gambar,harga),quantity").eq("table", 1).order("id",{ascending:true})
    return (
        <div className="w-full px-2 pb-40" >
            <h3 className="text-xl mt-5 font-medium text-orange-900" > Review order </h3>
            <h1 className="text-5xl font-bold text-orange-600" > Pilihan anda </h1>
            <Foodcontain deleteorder={deleteorder} data={data} />
            <Footer status={"preview"} />
        </div>
    )
}