import Link from "next/link";
import { Bag } from "react-bootstrap-icons";
import { ClockHistory } from "react-bootstrap-icons";
import { House } from "react-bootstrap-icons";
import { HouseFill } from "react-bootstrap-icons";
import { BagFill } from "react-bootstrap-icons";

export default function Footer({ status }) {    
    return (
        <footer className="w-screen h-20 bg-white rounded-t-4xl fixed bottom-0 left-0 flex items-center justify-center gap-10 " >
            <Link href={"/"} className="flex flex-col items-center justify-center" >
                <div className={`${status === "main" ? "bg-orange-500 text-gray-50" : "bg-gray-50 text-orange-500"} flex justify-center items-center  rounded-full p-2.5`} >
                    {<HouseFill size={21} />}
                </div>
                <h3 className="text-md text-orange-800" > menu </h3>
            </Link>
            <Link prefetch href={"/preview"} className="flex flex-col items-center justify-center">
                <div className={`${status === "preview" ? "bg-orange-500 text-gray-50" : "bg-gray-50 text-orange-500"} flex justify-center items-center  rounded-full p-2.5`} >
                    <BagFill size={21} />
                </div>
                <h3> Orders </h3>
            </Link>
            <Link prefetch href={"/history"} className="flex flex-col items-center justify-center">
                <div className={`${status === "history" ? "bg-orange-500 text-gray-50" : "bg-gray-50 text-orange-500"} flex justify-center items-center  rounded-full p-2.5`} >
                    <ClockHistory size={21} />
                </div>
                <h3> History </h3>
            </Link>
        </footer>
    )
}