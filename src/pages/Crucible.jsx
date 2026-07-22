import ProjectDetail from '../components/ProjectDetail'
import { projects } from '../data/projects'

export default function Crucible() {
  const project = projects.find(p => p.id === 'crucible')
  return <ProjectDetail project={project} />
}
