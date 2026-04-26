import Tablecard from "@/app/components/tablemanage/tablecard";
import supabase from "@/app/supabase/supabase";

export default async function Table(){
    const {data,error} = await supabase.from("meja").select("*")
    return(
        <div className="w-full px-2 pt-8 flex flex-col items-center justify-center gap-3" >
            {data.map(e => <Tablecard key={e.id} status={e.status} nomer={e.nomer_meja} kursi={e.jumlah_kursi} />)}            
        </div>
    )
}