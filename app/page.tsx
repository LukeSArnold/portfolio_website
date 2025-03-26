import Image from "next/image"
import Link from "next/link"
import { ParallaxBanner } from "./components/parallax-banner"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Github, Linkedin, Mail, FileText } from "lucide-react"

export default function HomePage() {
  return (
    <main className="min-h-screen w-full">
      <ParallaxBanner />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 -mt-32 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <div className="sticky top-20">
              <div className="bg-card rounded-lg shadow-xl overflow-hidden">
                <div className="relative h-64 w-full">
                  <Image
                    src="/lukearnold.jpg?height=400&width=300"
                    alt="Profile picture"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="p-6">
                  <h1 className="text-3xl font-bold">Luke Arnold</h1>
                  <p className="text-muted-foreground mt-2">Software Developer</p>

                  <div className="flex gap-3 mt-6">
                    <Button variant="outline" size="icon" asChild>
                      <Link href="https://github.com/LukeSArnold/" target="_blank">
                        <Github className="h-4 w-4" />
                        <span className="sr-only">GitHub</span>
                      </Link>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                      <Link href="https://www.linkedin.com/in/luke-arnold-077764241" target="_blank">
                        <Linkedin className="h-4 w-4" />
                        <span className="sr-only">LinkedIn</span>
                      </Link>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                      <Link href="mailto:lukearnold003@gmail.com">
                        <Mail className="h-4 w-4" />
                        <span className="sr-only">Email</span>
                      </Link>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                      <Link href="/resume.pdf" target="_blank">
                        <FileText className="h-4 w-4" />
                        <span className="sr-only">Resume</span>
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-2 space-y-8">
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">About Me</h2>
              <p className="text-muted-foreground leading-relaxed">
                Hello! I&apos;m Luke, a passionate software developer with over 5 years of experience building web
                applications that solve real-world problems. I specialize in React, Next.js, Node.js, and modern cloud
                infrastructure.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                My journey in tech began in middle school when I built my first website. 
                Since then, I&apos;ve been obsessed with creating digital experiences that are both beautiful and functional. 
                I believe in clean code, user-centered design, and continuous learning.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                When I&apos;m not coding, you can find me hiking in the mountains, experimenting with new cooking recipes, or
                contributing to open-source projects.
              </p>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">Skills</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <SkillCard title="Frontend" skills={["React", "Next.js", "TypeScript", "Tailwind CSS"]} />
                <SkillCard title="Backend" skills={["Node.js", "Express", "PostgreSQL", "MongoDB"]} />
                <SkillCard title="DevOps" skills={["AWS", "Docker", "CI/CD", "Vercel"]} />
                <SkillCard title="Tools" skills={["Git", "VS Code", "Figma", "Postman"]} />
                <SkillCard
                  title="Soft Skills"
                  skills={["Communication", "Problem Solving", "Teamwork", "Leadership"]}
                />
                <SkillCard title="Languages" skills={["JavaScript", "TypeScript", "Python", "SQL"]} />
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">Education</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold">Bachelor of Science in Computer Science</h3>
                  <p className="text-muted-foreground">Utah State University</p>
                  <p className="text-sm text-muted-foreground">2021 - 2025</p>
                </div>
              </div>
            </Card>

            <div className="flex justify-center gap-4 mt-8">
              <Button asChild>
                <Link href="/projects">View My Projects</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/jobs">My Experience</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

function SkillCard({ title, skills }: { title: string; skills: string[] }) {
  return (
    <div>
      <h3 className="font-medium mb-2">{title}</h3>
      <ul className="space-y-1">
        {skills.map((skill) => (
          <li key={skill} className="text-sm text-muted-foreground">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  )
}

