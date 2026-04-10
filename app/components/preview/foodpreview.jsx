import { DashLg } from "react-bootstrap-icons";
import { Plus } from "react-bootstrap-icons";

export default function Foodpreview() {
    return (
        <div className="w-full h-30 px-1 gap-1  rounded-xl flex justify-between items-center" >
            <div className="w-35 gap-2 h-30 rounded-2xl bg-black" >  </div>
            <div className="flex flex-col w-50" >
                <h1 className="text-xl font-semibold text-orange-950" >chinese pasta</h1>
                <p className="text-xs font-light text-orange-800" > Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, quae </p>
                <div className="flex justify-center items-center gap-2" >
                    <h1 className="text-orange-600 font-extrabold" > Rp 15.000 </h1>
                    <div className="flex gap-3 bg-white rounded-4xl items-center justify-center" >
                        <span className="p-2 text-2xl " > <Plus /></span>
                        <h1> 1 </h1>
                        <span className="p-2 text-2xl " > <DashLg /></span>
                    </div>
                </div>
            </div>
        </div>
    )
}