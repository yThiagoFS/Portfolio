import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from "./pages/Home"
import { Projects } from "./pages/Projects"
import Galaxy from "./Galaxy"
import './App.scss'

export default function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Projects" element={<Projects />}></Route>
      </Routes>
    </BrowserRouter>

    <Galaxy/>
    </>
  )
}


