import { Link, useLocation } from 'react-router-dom'
import './Nav.css'

const navLinks = [
  { path: '/', label: 'Home', section: true },
  { path: '/', label: 'Projects', hash: '#projects', section: true },
]

export default function Nav() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <nav className="nav">
      <div className="nav-inner container">
        <Link to="/" className="nav-logo">RD</Link>
        <div className="nav-links">
          {isHome ? (
            <>
              <a href="#about" className="nav-link">About</a>
              <a href="#projects" className="nav-link">Projects</a>
              <a href="#contact" className="nav-link">Contact</a>
            </>
          ) : (
            <>
              <Link to="/" className="nav-link">Home</Link>
              <a
                href={`${import.meta.env.BASE_URL}#/`}
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault()
                  window.location.hash = '#/'
                }}
              >
                Projects
              </a>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}
