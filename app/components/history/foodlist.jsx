
import Toppinglist from "./toppinglist"

export default function Foodlist({ datalist }) {
    console.log(datalist)
    return (
        <ul className="w-full flex flex-col mt-4 font-semibold text-md text-orange-700 " >
            {datalist.map(e =>
                <li key={e.id} >
                   <h1 className="text-xl font-bold" > {e.nama} </h1>
                   <Toppinglist data={e.topping} />
                </li>
            )}
        </ul>
    )
}