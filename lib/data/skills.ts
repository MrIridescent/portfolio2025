export type SkillCategory = 'frontend' | 'backend' | 'devops' | 'security' | 'tools' | 'certifications' | 'management'

export type Skill = {
  name: string
  level: number
  category: SkillCategory
  icon?: string
}

export const skills: Skill[] = [
  // Frontend
  { name: 'React', level: 95, category: 'frontend' },
  { name: 'TypeScript', level: 90, category: 'frontend' },
  { name: 'Next.js', level: 90, category: 'frontend' },
  { name: 'CSS/Tailwind', level: 85, category: 'frontend' },
  { name: 'UI/UX Design', level: 85, category: 'frontend' },
  { name: 'Graphics Design', level: 80, category: 'frontend' },
  
  // Backend
  { name: 'Node.js', level: 90, category: 'backend' },
  { name: 'Python', level: 85, category: 'backend' },
  { name: 'GraphQL', level: 80, category: 'backend' },
  { name: 'REST APIs', level: 90, category: 'backend' },
  { name: 'PostgreSQL', level: 85, category: 'backend' },
  { name: 'MongoDB', level: 80, category: 'backend' },
  
  // DevOps
  { name: 'Docker', level: 85, category: 'devops' },
  { name: 'Kubernetes', level: 80, category: 'devops' },
  { name: 'AWS', level: 85, category: 'devops' },
  { name: 'CI/CD', level: 80, category: 'devops' },
  { name: 'Terraform', level: 75, category: 'devops' },
  
  // Security
  { name: 'Ethical Hacking', level: 90, category: 'security' },
  { name: 'Penetration Testing', level: 90, category: 'security' },
  { name: 'OWASP', level: 85, category: 'security' },
  { name: 'Security Auditing', level: 85, category: 'security' },
  { name: 'Network Security', level: 85, category: 'security' },
  
  // Certifications
  { name: 'CompTIA A+', level: 100, category: 'certifications' },
  { name: 'CompTIA N+', level: 100, category: 'certifications' },
  { name: 'CEH', level: 100, category: 'certifications' },
  { name: 'CISSP', level: 90, category: 'certifications' },
  
  // Management
  { name: 'Project Management', level: 90, category: 'management' },
  { name: 'Business Development', level: 85, category: 'management' },
  { name: 'Team Leadership', level: 90, category: 'management' },
  { name: 'Agile/Scrum', level: 85, category: 'management' }
]

export const skillCategories = [
  { value: 'frontend', label: 'Frontend' },
  { value: 'backend', label: 'Backend' },
  { value: 'security', label: 'Security' },
  { value: 'certifications', label: 'Certifications' },
  { value: 'management', label: 'Management' },
  { value: 'devops', label: 'DevOps' }
]