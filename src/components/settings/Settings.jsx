import { useNavigate } from "react-router-dom"
import GithubIcon  from "../../assets/github-icon.png"


const Settings = () => {

    const navigate = useNavigate()

    return (
        <div>

            {/* Mobile */}
            <div className="md:hidden m-5">
                <header className="bg-background w-full h-14 flex fixed z-10 top-0 left-0 border-b border-border items-center justify-start">
                    <div className="pl-3">
                        <button onClick={() => navigate('/')} className="bg-accent rounded-full w-9 h-9 flex items-center justify-center active:bg-accent-hover transition-all">
                            <span className="material-symbols-outlined">arrow_back</span>
                        </button>
                    </div>
                </header>

                <main>
                    <div className="mt-18">
                        <div  className="mb-1 mt-6">            
                            <p className="text-[16px] text-text flex items-end justify-center font-normal">General</p>
                        </div>

                        <div className="flex flex-col gap-1 border border-text rounded-[25px] p-1">
                            <button className=" text-[18px] gap-2 w-full font-regular bg-secondary rounded-t-[20px] rounded-b-md h-12 flex items-center justify-center active:bg-secondary-hover transition-all "><span className="material-symbols-outlined text-[24px]!">api</span>Api & Speed Dial</button>
                            <button className=" text-[18px] gap-2 w-full font-regular bg-secondary rounded-md h-12 flex items-center justify-center active:bg-secondary-hover transition-all "><span className="material-symbols-outlined text-[24px]!">for_you</span>Personalization</button>
                            <button className=" text-[18px] gap-2 w-full font-regular bg-secondary rounded-md h-12 flex items-center justify-center active:bg-secondary-hover transition-all "><span className="material-symbols-outlined text-[24px]!">browse</span>Web Search</button>
                            <button className=" text-[18px] gap-2 w-full font-regular bg-secondary rounded-md h-12 flex items-center justify-center active:bg-secondary-hover transition-all "><span className="material-symbols-outlined text-[24px]!">language</span>Language</button>
                            <button className=" text-[18px] gap-2 w-full font-regular bg-secondary rounded-b-[20px] rounded-t-md h-12 flex items-center justify-center active:bg-secondary-hover transition-all "><span className="material-symbols-outlined text-[24px]!">book_ribbon</span>Memory</button>
                        </div>
                   </div>

                   <div className="mt-3">
                        <div  className="mb-1 mt-6">            
                            <p className="text-[16px] text-text flex items-end justify-center font-normal">Apperance</p>
                        </div>

                        <div className="flex flex-col gap-1 border border-text rounded-[25px] p-1">
                            <button className=" text-[18px] gap-2 w-full font-regular bg-secondary rounded-t-[20px] rounded-b-md h-12 flex items-center justify-center active:bg-secondary-hover transition-all "><span className="material-symbols-outlined text-[24px]!">light_mode</span>Theme & Сorrection</button>
                            <button className=" text-[18px] gap-2 w-full font-regular bg-secondary rounded-b-[20px] rounded-t-md h-12 flex items-center justify-center active:bg-secondary-hover transition-all "><span className="material-symbols-outlined text-[24px]!">palette</span>Accent Color</button>
                        </div>
                   </div>

                    <div className="mt-3">
                        <div  className="mb-1 mt-6">            
                            <p className="text-[16px] text-text flex items-end justify-center font-normal">Sync</p>
                        </div>

                        <div className="flex flex-col gap-1 border border-text rounded-[25px] p-1">
                            <button className=" text-[18px] gap-2 w-full font-regular bg-secondary rounded-t-[20px] rounded-b-md h-12 flex items-center justify-center active:bg-secondary-hover transition-all "><span className="material-symbols-outlined text-[24px]!">database_upload</span>Your Own Server</button>
                            <button className=" text-[18px] gap-2 w-full font-regular bg-secondary rounded-b-[20px] rounded-t-md h-12 flex items-center justify-center active:bg-secondary-hover transition-all "><span className="material-symbols-outlined text-[24px]!">cloud_sync</span>WebDaw</button>
                        </div>
                   </div>

                   <div className="mt-3">
                        <div className="mb-1 mt-6">            
                            <p className="text-[16px] text-text flex items-end justify-center font-normal">More</p>
                        </div>

                        <div className="flex flex-col gap-1 border border-text rounded-[25px] p-1">
                            <button className=" text-[18px] gap-2 w-full font-regular bg-secondary rounded-t-[20px] rounded-b-md h-12 flex items-center justify-center active:bg-secondary-hover transition-all "><span className="material-symbols-outlined text-[24px]!">update</span>Check For Updates</button>
                            <button className=" text-[18px] gap-2 w-full font-regular bg-secondary rounded-md h-12 flex items-center justify-center active:bg-secondary-hover transition-all "><span className="material-symbols-outlined text-[24px]!">bug_report</span>Report a Bug</button>
                            <button className=" text-[18px] gap-2 w-full font-regular bg-secondary rounded-md h-12 flex items-center justify-center active:bg-secondary-hover transition-all "><span className="material-symbols-outlined text-[24px]!">volunteer_activism</span>Donate</button>
                            <button className=" text-[18px] gap-2 w-full font-regular bg-secondary rounded-md h-12 flex items-center justify-center active:bg-secondary-hover transition-all "><img src= {GithubIcon} className="h-7 w-7" />Github</button>
                            <button className=" text-[18px] gap-2 w-full font-regular bg-secondary rounded-b-[20px] rounded-t-md h-12 flex items-center justify-center active:bg-secondary-hover transition-all "><span className="material-symbols-outlined text-[24px]!">info</span>About</button>
                        </div>
                   </div>
            
                    <div className="text-[16px] mt-10 flex items-center justify-center">
                        <p className="text-text text-center font-normal">Relayt 0.0.3 / MIT License <br/> Made with ❤️ by @kostya_creator</p>
                    </div>
                </main>
            </div>

            {/*Desktop*/}
            <div className="hidden lg:block">

                <div className="flex justify-end">                                
                    <div className="m-4">
                        <button onClick={() => navigate('/')} className="bg-accent cursor-pointer hover:bg-accent-hover w-11 h-11 rounded-md flex items-center justify-center"><span className='material-symbols-outlined text-3xl!'>arrow_back</span></button>
                    </div>
                </div>

                <div className="flex items-center justify-center m-10">

                    <div className="bg-background h-90 w-180 rounded-3xl border border-border hover:bg-secondary-hover hover:scale-105 transition-all cursor-pointer duration-300">
                        
                        <div className="flex h-full flex-col justify-end items-start pb-8">

                            <div className="pl-6 h-25">
                                <h2 className="text-text font-bold text-[80px]">General</h2>
                            </div>

                            <div className="pl-8">
                                <p className="text-text font-normal text-[20px]">Api, Speed Dia, language, Personalization, Web Search, Memory</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Settings