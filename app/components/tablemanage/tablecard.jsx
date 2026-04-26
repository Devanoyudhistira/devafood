import { People } from "react-bootstrap-icons";

export default function Tablecard({ nomer, status, kursi }) {
    return (
        <div className="w-[85%] h-max rounded-md relative bg-white shadow-xl shadow-orange-600/20 px-3 pt pb-2-2 flex flex-col  " >
            <div className="w-full h-max py-2 flex justify-between items-center" >
                <h1 className="text-2xl font-bold text-orange-900" >meja {nomer} </h1>
                <h1 className={`${status === "kosong" ? "bg-green-400" : "bg-orange-400"} py-1 px-2 text-xs font-medium rounded-full`} > {status} </h1>
            </div>
            <h2 className="text-md gap-3 mt-4 font-semibold text-orange-800 flex items-center" ><People />  {kursi} kursi </h2>
            <div className="h-17 flex  items-center justify-center w-full border-t border-orange-500 mt-10 justify-self-end self-end px-6" >
                <button className="text-2xl text-center bg-green-400 w-full h-max py-2 font-semibold rounded-md " > kosongkan </button>
            </div>
        </div>
    )
}