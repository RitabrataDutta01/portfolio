import { Link } from 'react-router-dom'
import './ProjectCard.css'

export default function ProjectCard({ project }) {
  const catColors = {
    security: '#f87171',
    web: '#38bdf8',
    desktop: '#a78bfa',
    ml: '#4ade80',
    dsa: '#fbbf24',
  }

  return (
    <Link to={`/${project.id}`} className="project-card">
      <div className="project-card-header">
        <span className="project-card-category" style={{ background: catColors[project.category] || 'var(--accent)' }}>
          {project.category}
        </span>
        {project.stars > 0 && (
          <span className="project-card-stars">★ {project.stars}</span>
        )}
      </div>
      <div className="project-card-body">
        <h3 className="project-card-title">{project.title}</h3>
        <p className="project-card-tagline">{project.tagline}</p>
        <p className="project-card-desc">{project.shortDesc}</p>
      </div>
      <div className="project-card-footer">
        <div className="project-card-tags">
          {project.techStack.slice(0, 4).map(tech => (
            <span key={tech} className="tag">{tech}</span>
          ))}
          {project.techStack.length > 4 && (
            <span className="tag">+{project.techStack.length - 4}</span>
          )}
        </div>
        <span className="project-card-arrow">→</span>
      </div>
    </Link>
  )
}
