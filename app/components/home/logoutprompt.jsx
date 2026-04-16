import * as motion from "motion/react-client"
import { AnimatePresence } from "motion/react"

export default function Logoutprompt({ showcondition, logoutbutton, cancelbutton }) {
    return (
        <AnimatePresence>
            {showcondition &&
                <motion.div className="fixed z-100000 flex justify-center items-center top-0 left-0 w-screen h-screen bg-gray-900/80 " initial={{ scale: 0, opacity: 0 }} exit={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}  >
                    <motion.form className="w-max h-max bg-orange-500 rounded-xl flex flex-col gap-3 items-center justify-center" action={logoutbutton} >
                        <h1> apakah anda mau logout </h1>
                        <button type="submit" > yap tepat sekali </button>
                        <button type="button" onClick={cancelbutton} > yap tidak </button>
                    </motion.form>
                </motion.div>}
        </AnimatePresence>
    )
}