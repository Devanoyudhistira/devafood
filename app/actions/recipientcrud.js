"use server";
import { revalidatePath } from "next/cache";
import supabase from "../supabase/supabase";
import { createClient } from "../supabase/server";

export async function Updaterecipient(userid,Formdata) {
  const {data,error} = await supabase.from("recipient").update({
    status:"done"
  }).eq("id",userid).select("id").single()

  const {error:deleteerror} = await supabase.from("recipient").delete().eq("id",data.id)  
  console.log(deleteerror)
  if (error) {
    return { code: 402, message: "gagal silahkan coba lagi" };
  }    
  revalidatePath("/admin/orders");
  return { code: 200, message: "order berhasil dihapus", id: data.id };
}
