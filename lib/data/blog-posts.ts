export type BlogPost = {
  id: string
  title: string
  excerpt: string
  date: string
  readTime: string
  image: string
  category: string
  featured: boolean
}

export const blogPosts: BlogPost[] = [
  {
    id: "securing-web-applications",
    title: "Securing Web Applications: Best Practices for Developers",
    excerpt: "Learn essential security practices every developer should implement to protect web applications from common vulnerabilities.",
    date: "2025-02-15",
    readTime: "8 min read",
    image: "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Security",
    featured: true
  },
  {
    id: "microservices-architecture",
    title: "Implementing Microservices Architecture for Scalable Applications",
    excerpt: "Explore how to design, implement, and maintain microservices architecture for better scalability and resilience.",
    date: "2025-01-28",
    readTime: "10 min read",
    image: "https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Architecture",
    featured: true
  },
  {
    id: "react-performance",
    title: "Advanced React Performance Optimization Techniques",
    excerpt: "Dive deep into React performance optimization strategies that go beyond the basics to create lightning-fast applications.",
    date: "2025-01-12",
    readTime: "7 min read",
    image: "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Frontend",
    featured: true
  },
  {
    id: "devsecops-pipeline",
    title: "Building a DevSecOps Pipeline: Integrating Security into CI/CD",
    excerpt: "Learn how to integrate security checks at every stage of your development pipeline to catch vulnerabilities early.",
    date: "2024-12-18",
    readTime: "9 min read",
    image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "DevOps",
    featured: false
  },
  {
    id: "blockchain-security",
    title: "Blockchain Security: Protecting Decentralized Applications",
    excerpt: "An in-depth look at security considerations for blockchain applications and smart contracts.",
    date: "2024-12-05",
    readTime: "12 min read",
    image: "https://images.pexels.com/photos/315788/pexels-photo-315788.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Security",
    featured: false
  },
  {
    id: "typescript-patterns",
    title: "Design Patterns in TypeScript for Enterprise Applications",
    excerpt: "Explore effective design patterns for building maintainable and robust enterprise applications with TypeScript.",
    date: "2024-11-22",
    readTime: "8 min read",
    image: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Development",
    featured: false
  }
]