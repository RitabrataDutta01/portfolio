import ProjectDetail from '../components/ProjectDetail'
import { projects } from '../data/projects'

export default function NeetCode() {
  const project = projects.find(p => p.id === 'neetcode')
  return <ProjectDetail project={project} />
}
