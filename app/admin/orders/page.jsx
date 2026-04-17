import Recipientlist from "@/app/components/recipient/recipientlist"
import supabase from "@/app/supabase/supabase"

export default async function Page() {    
    const {data:recipient} = await supabase.from("recipient").select("*")        
    console.log(recipient)
    return (        
            <main className="flex flex-col gap-2 px-2 w-full" >
                <h1 className="text-orange-900 capitalize text-3xl font-extrabold" > Dashboard Pesanan </h1>                
                    <div className="ml-4 w-max h-max bg-orange-100 capitalize px-5 py-1 rounded-full" > <h1 className="text-orange-800 text-md font-semibold" > pesanan aktif: { recipient.length }</h1> </div>                 
                <div className="flex flex-col w-full px-5" >
                    {
                        recipient.map(e => 
                            <Recipientlist id={e.id} harga={e.grossprice} status={e.status} key={e.id} tableid={e.meja} />
                        )
                    }
                </div>
            </main>        
    )
}