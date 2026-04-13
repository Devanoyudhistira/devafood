"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
export default function Linknavigate() {
    const pathname = usePathname()
    function colorlink(link) {
        if (pathname === link) {
            return "from-orange-700 to-yellow-500"
        }
        return "text-orange-900 rounded-2xl from-orange-100 to-yellow-50 "
    }
    return (
        <>
            <Link href={"/"} className={`w-26 h-10 flex justify-center items-center bg-linear-to-tl rounded-2xl ${colorlink("/")} font-semibold text-2xl`} > Food </Link>
            <Link href={"/drink"} className={`w-26 h-10 flex justify-center items-center bg-linear-to-tl rounded-2xl ${colorlink("/drink")} font-semibold text-2xl`} > drink </Link>
            <Link href={"/snacks"} className={`w-26 h-10 flex justify-center items-center bg-linear-to-tl rounded-2xl ${colorlink("/snacks")} font-semibold text-2xl`} > snacks </Link>
        </>
    )
}