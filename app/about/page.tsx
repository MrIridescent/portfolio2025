import { AboutHero } from '@/components/about/about-hero'
import { AboutTimeline } from '@/components/about/about-timeline'
import { AboutSkills } from '@/components/about/about-skills'

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      <AboutHero />
      <AboutTimeline />
      <AboutSkills />
    </div>
  )
}