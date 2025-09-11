"use client"

import { useState, useEffect } from "react"
import { Menu, X, Home, Info, Users, Image, HelpCircle, UserPlus } from "lucide-react"
import { Link, useLocation } from "react-router-dom"

interface HeaderProps {
  isMenuOpen: boolean
  setIsMenuOpen: (isOpen: boolean) => void
}

const Header = ({ isMenuOpen, setIsMenuOpen }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [location, setIsMenuOpen])

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { path: "/", label: "Home", icon: Home },
    { path: "/about", label: "About", icon: Info },
    { path: "/team", label: "Team", icon: Users },
    { path: "/photo-gallery", label: "Photo Gallery", icon: Image },
    { path: "/faq", label: "FAQ", icon: HelpCircle },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 shadow-md backdrop-blur-md" : "bg-white/80 backdrop-blur-md"
      } ${isMenuOpen ? "transform translate-x-64 md:transform-none" : ""}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="py-4 px-6 md:px-12 flex justify-between items-center">
          <div className="logo z-50">
            <Link to="/" className="flex items-center">
              <img
                src="https://github.com/notion-vit/NotionCommunityVITB/blob/main/assets/logo%20(2).png?raw=true"
                alt="Notion Community Logo"
                className="h-12 md:h-14 w-auto" // Increased logo size
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-base font-medium transition-colors hover:text-gray-600 ${
                  location.pathname === link.path ? "text-black" : "text-gray-600"
                }`}
              >
                {link.label}
              </Link>
            ))}
            {/* Join Us Button for Desktop */}
            <Link
              to="/join-us"
              className="bg-black text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-gray-800 transition-colors"
            >
              <UserPlus size={18} />
              <span>Join Us</span>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden z-50 text-gray-600 hover:text-gray-900 transition-colors p-2 rounded-full hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header