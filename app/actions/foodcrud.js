"use server";
import { redirect } from "next/navigation";
import supabase from "../supabase/supabase";
import { revalidatePath } from "next/cache";

export async function createfood(prev, formdata) {
  const image = formdata.get("foodimage");
  const extension = image.name.split(".").at(-1);
  const finalname =
    Math.random()
      .toString(36)
      .substring(2, 10 + 2) +
    "." +
    extension;
  const foodname = formdata.get("namamakanan");
  const foodprice = formdata.get("hargamakanan");
  const category = formdata.get("category");
  const toppingname = formdata.getAll("namatopping");
  const toppingprice = formdata.getAll("hargatopping");
  const imageupload = await supabase.storage
    .from("devafood")
    .upload(`food/${finalname}`, image);
  const { data: fooddata, error: fooderror } = await supabase
    .from("food")
    .insert({
      name: foodname,
      status: "active",
      jenis: category,
      harga: Number(foodprice),
      gambar: `food/${finalname}`,
    })
    .select("id")
    .single();
  const alltoppping = toppingname.map((e, i) => ({
    makanan: fooddata.id,
    nama: e,
    harga: toppingprice[i],
  }));
  const { data: toppinginsert, error: toppingerror } = await supabase
    .from("toppings")
    .insert(alltoppping);
  revalidatePath("/admin");
  redirect("/admin");
}

export async function deletefood(formdata) {
  const foodid = formdata.get("deletefood")
  console.log(foodid)
  const { data:deletedata,error:deleterror } = await supabase.from("food").delete().eq("id",foodid).select();
  console.log(deletedata)
  console.log(deleterror)
  revalidatePath("/admin");
  redirect("/admin");
}
