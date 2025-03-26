import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { getProjectBySlug, projects } from "../../data/projects"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Calendar, Github, Globe, ArrowLeft } from "lucide-react"

interface ProjectPageProps {
  params: Promise<{
    name: string
  }>
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  // Await the entire params object first
  const resolvedParams = await params
  const name = resolvedParams.name

  // Now await the async getProjectBySlug function
  const project = await getProjectBySlug(name)

  if (!project) {
    return {
      title: "Project Not Found",
    }
  }

  return {
    title: `${project.name} | Luke Arnold Portfolio`,
    description: project.description,
  }
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    name: project.slug,
  }))
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  // Await the entire params object first
  const resolvedParams = await params
  const name = resolvedParams.name

  // Now await the async getProjectBySlug function
  const project = await getProjectBySlug(name)

  if (!project) {
    notFound()
  }

  return (
    <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link href="/projects" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Projects
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="relative aspect-video overflow-hidden rounded-lg border">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div>
            <h1 className="text-3xl font-bold mb-4">{project.name}</h1>
            <p className="text-muted-foreground whitespace-pre-line">{project.longDescription}</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Technologies Used</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <Card className="p-6 sticky top-20">
            <div className="space-y-6">
              <div>
                <h3 className="font-medium mb-2">Project Timeline</h3>
                <div className="flex items-center text-muted-foreground">
                  <Calendar className="mr-2 h-4 w-4" />
                  <span>
                    {project.startDate} - {project.endDate}
                  </span>
                </div>
              </div>

              {(project.url || project.github) && (
                <div>
                  <h3 className="font-medium mb-2">Links</h3>
                  <div className="space-y-2">
                    {project.url && (
                      <Button asChild variant="outline" className="w-full justify-start">
                        <Link href={project.url} target="_blank" rel="noopener noreferrer">
                          <Globe className="mr-2 h-4 w-4" />
                          Live Demo
                        </Link>
                      </Button>
                    )}
                    {project.github && (
                      <Button asChild variant="outline" className="w-full justify-start">
                        <Link href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          View Code
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>
              )}

              <div>
                <h3 className="font-medium mb-2">Need something similar?</h3>
                <Button asChild className="w-full">
                  <Link href="mailto:lukearnold003@gmail.com">Contact Me</Link>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </main>
  )
}

