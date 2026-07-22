import { useState } from 'react'
import { projects, categories, skills } from '../data/projects'
import ProjectCard from '../components/ProjectCard'
import SkillBadge from '../components/SkillBadge'
import './Home.css'

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.category === activeCategory)

  return (
    <div className="home">
      {/* Hero */}
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-content">
            <p className="hero-greeting">Hi, I'm</p>
            <h1 className="hero-name">Ritabrata Dutta</h1>
            <p className="hero-tagline">Student <span className="hero-sep">|</span> Programmer <span className="hero-sep">|</span> Future Innovator</p>
            <p className="hero-desc">
              2nd-year B.Tech CSE at Adamas University. I build things from scratch — not to skip the learning curve,
              but because understanding the internals <em>is</em> the point.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">Explore My Work</a>
              <a href="#contact" className="btn btn-outline">Get in Touch</a>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-image-frame">
              <img src="/portfolio/images/me.jpeg" alt="Ritabrata Dutta" />
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">A bit about my background and what drives me.</p>
          <div className="about-content">
            <div className="about-text">
              <p>
                I'm a 20-year-old Computer Science student at Adamas University, West Bengal, with a deep curiosity
                for how software works under the hood. My journey started 3 years ago with Python, and I've since
                explored C, C++, Java, web frameworks, data science, and application security.
              </p>
              <p>
                I'm headed toward a Master's and a PhD. The goal is depth — whether that's in distributed systems,
                security research, or machine learning theory.
              </p>
              <p>
                When I'm not coding, you'll find me on Arch Linux (Hyprland) or contributing to my GitHub.
              </p>
            </div>
            <div className="about-skills">
              <h3>Skills & Tools</h3>
              <div className="about-skills-grid">
                {skills.map(skill => (
                  <SkillBadge key={skill.name} name={skill.name} category={skill.category} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section">
        <div className="container">
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">A curated selection of things I've built.</p>

          <div className="projects-filter">
            {categories.map(cat => (
              <button
                key={cat.id}
                className={`projects-filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="projects-grid">
            {filteredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section">
        <div className="container">
          <div className="contact-card">
            <h2 className="contact-title">Get in Touch</h2>
            <p className="contact-desc">
              I'm always open to interesting conversations, collaboration opportunities, or just a friendly chat.
            </p>
            <div className="contact-links">
              <a href="mailto:ritabratadutta1234@zohomail.in" className="btn btn-primary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                Email Me
              </a>
              <a href="https://github.com/RitabrataDutta01" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/ritabrata-dutta-0a0077320/" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
