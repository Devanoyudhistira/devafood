import { Dot } from "react-bootstrap-icons";
import Tableinput from "@/components/table/tableinput"
import Optiondinner from "../components/table/optiondinner";
import Link from "next/link";

export default function Page() {
    return (
        <main className="px-1 pb-10 flex flex-col items-center" >
            <nav className="w-screen h-12 flex items-center text-md text-orange-800 font-semibold" >
            </nav>
            <div className="w-full px-4" >
                <h1 className="text-orange-900 text-4xl font-bold capitalize " > selamat datang </h1>
                <p className="text-orange-700 text-xl font-semibold w-90 " > silahkan dipilih mau makan disini apa dibawa pulang</p>
                <div className="flex flex-col px-4 gap-2 mt-4" >
                    <Optiondinner />
                </div>
            </div>
            <div className="flex flex-col px-4 w-full mt-6 " >
                <h2 className="text-xl font-semibold text-orange-900"  > Pilih meja anda </h2>
                <h3 className="text-md font-medium text-orange-800" > Tekan meja untuk memilih tempat ;) </h3>
                <div className="grid grid-cols-2 mt-3 py-4 place-items-center self-center w-[95%] bg-white rounded-2xl gap-3 " >
                    <Tableinput text={"kosong"} color={`bg-green-100`} textcolor={"text-green-400"} />
                    <Tableinput text={"kosong"} color={`bg-green-100`} textcolor={"text-green-400"} />
                    <Tableinput text={"dipakai"} color={`bg-orange-100`} textcolor={"text-orange-400"} />
                    <Tableinput text={"dipakai"} color={`bg-orange-100`} textcolor={"text-orange-400"} />
                    <Tableinput text={"dipakai"} color={`bg-orange-100`} textcolor={"text-orange-400"} />
                </div>
            </div>
            <button className="text-2xl w-full h-16 border-2 border-orange-700 bg-white rounded-full mt-1  font-bold text-orange-800 flex items-center justify-center" > 
               <Link href={"/"} > Lanjut ke menu </Link> </button>
        </main>
    )
}