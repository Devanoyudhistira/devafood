"use server"
import { revalidatePath } from "next/cache";
import supabase from "../supabase/supabase";

export async function tableupdate(id, status, prev,formdata) {
    const statusupdate = status === "kosong" ? "berisi" : "kosong"
    console.log(id)
    console.log(statusupdate)
  const { data,error } = await supabase
    .from("meja")
    .update({
      status: statusupdate,
      kode_meja: Math.floor(1000 + Math.random() * 9000)
    })
    .eq("id", id).select("status,id,kode_meja").single() ;
    if(error){
        console.log(error)
        return { error:true,error:error }
    }
    revalidatePath("/admin/table")
    return { success:true,code:data.kode_meja,status:data.status }
}


