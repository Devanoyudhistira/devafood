"use server"
import { revalidatePath } from "next/cache";
import supabase from "../supabase/supabase";


export default async function deleteorder(Formdata){    
        const id = Formdata.get("id")        
        const { error } = await supabase.from("order").delete().eq("id", id)
        console.log(error)
        revalidatePath("/preview")    
}