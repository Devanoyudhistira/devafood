import { createClient } from "../supabase/server";
import { redirect } from "next/navigation";
import { People } from "react-bootstrap-icons";
export const metadata = {
    title: "Admin page",
    description: "page for admin",
};

export default async function Layoutadmin({ children }) {
    const supabaseserver = await createClient()
    const { data: user } = await supabaseserver.auth.getSession()
    if(!user.session){
        redirect("/")
    }
    return (
        <div className="w-max h-max pb-10 " >
            <nav className="w-screen h-13 px-2 flex items-center border-b border-orange-950 gap-4" >
                <People size={25} />
                <h1 className="text-xl font-semibold text-orange-600" > Devafood </h1>
            </nav>
            {children}
        </div>
    )
}