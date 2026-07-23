import ProjectDetail from '../components/ProjectDetail'
import { projects } from '../data/projects'

export default function DistKV() {
  const project = projects.find(p => p.id === 'distkv')
  return <ProjectDetail project={project} />
}
