"use server"
import { createClient } from "@/app/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";


export default async function Login(formdata){
    const supabase = await createClient()
    const email = formdata.get("email")
    const password = formdata.get("password")

    const {data,error} = await supabase.auth.signInWithPassword({
        email:email,
        password:password
    })    
    revalidatePath("/")
    redirect("/")
}