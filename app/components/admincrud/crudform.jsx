"use client"

import { useActionState } from "react"
import Foodinputimage from "./imageinput"
import Labelcategory from "./labelcategory"
import Textmakanan from "./textmakanan"

export default function Crudform({ formact }) {
    const [state, actionform, pending] = useActionState(formact, null)
    return (
        <form encType="multipart/form-data" className="w-full px-5" action={actionform}>
            <Foodinputimage />
            <Textmakanan type={"text"} name={"nama makanan"} id={"namamakanan"} labeltext={"nama makanan"} placeholder={"tulis nama makanan disini"} />
            <Textmakanan type={"numeric"} name={"hargamakanan"} id={"hargamakanan"} labeltext={"harga makanan"} placeholder={"Rp 0.00"} />
            <h1 className="text-2xl font-semibold mt-4 text-orange-600" > Kategori </h1>
            <div className="w-max gap-2  rounded-2xl mt-3 grid grid-cols-2 px-3" >
                <Labelcategory category={"minuman"} />
                <Labelcategory category={"makanan"} />
                <Labelcategory category={"snack"} />
            </div>
            
        </form>
    )
}