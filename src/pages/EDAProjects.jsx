import ProjectDetail from '../components/ProjectDetail'
import { projects } from '../data/projects'

export default function EDAProjects() {
  const project = projects.find(p => p.id === 'eda-projects')
  return <ProjectDetail project={project} />
}
