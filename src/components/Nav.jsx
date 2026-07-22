import { Link, useLocation } from 'react-router-dom'
import './Nav.css'

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

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
              <button className="nav-link" onClick={() => scrollTo('about')}>About</button>
              <button className="nav-link" onClick={() => scrollTo('projects')}>Projects</button>
              <button className="nav-link" onClick={() => scrollTo('contact')}>Contact</button>
            </>
          ) : (
            <>
              <Link to="/" className="nav-link">Home</Link>
              <Link to="/" className="nav-link">Projects</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}
