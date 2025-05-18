"use client"

import { motion } from 'framer-motion'

export function ExperienceHeader() {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Experience & Education</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            My professional journey in software development, cybersecurity, and business development,
            along with my academic achievements and certifications.
          </p>
        </motion.div>
      </div>
    </section>
  )
}