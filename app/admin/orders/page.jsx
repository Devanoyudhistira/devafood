import Recipientpage from "@/app/components/recipient/recipientpage";
import supabase from "@/app/supabase/supabase";

export default async function Page(){
    const {data:recipient} = await supabase.from("recipient").select("*,meja(nomer_meja)").eq("status","waiting")    
    return(
    <>
    <Recipientpage initialData={recipient} />
    </>)
}