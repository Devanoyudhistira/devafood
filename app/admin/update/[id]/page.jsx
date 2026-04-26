import { updatefood } from "@/app/actions/foodcrud"
import Crudform from "@/app/components/admincrud/crudform"
import supabase from "@/app/supabase/supabase"

export default async function Page({ params }) {
    const { id } = await params
    const {data,error} = await supabase.from("food").select("*").eq("id",id).single()  
    const {data:toppingdata,error:toppingeror} = await supabase.from("toppings").select("*").eq("makanan",data.id)    
    return (
        <div className="w-screen px-4 " >
            <Crudform prevtopping={toppingdata} foodname={data.name} foodprice={data.harga} foodcategory={data.jenis} foodimage={data.gambar} formact={updatefood.bind(null,id) } />
        </div>
    )
}