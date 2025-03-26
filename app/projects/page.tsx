import Link from "next/link"
import Image from "next/image"
import { projects } from "../data/projects"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export const metadata = {
  title: "Projects | Luke Arnold Portfolio",
  description: "Explore my recent projects and work",
}

export default function ProjectsPage() {
  return (
    <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="space-y-4 mb-8">
        <h1 className="text-4xl font-bold">My Projects</h1>
        <p className="text-muted-foreground text-lg max-w-3xl">
          Here are some of the projects I&apos;ve worked on recently. Each project represents a unique challenge and
          opportunity to learn and grow as a developer.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Card key={project.id} className="flex flex-col overflow-hidden group h-full">
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <CardHeader className="flex-grow">
              <CardTitle>{project.name}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.technologies.slice(0, 3).map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
                {project.technologies.length > 3 && (
                  <Badge variant="outline">+{project.technologies.length - 3} more</Badge>
                )}
              </div>
            </CardContent>
            <CardFooter className="pt-0">
              <Button asChild className="w-full">
                <Link href={`/projects/${project.slug}`}>
                  View Project <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  )
}

