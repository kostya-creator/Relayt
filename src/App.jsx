import { useState } from "react"
import Chat from "./components/Chat"
import SideBar from "./components/SideBar"

const App = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div>
      <SideBar isOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <Chat setIsSidebarOpen={setIsSidebarOpen}  /> 
    </div>
  )
}

export default App
