
import Toppinglist from "./toppinglist"

export default function Foodlist({ datalist }) {
    console.log(datalist)
    return (
        <ul className="w-full flex flex-col mt-4 font-semibold text-md text-orange-700 " >
            {datalist.map(e =>
                <li key={e.id} >
                    <ul className="flex items-center gap-3" >
                        <h1 className=" bg-orange-500 w-6 h-6 font-semibold z-200 left-11 p-1 text-xs grid place-items-center rounded-full -top-1 text-black">
                            {e.quantity}X
                        </h1>
                        <div className="flex flex-col gap-2 w-full" >  
                            <h1 className="text-xl font-bold" > {e.nama} </h1>
                            <Toppinglist data={e.topping} />
                        </div>
                    </ul>
                </li>
            )}
        </ul>
    )
}