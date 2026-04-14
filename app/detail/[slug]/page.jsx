

import { addorder } from "@/app/actions/crudorder"
import Formaction from "@/app/components/detail/form"
import Orderadd from "@/app/components/flashmessage/orderadd"
import convertToMoney from "@/app/function/convert"
import supabase from "@/app/supabase/supabase"
import Image from "next/image"
import Link from "next/link"
import { Cart } from "react-bootstrap-icons"
import { ArrowLeft } from "react-bootstrap-icons"

export default async function Page({ params }) {
    const { slug } = await params
    const { data } = await supabase.from("food").select("*").eq("id", slug).single()
    /** @type {Food{}} */
    const food = data        
    return (
        <main className="pb-15" >            
            <nav className="w-screen h-15 flex px-4 items-center gap-3 " >
                <Link href={"/"} >
                    <ArrowLeft size={25} />
                </Link>
                <h1 className="text-2xl font-bold text-orange-600" > Food Detail </h1>
            </nav>
            <div className="w-screen px-6 flex flex-col gap-3" >
                <Image className="w-full h-80 object-center object-cover rounded-2xl" alt={food.name} width={600} height={600} src={`https://bmqqribeuxnppfcxittg.supabase.co/storage/v1/object/public/devafood/${food.gambar}`} />
                <div className="flex flex-col" >
                    <h1 className="text-3xl font-semibold text-orange-700 capitalize " > {food.name} </h1>
                    <h3 className="text-xl font-bold text-orange-900 " > {convertToMoney(food.harga)} </h3>
                </div>
                <aside className="w-full h-43 bg-orange-200 rounded-3xl px-3" >
                    {food.description}
                </aside>
                <Formaction action={addorder} >
                    <input type="text" value={food.id} name="id" id="id" hidden />
                    <button type="submit" className="w-full text-white text-3xl font-bold h-15 flex items-center gap-2 justify-center rounded-full bg-linear-to-tl from-orange-500 to-yellow-400" > add to order <Cart size={25} /> </button>
                </Formaction>
            </div>

        </main>
    )
}