"use server";
import { revalidatePath } from "next/cache";
import supabase from "../supabase/supabase";
import { NextResponse } from "next/server";
import { createClient } from "../supabase/server";

export async function deleteorder(prev,Formdata) {
  const id = Formdata.get("id");
  const { error,data } = await supabase.from("order").delete().eq("id", id).select("id").single();  
  if (error) {
    return { code: 402, message: "gagal silahkan coba lagi" };
  }
  revalidatePath("/preview");
  return { code: 200, message: "order berhasil dihapus",id:data.id };
}



export async function addorder(prev, Formdata) {
  const id = Formdata.get("id");
  const supabaseserver = await createClient();
  const { data: user } = await supabaseserver.auth.getUser();
  const { data: table } = await supabase
    .from("meja")
    .select("id")
    .eq("uuid", user.user.id)
    .single();

  const { error } = await supabase
    .from("order")
    .upsert({
      table: table.id,
      food: id,
      quantity:1
    })
    .select("*")
    .single();
    console.log(table.nomer_meja)
    console.log(error)

  if (error) {
    return { code: 402, message: "gagal silahkan coba lagi" };
  }
  revalidatePath("/detail");
  return { code: 200, message: "berhasil di tambah ke order" };
}
