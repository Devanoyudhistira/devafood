import supabase from "../supabase/supabase";
import { createClient } from "../supabase/server";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Waiting",
  description: "Waiting till the food is ready",
};

export default async function Layout({ children }) {
  const supabaseserver = await createClient()
  const { data: user } = await supabaseserver.auth.getUser()
  const { data: table } = await supabase.from("meja").select("*").eq("uuid", user.user.id).single()
  const { data: recipient } = await supabase.from("recipient").select("*").eq("meja", table.id).single()
  if(!recipient){
    redirect("/")
  }
  return (<>
    {children}
  </>)
}