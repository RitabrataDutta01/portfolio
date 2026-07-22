import './SkillBadge.css'

const categoryColors = {
  language: '#f87171',
  framework: '#38bdf8',
  ml: '#4ade80',
  database: '#fbbf24',
  tool: '#a78bfa',
  ai: '#f472b6',
  os: '#9ca3af',
}

export default function SkillBadge({ name, category }) {
  const color = categoryColors[category] || '#6b6b80'

  return (
    <span className="skill-badge" style={{ '--badge-color': color }}>
      <span className="skill-badge-dot" style={{ background: color }} />
      {name}
    </span>
  )
}
