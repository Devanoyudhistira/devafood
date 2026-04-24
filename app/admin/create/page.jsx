import Crudform from "@/app/components/admincrud/crudform";
import { createfood } from "@/app/actions/foodcrud";

export default function Createpage(){
    return(
        <Crudform formact={createfood} />
    )
}