import Wlogo from "../assets/white-logo.png"
import { AnimatePresence, motion } from 'motion/react'

const SideBar = ({isOpen, setIsSidebarOpen}) => {   
    return (
        <AnimatePresence>
            {isOpen && (
            <motion.aside
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="fixed inset-0 h-screen z-10"
            >
                <div className="w-64 h-full bg-background rounded-r-[38px] border border-border p-3 flex flex-col">

                    {/*SideBar logo and top padding (Header)*/}
                    <header className="flex items-center justify-between">
                        <div className="text-[26px] font-semibold text-text">Relayt</div>  
                        <button onClick={() => setIsSidebarOpen(false)} className="flex justify-center items-center active:bg-secondary w-10 h-10 rounded-full transition-all">
                            <span className="material-symbols-outlined text-text !text-[24px]">right_panel_close</span>            
                        </button>
                    </header>

                    <div className="active:bg-secondary my-2 rounded-full transition-all">
                        <div className="w-full flex justify-center m">
                            <a href="#!" className="text-text text-regular text-center text-[18px]">Here needs to be a text</a>
                        </div>
                    </div>

                    <div className="flex justify-between items-center z-15 mt-auto">
                        <div className="bg-accent active:bg-accent-hover w-12 h-12 rounded-full flex items-center justify-center transition-all">
                            <span className="material-symbols-outlined text-[18px] text-text">chat_add_on</span>
                        </div>
                        <div className="active:bg-secondary w-12 h-12 rounded-full flex items-center justify-center transition-all">
                            <span className="material-symbols-outlined text-[18px] text-text">settings</span>
                        </div>
                    </div>

                </div>
            </motion.aside>
            )}
        </AnimatePresence>   
            
    )
   
}

export default SideBar

