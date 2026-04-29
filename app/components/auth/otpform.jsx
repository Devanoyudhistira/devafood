"use client"

import Otpinput from "./otpinput"

export default function Otpform({otpaction}) {
    return (
        <form action={otpaction} className="flex flex-col h-full items-center justify-between  w-full px-4 pb-8 "  >
            <div className="w-full flex items-center mt-2 justify-center gap-5" >
                <Otpinput />
                <Otpinput />
                <Otpinput />
                <Otpinput />
            </div>
            <button className="w-full h-max bg-orange-400 text-4xl font-semibold py-2.5 rounded-2xl mt-4 text-gray-900" type="submit">kumpulkan</button>
        </form>)
}