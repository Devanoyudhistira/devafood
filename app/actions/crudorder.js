"use server";
import { revalidatePath } from "next/cache";
import supabase from "../supabase/supabase";

export async function deleteorder(Formdata) {
  const id = Formdata.get("id");
  const { error } = await supabase.from("order").delete().eq("id", id);
  console.log(error);
  revalidatePath("/preview");
}
export async function addorder(Formdata) {
  const id = Formdata.get("id");

  const { error } = await supabase
    .from("order")
    .upsert({
      table: 1,
      food: id,
    })
    .select("*")
    .single();

  console.log(error);  
}
