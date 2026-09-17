import { useNavigate } from "react-router-dom"
import GithubIcon  from "../../assets/github-icon.png"


const Settings = () => {

    const navigate = useNavigate()

    return (       
        <div className="m-5">

            <header className="flex items-start justify-start fixed z-10 top-5 left-5">
                <button onClick={() => navigate('/')} className="bg-accent rounded-full w-9 h-9 flex items-center justify-center active:bg-accent-hover transition-all">
                    <span className="material-symbols-outlined">arrow_back</span>
                </button>
            </header>

            <main>
                <div className="mt-18">
                    <div  className="mb-1 mt-6">            
                        <p className="text-[16px] text-secondary-hover flex items-end justify-center">General</p>
                    </div>

                    <div className="flex flex-col gap-1 border border-text rounded-[25px] p-1">
                        <button className=" text-[18px] gap-2 w-full font-regular bg-secondary rounded-t-3xl rounded-b-md h-12 flex items-center justify-center active:bg-secondary-hover transition-all "><span className="material-symbols-outlined text-[24px]!">api</span>Api & Speed Dial</button>
                        <button className=" text-[18px] gap-2 w-full font-regular bg-secondary rounded-md h-12 flex items-center justify-center active:bg-secondary-hover transition-all "><span className="material-symbols-outlined text-[24px]!">for_you</span>Personalization</button>
                        <button className=" text-[18px] gap-2 w-full font-regular bg-secondary rounded-md h-12 flex items-center justify-center active:bg-secondary-hover transition-all "><span className="material-symbols-outlined text-[24px]!">browse</span>Web Search</button>
                        <button className=" text-[18px] gap-2 w-full font-regular bg-secondary rounded-md h-12 flex items-center justify-center active:bg-secondary-hover transition-all "><span className="material-symbols-outlined text-[24px]!">language</span>Language</button>
                        <button className=" text-[18px] gap-2 w-full font-regular bg-secondary rounded-b-3xl rounded-t-md h-12 flex items-center justify-center active:bg-secondary-hover transition-all "><span className="material-symbols-outlined text-[24px]!">book_ribbon</span>Memory</button>
                    </div>
               </div>

               <div className="mt-3">
                    <div  className="mb-1 mt-6">            
                        <p className="text-[16px] text-secondary-hover flex items-end justify-center font-light">Apperance</p>
                    </div>

                    <div className="flex flex-col gap-1 border border-text rounded-[25px] p-1">
                        <button className=" text-[18px] gap-2 w-full font-regular bg-secondary rounded-t-3xl rounded-b-md h-12 flex items-center justify-center active:bg-secondary-hover transition-all "><span className="material-symbols-outlined text-[24px]!">light_mode</span>Theme & Сorrection</button>
                        <button className=" text-[18px] gap-2 w-full font-regular bg-secondary rounded-b-3xl rounded-t-md h-12 flex items-center justify-center active:bg-secondary-hover transition-all "><span className="material-symbols-outlined text-[24px]!">palette</span>Accent Color</button>
                    </div>
               </div>

                <div className="mt-3">
                    <div  className="mb-1 mt-6">            
                        <p className="text-[16px] text-secondary-hover flex items-end justify-center font-light">Sync</p>
                    </div>

                    <div className="flex flex-col gap-1 border border-text rounded-[25px] p-1">
                        <button className=" text-[18px] gap-2 w-full font-regular bg-secondary rounded-t-3xl rounded-b-md h-12 flex items-center justify-center active:bg-secondary-hover transition-all "><span className="material-symbols-outlined text-[24px]!">database_upload</span>Your Own Server</button>
                        <button className=" text-[18px] gap-2 w-full font-regular bg-secondary rounded-b-3xl rounded-t-md h-12 flex items-center justify-center active:bg-secondary-hover transition-all "><span className="material-symbols-outlined text-[24px]!">cloud_sync</span>WebDaw</button>
                    </div>
               </div>

               <div className="mt-3">
                    <div className="mb-1 mt-6">            
                        <p className="text-[16px] text-secondary-hover flex items-end justify-center">More</p>
                    </div>

                    <div className="flex flex-col gap-1 border border-text rounded-[25px] p-1">
                        <button className=" text-[18px] gap-2 w-full font-regular bg-secondary rounded-t-3xl rounded-b-md h-12 flex items-center justify-center active:bg-secondary-hover transition-all "><span className="material-symbols-outlined text-[24px]!">update</span>Check For Updates</button>
                        <button className=" text-[18px] gap-2 w-full font-regular bg-secondary rounded-md h-12 flex items-center justify-center active:bg-secondary-hover transition-all "><span className="material-symbols-outlined text-[24px]!">bug_report</span>Report a Bug</button>
                        <button className=" text-[18px] gap-2 w-full font-regular bg-secondary rounded-md h-12 flex items-center justify-center active:bg-secondary-hover transition-all "><span className="material-symbols-outlined text-[24px]!">volunteer_activism</span>Donate</button>
                        <button className=" text-[18px] gap-2 w-full font-regular bg-secondary rounded-md h-12 flex items-center justify-center active:bg-secondary-hover transition-all "><img src= {GithubIcon} className="h-6 w-6" />Github</button>
                        <button className=" text-[18px] gap-2 w-full font-regular bg-secondary rounded-b-3xl rounded-t-md h-12 flex items-center justify-center active:bg-secondary-hover transition-all "><span className="material-symbols-outlined text-[24px]!">info</span>About</button>
                    </div>
               </div>
            
                <div className="text-[16px] mt-10 flex items-center justify-center">
                    <p className="text-secondary-hover text-center font-light">Relayt 0.0.3 / MIT License <br/> Made with ❤️ by kostya_creator</p>
                </div>
            </main>
        </div>
    )
}

export default Settings