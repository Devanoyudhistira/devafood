import Form from "../components/login/form";
import { Loginadmin } from "../actions/auth";

export default function Page() {
    return (
        <main className="w-screen h-screen flex items-center gap-2 justify-center" >
            <Form loginact={Loginadmin} />
        </main>
    )
}