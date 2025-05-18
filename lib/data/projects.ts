import { Github, Globe, Shield, Server, Database, Paintbrush, Code } from "lucide-react"

export type Project = {
  id: string
  title: string
  description: string
  overview: string
  tags: string[]
  image: string
  demoLink?: string
  codeLink?: string
  featured: boolean
  icon: any
}

export const projects: Project[] = [
  {
    id: "secure-banking-app",
    title: "Secure Banking Platform",
    description: "A secure banking application with multi-factor authentication and real-time fraud detection",
    overview: "Developed a highly secure banking platform using React, Node.js, and PostgreSQL. Implemented OAuth 2.0, JWT authentication, and biometric verification. Created a real-time fraud detection system using machine learning algorithms and behavioral analytics.",
    tags: ["React", "Node.js", "PostgreSQL", "OAuth", "JWT", "Machine Learning"],
    image: "https://images.pexels.com/photos/7821489/pexels-photo-7821489.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    demoLink: "https://banking-demo.com",
    codeLink: "https://github.com/johndoe/secure-banking",
    featured: true,
    icon: Shield
  },
  {
    id: "cloud-infrastructure",
    title: "Cloud Infrastructure Management",
    description: "A comprehensive cloud infrastructure management solution with automated scaling",
    overview: "Built a cloud infrastructure management platform using Terraform, AWS, and Kubernetes. Implemented auto-scaling features, continuous deployment pipelines, and comprehensive monitoring. Reduced infrastructure costs by 40% while improving system reliability and performance.",
    tags: ["AWS", "Terraform", "Kubernetes", "DevOps", "CI/CD", "Docker"],
    image: "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    demoLink: "https://cloud-manager.com",
    codeLink: "https://github.com/johndoe/cloud-infra",
    featured: true,
    icon: Server
  },
  {
    id: "data-analytics-platform",
    title: "Data Analytics Dashboard",
    description: "An enterprise data analytics platform with real-time insights and visualization",
    overview: "Created a data analytics platform using React, D3.js, and Python. Implemented real-time data processing with Apache Kafka and Spark streaming. Designed interactive visualizations and dashboards for business intelligence insights.",
    tags: ["React", "D3.js", "Python", "Apache Kafka", "Spark", "Machine Learning"],
    image: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    demoLink: "https://analytics-platform.com",
    codeLink: "https://github.com/johndoe/data-analytics",
    featured: true,
    icon: Database
  },
  {
    id: "e-commerce-platform",
    title: "E-Commerce Platform",
    description: "A feature-rich e-commerce platform with secure payment processing and inventory management",
    overview: "Built a scalable e-commerce platform using Next.js, Node.js, and MongoDB. Implemented secure payment processing with Stripe, inventory management, and order tracking features. Optimized for SEO and performance, achieving a 98% Lighthouse score.",
    tags: ["Next.js", "Node.js", "MongoDB", "Stripe", "Redux", "SEO"],
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    demoLink: "https://ecommerce-demo.com",
    codeLink: "https://github.com/johndoe/ecommerce",
    featured: true,
    icon: Globe
  },
  {
    id: "design-system",
    title: "Enterprise Design System",
    description: "A comprehensive design system for enterprise applications with accessibility features",
    overview: "Designed and developed an enterprise-grade design system using React, Storybook, and TypeScript. Created reusable components, consistent styling, and comprehensive documentation. Implemented accessibility features and automated testing.",
    tags: ["React", "TypeScript", "Storybook", "Accessibility", "UI/UX", "Testing"],
    image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    demoLink: "https://design-system-demo.com",
    codeLink: "https://github.com/johndoe/design-system",
    featured: false,
    icon: Paintbrush
  },
  {
    id: "blockchain-app",
    title: "Blockchain Voting System",
    description: "A secure blockchain-based voting system with identity verification",
    overview: "Developed a blockchain-based voting system using Ethereum, Solidity, and React. Implemented secure identity verification, tamper-proof vote recording, and transparent tallying. Created a user-friendly interface for voters and election administrators.",
    tags: ["Blockchain", "Ethereum", "Solidity", "React", "Web3.js", "Identity Verification"],
    image: "https://images.pexels.com/photos/315788/pexels-photo-315788.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    demoLink: "https://blockchain-voting.com",
    codeLink: "https://github.com/johndoe/blockchain-voting",
    featured: false,
    icon: Code
  },
]