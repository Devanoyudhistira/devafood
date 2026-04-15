"use server";
import { createClient } from "@/app/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function Login(prev,formdata) {
  const supabase = await createClient();
  const email = formdata.get("email");
  const password = formdata.get("password");

  const { data: tablestatus } = await supabase
    .from("meja")
    .select("status")
    .eq("email_meja", email).single()    
  if(tablestatus.status !== "kosong"){
    return { code: 400, message: "meja tersebut tidak dapat dipilih" };  
  }
  const {error:updateerror,data:updatedata} = await supabase.from("meja").update({status:"berisi"}).eq("email_meja",email).select("*")     
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });
  
  console.log(updateerror)
  console.log(updatedata)
  revalidatePath("/table")
  revalidatePath("/");  
  return { code: 200, message: "pemilihan meja telah berhasil",data:updatedata ,errorupt:updateerror};
}
