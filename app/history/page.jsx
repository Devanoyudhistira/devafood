import Link from "next/link"
import Footer from "../components/Footer"
import supabase from "../supabase/supabase"
import moment from "moment/moment"
import convertToMoney from "../function/convert"
import Foodlist from "../components/history/foodlist"


export default async function Page() {
    const { data: recipient } = await supabase.from("recipient").select("*").order("created_at", { ascending: true })            
    return (
        <main className="w-screen flex flex-col items-center gap-5 pt-10 pb-24" >
            {recipient.map(e =>
                <Link href={`wait/${e.id}`} key={e.id} className="w-[80vw] px-4 rounded-2xl h-max py-3 bg-white shadow-xl shadow-black/20" >
                    <div className="w-full h-max py-1 flex justify-between items-center gap-1" >
                        <h6 className="text-md font-semibold bg-green-400 py-1 px-2 rounded-full" > {e.status} </h6>
                        <h2 className="text-xl font-bold text-orange-600" > {convertToMoney(e.grossprice)} </h2>
                    </div>
                    <div>
                        <h6 className="text-xs font-medium" > {moment(e.created_at).locale("id").format("MMM,D YYYY")} </h6>
                        <Foodlist datalist={e.pesanan} id={e.id} />
                    </div>
                </Link>
            )}
            <Footer status={"history"} />
        </main>
    )
}