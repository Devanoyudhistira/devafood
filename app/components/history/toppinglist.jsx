"use client"

import supabase from "@/app/supabase/supabase"

export default function Toppinglist({data}) {    

    return <div className="flex gap-2 w-full flex-wrap items-center  overflow-hidden" >
        {data?.map(e =>             
            <h4 className="text-xs font-semibold bg-orange-200 rounded-full px-2 py-1" key={"haloo"} > {e} </h4>
        )}        
    </div>
}