import { Dot } from "react-bootstrap-icons";
import Tableinput from "@/components/table/tableinput"
import Optiondinner from "../components/table/optiondinner";
import * as motion from "motion/react-client"
import { Bag } from "react-bootstrap-icons"
import { ForkKnife } from "react-bootstrap-icons"
import Link from "next/link";
import supabase from "../supabase/supabase";
import Login from "../actions/tableauth";

export default async function Page() {
    const { data } = await supabase.from("meja").select("*").order("nomer_meja", { ascending: true })    
    console.log(data)
    return (
        <main className="px-1 pb-10 flex flex-col items-center" >
            <nav className="w-screen h-12 flex items-center text-md text-orange-800 font-semibold" >
            </nav>
            <div className="w-full px-4" >
                <h1 className="text-orange-900 text-4xl font-bold capitalize " > selamat datang </h1>
                <p className="text-orange-700 text-xl font-semibold w-90 " > silahkan dipilih mau makan disini apa dibawa pulang</p>
                <div className="flex flex-col px-4 gap-2 mt-4" >
                    <motion.label htmlFor="dinein" className="w-full peer has-checked:border-orange-600 has-checked:border-3 has-checked:bg-white flex flex-col h-50 rounded-2xl bg-orange-100 transition px-4 py-2 justify-center" >
                        <div className="gap-12 flex flex-col" >
                            <input className="peer" type="radio" id="dinein" name="option" hidden />
                            <div className="p-3 bg-gray-200 peer-checked:bg-orange-500 transition peer-checked:text-orange-900 rounded-full text-4xl w-min h-min " > <ForkKnife /> </div>
                            <h1 className={`text-xl font-bold text-orange-800`} >Makan disini</h1>
                        </div>
                    </motion.label>
                    <motion.label htmlFor="takehome" className="w-full peer h-50 rounded-2xl has-checked:border-orange-600 has-checked:border-3 has-checked:bg-white  mt-4 px-4 py-2 transition bg-orange-100 flex flex-col justify-center" >
                        <div className="gap-12 transition flex flex-col justify-between items-stretch" >
                            <input type="radio" className="peer" id="takehome" name="option" hidden />
                            <div className="p-3 transition peer-checked:bg-orange-500 peer-checked:text-orange-900 bg-gray-200 text-gray-900 rounded-full text-4xl w-min h-min " > <Bag /> </div>
                            <h1 className={`text-xl transition font-extrabold text-orange-800`} >Di bawa pulang</h1>
                        </div>
                    </motion.label>
                </div>
            </div>
            <div className="flex flex-col px-4 w-full mt-6 " >
                <h2 className="text-xl font-semibold text-orange-900"  > Pilih meja anda </h2>
                <h3 className="text-md font-medium text-orange-800" > Tekan meja untuk memilih tempat ;) </h3>
                <div className="grid grid-cols-2 mt-3 py-4 place-items-center self-center w-[95%] bg-white rounded-2xl gap-3 " >
                    {data.map(e =>
                        <Tableinput email={e.email_meja} password={"password"} loginact={Login} key={e.id} nomor={e.nomer_meja} kursi={e.jumlah_kursi} text={e.status} color={e.status === "kosong" ? "bg-green-300" : "bg-orange-200"} textcolor={e.status === "kosong" ? "text-green-900" : "text-orange-500"} />
                    )}
                </div>
            </div>
        </main>
    )
}