"use client"

import supabase from "@/app/supabase/supabase"
import { useEffect, useState } from "react"

export default function Toppinglist({data}) {    
    const [toppingname,settopingname] = useState(null)
    useEffect(() => {
       async function fetchdata(){
          const {data:foodtopping} = await supabase.from("toppings").select("nama").in("id",data)          
          console.log(foodtopping)
          settopingname(foodtopping)
        }
        fetchdata()
    },[])


    return <div className="flex gap-2 w-full flex-wrap items-center  overflow-hidden" >
        {toppingname?.map(e =>             
            <h4 className="text-xs font-semibold bg-orange-200 rounded-full px-2 py-1" key={e} > {e.nama} </h4>
        )}
    </div>
}