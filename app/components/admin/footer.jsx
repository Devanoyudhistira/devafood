"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Table } from "react-bootstrap-icons"
import { Receipt } from "react-bootstrap-icons"
import { ForkKnife } from "react-bootstrap-icons"
import { Reception2 } from "react-bootstrap-icons"

export default function Footeradmin() {
    const pathname = usePathname()
    console.log(pathname)
    return (
        <div className="text-md w-screen flex justify-evenly items-center rounded-4xl bg-white h-23 text-orange-900 fixed bottom-0 left-0" >
            <Link href={"/admin"} className={`flex ${pathname === "/admin" && `bg-orange-300 p-1.5`} rounded-xl w-max h-max flex-col items-center justify-center text-xl `} >
                <Receipt  />
                <h1> Pesanan </h1>
            </Link>
            <Link href={"admin/orders"} className={`flex ${pathname === "/admin/orders" && `bg-orange-300 p-1.5`} rounded-xl w-max h-max flex-col items-center justify-center text-xl `} >
                <ForkKnife/>
                <h1> menu </h1>
            </Link>
            <Link href={"admin/orders"} className={`flex ${pathname === "/admin/table" && `bg-orange-300 p-1.5`} rounded-xl w-max h-max flex-col items-center justify-center text-xl `} >
                <Table/>
                <h1> meja </h1>
            </Link>
        </div>
    )
}