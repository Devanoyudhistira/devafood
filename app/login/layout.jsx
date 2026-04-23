import { createClient } from "../supabase/server";
import { redirect } from "next/navigation";
export default async function layout({ children }) {
    const supabaseserver = await createClient()
    const { data: user } = await supabaseserver.auth.getSession()
    if (user.session) {
        redirect("/admin/orders")
    }
    return (
        <>
        {children}
        </>
        )
}