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

// delete method

export async function deletefood(formdata) {
  console.log(foodid);
  const { data: deletedata, error: deleterror } = await supabase
    .from("food")
    .delete()
    .eq("id", foodid)
    .select();
  console.log(deletedata);
  console.log(deleterror);
  revalidatePath("/admin");
  redirect("/admin");
}

// update method

export async function updatefood(id, prev, formdata) {
  console.log(id);
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
  const idtopping = formdata.getAll("toppingid");  

  const previmage = (
    await supabase.from("food").select("gambar").eq("id", id).single()
  ).data;

  const { data:fooddata, error } = await supabase
    .from("food")
    .update({
      name: foodname,
      status: "active",
      jenis: category,
      harga: Number(foodprice),
      gambar: `${image instanceof File && image.size > 0 ? "food/" + finalname : previmage.gambar}`,
    })
    .eq("id", id)
    .select("*").single();

  console.log(toppingname)   
  const res = await fetch(`https://bmqqribeuxnppfcxittg.supabase.co/storage/v1/object/public/devafood/${previmage.gambar}`);
  const blob = await res.blob();

  await supabase.storage
    .from("devafood")
    .remove([`productimage/${previmage.gambar}`]);
  const imageup = await supabase.storage
    .from("devafood")
    .upload(
      `food/${finalname}`,
      image instanceof File && image.size > 0 ? image : blob,
    );
  if (imageup.error) {
    console.log(imageup.error);
    redirect(`/admin/food`);
  }

  revalidatePath("/admin");
  redirect(`/admin`);
}
