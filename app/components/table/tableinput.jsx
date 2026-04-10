export default function Tableinput({ color, textcolor ,text}) {
    return (
        <div className={`${color} px-2 py-2 w-34 h-32 rounded-xl flex flex-col items-start justify-between`} >
            <h1 className={`text-2xl font-medium ${textcolor}`} > {text} </h1>
            <div className="" >
                <h3 className={`text-xl font-extrabold text-orange-800`} >01</h3>
                <p className={`text-xs font-bold text-orange-900 `} > 3 kursi </p>
            </div>
        </div>
    )
}