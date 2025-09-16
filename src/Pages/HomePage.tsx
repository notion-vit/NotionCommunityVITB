import type React from "react"
import { useState, useEffect } from "react"
import Hero from "../components/Hero"
import About from "../components/About"
import Events from "../components/Events"
import Speakers from "../components/Speakers"
import Partners from "../components/Partners"
import TeamSection from "../components/TeamSection"
import EventModal from "../components/EventModal"

interface HomePageProps {
  isMenuOpen: boolean
}

const HomePage: React.FC<HomePageProps> = ({ isMenuOpen }) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Show modal after a short delay on every page load
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Hero isMenuOpen={isMenuOpen} />
      <About />
      <Events />
      <Speakers />
      <Partners />
      <TeamSection />
      <EventModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        registrationUrl="https://lu.ma/v169sirk"
      />
    </div>
  )
}

export default HomePage