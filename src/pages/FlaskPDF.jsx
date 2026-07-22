import ProjectDetail from '../components/ProjectDetail'
import { projects } from '../data/projects'

export default function FlaskPDF() {
  const project = projects.find(p => p.id === 'flask-pdf-tool')
  return <ProjectDetail project={project} />
}
