import { useNavigate } from "react-router-dom"

const DesktopSettings = () => {

    const navigate = useNavigate()

    return (
        <div className="flex flex-col h-full min-h-screen">

            <div className="flex justify-end">                                
                <div className="mt-4 mr-4">
                    <button onClick={() => navigate('/')} className="bg-accent cursor-pointer hover:bg-accent-hover w-11 h-11 rounded-xl flex items-center justify-center"><span className='material-symbols-outlined text-3xl!'>arrow_back</span></button>
                </div>
            </div>

            <div className="flex-1 justify-center items-center flex">
                <div className="grid grid-cols-2 gap-8 w-fit">

                    <div className="group relative bg-background h-80 w-160 rounded-3xl border border-border hover:bg-secondary-hover hover:scale-105 transition-all cursor-pointer duration-300">

                        <div className="flex absolute w-full justify-end p-6">

                            <span className="material-symbols-outlined text-text text-6xl! group-hover:[font-variation-settings:'FILL'_1]! transition-all">build</span>

                        </div>

                        <div className="flex h-full flex-col justify-end items-start pb-8">

                            <div className="pl-6 h-26">
                                <h2 className="text-text font-bold text-[80px]">General</h2>
                            </div>

                            <div className="pl-8">
                                <p className="text-text font-normal text-[20px]">Api, Speed Dia, language, Personalization and etc</p>
                            </div>
                        </div>

                    </div>

                    <div className="relative group bg-background h-80 w-160 rounded-3xl border border-border hover:bg-secondary-hover hover:scale-105 transition-all cursor-pointer duration-300">
                        
                        <div className="flex absolute w-full justify-end p-6">

                            <span className="material-symbols-outlined text-text text-6xl! group-hover:[font-variation-settings:'FILL'_1]! transition-all">backup</span>
                        
                        </div>

                        <div className="flex h-full flex-col justify-end items-start pb-8">

                            <div className="pl-6 h-26">
                                <h2 className="text-text font-bold text-[80px]">Sync</h2>
                            </div>

                            <div className="pl-8">
                                <p className="text-text font-normal text-[20px]">Webdaw and Your Own Server</p>
                            </div>

                        </div>

                

                    </div>

                    <div className="group relative bg-background h-80 w-160 rounded-3xl border border-border hover:bg-secondary-hover hover:scale-105 transition-all cursor-pointer duration-300">
                        

                        <div className="flex absolute w-full justify-end p-6">

                            <span className="material-symbols-outlined text-text text-6xl! group-hover:[font-variation-settings:'FILL'_1]! transition-all">routine</span>
                        
                        </div>

                        <div className="flex h-full flex-col justify-end items-start pb-8">

                            <div className="pl-6 h-26">
                                <h2 className="text-text font-bold text-[80px]">Apperance</h2>
                            </div>

                            <div className="pl-8">
                                <p className="text-text font-normal text-[20px]">Theme, Accent Color and etc</p>
                            </div>
                        </div>
                    </div>

                    <div className="group relative bg-background h-80 w-160 rounded-3xl border border-border hover:bg-secondary-hover hover:scale-105 transition-all cursor-pointer duration-300">

                        <div className="flex absolute w-full justify-end p-6">

                            <span className="material-symbols-outlined text-text text-6xl! group-hover:[font-variation-settings:'FILL'_1]! transition-all">more</span>
                        
                        </div>

                        <div className="flex h-full flex-col justify-end items-start pb-8">                          
                            <div className="pl-6 h-26">
                                <h2 className="text-text font-bold text-[80px]">More</h2>
                            </div>

                            <div className="pl-8">
                                <p className="text-text font-normal text-[20px]">Report a Bug, Donate, Github and About</p>
                            </div>                            
                        </div>                        
                    </div>
                </div>
            </div>

            <div className="text-[16px] flex items-end justify-center mb-3">
                <p className="text-text text-center font-normal">Relayt 0.0.5 / MIT License / Made with ❤️ by @kostya_creator</p>
            </div>
        </div>
    )
}

export default DesktopSettings