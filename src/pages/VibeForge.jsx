import ProjectDetail from '../components/ProjectDetail'
import { projects } from '../data/projects'

export default function VibeForge() {
  const project = projects.find(p => p.id === 'vibeforge')
  return <ProjectDetail project={project} />
}
