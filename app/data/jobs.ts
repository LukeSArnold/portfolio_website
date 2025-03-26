export type Job = {
  id: string
  title: string
  slug: string
  company: string
  logo: string
  location: string
  description: string
  responsibilities: string[]
  achievements: string[]
  startDate: string
  endDate: string | null
  url?: string
}

export const jobs: Job[] = [
  {
    id: "1",
    title: "Senior Frontend Developer",
    slug: "senior-frontend-developer-technovate",
    company: "TechnoVate Solutions",
    logo: "/company1.jpg?height=200&width=200",
    location: "San Francisco, CA (Remote)",
    description:
      "Led the frontend development team in building and maintaining a suite of enterprise SaaS applications. Worked closely with product managers, designers, and backend engineers to deliver high-quality user experiences.",
    responsibilities: [
      "Architected and implemented new features for the company's flagship product using React, TypeScript, and GraphQL",
      "Mentored junior developers and conducted code reviews to ensure code quality and best practices",
      "Collaborated with UX designers to implement responsive, accessible, and performant user interfaces",
      "Optimized application performance, reducing load times by 40% and improving Lighthouse scores",
      "Implemented comprehensive testing strategies using Jest and React Testing Library",
    ],
    achievements: [
      "Spearheaded the migration from a legacy codebase to a modern React architecture, improving developer productivity by 30%",
      "Implemented a component library that reduced development time for new features by 25%",
      "Reduced bundle size by 35% through code splitting and lazy loading strategies",
      "Received the 'Innovation Champion' award for developing an internal tool that automated repetitive tasks",
    ],
    startDate: "June 2021",
    endDate: null,
    url: "https://technovate-solutions.com",
  },
  {
    id: "2",
    title: "Full Stack Developer",
    slug: "full-stack-developer-dataflow",
    company: "DataFlow Systems",
    logo: "/company2.jpg?height=200&width=200",
    location: "Boston, MA",
    description:
      "Worked as a full stack developer on a data visualization platform used by Fortune 500 companies for business intelligence and analytics.",
    responsibilities: [
      "Developed and maintained RESTful APIs using Node.js, Express, and MongoDB",
      "Built interactive data visualizations using D3.js and React",
      "Implemented real-time data processing features using WebSockets and Redis",
      "Collaborated with data scientists to create algorithms for data analysis and prediction",
      "Participated in agile development processes, including daily stand-ups and sprint planning",
    ],
    achievements: [
      "Designed and implemented a dashboard builder that became the most used feature of the platform",
      "Optimized database queries, reducing average response time by 60%",
      "Contributed to open-source libraries used in the company's tech stack",
      "Led the implementation of OAuth 2.0 and SAML authentication systems",
    ],
    startDate: "March 2019",
    endDate: "May 2021",
    url: "https://dataflow-systems.com",
  },
  {
    id: "3",
    title: "Frontend Developer",
    slug: "frontend-developer-webcraft",
    company: "WebCraft Studios",
    logo: "/company3.jpg?height=200&width=200",
    location: "Seattle, WA",
    description:
      "Developed responsive web applications and e-commerce solutions for clients across various industries, focusing on user experience and performance.",
    responsibilities: [
      "Built custom websites and web applications using React, Next.js, and Tailwind CSS",
      "Implemented e-commerce functionality using Shopify and custom solutions",
      "Ensured cross-browser compatibility and responsive design for all projects",
      "Collaborated with designers to translate Figma designs into functional interfaces",
      "Integrated third-party APIs and services to extend application functionality",
    ],
    achievements: [
      "Delivered 15+ client projects on time and within budget with high client satisfaction",
      "Developed a custom headless CMS solution that improved content management efficiency",
      "Implemented accessibility improvements that brought all client sites to WCAG 2.1 AA compliance",
      "Created a starter template that reduced project setup time by 50%",
    ],
    startDate: "January 2017",
    endDate: "February 2019",
    url: "https://webcraft-studios.com",
  },
  {
    id: "4",
    title: "Junior Web Developer",
    slug: "junior-web-developer-digitaledge",
    company: "DigitalEdge Marketing",
    logo: "/company4.png?height=200&width=200",
    location: "Chicago, IL",
    description:
      "Started my professional career as a junior web developer at a digital marketing agency, working on websites and digital campaigns for small to medium-sized businesses.",
    responsibilities: [
      "Developed and maintained client websites using HTML, CSS, JavaScript, and WordPress",
      "Implemented responsive designs and ensured cross-browser compatibility",
      "Created landing pages for marketing campaigns and email templates",
      "Assisted with SEO implementation and performance optimization",
      "Collaborated with the design and marketing teams to implement digital strategies",
    ],
    achievements: [
      "Quickly advanced from basic HTML/CSS tasks to leading development on small projects",
      "Implemented a custom WordPress theme framework that improved development efficiency",
      "Received recognition for a client site that won a local business web design award",
      "Self-taught JavaScript frameworks to expand the agency's service offerings",
    ],
    startDate: "June 2015",
    endDate: "December 2016",
    url: "https://digitaledge-marketing.com",
  },
  {
    id: "5",
    title: "Web Development Intern",
    slug: "web-development-intern-innovatech",
    company: "InnovaTech Solutions",
    logo: "/company5.png?height=200&width=200",
    location: "Austin, TX",
    description:
      "Completed a 6-month internship program while completing my computer science degree, gaining hands-on experience in web development and software engineering practices.",
    responsibilities: [
      "Assisted senior developers with coding tasks and bug fixes",
      "Developed internal tools and utilities using JavaScript and PHP",
      "Participated in code reviews and learned industry best practices",
      "Documented code and created technical specifications",
      "Tested applications and reported issues through the company's bug tracking system",
    ],
    achievements: [
      "Developed a utility script that automated file processing tasks, saving 5+ hours of manual work weekly",
      "Contributed code to a client project that was praised for its quality and documentation",
      "Received an offer for full-time employment upon completion of the internship",
      "Presented a technical solution at the company's monthly knowledge sharing session",
    ],
    startDate: "January 2015",
    endDate: "May 2015",
    url: "https://innovatech-solutions.com",
  },
]

export function getJobBySlug(slug: string): Job | undefined {
  return jobs.find((job) => job.slug === slug)
}

