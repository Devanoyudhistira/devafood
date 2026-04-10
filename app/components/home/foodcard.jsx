"use client"
export default function Foodcard() {
    return (<div className={`w-40 h-52 bg-white flex flex-col rounded-2xl overflow-hidden shadow-xl shadow-gray-700/30`} >
        <div className="w-full bg-black h-120" ></div>
        <div className="w-full h-full flex justify-between gap-1 flex-col px-1.5" >
            <div>
                <h1 className="text-xl font-semibold text-orange-950" > Cheese pasta </h1>
                <p className="text-xs font-bold text-orange-900" > Rp15.000 </p>
            </div>
            <p className="text-[9px] font-extralight text-orange-600" > Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, aliquid...... </p>
            <h6 className="text-orange-800 self-end font-bold text-md" > 20 Min </h6>
        </div>
    </div>)
}