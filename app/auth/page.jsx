
import Link from "next/link";
import { loginotp } from "../actions/tableauth";
import { ArrowLeft } from "react-bootstrap-icons";
import Image from "next/image";
import Otpform from "../components/auth/otpform";

export default async function Page() {
    return (
        <div className="flex flex-col h-screen items-center " >
            <nav className="w-screen fixed top-0 left-0 flex py-2 px-2 items-center justify-between " >
                <Link href={"/table"} >
                    <ArrowLeft className="text-orange-600  " size={40} />
                </Link>
                <h1 className="self-center text-orange-800 capitalize text-3xl font-semibold " > login </h1>
            </nav>
            <div className="w-full px-8 mt-20 " >
                <Image src={"/loginimage.jpg"} alt="haloo" width={700} height={700} className="object-cover object-center w-full h-67 rounded-2xl  " />
            </div>
            <div className="w-full px-7 flex flex-col gap-0.5 items-center text-center mt-4" >
                <h1 className="text-2xl font-bold text-orange-900" > Silahkan masukan kode anda </h1>
                <h5 className="text-md font-medium text-orange-400" > tanya ke chef kasir tidak menemukan kodenya </h5>
            </div>
           <Otpform otpaction={loginotp} />
        </div>
    )
}