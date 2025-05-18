"use client"

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight, FileText, Code, Shield, Layers } from 'lucide-react'
import Link from 'next/link'
import { motion, useAnimation } from 'framer-motion'

export function HeroSection() {
  const [typedText, setTypedText] = useState('')
  const textToType = 'Full-Stack Developer. Software Engineer. Cybersecurity Professional.'
  const typingSpeed = 70
  const controls = useAnimation()

  useEffect(() => {
    let charIndex = 0
    const typingInterval = setInterval(() => {
      if (charIndex <= textToType.length) {
        setTypedText(textToType.substring(0, charIndex))
        charIndex++
      } else {
        clearInterval(typingInterval)
      }
    }, typingSpeed)

    return () => clearInterval(typingInterval)
  }, [])

  useEffect(() => {
    const sequence = async () => {
      await controls.start({
        y: [20, 0, -20, 0],
        transition: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }
      })
    }
    sequence()
  }, [controls])

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  }

  const floatingIcons = {
    initial: { y: 0 },
    animate: {
      y: [-10, 10],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 pb-12 px-4">
      <motion.div 
        className="container max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={item} className="flex flex-col space-y-6">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Hi, I'm <span className="text-primary">John Doe</span>
            </h1>
            <div className="h-12 mt-3">
              <p className="text-xl md:text-2xl text-muted-foreground">
                {typedText}
                <span className="animate-pulse">|</span>
              </p>
            </div>
          </div>
          
          <p className="text-lg text-muted-foreground max-w-lg">
            I build secure, scalable applications and solve complex problems. With expertise
            in both development and cybersecurity, I create robust solutions that are both
            user-friendly and secure.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <Button asChild size="lg" className="group">
              <Link href="/projects">
                View Projects 
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-2" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="group">
              <Link href="/about">
                <FileText className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                About Me
              </Link>
            </Button>
          </div>
        </motion.div>
        
        <motion.div 
          variants={item} 
          className="relative w-full h-[400px] bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl overflow-hidden flex items-center justify-center"
          animate={controls}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative flex flex-col items-center">
              <motion.div 
                className="relative z-10 flex items-center justify-center gap-8"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <motion.div 
                  variants={floatingIcons}
                  initial="initial"
                  animate="animate"
                  className="p-4 bg-background/80 backdrop-blur-sm rounded-full shadow-lg"
                >
                  <Code className="h-12 w-12 text-primary" />
                </motion.div>
                <motion.div 
                  variants={floatingIcons}
                  initial="initial"
                  animate="animate"
                  className="p-4 bg-background/80 backdrop-blur-sm rounded-full shadow-lg"
                  style={{ animationDelay: "0.2s" }}
                >
                  <Shield className="h-16 w-16 text-primary" />
                </motion.div>
                <motion.div 
                  variants={floatingIcons}
                  initial="initial"
                  animate="animate"
                  className="p-4 bg-background/80 backdrop-blur-sm rounded-full shadow-lg"
                  style={{ animationDelay: "0.4s" }}
                >
                  <Layers className="h-12 w-12 text-primary" />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}