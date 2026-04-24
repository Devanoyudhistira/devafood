"use server";

export async function createfood(prev, fromdata) {
  const image = formdata.get("foodimage");
  const extension = image.name.split(".").at(-1);
  const imagevalidate = ["image/jpeg", "image/png", "image/webp"];
  const finalname =
    Math.random()
      .toString(36)
      .substring(2, 10 + 2) +
    "." +
    extension;
    
}
