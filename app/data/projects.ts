export type Project = {
  id: string
  name: string
  slug: string
  description: string
  longDescription: string
  image: string
  technologies: string[]
  startDate: string
  endDate: string
  url?: string
  github?: string
}

export const projects: Project[] = [
  {
    id: "1",
    name: "E-Commerce Platform",
    slug: "e-commerce-platform",
    description:
      "A full-featured e-commerce platform with product management, cart functionality, and payment processing.",
    longDescription:
      "I developed a comprehensive e-commerce solution that enables businesses to showcase their products, manage inventory, and process payments securely. The platform features a responsive design, advanced filtering options, user authentication, and integration with popular payment gateways. The admin dashboard provides detailed analytics and order management capabilities, while customers enjoy a seamless shopping experience with features like wishlists, reviews, and order tracking.",
    image: "/stocks.png?height=600&width=800",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Stripe", "MongoDB", "Redux"],
    startDate: "January 2022",
    endDate: "June 2022",
    url: "https://example-ecommerce.com",
    github: "https://github.com/alexjohnson/ecommerce-platform",
  },
  {
    id: "2",
    name: "Task Management App",
    slug: "task-management-app",
    description: "A collaborative task management application with real-time updates and team workspaces.",
    longDescription:
      "This task management application helps teams organize their work efficiently with features like task assignment, due dates, priority levels, and status tracking. The app implements real-time updates using WebSockets, allowing team members to see changes instantly without refreshing the page. Users can create multiple workspaces for different projects, add comments to tasks, attach files, and receive notifications for important updates. The intuitive drag-and-drop interface makes it easy to reorganize tasks and update their status.",
    image: "/schedule.png?height=600&width=800",
    technologies: ["React", "Node.js", "Express", "Socket.io", "PostgreSQL", "Docker", "JWT"],
    startDate: "July 2022",
    endDate: "October 2022",
    url: "https://taskflow-app.com",
    github: "https://github.com/alexjohnson/taskflow",
  },
  {
    id: "3",
    name: "Health & Fitness Tracker",
    slug: "health-fitness-tracker",
    description:
      "A mobile-first application for tracking workouts, nutrition, and health metrics with data visualization.",
    longDescription:
      "I designed and built a comprehensive health and fitness tracking application that allows users to log their workouts, track nutritional intake, and monitor various health metrics. The app features customizable workout plans, a food database with nutritional information, progress charts, and goal setting functionality. Users can generate detailed reports of their fitness journey, share achievements on social media, and receive personalized recommendations based on their performance and goals. The application also integrates with popular fitness wearables to automatically import activity data.",
    image: "/fitness.jpg?height=600&width=800",
    technologies: ["React Native", "Firebase", "Redux", "D3.js", "Node.js", "Express", "MongoDB"],
    startDate: "November 2022",
    endDate: "March 2023",
    url: "https://fittracker-app.com",
    github: "https://github.com/alexjohnson/fittracker",
  },
  {
    id: "4",
    name: "AI Content Generator",
    slug: "ai-content-generator",
    description:
      "A web application that leverages AI to generate marketing content, blog posts, and social media updates.",
    longDescription:
      "This innovative tool uses advanced natural language processing to help marketers and content creators generate high-quality content quickly. The application offers various content types including blog posts, social media captions, email newsletters, and product descriptions. Users can specify tone, style, target audience, and keywords to get tailored results. The platform includes an editor for refining the generated content, a scheduling feature for social media posts, and analytics to track content performance. I implemented a credit-based system and subscription tiers to monetize the service while providing a generous free tier for casual users.",
    image: "/ai.jpg?height=600&width=800",
    technologies: ["Next.js", "OpenAI API", "TypeScript", "Prisma", "PostgreSQL", "AWS Lambda", "Stripe"],
    startDate: "April 2023",
    endDate: "August 2023",
    url: "https://contentai-generator.com",
    github: "https://github.com/alexjohnson/contentai",
  },
  {
    id: "5",
    name: "Real Estate Marketplace",
    slug: "real-estate-marketplace",
    description: "A platform connecting property buyers, sellers, and agents with interactive maps and virtual tours.",
    longDescription:
      "I developed a comprehensive real estate marketplace that revolutionizes property searching and listing. The platform features interactive maps with neighborhood data, advanced filtering options, and virtual property tours. Property owners can list their properties with detailed information, high-quality images, and 3D tours. The application includes a messaging system for direct communication between interested parties, appointment scheduling for viewings, and document signing capabilities for contracts. For real estate agents, there's a dedicated dashboard to manage listings, client relationships, and track performance metrics. The platform also provides market analysis and price trend data to help users make informed decisions.",
    image: "/house.jpeg?height=600&width=800",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Google Maps API", "Three.js", "AWS S3", "Socket.io"],
    startDate: "September 2023",
    endDate: "February 2024",
    url: "https://propertymatch.com",
    github: "https://github.com/alexjohnson/propertymatch",
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

