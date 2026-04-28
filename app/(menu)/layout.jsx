import { Plus_Jakarta_Sans } from "next/font/google";
import * as motion from "motion/react-client"
import { Search } from "react-bootstrap-icons";
import Link from "next/link";
import { headers } from "next/headers";
import Linknavigate from "../components/home/linkheader";
import { createClient } from "../supabase/server";
import supabase from "../supabase/supabase";
import { redirect } from "next/navigation";
import Orderadd from "../components/flashmessage/orderadd";
import Navbar from "../components/home/navbar";
import { Logout } from "../actions/tableauth";

const jakarta = Plus_Jakarta_Sans({})

export const metadata = {
  title: "Devano food",
  description: "A place that can make your heart happy ",
};

export default async function RootLayout({ children }) {
  const supabaseserver = await createClient()
  const { data } = await supabaseserver.auth.getUser()
  const { data: session } = await supabaseserver.auth.getSession()
  if (!session.session) {
    redirect("/auth")
  }
  const { data: user } = await supabaseserver.auth.getUser()
  const { data: admindata, error: adminerror } = await supabase
    .from("admin")
    .select("id")
    .eq("uuid", user.user.id).single();
  if (admindata) {
    redirect("/admin")
  }
  const userid = data?.user.id
  const { data: tabledata } = await supabase.from("meja").select("nomer_meja").eq("uuid", userid).single()
  return (
    <main className="flex flex-col items-center w-full h-auto pb-18">
      <Navbar logoutbutton={Logout} text={tabledata.nomer_meja} />
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
        <Linknavigate />
      </div>
      <h1 className="text-3xl font-extrabold text-orange-800 self-start mt-4 ml-4 capitalize" > For you </h1>
      {children}
    </main>
  );
}
