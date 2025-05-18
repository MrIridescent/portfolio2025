"use client"

import { motion } from 'framer-motion'

export function ProjectsHeader() {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">My Projects</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A showcase of my work in software development, cloud architecture, and cybersecurity. 
            Each project represents a unique challenge and innovative solution.
          </p>
        </motion.div>
      </div>
    </section>
  )
}