"use client"

import { Home, Info, Users, Image, HelpCircle, UserPlus } from "lucide-react"
import { Link } from "react-router-dom"

interface MobileNavbarProps {
  isMenuOpen: boolean
  setIsMenuOpen: (isOpen: boolean) => void
}

const MobileNavbar = ({ isMenuOpen, setIsMenuOpen }: MobileNavbarProps) => {
  const navLinks = [
    { path: "/", label: "Home", icon: Home },
    { path: "/about", label: "About", icon: Info },
    { path: "/team", label: "Team", icon: Users },
    { path: "/photo-gallery", label: "Photo Gallery", icon: Image },
    { path: "/faq", label: "FAQ", icon: HelpCircle },
  ]

  return (
    <>
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
                src="https://github.com/notion-vit/NotionCommunityVITB/blob/main/assets/notion_vit_logo.jpg?raw=true"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-medium">Notion Community</h3>
              <p className="text-sm text-gray-600">VIT Bhopal University</p>
            </div>
          </div>

          <nav className="space-y-4 flex-grow">
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
            
            {/* Join Us Button at the end */}
            <Link
              to="/join-us"
              className="flex items-center space-x-3 p-3 rounded-md transition-colors bg-black text-white hover:bg-gray-800 mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              <UserPlus size={20} />
              <span>Join Us</span>
            </Link>
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
    </>
  )
}

export default MobileNavbar