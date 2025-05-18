import { HeroSection } from '@/components/home/hero-section'
import { FeaturedProjects } from '@/components/home/featured-projects'
import { SkillsShowcase } from '@/components/home/skills-showcase'
import { ExperienceOverview } from '@/components/home/experience-overview'
import { LatestPosts } from '@/components/home/latest-posts'
import { ContactCta } from '@/components/home/contact-cta'

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <FeaturedProjects />
      <SkillsShowcase />
      <ExperienceOverview />
      <LatestPosts />
      <ContactCta />
    </div>
  )
}