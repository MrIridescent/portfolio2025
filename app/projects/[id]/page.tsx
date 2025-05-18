"use client"

import { useParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink, Github } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { projects } from '@/lib/data/projects'

export default function ProjectPage() {
  const params = useParams()
  const project = projects.find(p => p.id === params.id)

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project not found</h1>
          <Button asChild>
            <Link href="/projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Button variant="ghost" asChild className="mb-8">
            <Link href="/projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
          </Button>

          <div className="relative h-[400px] w-full rounded-lg overflow-hidden mb-8">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="flex items-center gap-4 mb-6">
            {<project.icon className="h-8 w-8 text-primary" />}
            <h1 className="text-4xl font-bold">{project.title}</h1>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
            <p className="text-lg text-muted-foreground">{project.overview}</p>
          </div>

          <div className="flex gap-4">
            {project.demoLink && (
              <Button asChild>
                <Link href={project.demoLink} target="_blank">
                  Live Demo
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            )}
            {project.codeLink && (
              <Button variant="outline" asChild>
                <Link href={project.codeLink} target="_blank">
                  View Code
                  <Github className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  )
}