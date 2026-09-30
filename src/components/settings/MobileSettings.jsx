import { useNavigate } from "react-router-dom"
import GithubIcon  from "../../assets/github-icon.png"

const MobileSettings = () => {

    const navigate = useNavigate()

    return (
        <div className="mx-4 mb-4">
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

                    <div className="flex flex-col gap-1 border border-border rounded-[25px] p-1">
                        <button className=" text-[18px] gap-2 w-full font-regular bg-background border border-border rounded-t-[20px] rounded-b-md h-12 flex items-center justify-center active:bg-secondary transition-all "><span className="material-symbols-outlined text-[24px]!">api</span>Api & Speed Dial</button>
                        <button className=" text-[18px] gap-2 w-full font-regular bg-background border border-border rounded-md h-12 flex items-center justify-center active:bg-secondary transition-all "><span className="material-symbols-outlined text-[24px]!">for_you</span>Personalization</button>
                        <button className=" text-[18px] gap-2 w-full font-regular bg-background border border-border rounded-md h-12 flex items-center justify-center active:bg-secondary transition-all "><span className="material-symbols-outlined text-[24px]!">browse</span>Web Search</button>
                        <button className=" text-[18px] gap-2 w-full font-regular bg-background border border-border rounded-md h-12 flex items-center justify-center active:bg-secondary transition-all "><span className="material-symbols-outlined text-[24px]!">language</span>Language</button>
                        <button className=" text-[18px] gap-2 w-full font-regular bg-background border border-border rounded-b-[20px] rounded-t-md h-12 flex items-center justify-center active:bg-secondary transition-all "><span className="material-symbols-outlined text-[24px]!">book_ribbon</span>Memory</button>
                    </div>
                </div>

                <div className="mt-3">
                    <div  className="mb-1 mt-6">            
                        <p className="text-[16px] text-text flex items-end justify-center font-normal">Apperance</p>
                    </div>

                    <div className="flex flex-col gap-1 border border-border rounded-[25px] p-1">
                        <button className=" text-[18px] gap-2 w-full font-regular bg-background border border-border rounded-t-[20px] rounded-b-md h-12 flex items-center justify-center active:bg-secondary transition-all "><span className="material-symbols-outlined text-[24px]!">light_mode</span>Theme & Сorrection</button>
                        <button className=" text-[18px] gap-2 w-full font-regular bg-background border border-border rounded-b-[20px] rounded-t-md h-12 flex items-center justify-center active:bg-secondary transition-all "><span className="material-symbols-outlined text-[24px]!">palette</span>Accent Color</button>
                    </div>
                </div>

                <div className="mt-3">
                    <div  className="mb-1 mt-6">            
                        <p className="text-[16px] text-text flex items-end justify-center font-normal">Sync</p>
                    </div>

                    <div className="flex flex-col gap-1 border border-border rounded-[25px] p-1">
                        <button className=" text-[18px] gap-2 w-full font-regular bg-background border border-border rounded-t-[20px] rounded-b-md h-12 flex items-center justify-center active:bg-secondary transition-all "><span className="material-symbols-outlined text-[24px]!">database_upload</span>Your Own Server</button>
                        <button className=" text-[18px] gap-2 w-full font-regular bg-background border border-border rounded-b-[20px] rounded-t-md h-12 flex items-center justify-center active:bg-secondary transition-all "><span className="material-symbols-outlined text-[24px]!">cloud_sync</span>WebDaw</button>
                    </div>
                </div>

                <div className="mt-3">
                    <div className="mb-1 mt-6">            
                        <p className="text-[16px] text-text flex items-end justify-center font-normal">More</p>
                    </div>

                    <div className="flex flex-col gap-1 border border-border rounded-[25px] p-1">
                        <button className=" text-[18px] gap-2 w-full font-regular bg-background border border-border rounded-t-[20px] rounded-b-md h-12 flex items-center justify-center active:bg-secondary transition-all "><span className="material-symbols-outlined text-[24px]!">update</span>Check For Updates</button>
                        <button className=" text-[18px] gap-2 w-full font-regular bg-background border border-border rounded-md h-12 flex items-center justify-center active:bg-secondary transition-all "><span className="material-symbols-outlined text-[24px]!">bug_report</span>Report a Bug</button>
                        <button className=" text-[18px] gap-2 w-full font-regular bg-background border border-border rounded-md h-12 flex items-center justify-center active:bg-secondary transition-all "><span className="material-symbols-outlined text-[24px]!">volunteer_activism</span>Donate</button>
                        <button className=" text-[18px] gap-2 w-full font-regular bg-background border border-border rounded-md h-12 flex items-center justify-center active:bg-secondary transition-all "><img src= {GithubIcon} className="h-7 w-7" />Github</button>
                        <button className=" text-[18px] gap-2 w-full font-regular bg-background border border-border rounded-b-[20px] rounded-t-md h-12 flex items-center justify-center active:bg-secondary transition-all "><span className="material-symbols-outlined text-[24px]!">info</span>About</button>
                    </div>
                </div>

                <div className="text-[16px] mt-10 flex items-center justify-center">
                    <p className="text-text text-center font-normal">Relayt 0.0.5/ MIT License <br/> Made with ❤️ by @kostya_creator</p>
                </div>
            </main>
        </div>
    )
}

export default MobileSettings 
