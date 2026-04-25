import Crudform from "@/app/components/admincrud/crudform";
import { createfood } from "@/app/actions/foodcrud";

export default function Createpage() {
    return (
        <div className="w-screen px-4 " >
            <Crudform formact={createfood} />
        </div>
    )
}