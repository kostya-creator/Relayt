import { useEffect, useState } from "react"

import MobileSideBar from "./MobileSideBar"
import TabletSideBar from "./TabletSideBar"
import DesktopSideBar from "./DesktopSideBar"


const SideBar = ({ isOpen, setIsSidebarOpen }) => {
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
                <DesktopSideBar
                    isOpen={isOpen}
                    setIsSidebarOpen={setIsSidebarOpen}
                />
            ) : width >= 768 ? (
                <TabletSideBar
                    isOpen={isOpen}
                    setIsSidebarOpen={setIsSidebarOpen}
                />
            ) : (
                <MobileSideBar
                    isOpen={isOpen}
                    setIsSidebarOpen={setIsSidebarOpen}
                />
            )}
        </div>
    )
}

export default SideBar