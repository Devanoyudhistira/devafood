export default function Textmakanan({type,id,name,labeltext,placeholder}) {
    return (<label htmlFor={id} className="mt-4 w-full px-4" >
        <h1 className="text-xl font-medium text-orange-600  capitalize " > {labeltext} </h1>
        <input className="font-semibold placeholder:text-orange-300 bg-orange-100 text-orange-800 py-2 px-1 text-2xl w-full rounded-xl" placeholder={placeholder} type={type} name={name} id={id} />
    </label>)
}