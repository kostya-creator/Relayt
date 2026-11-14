import { useState } from "react"
import { AnimatePresence, motion } from 'motion/react'



const Chat = ({ setIsSidebarOpen }) => {

    const [message, setMessage] = useState ('')

    return (
        <div className="h-dvh relative w-full p-5">

            <header className="flex justify-between items-center w-full">
                <button onClick={() => setIsSidebarOpen(true)} className="active:bg-secondary-hover hover:bg-secondary-hover cursor-pointer transition-all rounded-full h-10 w-10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-text">menu_open</span>
                </button>

                <div className="md:hidden flex items-center active:bg-secondary-hover transition-all rounded-3xl px-3 gap-1">
                    <span className="text-[24px] font-regular text-text font-light">Gemini</span>
                    <span className="material-symbols-outlined text-text text-[20px]!">keyboard_arrow_down</span>               
                </div>
            
                <button className="active:bg-secondary-hover hover:bg-secondary-hover cursor-pointer transition-all rounded-full h-10 w-10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-text">sync</span>
                </button>
            </header>
        
            <div className="absolute inset-0 flex justify-center items-center pointer-events-none pb-20 xl:pb-40">
                <h1 className="text-[42px] md:text-[70px] max-w-80 md:max-w-200 leading-12 font-medium text-center text-text">How are you <span className="text-accent">toda<span className="tracking-[4.5px]">y</span><span className="sm:text-[36px] md:text-[64px] text-text italic font-light">?</span></span></h1>
            </div>

            <div className="absolute bottom-5 z-5 left-5 right-5 justify-center xl:inset-103">
                
                <div className="flex items-center justify-center sm:text-[18px] md:text-[20px]">
                    <div className="xl:hidden bg-background rounded-3xl border border-border m-2 px-3 py-1">
                        <p className="font-normal text-text">$0.00 / $0.00</p>
                    </div>
                </div>

                <div className="flex mx-auto max-w-200 bg-background rounded-full justify-between items-center h-15 pl-3 pr-3 border border-border">          
                    <div className="flex items-center justify-center w-full gap-5 md:gap-3">
                        <button className="cursor-pointer flex items-center justify-center hover:bg-secondary-hover active:bg-secondary-hover transition-all rounded-full w-9 h-9">
                            <span className="material-symbols-outlined text-text">add</span>
                        </button>
                        <input value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Ask anything..." className="flex-1 min-w-0 text-[18px] bg-background text-center md:text-left"/>

                        <div className="hidden md:block">
                            <button className="flex items-center justify-center hover:bg-secondary-hover  h-10 w-26 rounded-full gap-1 cursor-pointer transition-all">
                                <span className="text-[20px] font-regular text-text">Gemini</span> 
                                <span className="material-symbols-outlined text-[20px]! text-text">keyboard_arrow_down</span>                                   
                            </button>
                        </div>

                        <AnimatePresence mode="wait">
                        {message.trim() ? (
                            <motion.div
                            key="send"
                            className="bg-accent w-9 h-9 rounded-full flex items-center justify-center cursor-pointer hover:bg-accent-hover active:bg-accent-hover"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.15 }}
                            >
                            <span className="material-symbols-outlined text-[24px]! text-text">north</span>
                            </motion.div>
                        ) : (
                            <motion.div
                            key="mic"
                            className="w-9 h-9 flex items-center justify-center hover:bg-secondary-hover active:bg-secondary-hover cursor-pointer rounded-full"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.15 }}
                            >                           
                            <span className="material-symbols-outlined text-text">mic</span>                            
                            </motion.div>
                        )}
                        </AnimatePresence>
                    </div>     
                </div>
            </div>          
        </div>
    )
}

export default Chat