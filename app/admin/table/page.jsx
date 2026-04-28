
import { tableupdate } from "@/app/actions/tablecrud";
import Tablecard from "@/app/components/tablemanage/tablecard";
import supabase from "@/app/supabase/supabase";

export default async function Table(){
    const {data,error} = await supabase.from("meja").select("*").order("nomer_meja",{ascending:true})    
    return(
        <div className="w-full px-2 pt-8 flex flex-col items-center justify-center gap-3" >
            {data.map(e => <Tablecard updateact={tableupdate.bind(null,e.id,e.status) } key={e.id} status={e.status} nomer={e.nomer_meja} kursi={e.jumlah_kursi} />)}            
        </div>
    )
}