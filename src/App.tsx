"use client"

import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"
import Header from "./components/Header"
import HomePage from "./Pages/HomePage"
import AboutPage from "./Pages/AboutPage"
import TeamPage from "./Pages/TeamPage"
import PhotoGalleryPage from "./Pages/PhotoGalleryPage"
import FAQPage from "./Pages/FAQPage"
import Footer from "./components/Footer"
import BackgroundCanvas from "./components/BackgroundCanvas"
import { useState, useEffect } from "react"
import { Home, Info, Users, Image, HelpCircle } from "lucide-react"
import { Link } from "react-router-dom"
import { Analytics } from "@vercel/analytics/react"

// Separate ScrollToTop component
function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

// Main App component without router
function AppContent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Handle body scroll lock when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMenuOpen])

  const navLinks = [
    { path: "/", label: "Home", icon: Home },
    { path: "/about", label: "About", icon: Info },
    { path: "/team", label: "Team", icon: Users },
    { path: "/photo-gallery", label: "Photo Gallery", icon: Image },
    { path: "/faq", label: "FAQ", icon: HelpCircle },
  ]

  return (
    <div className="App min-h-screen flex flex-col relative overflow-x-hidden">
      <BackgroundCanvas />
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <ScrollToTop />

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <div className="flex flex-col h-full pt-20 px-6">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <img
                src="https://cloud.appwrite.io/v1/storage/buckets/67cb1acf001bdb8c4c45/files/67cb1b220015a046dfa6/view?project=67cb1a5d0022c5a29d3c&mode=admin"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-medium">Notion Community</h3>
              <p className="text-sm text-gray-600">VIT Bhopal University</p>
            </div>
          </div>

          <nav className="space-y-4">
            {navLinks.map((link) => {
              const Icon = link.icon
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className="flex items-center space-x-3 p-3 rounded-md transition-colors text-gray-700 hover:bg-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Icon size={20} />
                  <span>{link.label}</span>
                </Link>
              )
            })}
          </nav>
        </div>
      </div>

      {/* Backdrop for mobile menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Main content */}
      <main className="flex-grow relative z-10">
        <div
          className={`transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "transform translate-x-64 md:transform-none" : ""
          }`}
        >
          <Routes>
            <Route path="/" element={<HomePage isMenuOpen={isMenuOpen} />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/photo-gallery" element={<PhotoGalleryPage />} />
            <Route path="/faq" element={<FAQPage />} />
          </Routes>
          <Footer />
        </div>
      </main>
      <Analytics />
    </div>
  )
}

// Wrapper component with Router
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App

