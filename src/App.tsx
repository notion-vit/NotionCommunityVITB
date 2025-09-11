"use client"

import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"
import Header from "./components/Header"
import MobileNavbar from "./components/MobileNavbar"
import HomePage from "./Pages/HomePage"
import AboutPage from "./Pages/AboutPage"
import TeamPage from "./Pages/TeamPage"
import PhotoGalleryPage from "./Pages/PhotoGalleryPage"
import FAQPage from "./Pages/FAQPage"
import JoinUsPage from "./Pages/JoinUsPage"
import {
  TechTeamForm,
  OutreachForm,
  CreativeForm,
  ContentForm,
  MediaForm,
  AnchoringForm,
  OperationsForm,
  CorporateForm,
  DesignForm
} from "./forms"
import Footer from "./components/Footer"
import BackgroundCanvas from "./components/BackgroundCanvas"
import { useState, useEffect } from "react"
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

  return (
    <div className="App min-h-screen flex flex-col relative overflow-x-hidden">
      <BackgroundCanvas />
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <ScrollToTop />

      {/* Mobile Navigation Drawer */}
      <MobileNavbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

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
            <Route path="/join-us" element={<JoinUsPage />} />
            {/* Team form routes */}
            <Route path="/join-us/design" element={<DesignForm />} />
            <Route path="/join-us/tech-team" element={<TechTeamForm />} />
            <Route path="/join-us/outreach" element={<OutreachForm />} />
            <Route path="/join-us/creative" element={<CreativeForm />} />
            <Route path="/join-us/content" element={<ContentForm />} />
            <Route path="/join-us/media" element={<MediaForm />} />
            <Route path="/join-us/anchoring" element={<AnchoringForm />} />
            <Route path="/join-us/operations" element={<OperationsForm />} />
            <Route path="/join-us/corporate" element={<CorporateForm />} />
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