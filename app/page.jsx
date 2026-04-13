import Image from "next/image";
import { Search } from "react-bootstrap-icons";
import Foodcard from "./components/home/foodcard";
import Footer from "./components/Footer";
import supabase from "./supabase/supabase";
import convertToMoney from "./function/convert";
import truncate from "./function/truncat";

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
  const { data } = await supabase.from("food").select("*")
  /** @type {Food[]} */
  const food = data ?? []
  function addfood(food){
    console.log(food)
  }
  return (
    <main className="flex flex-col items-center w-full h-auto pb-18">
      <nav className="w-full px-3 h-15 flex items-center justify-between  " >
        <h1 className="text-2xl font-bold text-orange-700" > Meja 01 </h1>
      </nav>
      <div className="w-full mt-4 px-4 py-1 " >
        <h5 className="text-md font-semibold text-orange-900" > Selamat datang di devano_Food </h5>
        <h1 className="text-3xl w-70 font-extrabold text-orange-700" > Mau makan apa hari ini  </h1>
        <form className="w-full mt-8" >
          <label htmlFor="searchfood" className="flex ml-2 overflow-hidden items-center w-full justify-center shadow-xs shadow-gray-900/50">
            <div className="bg-white rounded-tl-md rounded-bl-md w-10 h-14 flex items-center justify-center" >
              <Search size={20} />
            </div>
            <input placeholder="Cari makanan" type="text" name="searchfood" id="searchfood" className="w-full pl-3 py-1 h-14 bg-white border-orange-600  rounded-tr-xl rounded-br-xl " />
          </label>
        </form>
      </div>
      <div className="flex w-full text-white items-center justify-evenly mt-8" >
        <h1 className="w-26 h-10 flex justify-center items-center bg-linear-to-tl rounded-2xl from-orange-700 to-yellow-500 font-semibold text-2xl" > Food </h1>
        <h1 className="w-26 h-10 flex justify-center items-center bg-linear-to-tl text-orange-900 rounded-2xl from-orange-100 to-yellow-50 font-semibold text-2xl" > drink </h1>
        <h1 className="w-26 h-10 flex justify-center items-center bg-linear-to-tl text-orange-900 rounded-2xl from-orange-100 to-yellow-50 font-semibold text-2xl" > snacks </h1>
      </div>
      <h1 className="text-3xl font-extrabold text-orange-800 self-start mt-4 ml-4 capitalize" > For you </h1>
      <div className="w-full px-6 mt-4 grid grid-cols-2 gap-y-6 gap-x-2 pb-10" >
        {food.map(
          e => <Foodcard nama={e.name} id={e.id} image={e.gambar.trimEnd()} harga={e.harga} desc={e.description} key={e.id}  />
        )}

      </div>
      <Footer status={"main"} />
    </main>
  );
}

