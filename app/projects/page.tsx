import { ProjectsHeader } from '@/components/projects/projects-header'
import { ProjectsList } from '@/components/projects/projects-list'

export default function ProjectsPage() {
  return (
    <div className="flex flex-col w-full">
      <ProjectsHeader />
      <ProjectsList />
    </div>
  )
}