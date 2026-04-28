"use client"

import { useActionState, useState } from "react"
import Foodinputimage from "./imageinput"
import Labelcategory from "./labelcategory"
import Textmakanan from "./textmakanan"
import Createtopping from "./createtopping"
import { Plus } from "react-bootstrap-icons"
import { ClipLoader } from "react-spinners"

export default function Crudform({ formact,foodname,foodprice,foodcategory,foodimage,prevtopping }) {
    const [foodvalue,setfoodvalue] = useState(foodname || "")
    const [foodpricevalue,setpricevalue] = useState(foodprice || "")
    const [foodcategoryvalue,setcategoryvalue] = useState(foodcategory || "")
    const [state, actionform, pending] = useActionState(formact, null)
    return (
        <form className="w-full px-4" action={actionform}>
            <Foodinputimage originalvalue={foodimage} />
            <Textmakanan initialvalue={foodvalue} changehandler={(e) => setfoodvalue(e.currentTarget.value) } type={"text"} name={"namamakanan"} id={"namamakanan"} labeltext={"nama makanan"} placeholder={"tulis nama makanan disini"} />
            <Textmakanan initialvalue={foodpricevalue} changehandler={(e) => setpricevalue(e.currentTarget.value) } type={"numeric"} name={"hargamakanan"} id={"hargamakanan"} labeltext={"harga makanan"} placeholder={"Rp 0.00"} />
            <h1 className="text-2xl font-semibold mt-4 text-orange-600" > Kategori </h1>
            <div className="w-max gap-2  rounded-2xl mt-3 grid grid-cols-2 px-3" >
                <Labelcategory clickhandler={() => setcategoryvalue("minuman") } prevdata={foodcategoryvalue === "minuman"} category={"minuman"} />
                <Labelcategory clickhandler={() => setcategoryvalue("makanan") } prevdata={foodcategoryvalue === "makanan"} category={"makanan"} />
                <Labelcategory clickhandler={() => setcategoryvalue("snack") } prevdata={foodcategoryvalue === "snack"} category={"snack"} />
            </div>
            {!foodname && <div className="w-full h-max mt-4" >
                <Createtopping initialtopping={prevtopping} />
            </div>}
            <button disabled={pending} className="w-full disabled:from-orange-900 disabled:to-orange-900  disabled:border-2 border-orange-900 bg-linear-to-t from-orange-400 text-3xl font-extrabold text-gray-50 to-yellow-500 h-12  gap-3 rounded-2xl mt-6" type="submit">
                {pending ? <span className="flex justify-center items-center gap-2" > loading <ClipLoader size={35} /> </span>
                    :
                    <span className="flex justify-center items-center">  Buat <Plus className="mt-1 flex justify-center items-center" size={40} /> </span>}
            </button>
        </form>
    )
}