import type React from "react"
import Hero from "../components/Hero"
import About from "../components/About"
import Events from "../components/Events"
import Speakers from "../components/Speakers"
import Partners from "../components/Partners"
import TeamSection from "../components/TeamSection"

interface HomePageProps {
  isMenuOpen: boolean
}

const HomePage: React.FC<HomePageProps> = ({ isMenuOpen }) => {
  return (
    <div>
      <Hero isMenuOpen={isMenuOpen} />
      <About />
      <Events />
      <Speakers />
      <Partners />
      <TeamSection />
    </div>
  )
}

export default HomePage

