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
        "https://cloud.appwrite.io/v1/storage/buckets/67cb1acf001bdb8c4c45/files/67cb6d33003073fbe750/view?project=67cb1a5d0022c5a29d3c&mode=adminheight=400&width=600",
      date: "October 1, 2024",
    },
    {
      id: 3,
      title: "Personal Branding Workshop",
      category: "Build Your Brand",
      image:
        "https://cloud.appwrite.io/v1/storage/buckets/67cb1acf001bdb8c4c45/files/67cb6d1d002ffaf633d2/view?project=67cb1a5d0022c5a29d3c&mode=admin?height=400&width=600",
      date: "October 1, 2024",
    },
    {
      id: 4,
      title: "LinkedIn Profile Optimization",
      category: "Build Your Brand",
      image:
        "https://cloud.appwrite.io/v1/storage/buckets/67cb1acf001bdb8c4c45/files/67cb6d16001f5ddd4296/view?project=67cb1a5d0022c5a29d3c&mode=admin?height=400&width=600",
      date: "October 1, 2024",
    },
    {
      id: 5,
      title: "LinkedIn Profile Optimization",
      category: "Build Your Brand",
      image:
        "https://cloud.appwrite.io/v1/storage/buckets/67cb1acf001bdb8c4c45/files/67cb6d0e0022589136b6/view?project=67cb1a5d0022c5a29d3c&mode=admin?height=400&width=600",
      date: "October 1, 2024",
    },
    {
      id: 6,
      title: "LinkedIn Profile Optimization",
      category: "Build Your Brand",
      image:
        "https://cloud.appwrite.io/v1/storage/buckets/67cb1acf001bdb8c4c45/files/67cb6d0500125480db68/view?project=67cb1a5d0022c5a29d3c&mode=admin?height=400&width=600",
      date: "October 1, 2024",
    },
    {
      id: 7,
      title: "LinkedIn Profile Optimization",
      category: "Build Your Brand",
      image:
        "https://cloud.appwrite.io/v1/storage/buckets/67cb1acf001bdb8c4c45/files/67cb6cf0002af770abcc/view?project=67cb1a5d0022c5a29d3c&mode=admin?height=400&width=600",
      date: "October 1, 2024",
    },
    {
      id: 8,
      title: "LinkedIn Profile Optimization",
      category: "Build Your Brand",
      image:
        "https://cloud.appwrite.io/v1/storage/buckets/67cb1acf001bdb8c4c45/files/67cb6ce80008a879fee5/view?project=67cb1a5d0022c5a29d3c&mode=admin?height=400&width=600",
      date: "October 1, 2024",
    },
    {
      id: 9,
      title: "LinkedIn Profile Optimization",
      category: "Build Your Brand",
      image:
        "https://cloud.appwrite.io/v1/storage/buckets/67cb1acf001bdb8c4c45/files/67cb6cf7002296b4b8f5/view?project=67cb1a5d0022c5a29d3c&mode=admin?height=400&width=600",
      date: "October 1, 2024",
    },

    // Zenith
    {
      id: 10,
      title: "Tech Innovation Summit",
      category: "Zenith",
      image:
        "https://cloud.appwrite.io/v1/storage/buckets/67cb1acf001bdb8c4c45/files/67cb72470025bd77c5d5/view?project=67cb1a5d0022c5a29d3c&mode=admin?height=400&width=600",
      date: "August 12, 2024",
    },
    {
      id: 11,
      title: "Tech Innovation Summit",
      category: "Zenith",
      image:
        "https://cloud.appwrite.io/v1/storage/buckets/67cb1acf001bdb8c4c45/files/67cb7256003d9e9355c0/view?project=67cb1a5d0022c5a29d3c&mode=admin?height=400&width=600",
      date: "August 12, 2024",
    },
    {
      id: 12,
      title: "Tech Innovation Summit",
      category: "Zenith",
      image:
        "https://cloud.appwrite.io/v1/storage/buckets/67cb1acf001bdb8c4c45/files/67cb726b0024b9d66b8b/view?project=67cb1a5d0022c5a29d3c&mode=admin?height=400&width=600",
      date: "August 12, 2024",
    },
    {
      id: 13,
      title: "Tech Innovation Summit",
      category: "Zenith",
      image:
        "https://cloud.appwrite.io/v1/storage/buckets/67cb1acf001bdb8c4c45/files/67cb70e8000c75c91c47/view?project=67cb1a5d0022c5a29d3c&mode=admin?height=400&width=600",
      date: "August 12, 2024",
    },
    {
      id: 14,
      title: "Tech Innovation Summit",
      category: "Zenith",
      image:
        "https://cloud.appwrite.io/v1/storage/buckets/67cb1acf001bdb8c4c45/files/67cb728c001fe9349fbe/view?project=67cb1a5d0022c5a29d3c&mode=admin?height=400&width=600",
      date: "August 12, 2024",
    },
    {
      id: 15,
      title: "Tech Innovation Summit",
      category: "Zenith",
      image:
        "https://cloud.appwrite.io/v1/storage/buckets/67cb1acf001bdb8c4c45/files/67cb7280000f13ef280f/view?project=67cb1a5d0022c5a29d3c&mode=admin?height=400&width=600",
      date: "August 12, 2024",
    },
    {
      id: 16,
      title: "Tech Innovation Summit",
      category: "Zenith",
      image:
        "https://cloud.appwrite.io/v1/storage/buckets/67cb1acf001bdb8c4c45/files/67cb729c00392751fa07/view?project=67cb1a5d0022c5a29d3c&mode=admin?height=400&width=600",
      date: "August 12, 2024",
    },
    {
      id: 17,
      title: "Tech Innovation Summit",
      category: "Zenith",
      image:
        "https://cloud.appwrite.io/v1/storage/buckets/67cb1acf001bdb8c4c45/files/67cb739700050cad7c6a/view?project=67cb1a5d0022c5a29d3c&mode=admin?height=400&width=600",
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
        "https://cloud.appwrite.io/v1/storage/buckets/67cb1acf001bdb8c4c45/files/67cb70ad001b044baedc/view?project=67cb1a5d0022c5a29d3c&mode=admin?height=400&width=600",
      date: "May 3, 2024",
    },
    {
      id: 20,
      title: "Startup Event",
      category: "INNOVISION",
      image:
        "https://cloud.appwrite.io/v1/storage/buckets/67cb1acf001bdb8c4c45/files/67cb70be002145d6436a/view?project=67cb1a5d0022c5a29d3c&mode=admin?height=400&width=600",
      date: "May 3, 2024",
    },
    {
      id: 21,
      title: "Startup Event",
      category: "INNOVISION",
      image:
        "https://cloud.appwrite.io/v1/storage/buckets/67cb1acf001bdb8c4c45/files/67cb70ca00177483eb50/view?project=67cb1a5d0022c5a29d3c&mode=admin?height=400&width=600",
      date: "May 3, 2024",
    },
    {
      id: 22,
      title: "Startup Event",
      category: "INNOVISION",
      image:
        "https://cloud.appwrite.io/v1/storage/buckets/67cb1acf001bdb8c4c45/files/67cb70e8000c75c91c47/view?project=67cb1a5d0022c5a29d3c&mode=admin?height=400&width=600",
      date: "May 3, 2024",
    },
    {
      id: 23,
      title: "Startup Event",
      category: "INNOVISION",
      image:
        "https://cloud.appwrite.io/v1/storage/buckets/67cb1acf001bdb8c4c45/files/67cb71020033fb7f0c95/view?project=67cb1a5d0022c5a29d3c&mode=admin?height=400&width=600",
      date: "May 3, 2024",
    },
    {
      id: 24,
      title: "Startup Event",
      category: "INNOVISION",
      image:
        "https://cloud.appwrite.io/v1/storage/buckets/67cb1acf001bdb8c4c45/files/67cb710e00267fa3a490/view?project=67cb1a5d0022c5a29d3c&mode=admin?height=400&width=600",
      date: "May 3, 2024",
    },
    {
      id: 25,
      title: "Startup Event",
      category: "INNOVISION",
      image:
        "https://cloud.appwrite.io/v1/storage/buckets/67cb1acf001bdb8c4c45/files/67cb71180005ceeaa723/view?project=67cb1a5d0022c5a29d3c&mode=admin?height=400&width=600",
      date: "May 3, 2024",
    },
    {
      id: 251,
      title: "Startup Event",
      category: "INNOVISION",
      image:
        "https://cloud.appwrite.io/v1/storage/buckets/67cb1acf001bdb8c4c45/files/67cb712100093d926143/view?project=67cb1a5d0022c5a29d3c&mode=admin?height=400&width=600",
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
        "https://cloud.appwrite.io/v1/storage/buckets/67cb1acf001bdb8c4c45/files/67cb6e0b002a43098abb/view?project=67cb1a5d0022c5a29d3c&mode=admin?height=400&width=600",
      date: "February 23, 2024",
    },
    {
      id: 30,
      title: "Development Workshop",
      category: "Evolve",
      image:
        "https://cloud.appwrite.io/v1/storage/buckets/67cb1acf001bdb8c4c45/files/67cb6e14000e102aa528/view?project=67cb1a5d0022c5a29d3c&mode=admin?height=400&width=600",
      date: "February 23, 2024",
    },
    {
      id: 26,
      title: "Development Workshop",
      category: "Evolve",
      image:
        "https://cloud.appwrite.io/v1/storage/buckets/67cb1acf001bdb8c4c45/files/67cb6e1e0024ba412726/view?project=67cb1a5d0022c5a29d3c&mode=admin?height=400&width=600",
      date: "February 23, 2024",
    },
    {
      id: 27,
      title: "Development Workshop",
      category: "Evolve",
      image:
        "https://cloud.appwrite.io/v1/storage/buckets/67cb1acf001bdb8c4c45/files/67cb6e2a00207795d01c/view?project=67cb1a5d0022c5a29d3c&mode=admin?height=400&width=600",
      date: "February 23, 2024",
    },
    {
      id: 34,
      title: "Development Workshop",
      category: "Evolve",
      image:
        "https://cloud.appwrite.io/v1/storage/buckets/67cb1acf001bdb8c4c45/files/67cb6e3b000771a5011f/view?project=67cb1a5d0022c5a29d3c&mode=admin?height=400&width=600",
      date: "February 23, 2024",
    },
    {
      id: 35,
      title: "Development Workshop",
      category: "Evolve",
      image:
        "https://cloud.appwrite.io/v1/storage/buckets/67cb1acf001bdb8c4c45/files/67cb6e480027dccb3676/view?project=67cb1a5d0022c5a29d3c&mode=admin?height=400&width=600",
      date: "February 23, 2024",
    },
    {
      id: 36,
      title: "Development Workshop",
      category: "Evolve",
      image:
        "https://cloud.appwrite.io/v1/storage/buckets/67cb1acf001bdb8c4c45/files/67cb6e5c0030b0f707b0/view?project=67cb1a5d0022c5a29d3c&mode=admin?height=400&width=600",
      date: "February 23, 2024",
    },
    {
      id: 37,
      title: "Development Workshop",
      category: "Evolve",
      image:
        "https://cloud.appwrite.io/v1/storage/buckets/67cb1acf001bdb8c4c45/files/67cb6e5200031588d3c0/view?project=67cb1a5d0022c5a29d3c&mode=admin?height=400&width=600",
      date: "February 23, 2024",
    },

    // Hustle 23
    {
      id: 31,
      title: "Entrepreneurial Hustle",
      category: "Hustle 23",
      image:
        "https://cloud.appwrite.io/v1/storage/buckets/67cb1acf001bdb8c4c45/files/67cb6f2d000293995e6a/view?project=67cb1a5d0022c5a29d3c&mode=admin?height=400&width=600",
      date: "December 13, 2023",
    },
    {
      id: 32,
      title: "Entrepreneurial Hustle",
      category: "Hustle 23",
      image:
        "https://cloud.appwrite.io/v1/storage/buckets/67cb1acf001bdb8c4c45/files/67cb6f36001c7bedf7a4/view?project=67cb1a5d0022c5a29d3c&mode=admin?height=400&width=600",
      date: "December 13, 2023",
    },
    {
      id: 33,
      title: "Entrepreneurial Hustle",
      category: "Hustle 23",
      image:
        "https://cloud.appwrite.io/v1/storage/buckets/67cb1acf001bdb8c4c45/files/67cb6f4000018d8b17c6/view?project=67cb1a5d0022c5a29d3c&mode=admin?height=400&width=600",
      date: "December 13, 2023",
    },
    {
      id: 38,
      title: "Entrepreneurial Hustle",
      category: "Hustle 23",
      image:
        "https://cloud.appwrite.io/v1/storage/buckets/67cb1acf001bdb8c4c45/files/67cb6f4900065994cb34/view?project=67cb1a5d0022c5a29d3c&mode=admin?height=400&width=600",
      date: "December 13, 2023",
    },
    {
      id: 39,
      title: "Entrepreneurial Hustle",
      category: "Hustle 23",
      image:
        "https://cloud.appwrite.io/v1/storage/buckets/67cb1acf001bdb8c4c45/files/67cb6f5600096efbd752/view?project=67cb1a5d0022c5a29d3c&mode=admin?height=400&width=600",
      date: "December 13, 2023",
    },
    {
      id: 40,
      title: "Entrepreneurial Hustle",
      category: "Hustle 23",
      image:
        "https://cloud.appwrite.io/v1/storage/buckets/67cb1acf001bdb8c4c45/files/67cb6f5f0009c1bdbade/view?project=67cb1a5d0022c5a29d3c&mode=admin?height=400&width=600",
      date: "December 13, 2023",
    },
    {
      id: 41,
      title: "Entrepreneurial Hustle",
      category: "Hustle 23",
      image:
        "https://cloud.appwrite.io/v1/storage/buckets/67cb1acf001bdb8c4c45/files/67cb6f69003e57177716/view?project=67cb1a5d0022c5a29d3c&mode=admin?height=400&width=600",
      date: "December 13, 2023",
    },
    {
      id: 42,
      title: "Entrepreneurial Hustle",
      category: "Hustle 23",
      image:
        "https://cloud.appwrite.io/v1/storage/buckets/67cb1acf001bdb8c4c45/files/67cb6f7a0023e44abec4/view?project=67cb1a5d0022c5a29d3c&mode=admin?height=400&width=600",
      date: "December 13, 2023",
    },
    {
      id: 43,
      title: "Entrepreneurial Hustle",
      category: "Hustle 23",
      image:
        "https://cloud.appwrite.io/v1/storage/buckets/67cb1acf001bdb8c4c45/files/67cb6f8f0029c4025d20/view?project=67cb1a5d0022c5a29d3c&mode=admin?height=400&width=600",
      date: "December 13, 2023",
    },
  ]

  const filteredPhotos = activeCategory === "All" ? photos : photos.filter((photo) => photo.category === activeCategory)

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

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredPhotos.map((photo) => (
          <div
            key={photo.id}
            className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-white/20 backdrop-blur-sm"
            style={{ height: photo.id % 3 === 0 ? "300px" : "200px" }} // Varying heights for visual interest
          >
            <img
              src={photo.image || "/placeholder.svg"}
              alt={photo.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
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

