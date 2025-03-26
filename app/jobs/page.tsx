import Link from "next/link"
import Image from "next/image"
import { jobs } from "../data/jobs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar } from "lucide-react"

export const metadata = {
  title: "Work Experience | Luke Arnold Portfolio",
  description: "My professional journey and work experience",
}

export default function JobsPage() {
  return (
    <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="space-y-4 mb-8">
        <h1 className="text-4xl font-bold">Work Experience</h1>
        <p className="text-muted-foreground text-lg max-w-3xl">
          My professional journey has equipped me with a diverse skill set and experience across different domains of
          software development.
        </p>
      </div>

      <div className="space-y-6">
        {jobs.map((job) => (
          <Card key={job.id} className="overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/4 p-6 flex flex-col items-center justify-center border-r border-border">
                <div className="relative h-20 w-20 mb-4">
                  <Image
                    src={job.logo || "/placeholder.svg"}
                    alt={`${job.company} logo`}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="font-semibold text-center">{job.company}</h3>
                <p className="text-sm text-muted-foreground text-center">{job.location}</p>
                <div className="flex items-center mt-2 text-sm text-muted-foreground">
                  <Calendar className="h-3 w-3 mr-1" />
                  <span>
                    {job.startDate} - {job.endDate || "Present"}
                  </span>
                </div>
              </div>

              <div className="md:w-3/4">
                <CardHeader>
                  <CardTitle>{job.title}</CardTitle>
                  <CardDescription className="line-clamp-2">{job.description}</CardDescription>
                </CardHeader>
                <CardContent className="pb-6">
                  <h4 className="font-medium mb-2">Key Responsibilities:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground mb-4">
                    {job.responsibilities.slice(0, 2).map((responsibility, index) => (
                      <li key={index}>{responsibility}</li>
                    ))}
                    {job.responsibilities.length > 2 && (
                      <li>And {job.responsibilities.length - 2} more responsibilities...</li>
                    )}
                  </ul>
                </CardContent>
                <CardFooter className="pt-2">
                  <Button asChild>
                    <Link href={`/jobs/${job.slug}`}>
                      View Details <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </main>
  )
}

