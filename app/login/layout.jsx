import { createClient } from "../supabase/server";
import supabase from "../supabase/supabase";
import { redirect } from "next/navigation";
export default async function layout({ children }) {
    const supabaseserver = await createClient()
    const { data: user } = await supabaseserver.auth.getUser()
    const { data: admindata, error: adminerror } = await supabase
        .from("admin")
        .select("id")
        .eq("uuid", user?.user?.id).single();
    if (admindata) {
        redirect("/admin")
    }
    return (
        <>
            {children}
        </>
    )
}