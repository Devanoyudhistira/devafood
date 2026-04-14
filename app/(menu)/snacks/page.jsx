import Image from "next/image";
import { Search } from "react-bootstrap-icons";
import Footer from "@/app/components/Footer";
import supabase from "@/supabase/supabase";
import Menucontainer from "@/app/components/home/menucontainer";

/**
 * @typedef {Object} Food
 * @property {number} id
 * @property {string} name
 * @property {string} status
 * @property {number} harga
 * @property {string} description
 * @property {string} jenis
 * @property {string} gambar
 * @property {string} created_at
 */


export default async function Home() {  
  const { data } = await supabase.from("food").select("*").eq("jenis", "snacks")
  /** @type {Food[]} */
  const food = data ?? []  
  return (
    <>
      <Menucontainer food={food} />
      <Footer status={"main"} />
    </>
  );
}

