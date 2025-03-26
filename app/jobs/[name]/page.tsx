import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { getJobBySlug, jobs } from "../../data/jobs"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Calendar, MapPin, Globe } from "lucide-react"

interface JobPageProps {
  params: {
    name: string
  }
}

export async function generateMetadata({ params }: JobPageProps): Promise<Metadata> {
  // Await the entire params object first
  const resolvedParams = await params
  const name = resolvedParams.name

  // Now await the async getJobBySlug function
  const job = await getJobBySlug(name)

  if (!job) {
    return {
      title: "Job Not Found",
    }
  }

  return {
    title: `${job.title} at ${job.company} | Luke Arnold Portfolio`,
    description: job.description,
  }
}

export async function generateStaticParams() {
  return jobs.map((job) => ({
    name: job.slug,
  }))
}

export default async function JobPage({ params }: JobPageProps) {
  // Await the entire params object first
  const resolvedParams = await params
  const name = resolvedParams.name

  // Now await the async getJobBySlug function
  const job = await getJobBySlug(name)

  if (!job) {
    notFound()
  }

  return (
    <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link href="/jobs" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Work Experience
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <Card className="p-6 sticky top-20">
            <div className="flex flex-col items-center text-center mb-6">
              <div className="relative h-32 w-32 mb-4">
                <Image
                  src={job.logo || "/placeholder.svg"}
                  alt={`${job.company} logo`}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <h2 className="text-xl font-bold">{job.company}</h2>
              <div className="flex items-center mt-2 text-muted-foreground">
                <MapPin className="h-4 w-4 mr-1" />
                <span>{job.location}</span>
              </div>
              <div className="flex items-center mt-2 text-muted-foreground">
                <Calendar className="h-4 w-4 mr-1" />
                <span>
                  {job.startDate} - {job.endDate || "Present"}
                </span>
              </div>
            </div>

            {job.url && (
              <Button asChild variant="outline" className="w-full">
                <Link href={job.url} target="_blank" rel="noopener noreferrer">
                  <Globe className="mr-2 h-4 w-4" />
                  Visit Company Website
                </Link>
              </Button>
            )}
          </Card>
        </div>

        <div className="lg:col-span-2 space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">{job.title}</CardTitle>
              <CardDescription className="text-lg">{job.description}</CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Responsibilities</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 list-disc pl-5">
                {job.responsibilities.map((responsibility, index) => (
                  <li key={index} className="text-muted-foreground">
                    {responsibility}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Key Achievements</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 list-disc pl-5">
                {job.achievements.map((achievement, index) => (
                  <li key={index} className="text-muted-foreground">
                    {achievement}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <div className="flex justify-center">
            <Button asChild>
              <Link href="/projects">View My Projects</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}

