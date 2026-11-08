import { AnimatePresence, motion } from 'motion/react'
import { Link } from 'react-router-dom'

const SideBar = ({ isOpen, setIsSidebarOpen }) => {

    return (

        <AnimatePresence>
            {isOpen && (
            <aside className="fixed inset-0 h-dvh z-10">

                <motion.div 
                    onClick={() => setIsSidebarOpen(false)} 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="absolute inset-0 bg-background/70 backdrop-blur-xs z-0" 
                />

                <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "-100%" }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="relative w-64 h-full bg-background border-r border-border p-3 flex flex-col z-10"
                >
                    {/*SideBar logo and top padding (Header)*/}
                    <header className="flex items-center justify-between">
                        <div className="text-[26px] font-semibold text-text">Relayt</div>  
                        <button onClick={() => setIsSidebarOpen(false)} className="flex justify-center items-center hover:bg-secondary-hover active:bg-secondary-hover w-10 h-10 rounded-full transition-all cursor-pointer">
                            <span className="material-symbols-outlined text-text text-[24px]!">close</span>            
                        </button>
                    </header>

                    <div className="active:bg-secondary-hover hover:bg-secondary-hover my-2 rounded-full transition-all">
                        <div className="w-full flex justify-center m">
                            <a href="#!" className="text-text text-regular text-center text-[18px]">Here needs to be a text</a>
                        </div>
                    </div>

                    <div className="flex justify-between items-center z-15 mt-auto">
                        <div onClick={() => setIsSidebarOpen(false)} className="bg-accent hover:bg-accent-hover active:bg-accent-hover w-12 h-12 rounded-full flex items-center justify-center transition-all cursor-pointer">
                            <span className="material-symbols-outlined text-[18px] text-text">chat_add_on</span>
                        </div>
                        <Link to="/settings" onClick={() => setIsSidebarOpen(false)} className="active:bg-secondary-hover hover:bg-secondary-hover w-12 h-12 rounded-full flex items-center justify-center transition-all">
                            <span className="material-symbols-outlined text-[18px] text-text">settings</span>
                        </Link>
                    </div>
                </motion.div>
            </aside>
            )}
        </AnimatePresence>
    )
}  

export default SideBar