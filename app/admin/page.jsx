
import Foodcard from "../components/foodmanage/foodcard"
import supabase from "../supabase/supabase"

export default async function page() {
    const { data: food } = await supabase.from("food").select("*")
    return (
        <div>
            <main className="w-full py-4 justify-center  flex flex-col gap-4 items-center" >                
                {food.map( e =>
                    <Foodcard key={e.id} harga={e.harga} nama={e.name} desc={e.description} image={e.gambar} />                
                )}
            </main>
        </div>
    )
}