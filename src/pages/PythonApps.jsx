import ProjectDetail from '../components/ProjectDetail'
import { projects } from '../data/projects'

export default function PythonApps() {
  const project = projects.find(p => p.id === 'python-apps')
  return <ProjectDetail project={project} />
}
