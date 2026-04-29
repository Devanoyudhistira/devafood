"use server";
import { createClient } from "@/app/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import supabase from "../supabase/supabase";

export async function Login(prev, formdata) {
  const supabase = await createClient();
  const email = formdata.get("email");
  const password = formdata.get("password");

  const { data: tablestatus } = await supabase
    .from("meja")
    .select("status")
    .eq("email_meja", email)
    .single();
  if (tablestatus.status !== "kosong") {
    return { code: 400, message: "meja tersebut tidak dapat dipilih" };
  }
  const { error: updateerror, data: updatedata } = await supabase
    .from("meja")
    .update({ status: "berisi" })
    .eq("email_meja", email)
    .select("*");

  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });

  console.log(updateerror);
  console.log(updatedata);
  revalidatePath("/table");
  revalidatePath("/");
  return {
    code: 200,
    message: "pemilihan meja telah berhasil",
    data: updatedata,
    errorupt: updateerror,
  };
}

export async function Logout(prev, formdata) {
  const supabaseserver = await createClient();
  const { data: user } = await supabaseserver.auth.getUser();
  const userid = user.user.id;
  const { data: tablestatus, error } = await supabase
    .from("meja")
    .update({
      status: "kosong",
    })
    .eq("uuid", userid)
    .select("*");
  console.log(error);
  console.log(userid);
  console.log(tablestatus);
  const { error: outerror } = await supabaseserver.auth.signOut();
  if (error) {
    console.log(outerror);
  }

  redirect("/table");
}

export async function loginotp(formdata) {
  const supabaseserver = await createClient();
  const otp = formdata.getAll("otp").map(e => e ).reduce((e,i) => e + i)
  console.log(otp)
  const { data: tablestatus, error } = await supabase
    .from("meja")
    .update({
      status: "kosong",
    })
    .eq("kode_meja", otp)
    .select("*").single();
    console.log(tablestatus)
    console.log(error)

    const { data, error:autherror } = await supabaseserver.auth.signInWithPassword({
    email: tablestatus.email_meja ,
    password: "password",
  });

  console.log(data)
  console.log(autherror)
  if(autherror){
    console.log(autherror)
  }
  redirect("/")

}
