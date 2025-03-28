"use client"

import type React from "react"
import { useState } from "react"
import SubmitPhotoModal from "../components/SubmitPhotoModal"

interface Photo {
  id: number
  title: string
  category: string
  image: string
  date: string
}

const PhotoGalleryPage: React.FC = () => {
  const categories = ["All", "Build Your Brand", "Zenith", "INNOVISION", "Evolve", "Hustle 23"]
  const [activeCategory, setActiveCategory] = useState("All")
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false)

  // Add loadingImages state
  const [loadingImages, setLoadingImages] = useState<Record<string, boolean>>({})

  const photos: Photo[] = [
    // Build Your Brand
    // {
    //   id: 1,
    //   title: "Personal Branding Workshop",
    //   category: "Build Your Brand",
    //   image: "/placeholder.svg?height=400&width=600",
    //   date: "October 1, 2024",
    // },
    {
      id: 2,
      title: "Personal Branding Workshop",
      category: "Build Your Brand",
      image:
        "https://github.com/notion-vit/NotionCommunityVITB/blob/main/images/Event%20images/photograph1%20(2).JPG?raw=true?height=400&width=600",
      date: "October 1, 2024",
    },
    {
      id: 3,
      title: "Personal Branding Workshop",
      category: "Build Your Brand",
      image:
        "https://github.com/notion-vit/NotionCommunityVITB/blob/main/images/Event%20images/photograph2%20(2).JPG?raw=true?height=400&width=600",
      date: "October 1, 2024",
    },
    {
      id: 4,
      title: "LinkedIn Profile Optimization",
      category: "Build Your Brand",
      image:
        "https://github.com/notion-vit/NotionCommunityVITB/blob/main/images/Event%20images/photograph3%20(1).JPG?raw=true?height=400&width=600",
      date: "October 1, 2024",
    },
    {
      id: 5,
      title: "LinkedIn Profile Optimization",
      category: "Build Your Brand",
      image:
        "https://github.com/notion-vit/NotionCommunityVITB/blob/main/images/Event%20images/photograph5%20(2).JPG?raw=true?height=400&width=600",
      date: "October 1, 2024",
    },
    {
      id: 6,
      title: "LinkedIn Profile Optimization",
      category: "Build Your Brand",
      image:
        "https://github.com/notion-vit/NotionCommunityVITB/blob/main/images/Event%20images/photograph6%20(2).JPG?raw=true?height=400&width=600",
      date: "October 1, 2024",
    },
    {
      id: 7,
      title: "LinkedIn Profile Optimization",
      category: "Build Your Brand",
      image:
        "https://github.com/notion-vit/NotionCommunityVITB/blob/main/images/Event%20images/photograph7%20(1).JPG?raw=true?height=400&width=600",
      date: "October 1, 2024",
    },
    {
      id: 8,
      title: "LinkedIn Profile Optimization",
      category: "Build Your Brand",
      image:
        "https://github.com/notion-vit/NotionCommunityVITB/blob/main/assets/grouppic.jpeg?raw=true?height=400&width=600",
      date: "October 1, 2024",
    },
    {
      id: 9,
      title: "LinkedIn Profile Optimization",
      category: "Build Your Brand",
      image:
        "https://github.com/notion-vit/NotionCommunityVITB/blob/main/images/Event%20images/photograph8.JPG?raw=true?height=400&width=600",
      date: "October 1, 2024",
    },

    // Zenith
    {
      id: 10,
      title: "Tech Innovation Summit",
      category: "Zenith",
      image:
        "https://github.com/notion-vit/NotionCommunityVITB/blob/main/images/Event%20images/DSC_0316%5B1%5D%20(1).JPG?raw=true?height=400&width=600",
      date: "August 12, 2024",
    },
    {
      id: 11,
      title: "Tech Innovation Summit",
      category: "Zenith",
      image:
        "https://github.com/notion-vit/NotionCommunityVITB/blob/main/images/Event%20images/WhatsApp%20Image%202025-03-25%20at%2000.11.18%20(1).jpeg?raw=true?height=400&width=600",
      date: "August 12, 2024",
    },
    {
      id: 12,
      title: "Tech Innovation Summit",
      category: "Zenith",
      image:
        "https://github.com/notion-vit/NotionCommunityVITB/blob/main/images/Event%20images/photograph1.JPG?raw=true?height=400&width=600",
      date: "August 12, 2024",
    },
    {
      id: 13,
      title: "Tech Innovation Summit",
      category: "Zenith",
      image:
        "https://github.com/notion-vit/NotionCommunityVITB/blob/main/images/Event%20images/photograph2.JPG?raw=true?height=400&width=600",
      date: "August 12, 2024",
    },
    {
      id: 14,
      title: "Tech Innovation Summit",
      category: "Zenith",
      image:
        "https://github.com/notion-vit/NotionCommunityVITB/blob/main/images/Event%20images/photograph4.JPG?raw=true?height=400&width=600",
      date: "August 12, 2024",
    },
    {
      id: 15,
      title: "Tech Innovation Summit",
      category: "Zenith",
      image:
        "https://github.com/notion-vit/NotionCommunityVITB/blob/main/images/Event%20images/photograph5.JPG?raw=true?height=400&width=600",
      date: "August 12, 2024",
    },
    {
      id: 16,
      title: "Tech Innovation Summit",
      category: "Zenith",
      image:
        "https://github.com/notion-vit/NotionCommunityVITB/blob/main/images/Event%20images/photograph8.png?raw=true?project=67cb1a5d0022c5a29d3c&mode=admin?height=400&width=600",
      date: "August 12, 2024",
    },
    {
      id: 17,
      title: "Tech Innovation Summit",
      category: "Zenith",
      image:
        "https://github.com/notion-vit/NotionCommunityVITB/blob/main/images/Event%20images/photograph2%20(3).JPG?raw=true?height=400&width=600",
      date: "August 12, 2024",
    },
    // {
    //   id: 18,
    //   title: "Tech Innovation Summit",
    //   category: "Zenith",
    //   image: "/placeholder.svg?height=400&width=600",
    //   date: "August 12, 2024",
    // },

    // INNOVISION
    {
      id: 19,
      title: "Startup Event",
      category: "INNOVISION",
      image:
        "https://github.com/notion-vit/NotionCommunityVITB/blob/main/images/Event%20images/photograph1%20(1).JPG?raw=true?height=400&width=600",
      date: "May 3, 2024",
    },
    {
      id: 20,
      title: "Startup Event",
      category: "INNOVISION",
      image:
        "https://github.com/notion-vit/NotionCommunityVITB/blob/main/images/Event%20images/photograph2%20(1).JPG?raw=true?height=400&width=600",
      date: "May 3, 2024",
    },
    {
      id: 21,
      title: "Startup Event",
      category: "INNOVISION",
      image:
        "https://github.com/notion-vit/NotionCommunityVITB/blob/main/images/Event%20images/photograph3.JPG?raw=true?height=400&width=600",
      date: "May 3, 2024",
    },
    {
      id: 22,
      title: "Startup Event",
      category: "INNOVISION",
      image:
        "https://github.com/notion-vit/NotionCommunityVITB/blob/main/images/Event%20images/photograph4%20(1).JPG?raw=true?height=400&width=600",
      date: "May 3, 2024",
    },
    {
      id: 23,
      title: "Startup Event",
      category: "INNOVISION",
      image:
        "https://github.com/notion-vit/NotionCommunityVITB/blob/main/images/Event%20images/photograph6%20(1).JPG?raw=true?height=400&width=600",
      date: "May 3, 2024",
    },
    {
      id: 24,
      title: "Startup Event",
      category: "INNOVISION",
      image:
        "https://github.com/notion-vit/NotionCommunityVITB/blob/main/images/Event%20images/photograph5%20(1).JPG?raw=true?height=400&width=600",
      date: "May 3, 2024",
    },
    {
      id: 25,
      title: "Startup Event",
      category: "INNOVISION",
      image:
        "https://github.com/notion-vit/NotionCommunityVITB/blob/main/images/Event%20images/photograph7.JPG?raw=true?height=400&width=600",
      date: "May 3, 2024",
    },
    {
      id: 251,
      title: "Startup Event",
      category: "INNOVISION",
      image:
        "https://github.com/notion-vit/NotionCommunityVITB/blob/main/images/Event%20images/WhatsApp%20Image%202025-03-25%20at%2000.11.18.jpeg?raw=true?height=400&width=600",
      date: "May 3, 2024",
    },

    // Evolve
    // {
    //   id: 28,
    //   title: "Development Workshop",
    //   category: "Evolve",
    //   image: "/placeholder.svg?height=400&width=600",
    //   date: "February 23, 2024",
    // },
    {
      id: 29,
      title: "Development Workshop",
      category: "Evolve",
      image:
        "https://github.com/notion-vit/NotionCommunityVITB/blob/main/images/Event%20images/photograph1%20(3).JPG?raw=true?height=400&width=600",
      date: "February 23, 2024",
    },
    {
      id: 30,
      title: "Development Workshop",
      category: "Evolve",
      image:
        "https://github.com/notion-vit/NotionCommunityVITB/blob/main/images/Event%20images/photograph2%20(3).JPG?raw=true&mode=admin?height=400&width=600",
      date: "February 23, 2024",
    },
    {
      id: 26,
      title: "Development Workshop",
      category: "Evolve",
      image:
        "https://github.com/notion-vit/NotionCommunityVITB/blob/main/images/Event%20images/photograph2%20(4).JPG?raw=true?height=400&width=600",
      date: "February 23, 2024",
    },
    {
      id: 27,
      title: "Development Workshop",
      category: "Evolve",
      image:
        "https://github.com/notion-vit/NotionCommunityVITB/blob/main/images/Event%20images/photograph3%20(2).JPG?raw=true?height=400&width=600",
      date: "February 23, 2024",
    },
    {
      id: 34,
      title: "Development Workshop",
      category: "Evolve",
      image:
        "https://github.com/notion-vit/NotionCommunityVITB/blob/main/images/Event%20images/photograph5%20(3).JPG?raw=true?height=400&width=600",
      date: "February 23, 2024",
    },
    {
      id: 35,
      title: "Development Workshop",
      category: "Evolve",
      image:
        "https://github.com/notion-vit/NotionCommunityVITB/blob/main/images/Event%20images/photograph6%20(3).JPG?raw=true?height=400&width=600",
      date: "February 23, 2024",
    },
    {
      id: 36,
      title: "Development Workshop",
      category: "Evolve",
      image:
        "https://github.com/notion-vit/NotionCommunityVITB/blob/main/images/Event%20images/photograph7%20(2).jpg?raw=true?height=400&width=600",
      date: "February 23, 2024",
    },
    {
      id: 37,
      title: "Development Workshop",
      category: "Evolve",
      image:
        "https://github.com/notion-vit/NotionCommunityVITB/blob/main/images/Event%20images/WhatsApp%20Image%202025-03-25%20at%2000.20.51.jpeg?raw=true?height=400&width=600",
      date: "February 23, 2024",
    },
    {
      id: 47,
      title: "Development Workshop",
      category: "Evolve",
      image:
        "https://github.com/notion-vit/NotionCommunityVITB/blob/main/images/Event%20images/photograph9%20(2).jpg?raw=true?height=400&width=600",
      date: "February 23, 2024",
    },

    // Hustle 23
    {
      id: 31,
      title: "Entrepreneurial Hustle",
      category: "Hustle 23",
      image:
        "https://github.com/notion-vit/NotionCommunityVITB/blob/main/images/Event%20images/photograph1%20(4).JPG?raw=true?height=400&width=600",
      date: "December 13, 2023",
    },
    {
      id: 32,
      title: "Entrepreneurial Hustle",
      category: "Hustle 23",
      image:
        "https://github.com/notion-vit/NotionCommunityVITB/blob/main/images/Event%20images/photograph2%20(4).JPG?raw=true?height=400&width=600",
      date: "December 13, 2023",
    },
    {
      id: 33,
      title: "Entrepreneurial Hustle",
      category: "Hustle 23",
      image:
        "https://github.com/notion-vit/NotionCommunityVITB/blob/main/images/Event%20images/photograph3%20(3).JPG?raw=true?height=400&width=600",
      date: "December 13, 2023",
    },
    {
      id: 38,
      title: "Entrepreneurial Hustle",
      category: "Hustle 23",
      image:
        "https://github.com/notion-vit/NotionCommunityVITB/blob/main/images/Event%20images/photograph4%20(1).JPG?raw=true?height=400&width=600",
      date: "December 13, 2023",
    },
    {
      id: 39,
      title: "Entrepreneurial Hustle",
      category: "Hustle 23",
      image:
        "https://github.com/notion-vit/NotionCommunityVITB/blob/main/images/Event%20images/photograph4%20(2).JPG?raw=true?height=400&width=600",
      date: "December 13, 2023",
    },
    {
      id: 40,
      title: "Entrepreneurial Hustle",
      category: "Hustle 23",
      image:
        "https://github.com/notion-vit/NotionCommunityVITB/blob/main/images/Event%20images/photograph6%20(4).JPG?raw=true?height=400&width=600",
      date: "December 13, 2023",
    },
    {
      id: 41,
      title: "Entrepreneurial Hustle",
      category: "Hustle 23",
      image:
        "https://github.com/notion-vit/NotionCommunityVITB/blob/main/images/Event%20images/photograph6.JPG?raw=true?height=400&width=600",
      date: "December 13, 2023",
    },
    {
      id: 42,
      title: "Entrepreneurial Hustle",
      category: "Hustle 23",
      image:
        "https://github.com/notion-vit/NotionCommunityVITB/blob/main/images/Event%20images/photograph9%20(1).JPG?raw=true?height=400&width=600",
      date: "December 13, 2023",
    },
    {
      id: 43,
      title: "Entrepreneurial Hustle",
      category: "Hustle 23",
      image:
        "https://github.com/notion-vit/NotionCommunityVITB/blob/main/images/Event%20images/photograph10.JPG?raw=true?height=400&width=600",
      date: "December 13, 2023",
    },
  ]

  const filteredPhotos = activeCategory === "All" ? photos : photos.filter((photo) => photo.category === activeCategory)

  // Add image loading handlers
  const handleImageLoad = (id: string) => {
    setLoadingImages((prev) => ({
      ...prev,
      [id]: false,
    }))
  }

  const handleImageError = (id: string) => {
    setLoadingImages((prev) => ({
      ...prev,
      [id]: false,
    }))
  }

  return (
    <div className="container mx-auto px-6 py-32 md:py-40">
      <h1 className="text-4xl font-bold mb-12 text-center">Photo Gallery</h1>

      <div className="flex justify-center mb-12">
        <div className="flex flex-wrap gap-2 md:gap-4">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full ${
                activeCategory === category ? "bg-black text-white" : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Modify the photo grid to include preloaders */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredPhotos.map((photo) => (
          <div
            key={photo.id}
            className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 bg-white/20 backdrop-blur-sm"
            style={{ height: photo.id % 3 === 0 ? "300px" : "200px" }} // Varying heights for visual interest
          >
            {loadingImages[`photo-${photo.id}`] !== false && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                <img
                  src="https://github.com/notion-vit/NotionCommunityVITB/blob/main/assets/notion_vit_logo.jpg?raw=true"
                  alt="Loading"
                  className="w-16 h-16 animate-pulse"
                />
              </div>
            )}
            <img
              src={photo.image || "/placeholder.svg"}
              alt={photo.title}
              className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
              onLoad={() => handleImageLoad(`photo-${photo.id}`)}
              onError={() => handleImageError(`photo-${photo.id}`)}
              style={{ opacity: loadingImages[`photo-${photo.id}`] === false ? 1 : 0 }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-end">
              <div className="p-3 w-full text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-sm font-bold mb-1">{photo.title}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-xs">{photo.date}</span>
                  <span className="text-xs bg-white bg-opacity-20 px-2 py-1 rounded-full">{photo.category}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Share Your Photos</h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-8">
          Were you at one of our events? We'd love to see your photos! Share them with us and we might feature them in
          our gallery.
        </p>
        <button
          onClick={() => setIsSubmitModalOpen(true)}
          className="bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition"
        >
          Submit Photos
        </button>
        <SubmitPhotoModal isOpen={isSubmitModalOpen} onClose={() => setIsSubmitModalOpen(false)} />
      </div>
    </div>
  )
}

export default PhotoGalleryPage

