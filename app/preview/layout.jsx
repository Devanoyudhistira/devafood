import { createClient } from "../supabase/server";
import supabase from "../supabase/supabase";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Your order",
  description: "devano food menu",
};

export default async function layout({ children }) {
    const supabaseserver = await createClient()
    const { data } = await supabaseserver.auth.getUser()
    const { data: session } = await supabaseserver.auth.getSession()
    if (!session.session) {
        redirect("/table")
    }
    const userid = data?.user.id
    const { data: tabledata } = await supabase.from("meja").select("*").eq("uuid", userid).single()
    return (
        <>
            {children}
        </>
    )
}