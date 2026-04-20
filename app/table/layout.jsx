import { createClient } from "../supabase/server"
import { redirect } from "next/navigation"

export const metadata = {
  title: "table selection",
  description: "choose the best table for you",
};

export default async function Layout({children}){
    const supabaseserver = await createClient()
      const { data } = await supabaseserver.auth.getUser()
      const { data: session } = await supabaseserver.auth.getSession()
      if (session.session) {
        redirect("/")
      }
   return <>
    {children}
    </>
}