import { useEffect, useState } from "react"

import MobileSettings from "./MobileSettings"
import TabletSettings from "./TabletSettings"
import DesktopSettings from "./DesktopSettings"


const Settings = () => {
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
               <DesktopSettings/>
                
            ) : width >= 768 ? (
                <TabletSettings/>
            ) : (
                <MobileSettings/>
            )}
        </div>
    )
}

export default Settings