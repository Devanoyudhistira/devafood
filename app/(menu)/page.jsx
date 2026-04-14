import Image from "next/image";
import { Search } from "react-bootstrap-icons";
import Footer from "../components/Footer";
import supabase from "@/supabase/supabase";
import Menucontainer from "../components/home/menucontainer";

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
  const { data } = await supabase.from("food").select("*").eq("jenis", "makanan")
  /** @type {Food[]} */
  const food = data ?? []  
  return (
    <>
      <Menucontainer food={food} />
      <Footer status={"main"} />
    </>
  );
}

