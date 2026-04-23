"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "../supabase/server";
import { redirect } from "next/navigation";
import supabase from "../supabase/supabase";

export async function Loginadmin(prev, formdata) {
  const supabaseserver = await createClient();
  const {error:logouterror} = supabaseserver.auth.signOut()
  const email = formdata.get("email");
  const password = formdata.get("password");
  const { data, error } = await supabaseserver.auth.signInWithPassword({
    email: email,
    password: password,
  });
  if (error)return { error: true, message: "identitas tidak valid" };
  const { data: admindata, error: adminerror } = await supabase
    .from("admin")
    .select("id")
    .eq("uuid", data.user.id).single();    
    if(!admindata)return { error: true, message: "anda bukan admin" };
redirect("admin/orders")
}
