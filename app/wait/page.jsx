import { ForkKnife } from "react-bootstrap-icons";

export default function page(){
return (<div className="flex flex-col" >
        <div className="w-screen flex flex-col gap-2  items-center justify-center" >
            <div className={`w-55 h-55 border-4 border-white shadow-2xl shadow-orange-800/50 mt-30 bg-orange-700 rounded-full flex items-center justify-center`} >
                <ForkKnife size={90} />
            </div>
            <h1 className="text-3xl text-center font-semibold text-orange-800" > Chef sedang memasak makanan anda </h1>
        </div>
    </div>
)
}