import { ExperienceHeader } from '@/components/experience/experience-header'
import { ExperienceTimeline } from '@/components/experience/experience-timeline'
import { EducationTimeline } from '@/components/experience/education-timeline'

export default function ExperiencePage() {
  return (
    <div className="flex flex-col w-full">
      <ExperienceHeader />
      <ExperienceTimeline />
      <EducationTimeline />
    </div>
  )
}