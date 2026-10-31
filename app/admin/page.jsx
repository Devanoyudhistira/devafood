
import Link from "next/link"
import Foodcard from "../components/foodmanage/foodcard"
import supabase from "../supabase/supabase"
import { Plus } from "react-bootstrap-icons"
import { ForkKnife } from "react-bootstrap-icons"
import { deletefood } from "../actions/foodcrud"

export default async function page() {
    const { data: food } = await supabase.from("food").select("*")
    return (
        <div className="flex flex-col w-full px-3" >
            <h1 className="text-3xl font-extrabold text-orange-600 flex items-center mt-4 gap-3" > devafood <ForkKnife color="orange" size={30} /> </h1>
            <Link className="self-end mr-4 mt-3" href={"/admin/create"} >
                <button className="flex items-center justify-between bg-orange-600 lg:mr-0 mr-10 rounded-xl px-2 py-1" >
                    <Plus size={30} color="white" /> <span className="lg:text-xl text-sm  font-semibold text-white capitalize" >Create new menu</span>
                </button>
            </Link>
            <main className="w-full py-4 justify-center grid grid-cols-1 lg:grid-cols-3 gap-4 items-center" >
                {food.map(e =>
                    <Foodcard key={e.id} deleteact={deletefood.bind(null,e.id)} foodid={e.id} harga={e.harga} nama={e.name} desc={e.description} image={e.gambar} />
                )}
            </main>
        </div>
    )
}