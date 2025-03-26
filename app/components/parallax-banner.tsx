"use client"

import { useEffect, useState, useRef } from "react"

export function ParallaxBanner() {
  const [scrollY, setScrollY] = useState(0)
  const bannerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (bannerRef.current) {
        const { top, height } = bannerRef.current.getBoundingClientRect()
        const windowHeight = window.innerHeight

        // Only update scrollY if the banner is visible
        if (top + height > 0 && top < windowHeight) {
          setScrollY(window.scrollY)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="relative h-[70vh] w-full overflow-hidden" ref={bannerRef}>
      {/* Background color gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-purple-600/30"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      />

      {/* Background image with parallax effect */}
      <div
        className="absolute inset-0 bg-[url('/images/background.png')] bg-cover bg-center"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      />

      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center relative z-10">
        <h1
          className="text-4xl md:text-6xl font-bold text-white text-center drop-shadow-lg"
          style={{ transform: `translateY(${scrollY * -0.2}px)` }}
        >
          Luke Arnold
        </h1>
        <p
          className="text-xl md:text-2xl text-white mt-4 text-center max-w-2xl drop-shadow-lg"
          style={{ transform: `translateY(${scrollY * -0.1}px)` }}
        >
          Building digital experiences that make a difference
        </p>
      </div>
    </div>
  )
}

