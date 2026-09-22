import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'

const Chat = ({ setIsSidebarOpen }) => {

  const [message, setMessage] = useState ('')

  return (
    <div>

      {/* Mobile */}
      <div className="md:hidden min-h-screen relative w-full max-w-200 mx-auto p-5">

        <header className="flex justify-between items-center w-full">
          <button onClick={() => setIsSidebarOpen(true)} className="active:bg-secondary transition-all rounded-full h-10 w-10 flex items-center justify-center">
              <span className="material-symbols-outlined text-text text-[28px]">menu_open</span>
          </button>

          <div className="flex items-center">
            <span className="material-symbols-outlined text-text">keyboard_arrow_down</span>
            <span className="text-[24px] font-regular text-text">Gemini</span>
          </div>
       
         <button className="active:bg-secondary transition-all rounded-full h-10 w-10 flex items-center justify-center">
            <span className="material-symbols-outlined text-text">sync</span>
          </button>
        </header>
    
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none pb-20">
           <h1 className="text-[42px] font-medium text-center text-text">How are you <br/> <span className="text-accent">toda<span className="tracking-[4.5px]">y</span><span className="text-[36px] text-text italic font-light">?</span></span></h1>
        </div>

        <div className="absolute bottom-5 z-5 left-5 right-5">
          <div className="flex items-center justify-center text-[18px]">
            <p className="font-normal text-text">Spent: $0.00</p>
          </div>
          <div className=" bg-background rounded-full flex justify-between items-center h-15 pl-3 pr-3 border border-border">          
              <div className="flex items-center justify-center w-full gap-5">
                <span className="material-symbols-outlined text-text">add</span>

                <input value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Ask anything..." className="flex-1 min-w-0 text-[18px] bg-background text-center"/>
              
                <AnimatePresence mode="wait">
                  {message.trim() ? (
                    <motion.div
                      key="send"
                      className="bg-accent w-9 h-9 rounded-full flex items-center justify-center"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.15 }}
                    >
                      <span className="material-symbols-outlined text-[18px] text-text text-2xl!">north</span>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="mic"
                      className="w-9 h-9 flex items-center justify-center"
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
      
      {/* Desktop */}
      <div className="hidden lg:block">
          <header className="fixed flex justify-between items-center w-full p-4 z-5">
          
            <button onClick={() => setIsSidebarOpen(true)} className="rounded-full h-11 w-11 active:bg-secondary transition-all flex items-center justify-center cursor-pointer">
                <span className="material-symbols-outlined text-text text-[28px]">menu_open</span>
            </button>

            <div className="flex gap-5 items-center justify-center">                       
                   
              <button className="rounded-full h-11 w-11 active:bg-secondary-hover transition-all flex items-center justify-center cursor-pointer">
                <span className="material-symbols-outlined text-text">sync</span>
              </button>
            </div>

          </header>

          <div className="max-w-200 mx-auto min-h-screen relative w-full">
            <div className="absolute inset-0 flex justify-center items-center pointer-events-none pb-40">
               <h1 className="text-[70px] font-medium text-center text-text">How are you <span className="text-accent">toda<span className="tracking-[4.5px]">y</span><span className="text-[64px] text-text italic font-light">?</span></span></h1>
            </div>

            <div className="absolute inset-0 flex justify-center items-center pt-6">
              <div className="flex items-center justify-center text-[20px]">
                <p className="hidden font-normal text-text">Spent: $0.00</p>
              </div>
              <div className=" bg-background rounded-full flex justify-between items-center h-15 px-2.5 border border-border w-full">          
                  <div className="flex items-center justify-center w-full gap-2">
                    <span className="material-symbols-outlined text-text">add</span>

                    <input value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Ask anything..." className="bg-background flex-1 min-w-0 text-[18px] text-left translate-x-2"/>

                    <button className="flex items-center justify-center hover:bg-secondary-hover h-10 w-26 rounded-full gap-1">
                      <span className="text-[20px] font-regular text-text">Gemini</span> 
                      <span className="material-symbols-outlined text-[20px]! text-text">keyboard_arrow_down</span>                                   
                    </button>

                    <AnimatePresence mode="wait">
                      {message.trim() ? (
                        <motion.div
                          key="send"
                          className="bg-accent w-9 h-9 rounded-full flex items-center justify-center cursor-pointer"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 20 }}
                          transition={{ duration: 0.15 }}
                        >
                          <span className="material-symbols-outlined text-text text-2xl!">north</span>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="mic"
                          className="w-9 h-9 flex items-center justify-center cursor-pointer"
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
      </div>
    </div>
  )
}

export default Chat