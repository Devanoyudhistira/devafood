import * as motion from "motion/react-client"
import { AnimatePresence } from "motion/react"
import { ForkKnife } from "react-bootstrap-icons"

export default function Logoutprompt({ pending,showcondition, logoutbutton, cancelbutton }) {
    return (
        <AnimatePresence>
            {showcondition &&
                <motion.div className="fixed z-100000 flex justify-center items-center top-0 left-0 w-screen h-screen bg-gray-900/80 " initial={{ scale: 0, opacity: 0 }} exit={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}  >
                    <motion.form className="w-55 h-max px-3 py-2 bg-orange-50 rounded-xl flex flex-col gap-3 items-center justify-center" action={logoutbutton} >
                         <div className="w-20 h-20 rounded-full bg-orange-400 flex flex-col items-center justify-center" >
                            <ForkKnife size={42} className="text-orange-700" />
                         </div>
                            <h1 className="text-xs text-center font-medium" > apakah anda yakin akan membatalkan pesanan dan meninggal kan restaurant devaFood </h1>
                        <motion.button whileTap={{ scale:0.8 }} className="w-full capitalize font-semibold h-max py-2 bg-linear-to-b from-red-700 to-orange-500 rounded-full " disabled={pending} type="submit" > iya </motion.button>
                        <motion.button className="w-full capitalize font-semibold h-max py-2 bg-linear-to-t from-orange-500 to-orange-700 rounded-full" whileTap={{ scale:0.8 }} type="button" onClick={cancelbutton} > batal </motion.button>
                    </motion.form>
                </motion.div>}
        </AnimatePresence>
    )
}