import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import Navbar from "./components/Navbar"
import CreatePage from "./pages/CreatePage"
import EditPage from "./pages/EditPage"

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-100 font-roboto antialiased">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/:id/edit" element={<EditPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
