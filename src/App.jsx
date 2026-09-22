import { useState } from "react"
import Chat from "./components/Chat"
import SideBar from "./components/sidebar/SideBar"
import Settings from "./components/settings/Settings"
import { BrowserRouter, Route, Routes } from "react-router-dom"

const App = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Chat setIsSidebarOpen={setIsSidebarOpen} /> } />
          <Route path="/settings" element={<Settings/> } />
        </Routes>

        <SideBar isOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

      </BrowserRouter>
  )
}

export default App
