"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Progress } from '@/components/ui/progress'
import { skills, skillCategories, type SkillCategory } from '@/lib/data/skills'

export function SkillsShowcase() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('frontend')
  
  const filteredSkills = skills.filter(skill => skill.category === activeCategory)
  
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Technical Skills</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My technical expertise spans across various domains including A+, N+, Graphics Design,
            Software Development, Cybersecurity, Ethical Hacking, and Project Management.
          </p>
        </motion.div>
        
        <Tabs 
          defaultValue="frontend" 
          value={activeCategory}
          onValueChange={(value) => setActiveCategory(value as SkillCategory)}
          className="mx-auto"
        >
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-2 md:grid-cols-6 w-full max-w-3xl">
              {skillCategories.map((category) => (
                <TabsTrigger 
                  key={category.value} 
                  value={category.value}
                  className="text-sm md:text-base relative group"
                >
                  {category.label}
                  <motion.span
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: activeCategory === category.value ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          
          {skillCategories.map((category) => (
            <TabsContent 
              key={category.value} 
              value={category.value}
              className="animate-in fade-in-50 duration-300"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 max-w-4xl mx-auto">
                {filteredSkills.map((skill, index) => (
                  <motion.div 
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium group-hover:text-primary transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="relative h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        className="absolute top-0 left-0 h-full bg-primary"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}