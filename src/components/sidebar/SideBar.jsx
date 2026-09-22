import { useEffect, useState } from "react"

import MobileSideBar from "./MobileSideBar"
import DesktopSideBar from "./DesktopSideBar"

const SideBar = ({ isOpen, setIsSidebarOpen }) => {
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024)

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 1024)
        }

        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    return (
        <div>
            {isDesktop ? (
                <DesktopSideBar
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
