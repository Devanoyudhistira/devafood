import supabase from "@/app/supabase/supabase"

export default async function Toppinglist({data}) {

    const {data:toping,error} = await supabase.from("toppings").select("nama,harga").in("id",data)    

    return <div className="flex gap-2 items-center" >
        {toping?.map(e => <h4 className="text-xs font-semibold bg-orange-200 rounded-full px-2 py-1" key={e.nama} > {e.nama} </h4>)}
    </div>
}