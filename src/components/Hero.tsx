"use client"

import type React from "react"

interface HeroProps {
  isMenuOpen?: boolean
}

const Hero: React.FC<HeroProps> = ({ isMenuOpen = false }) => {
  return (
    <section className="pt-32 pb-12 px-6 md:px-12 lg:px-24 flex flex-col items-center">
      <h1
        className={`text-3xl md:text-4xl lg:text-6xl font-medium text-center mb-12 italic ${isMenuOpen ? "opacity-0 md:opacity-100" : "opacity-100"} transition-opacity duration-300`}
      >
        Notion Community, VIT Bhopal University
      </h1>

      <div className="relative w-full max-w-5xl mx-auto">
        {/* Main illustration - student reading */}
        <div className="flex justify-center mb-6">
          <img
            src="https://cloud.appwrite.io/v1/storage/buckets/67cb1acf001bdb8c4c45/files/67cb275200026c6bb2fe/view?project=67cb1a5d0022c5a29d3c&mode=admin"
            alt="Student reading"
            className="w-111 h-120 md:w-92 md:h-102 object-contain"
          />
        </div>
      </div>

      <h1 className="text-3xl md:text-5xl lg:text-4xl font-small text-center mb-12 ">
          Work..Learn..Grow..Connect
      </h1>
    </section>
  )
}

export default Hero

