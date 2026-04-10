import * as motion from "motion/react-client"
import { Bag } from "react-bootstrap-icons"
import { ForkKnife } from "react-bootstrap-icons"
export default function Optiondinner() {
    return (
        <div>
            <motion.div className="w-full h-50 rounded-2xl border-orange-600 border-3 px-4 py-2 bg-white flex flex-col justify-center" >
                <div className="gap-12 flex flex-col" >
                    <div className="p-3 bg-orange-500 rounded-full text-4xl w-min h-min text-orange-900" > <ForkKnife /> </div>
                    <h1 className={`text-xl font-bold text-orange-800`} >Makan disini</h1>
                </div>
            </motion.div>
            <motion.div className="w-full h-50 rounded-2xl mt-4 px-4 py-2 bg-orange-100 flex flex-col justify-center" >
                <div className="gap-12 flex flex-col justify-between items-stretch" >
                    <div className="p-3 bg-gray-200 rounded-full text-4xl w-min h-min text-gray-900" > <Bag/> </div>
                    <h1 className={`text-xl font-extrabold text-orange-800`} >Di bawa pulang</h1> 
                </div>
            </motion.div>
        </div>
    )
}