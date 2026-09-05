import { asset } from "@/asset"

export type Accent = "blue" | "red" | "green" | "yellow"

export const ACCENT: Record<
  Accent,
  { dot: string; soft: string; text: string }
> = {
  blue: { dot: "bg-g-blue", soft: "bg-g-blue-soft", text: "text-g-blue" },
  red: { dot: "bg-g-red", soft: "bg-g-red-soft", text: "text-g-red" },
  green: { dot: "bg-g-green", soft: "bg-g-green-soft", text: "text-g-green" },
  yellow: {
    dot: "bg-g-yellow",
    soft: "bg-g-yellow-soft",
    text: "text-g-yellow",
  },
}

export const NAV_PAGES = [
  { id: "projects", label: "Projects", to: "/projects" },
  { id: "certs", label: "Certifications", to: "/certifications" },
  { id: "wins", label: "Achievements", to: "/achievements" },
]

export const NAV_SECTIONS = [
  { id: "about", label: "About", to: "/#about" },
  { id: "experience", label: "Experience", to: "/#experience" },
  { id: "stack", label: "Stack", to: "/#stack" },
]

export const PROJECTS = [
  {
    name: "CurioDocs",
    tag: "Cloud SaaS",
    accent: "blue" as const,
    href: "https://www.curiodocs.me/",
    blurb:
      "Collaborative document workspace — cloud-hosted SaaS with Node.js/TypeScript, AWS S3, CloudFormation, Docker, Nginx, and HTTPS. CI/CD via Jenkins and GitHub Actions.",
    stack: [
      "Node.js",
      "TypeScript",
      "React",
      "AWS S3",
      "CloudFormation",
      "Docker",
      "Jenkins",
    ],
  },
  {
    name: "Provident Loan System",
    tag: "In-house Accounting platform",
    accent: "green" as const,
    href: "https://github.com/Dumgrammer",
    blurb:
      "DepEd SDO accounting platform for transaction-based lending. REST APIs, SQL Server, JWT auth, Argon2 hashing, and role-based access — containerized with Docker.",
    stack: ["Next.js", "Node.js", "SQL Server", "JWT", "Docker"],
  },
  {
    name: "LASC RFID",
    tag: "Full-stack",
    accent: "yellow" as const,
    href: "https://lasc.appgradesol.online/login",
    blurb:
      "Little Angel Study Center Inc. Attendance and Monitoring System — React frontend, Prisma REST APIs, MySQL, auth, validation, and sms notifications.",
    stack: ["React", "Prisma", "MySQL", "REST"],
  },
  {
    name: "Smile",
    tag: "PWA",
    accent: "red" as const,
    href: "https://github.com/Dumgrammer/Project_Smile",
    blurb:
      "Appointment and patient-record PWA. REST APIs with validation, GitHub Actions CI/CD, Nginx reverse proxy, and deployment monitoring on AWS.",
    stack: ["Next.js", "Express", "MongoDB", "AWS", "GitHub Actions"],
  },
]

export const EXPERIENCE = [
  {
    role: "Software Engineering Intern",
    org: "Skydev Solutions Inc.",
    when: "Feb 2025 – May 2025",
    where: "",
    accent: "blue" as const,
    points: [
      "Started in QA — functional testing, regression, defect tracking, and production quality checks.",
      "Promoted to Software Engineering after one month; shipped frontend and backend features in JS/TS.",
      "Contributed to CI/CD with GitHub Actions and GCP; code reviews, debugging, and log-based troubleshooting in Agile.",
    ],
  },
  {
    role: "AWS CC PH Mentee",
    org: "AWS Cloud Club Philippines",
    when: "Dec 2024 – Present",
    where: "Remote",
    accent: "yellow" as const,
    points: [
      "Hands-on with S3, Lambda, DynamoDB, SQS, EventBridge, EC2, VPC, IAM, and CloudWatch.",
      "Built serverless and event-driven patterns; wrote docs for cloud monitoring and serverless setups.",
    ],
  },
  {
    role: "IT Intern",
    org: "Commission on Elections",
    when: "2023",
    where: "Olongapo City",
    accent: "green" as const,
    points: [
      "Built a Java Swing app for inventory tracking and voter record management.",
      "Supported secure data handling, validation, troubleshooting, and system integrity.",
    ],
  },
]

export const STACK: { group: string; accent: Accent; items: string[] }[] = [
  {
    group: "Languages",
    accent: "blue",
    items: ["TypeScript", "JavaScript", "Node.js", "Python", "PHP", "SQL"],
  },
  {
    group: "Frontend",
    accent: "red",
    items: ["React", "Next.js", "Angular", "HTML", "CSS", "Tailwind"],
  },
  {
    group: "Backend & APIs",
    accent: "green",
    items: ["Express.js", "REST APIs", "JWT", "Auth", "PostgreSQL", "MongoDB"],
  },
  {
    group: "Cloud & DevOps",
    accent: "yellow",
    items: [
      "AWS",
      "Docker",
      "GitHub Actions",
      "Jenkins",
      "Nginx",
      "CloudFormation",
    ],
  },
  {
    group: "Testing & QA",
    accent: "blue",
    items: ["Jest", "Unit", "Integration", "API Testing", "E2E", "Regression"],
  },
  {
    group: "AWS services",
    accent: "green",
    items: [
      "S3",
      "Lambda",
      "DynamoDB",
      "SQS",
      "EventBridge",
      "EC2",
      "IAM",
      "CloudWatch",
    ],
  },
]

export const CERTS = [
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    badge: "AWS",
    accent: "yellow" as const,
    image: asset("AWSCC.jpg"),
  },
  {
    name: "CCNAv7: Switching, Routing, and Wireless Essentials",
    issuer: "Cisco Networking Academy",
    badge: "CCNA",
    accent: "green" as const,
    image: asset("Switch.png"),
  },
  {
    name: "CCNAv7: Introduction to Networks",
    issuer: "Cisco Networking Academy",
    badge: "CCNA",
    accent: "blue" as const,
    image: asset("Networking.png"),
  },
  {
    name: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy · Gordon College",
    badge: "SEC",
    accent: "red" as const,
    image: asset("IntrotoCs.png"),
  },
  {
    name: "Introduction to Data Science",
    issuer: "Cisco Networking Academy",
    badge: "DS",
    accent: "blue" as const,
    image: asset("IntroductionstoDS.png"),
  },
  {
    name: "Programming for Beginners Using Python",
    issuer: "DICT · ILCDB",
    badge: "PY",
    accent: "yellow" as const,
    image: asset("Python.png"),
  },
  {
    name: "Programming for Intermediate Users Using Python",
    issuer: "DICT · ILCDB",
    badge: "PY",
    accent: "blue" as const,
    image: asset("IntPython.png"),
  },
  {
    name: "Analyze Data with Python",
    issuer: "DICT · ILCDB",
    badge: "PY",
    accent: "green" as const,
    image: asset("DAPython.png"),
  },
  {
    name: "Learn Basic Statistics with Python",
    issuer: "DICT · ILCDB",
    badge: "PY",
    accent: "red" as const,
    image: asset("StatPython.png"),
  },
  {
    name: "Visualize Data with Python",
    issuer: "DICT · ILCDB",
    badge: "PY",
    accent: "yellow" as const,
    image: asset("DVPython.png"),
  },
]

export const WINS = [
  {
    stat: "2x Regional Placer",
    label: "Hack4Gov 2 & 3 — Region 3 CTF 2nd Placer",
    note: "DICT regional CTF · Blue Team & forensics",
    accent: "red" as const,
  },
  {
    stat: "Cum Laude",
    label: "BS Information Technology",
    note: "Gordon College · Programmer of the Year",
    accent: "blue" as const,
  },
  {
    stat: "Excellence Award",
    label: "BS Information Technology",
    note: "Technical workshops and mentorship for student members",
    accent: "yellow" as const,
  },
  {
    stat: "VP",
    label: "GCCCS ELITES Organization",
    note: "Internal Affairs & Public Information Officer",
    accent: "green" as const,
  },
]

export const ACHIEVEMENT_PHOTOS = [
  {
    title: "Hack4Gov 3 — 2nd Runner-Up",
    note: "Team GC · Subic Bay Exhibition and Convention Center",
    image: asset("Achievements/3.jpg"),
    accent: "red" as const,
  },
  {
    title: "Hack4Gov Regional Placer",
    note: "Gordon College CCS · led with teammates under faculty coaches",
    image: asset("Achievements/7.jpg"),
    accent: "red" as const,
  },
  {
    title: "4th Regional Cyber Security Conference",
    note: "DICT regional cybersecurity conference",
    image: asset("Achievements/8.jpg"),
    accent: "blue" as const,
  },
  {
    title: "AWS Learning Club — Ignite the Spark",
    note: "AWS Learning Club GC CCS · 580 Coffee Shop, Olongapo",
    image: asset("Achievements/1.jpg"),
    accent: "yellow" as const,
  },
  {
    title: "YGG Play Summit",
    note: "AWS Learning Club GC CCS · SMX Convention Aura, BGC",
    image: asset("Achievements/5.jpg"),
    accent: "yellow" as const,
  },
  {
    title: "Phoenix's Journey to the Cloud",
    note: "AWS Learning Club GC CCS · Arthaland Century Pacific Tower, BGC",
    image: asset("Achievements/9.jpg"),
    accent: "yellow" as const,
  },
  {
    title: "GCCCS Acquaintance Day '23",
    note: "ELITES · Marikit Park",
    image: asset("Achievements/2.jpg"),
    accent: "green" as const,
  },
  {
    title: "Graduation — Cum Laude",
    note: "Gordon College · BS Information Technology",
    image: asset("Achievements/6.jpg"),
    accent: "blue" as const,
  },
  {
    title: "Graduation Day",
    note: "Gordon College commencement",
    image: asset("Achievements/4.jpg"),
    accent: "blue" as const,
  },
  {
    title: "With classmates — Graduation",
    note: "Gordon College · class of IT",
    image: asset("Achievements/Sdsi.jpg"),
    accent: "green" as const,
  },
  {
    title: "Diploma day",
    note: "Gordon College graduates",
    image: asset("Achievements/Nig.jpg"),
    accent: "yellow" as const,
  },
]

export const STATS = [
  { k: "AWS", v: "Cloud Practitioner" },
  { k: "Cum Laude", v: "BS IT · Gordon College" },
  { k: "2nd Placer", v: "Hack4Gov Region 3" },
  { k: "4", v: "Selected projects" },
]
