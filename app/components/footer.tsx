import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full border-t py-6 md:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-center text-sm text-muted-foreground md:text-left">
          &copy; {new Date().getFullYear()} Luke Arnold. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/LukeSArnold"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground"
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/luke-arnold-077764241/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground"
          >
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link href="lukearnold003@gmail.com" className="text-muted-foreground hover:text-foreground">
            <Mail className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}

