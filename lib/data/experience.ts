export type Experience = {
  title: string
  company: string
  location: string
  period: string
  description: string[]
  technologies: string[]
}

export const experiences: Experience[] = [
  {
    title: "Business Development Manager & Security Lead",
    company: "TechCorp Industries",
    location: "San Francisco, CA",
    period: "2023 - Present",
    description: [
      "Led business development initiatives resulting in 45% revenue growth through strategic partnerships and client acquisition.",
      "Managed a portfolio of enterprise security solutions and consulting services.",
      "Developed and implemented comprehensive security strategies for Fortune 500 clients.",
      "Conducted executive-level presentations and negotiations for high-value contracts."
    ],
    technologies: ["Business Strategy", "Enterprise Security", "Risk Management", "Client Relations"]
  },
  {
    title: "Senior Cybersecurity Professional",
    company: "SecureNet Solutions",
    location: "Boston, MA",
    period: "2022 - 2023",
    description: [
      "Led red team operations and advanced penetration testing for critical infrastructure.",
      "Developed custom security tools and automation frameworks for vulnerability assessment.",
      "Conducted threat hunting and incident response for major security breaches.",
      "Provided security awareness training and workshops for technical and non-technical staff."
    ],
    technologies: ["Penetration Testing", "Threat Hunting", "Incident Response", "Security Tools Development"]
  },
  {
    title: "Ethical Hacking Consultant",
    company: "CyberGuard Technologies",
    location: "Austin, TX",
    period: "2020 - 2022",
    description: [
      "Performed advanced ethical hacking and security assessments for financial institutions.",
      "Discovered and responsibly disclosed critical vulnerabilities in enterprise systems.",
      "Developed secure coding guidelines and security best practices.",
      "Led security architecture reviews and provided remediation strategies."
    ],
    technologies: ["Ethical Hacking", "Vulnerability Assessment", "Security Architecture", "Secure Development"]
  },
  {
    title: "Senior Software Engineer",
    company: "Digital Innovations Inc.",
    location: "Seattle, WA",
    period: "2018 - 2020",
    description: [
      "Architected and developed secure, scalable applications using modern technologies.",
      "Led the implementation of zero-trust security architecture.",
      "Mentored junior developers in secure coding practices and application security.",
      "Integrated security controls and compliance measures into the development lifecycle."
    ],
    technologies: ["Full Stack Development", "Security Architecture", "Zero Trust", "Secure SDLC"]
  }
]

export type Education = {
  degree: string
  field: string
  institution: string
  location: string
  period: string
  achievements?: string[]
}

export const education: Education[] = [
  {
    degree: "Master of Science",
    field: "Cybersecurity",
    institution: "Stanford University",
    location: "Stanford, CA",
    period: "2015 - 2017",
    achievements: [
      "Specialization in Advanced Penetration Testing and Ethical Hacking",
      "GPA: 3.9/4.0",
      "Research: 'Advanced Persistent Threats: Detection and Mitigation'",
      "Led the University's Cybersecurity Club"
    ]
  },
  {
    degree: "Bachelor of Science",
    field: "Computer Science",
    institution: "Massachusetts Institute of Technology",
    location: "Cambridge, MA",
    period: "2011 - 2015",
    achievements: [
      "Minor in Business Management",
      "GPA: 3.8/4.0",
      "Dean's List: All semesters",
      "Founded Student Security Research Group"
    ]
  }
]