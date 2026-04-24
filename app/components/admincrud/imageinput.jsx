"use client"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Camera } from "react-bootstrap-icons"
import { Images } from "react-bootstrap-icons"
export default function Foodinputimage({originalvalue}) {
    const [preview, setPreview] = useState(originalvalue || null)
    const [file, setFile] = useState(null)

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0]
        if (selectedFile) {
            setFile(selectedFile)
            const objectUrl = URL.createObjectURL(selectedFile)
            setPreview(objectUrl)
        }
    }

    useEffect(() => {
        return () => {
            if (preview) {
                URL.revokeObjectURL(preview)
            }
        }
    }, [preview])

    return (<>
        <label htmlFor="foodimage" className="w-full h-70 mt-4 has-invalid:border-red-500 flex items-center justify-center" >
            {!preview && <div className="w-full  h-75 text-orange-950 rounded-md bg-orange-100 border-dashed border-2 flex flex-col gap-3 items-center justify-center border-orange-400" >
                    <Camera size={130} />
                    <h1 className="text-xl font-semibold " > silahkan memilih gambar makanan </h1>
                    <p className="text-md -mt-4 font-bold" > Gambar tidak boleh melebihi 6mb </p>
            </div>}
            <input type="file" hidden onChange={e => handleFileChange(e)} id="foodimage" name="foodimage" />
        {preview && <Image src={preview} alt="imagepreview" className="w-89 h-full self-center object-cover rounded-2xl object-center" width={1000} height={1000} />}
        </label>
    </>
    )
}