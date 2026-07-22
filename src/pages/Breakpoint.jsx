import ProjectDetail from '../components/ProjectDetail'
import { projects } from '../data/projects'

export default function Breakpoint() {
  const project = projects.find(p => p.id === 'breakpoint')
  return <ProjectDetail project={project} />
}
