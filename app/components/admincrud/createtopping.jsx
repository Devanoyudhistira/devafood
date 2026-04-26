"use client"

import { useState } from "react"
import { Plus } from "react-bootstrap-icons"
import { Trash } from "react-bootstrap-icons"

export default function Createtopping({initialtopping}) {
    const [topping, settopping] = useState(initialtopping || [{ nama: "", harga: 1 }])
    console.log(topping)
    function addtoping() {
        settopping(prev => [...prev, {id:990 ,nama: "", harga: 1 }])
    }
    function deletetopping(id) {
        settopping(prev => prev.filter((_, i) => i !== id));
    }
    function updatename(index, value) {
        settopping(prev =>
            prev.map((item, i) =>
                i === index
                    ? { ...item, nama: value }
                    : item
            )
        );
    }
    function updateprice(index, value) {
        settopping(prev =>
            prev.map((item, i) =>
                i === index
                    ? { ...item, harga: value }
                    : item
            )
        );
    }
    return (
        <div className="w-full h-max flex flex-col gap-2 px-2 py-2 -ml-3 box-content bg-gray-50" >
            <h1 className="text-3xl font-bold text-orange-600" >tambahkan topping</h1>
            {topping.map((e, i) =>
                <div key={i}  className="flex items-center gap-2 mt-3" >
                    {e.id && <input type="text" name="toppingid" id="toppingid" hidden value={e.id} />}

                    <input type="text" placeholder="tulis topping " value={topping[i].nama } onChange={el => updatename(i,el.currentTarget.value) } className="bg-orange-100 text-xl w-57 font-medium py-2 px-1 rounded-2xl placeholder:text-orange-300 text-orange-900 focus:border-2 border-orange-700 transition " name="namatopping" id="namatopping" />

                    <input value={topping[i].harga } onChange={el => updateprice(i,el.currentTarget.value) }  type="number" placeholder="tulis harga " className="bg-orange-100 text-xl w-32 font-medium py-2 px-1 rounded-2xl placeholder:text-orange-300 text-orange-900 focus:border-2 border-orange-700 transition " name="hargatopping" id="hargatopping" />
                    <button type="button" onClick={() => deletetopping(i)} className="bg-orange-100 text-orange-950 rounded-xl p-2" >
                        <Trash size={25} />
                    </button>
                </div>
            )}
            <button type="button" onClick={addtoping} className="text-2xl font-semibold text-orange-800 flex justify-center items-center w-78 bg-orange-100 rounded-xl" > tambah baru
                <Plus className="mt-0.5" size={35} />  </button>
        </div>
    )
}