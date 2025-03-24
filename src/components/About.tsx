"use client"

import type React from "react"
import { useState } from "react"
import JoinUsModal from "./JoinUsModal"
import { Link } from "react-router-dom"

const About: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <section id="about" className="py-16 px-6 md:px-12 lg:px-24 bg-transparent">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-2/3 mb-8 md:mb-0">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Notion Community VIT Bhopal University</h2>
          <p className="text-gray-600 mb-6 max-w-md text-lg md:text-xl">
            The Notion Community at VIT Bhopal is a vibrant group of enthusiasts who use and explore Notion for
            productivity, creativity, and collaboration. Join us to learn, share, and grow together!
          </p>
          <div className="flex space-x-6">
            <Link
              to="/about"
              className="bg-black text-white px-6 py-3 text-base rounded-xl transform transition-all duration-300 hover:scale-110 hover:shadow-lg"
            >
              View More
            </Link>
            <button
              className="bg-black text-white px-6 py-3 text-base rounded-xl transform transition-all duration-300 hover:scale-110 hover:shadow-lg"
              onClick={() => setIsModalOpen(true)}
            >
              Join Us
            </button>
            <JoinUsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          </div>
        </div>
        <div className="md:w-1/5 ml-auto">
          <img
            src="https://github.com/notion-vit/NotionCommunityVITB/blob/main/assets/about_us_img_for_main_page-removebg-preview.png?raw=true?height=500&width=500"
            alt="Illustration"
            className="w-50 h-80"
          />
        </div>
      </div>
    </section>
  )
}

export default About

