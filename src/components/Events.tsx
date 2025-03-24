"use client"

import type React from "react"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Link } from "react-router-dom"

interface Event {
  id: number
  date: string
  title: string
  shortDescription: string
  longDescription: string
  image: string
  stats?: {
    left?: { number: string; text: string }
    right?: { number: string; text: string }
  }
}

const Events: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [slideDirection, setSlideDirection] = useState<"left" | "right">("right")
  // Add loadingImages state
  const [loadingImages, setLoadingImages] = useState<Record<string, boolean>>({})

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

  const events: Event[] = [
    {
      id: 1,
      date: "01/10/24",
      title: "BUILD YOUR BRAND",
      shortDescription:
        "Build your Brand with Abhishek Kumar and Rishav Mishra drew 300+ Luna registrations, offering tips on LinkedIn optimization, networking, and branding.",
      longDescription:
        "Attended by over 180 students, the 'Build Your Brand Program' on November 26th introduced new students to personal branding. The speakers, Abhishek Kumar (founder of Notion Club) and Rishav Mishra (President of Notion Club) emphasized social media and AI tool usage for personal branding. A quiz on startups and AI further reinforced the concepts. The event empowered students with practical tips to build a strong professional image.",
      image: "https://github.com/notion-vit/NotionCommunityVITB/blob/main/images/2.jpg?raw=true",
      stats: {
        left: { number: "500+", text: "Community Members" },
        right: { number: "4.8/5", text: "Event Rating @Luma" },
      },
    },
    {
      id: 2,
      date: "12/08/24",
      title: "ZENITH'24",
      shortDescription:
        "This event, attended by over 200 students, included a hackathon, followed by a talk from Shivansh Garg on marketing, startups, and finance. The event concluded with a hands-on Notion workshop, ensuring students left with valuable knowledge and tools to boost their productivity.",
      longDescription:
        "This event, attended by over 200 students, included a hackathon, followed by a talk from Shivansh Garg on marketing, startups, and finance. The event concluded with a hands-on Notion workshop, ensuring students left with valuable knowledge and tools to boost their productivity.",
      image: "https://github.com/notion-vit/NotionCommunityVITB/blob/main/images/3.jpg?raw=true",
      stats: {
        left: { number: "500+", text: "Community Members" },
        right: { number: "4.0/5", text: "Event Rating @Luma" },
      },
    },
    {
      id: 3,
      date: "03/05/24",
      title: "INNOVISION",
      shortDescription:
        "On 3rd May, the Notion Community Club hosted Innovision, a highly anticipated technical event attended by over 189 students. The event featured keynote addresses by Dr. Gajendra Purohit and Soumen Banerjee, focusing on academic growth, entrepreneurship, and startups.",
      longDescription:
        "On 3rd May, the Notion Community Club hosted Innovision, a highly anticipated technical event attended by over 189 students. The event featured keynote addresses by Dr. Gajendra Purohit and Soumen Banerjee, focusing on academic growth, entrepreneurship, and startups.",
      image: "https://github.com/notion-vit/NotionCommunityVITB/blob/main/images/3%20(1).jpg?raw=true",
      stats: {
        left: { number: "500+", text: "Community Members" },
        right: { number: "4.3/5", text: "Event Rating @Luma" },
      },
    },
    {
      id: 4,
      date: "23/02/24",
      title: "Evolve",
      shortDescription:
        "Held as part of ADVITYA 2024, this technical event attracted over 207 participants and featured guest speakers sharing career insights.",
      longDescription:
        "Held as part of ADVITYA 2024, this technical event attracted over 207 participants and featured guest speakers sharing career insights. The event concluded with a quiz and cash prizes for the winners, making it an engaging experience.",
      image: "https://github.com/notion-vit/NotionCommunityVITB/blob/main/images/5.jpg?raw=true",
      stats: {
        left: { number: "500+", text: "Community Members" },
        right: { number: "4.8/5", text: "Event Rating @Luma" },
      },
    },
    {
      id: 5,
      date: "02/02/24",
      title: "Notion Nexus",
      shortDescription:
        "An educational event with Mr. Prince Sharma on boosting productivity using Notion, followed by poetry and comedy entertainment.",
      longDescription:
        "An educational event with Mr. Prince Sharma on boosting productivity using Notion, followed by poetry and comedy entertainment. This session provided students with valuable insights into Notion's features, combined with entertainment for a memorable experience.",
      image: "https://github.com/notion-vit/NotionCommunityVITB/blob/main/images/6.jpg?raw=true",
      stats: {
        left: { number: "500+", text: "Community Members" },
        right: { number: "4.2/5", text: "Event Rating @Luma" },
      },
    },
    {
      id: 6,
      date: "13/12/23",
      title: "Hustle 23",
      shortDescription:
        "A quiz competition on AI, technology, and startups, followed by a live concert and cash prizes for winners in December 2023. Conducted via Mentimeter, the event was a fun blend of quizzes and entertainment, attracting a lively audience.",
      longDescription:
        "A quiz competition on AI, technology, and startups, followed by a live concert and cash prizes for winners in December 2023.Conducted via Mentimeter, the event was a fun blend of quizzes and entertainment, attracting a lively audience.",
      image: "https://github.com/notion-vit/NotionCommunityVITB/blob/main/images/7.jpg?raw=true",
      stats: {
        left: { number: "500+", text: "Community Members" },
        right: { number: "5/5", text: "Event Rating @Luma" },
      },
    },
    {
      id: 7,
      date: "24/11/23",
      title: "Brain Bytes",
      shortDescription:
        "A trivia challenge combining AI, technology, and entrepreneurship, attended by over 300 participants with quizzes and live challenges.",
      longDescription:
        "Participants explored AI tools, including ChatGPT prompts, and winners received cash prizes and Notion goodies.A trivia challenge combining AI, technology, and entrepreneurship, attended by over 300 participants with quizzes and live challenges.",
      image: "https://github.com/notion-vit/NotionCommunityVITB/blob/main/images/8.jpg?raw=true",
      stats: {
        left: { number: "500+", text: "Community Members" },
        right: { number: "4.9/5", text: "Event Rating @Luma" },
      },
    },
  ]

  const nextEvent = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setSlideDirection("right")
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % events.length)
      setTimeout(() => setIsAnimating(false), 50)
    }, 300)
  }

  const prevEvent = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setSlideDirection("left")
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + events.length) % events.length)
      setTimeout(() => setIsAnimating(false), 50)
    }, 300)
  }

  const currentEvent = events[currentIndex]
  if (selectedEvent) {
    return (
      <section className="py-16 px-6 md:px-12 lg:px-24 relative">
        <h2 className="text-4xl font-medium Inter text-center mb-16">Our Events</h2>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="relative overflow-hidden rounded-lg">
              {loadingImages[`selected-${selectedEvent.id}`] !== false && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                  <img
                    src="https://github.com/notion-vit/NotionCommunityVITB/blob/main/assets/notion_vit_logo.jpg?raw=true"
                    alt="Loading"
                    className="w-16 h-16 animate-pulse"
                  />
                </div>
              )}
              <img
                src={selectedEvent.image || "/placeholder.svg"}
                alt={selectedEvent.title}
                className={`w-full h-auto object-contain ${
                  loadingImages[`selected-${selectedEvent.id}`] === false ? "image" : "image-loading"
                }`}
                onLoad={() => handleImageLoad(`selected-${selectedEvent.id}`)}
                onError={() => handleImageError(`selected-${selectedEvent.id}`)}
              />
              {selectedEvent.stats && (
                <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between text-white bg-gradient-to-t from-black/50 to-transparent">
                  {selectedEvent.stats.left && (
                    <div className="text-center">
                      <div className="text-2xl font-bold">{selectedEvent.stats.left.number}</div>
                      <div className="text-sm">{selectedEvent.stats.left.text}</div>
                    </div>
                  )}
                  {selectedEvent.stats.right && (
                    <div className="text-center">
                      <div className="text-2xl font-bold">{selectedEvent.stats.right.number}</div>
                      <div className="text-sm">{selectedEvent.stats.right.text}</div>
                    </div>
                  )}
                </div>
              )}
            </div>
            <div className="space-y-6 bg-white/80 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-4xl font-bold">{selectedEvent.title}</h3>
              <p className="text-gray-600 leading-relaxed">{selectedEvent.longDescription}</p>
              <Link
                to="/photo-gallery"
                className="inline-block px-6 py-2 border-2 border-black rounded-md hover:bg-black hover:text-white transition-colors inter"
              >
                Event Photographs
              </Link>
            </div>
          </div>
          <button
            onClick={() => setSelectedEvent(null)}
            className="mt-12 mx-auto block px-6 py-2 border-b-2 border-black hover:border-gray-600 transition-colors inter"
          >
            Back
          </button>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 relative">
      <h2 className="text-4xl font-medium text-center mb-16">Our Events</h2>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="space-y-6">
            <span className="text-lg">{currentEvent.date}</span>
            <h3 className="text-5xl font-bold">{currentEvent.title}</h3>
            <p className="text-lg leading-relaxed">{currentEvent.shortDescription}</p>
            <button
              onClick={() => setSelectedEvent(currentEvent)}
              className="text-lg border-b-2 border-black hover:border-gray-600 transition-colors inter inline-flex items-center"
            >
              SEE MORE →
            </button>
          </div>

          {/* Right Content - Event Image */}
          <div className="relative">
            <div
              className={`transition-all duration-500 ease-in-out transform ${
                isAnimating
                  ? slideDirection === "right"
                    ? "-translate-x-full opacity-0"
                    : "translate-x-full opacity-0"
                  : "translate-x-0 opacity-100"
              }`}
            >
              <div className="relative rounded-lg overflow-hidden bg-white">
                {loadingImages[`event-${currentEvent.id}`] !== false && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                    <img
                      src="https://github.com/notion-vit/NotionCommunityVITB/blob/main/assets/notion_vit_logo.jpg?raw=true"
                      alt="Loading"
                      className="w-16 h-16 animate-pulse"
                    />
                  </div>
                )}
                <img
                  src={currentEvent.image || "/placeholder.svg"}
                  alt={currentEvent.title}
                  className="w-full h-auto object-contain"
                  onLoad={() => handleImageLoad(`event-${currentEvent.id}`)}
                  onError={() => handleImageError(`event-${currentEvent.id}`)}
                  style={{ opacity: loadingImages[`event-${currentEvent.id}`] === false ? 1 : 0 }}
                />
                {currentEvent.stats && (
                  <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between text-white bg-gradient-to-t from-black/50 to-transparent">
                    {currentEvent.stats.left && (
                      <div className="text-center">
                        <div className="text-2xl font-bold">{currentEvent.stats.left.number}</div>
                        <div className="text-sm">{currentEvent.stats.left.text}</div>
                      </div>
                    )}
                    {currentEvent.stats.right && (
                      <div className="text-center">
                        <div className="text-2xl font-bold">{currentEvent.stats.right.number}</div>
                        <div className="text-sm">{currentEvent.stats.right.text}</div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="relative">
        <button
          onClick={prevEvent}
          disabled={isAnimating}
          className="absolute left-4 md:left-10 top-1/2 transform -translate-y-1/2 p-2 bg-white/80 hover:bg-gray-100 rounded-full transition-colors disabled:opacity-50 shadow-md z-20 w-10 h-10 flex items-center justify-center"
          title="Previous Event"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={nextEvent}
          disabled={isAnimating}
          className="absolute right-4 md:right-10 top-1/2 transform -translate-y-1/2 p-2 bg-white/80 hover:bg-gray-100 rounded-full transition-colors disabled:opacity-50 shadow-md z-20 w-10 h-10 flex items-center justify-center"
          title="Next Event"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* <div className="text-center mt-8">
        <Link
          to="/events"
          className="inline-block border-b-2 border-black hover:border-gray-600 transition-colors italic"
        >
          See All →
        </Link>
      </div> */}
    </section>
  )
}

export default Events

