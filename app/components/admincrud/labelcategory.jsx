"use client"
export default function Labelcategory({category,prevdata,clickhandler}) {
    return (        
            <label htmlFor={category} className="w-max px-3 rounded-2xl py-1 text-xl font-semibold bg-orange-100 text-orange-900 transition has-checked:text-orange-50 has-checked:bg-orange-900" >
                <h1> {category} </h1>
                <input onChange={clickhandler || null} checked={prevdata || null} hidden type="radio" name="category" id={category} value={category} />
            </label>        
    )
}