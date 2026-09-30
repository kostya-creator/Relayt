import { useNavigate } from "react-router-dom"


const TabletSettings = () => {

    const navigate = useNavigate()

    return (
        <div className="flex flex-col h-full min-h-screen">

            <div className="flex justify-end">                                
                <div className="m-4">
                    <button onClick={() => navigate('/')} className="bg-accent active:bg-accent-hover w-11 h-11 rounded-xl flex items-center justify-center"><span className='material-symbols-outlined text-3xl!'>arrow_back</span></button>
                </div>
            </div>

            <div className="flex-1 flex justify-center items-center">
                <div className="grid grid-cols-2 gap-5 w-fit">

                    <div className="group relative bg-background h-60 w-80 rounded-3xl border border-border active:bg-secondary-hover active:scale-105 transition-all cursor-pointer duration-300">

                        <div className="flex absolute w-full justify-end pt-4 pr-4">

                            <span className="material-symbols-outlined text-text text-5xl! group-active:[font-variation-settings:'FILL'_1]! transition-all">build</span>

                        </div>

                        <div className="flex h-full flex-col justify-end items-start pb-6">

                            <div className="pl-4 h-16">
                                <h2 className="text-text font-bold text-[50px]">General</h2>
                            </div>

                            <div className="pl-5">
                                <p className="text-text font-normal text-[18px]">Api, Personalization and etc</p>
                            </div>
                        </div>

                    </div>

                    <div className="relative group bg-background h-60 w-80 rounded-3xl border border-border active:bg-secondary-hover active:scale-105 transition-all cursor-pointer duration-300">
                    
                        <div className="flex absolute w-full justify-end pt-4 pr-4">

                            <span className="material-symbols-outlined text-text text-5xl! group-active:[font-variation-settings:'FILL'_1]! transition-all">backup</span>
                    
                        </div>

                        <div className="flex h-full flex-col justify-end items-start pb-6">

                            <div className="pl-4 h-16">
                                <h2 className="text-text font-bold text-[50px]">Sync</h2>
                            </div>

                            <div className="pl-5">
                                <p className="text-text font-normal text-[18px]">Webdaw and Your Own Server</p>
                            </div>
                        </div>
                    </div>

                    <div className="group relative bg-background h-60 w-80 rounded-3xl border border-border active:bg-secondary-hover active:scale-105 transition-all cursor-pointer duration-300">
                        <div className="flex absolute w-full justify-end pt-4 pr-4">
                            <span className="material-symbols-outlined text-text text-5xl! group-active:[font-variation-settings:'FILL'_1]! transition-all">routine</span>                   
                        </div>

                        <div className="flex h-full flex-col justify-end items-start pb-6">
                            <div className="pl-4 h-16">
                                <h2 className="text-text font-bold text-[50px]">Apperance</h2>
                            </div>

                            <div className="pl-5">
                                <p className="text-text font-normal text-[18px]">Theme, Accent Color and etc</p>
                            </div>
                        </div>
                    </div>

                    <div className="group relative bg-background h-60 w-80 rounded-3xl border border-border active:bg-secondary-hover active:scale-105 transition-all cursor-pointer duration-300">
                        <div className="flex absolute w-full justify-end pt-4 pr-4">
                            <span className="material-symbols-outlined text-text text-5xl! group-active:[font-variation-settings:'FILL'_1]! transition-all">more</span>                       
                        </div>

                        <div className="flex h-full flex-col justify-end items-start pb-6">                          
                            <div className="pl-4 h-16">
                                <h2 className="text-text font-bold text-[50px]">More</h2>
                            </div>

                            <div className="pl-5">
                                <p className="text-text font-normal text-[18px]">Report a Bug, Donate and etc</p>
                            </div>                            
                        </div>                        
                    </div>
                </div>
            </div>

            <div className="text-[16px] flex items-end mb-3 justify-center">
                <p className="text-text text-center font-normal">Relayt 0.0.5 / MIT License / Made with ❤️ by @kostya_creator</p>
            </div>

        </div>
    )
}

export default TabletSettings
