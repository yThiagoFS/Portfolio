import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from "./pages/Home"
import { Projects } from "./pages/Projects"
import './App.scss'
import { Themes } from './components/Theme'

export default function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={
              <Themes>
                <Home />
              </Themes>
             }>
          </Route>

          <Route path="/Projects" element={
              <Themes>
                <Projects />
              </Themes>
            }>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}


