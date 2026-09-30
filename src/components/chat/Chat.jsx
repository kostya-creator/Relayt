import { useEffect, useState } from "react"

import MobileChat from "./MobileChat"
import TabletChat from "./TabletChat"
import DesktopChat from "./DesktopChat"


const Chat = ({ setIsSidebarOpen }) => {
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth)
        }

        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    return (
        <div>
            {width >= 1024 ? (
               <DesktopChat setIsSidebarOpen={setIsSidebarOpen}/>
                
            ) : width >= 768 ? (
                <TabletChat setIsSidebarOpen={setIsSidebarOpen}/>
            ) : (
                <MobileChat setIsSidebarOpen={setIsSidebarOpen}/>
            )}
        </div>
    )
}

export default Chat