import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import Crucible from './pages/Crucible'
import VibeForge from './pages/VibeForge'
import Breakpoint from './pages/Breakpoint'
import NeetCode from './pages/NeetCode'
import EDAProjects from './pages/EDAProjects'
import PythonApps from './pages/PythonApps'
import FlaskPDF from './pages/FlaskPDF'
import './App.css'

export default function App() {
  return (
    <div className="app">
      <Nav />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/crucible" element={<Crucible />} />
          <Route path="/vibeforge" element={<VibeForge />} />
          <Route path="/breakpoint" element={<Breakpoint />} />
          <Route path="/neetcode" element={<NeetCode />} />
          <Route path="/eda-projects" element={<EDAProjects />} />
          <Route path="/python-apps" element={<PythonApps />} />
          <Route path="/flask-pdf-tool" element={<FlaskPDF />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
