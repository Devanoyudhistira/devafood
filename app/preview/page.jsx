import Foodpreview from "../components/preview/foodpreview";


export default function Page() {
    return (
        <div className="w-full px-2" >
            <h3 className="text-xl mt-5 font-medium text-orange-900" > Review order </h3>
            <h1 className="text-5xl font-bold text-orange-600" > Pilihan anda </h1>
            <div className="w-full px-1 mt-7 py-3 flex flex-col gap-2" >                
                <Foodpreview/>
            </div>
        </div>
    )
}