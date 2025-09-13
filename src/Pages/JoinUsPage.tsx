
"use client"

import { UserPlus, Users, Zap, Palette, PenTool, Camera, Mic, Settings, Briefcase } from "lucide-react"
import { useNavigate } from "react-router-dom"

interface Team {
  name: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  description: string;
  path: string;
}

const JoinUsPage = () => {
  const navigate = useNavigate()

  const teams: Team[] = [
    { name: "Tech ", icon: Zap, description: "Development, coding, and technical solutions", path: "tech-team" },
    { name: "Outreach", icon: Users, description: "Community engagement and partnerships", path: "outreach" },
    { name: "Creative", icon: Palette, description: "Design, visuals, and creative direction", path: "creative" },
    { name: "Content", icon: PenTool, description: "Writing, blogging, and content creation", path: "content" },
    { name: "Media", icon: Camera, description: "Photography, videography, and social media", path: "media" },
    { name: "Anchoring", icon: Mic, description: "Hosting events and public speaking", path: "anchoring" },
    { name: "Operations", icon: Settings, description: "Logistics, planning, and management", path: "operations" },
    { name: "Corporate", icon: Briefcase, description: "Sponsorships and business relations", path: "corporate" },

  ]

  const handleTeamClick = (teamPath: string) => {
    // Navigate to the team-specific form page
    navigate(`/join-us/${teamPath}`)
  }

  return (
    <div className="min-h-screen pt-20 px-4 pb-10 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-6">
            <UserPlus size={40} className="text-gray-800" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Join Our Community</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our teams and find where you belong. Click on a team to learn more and apply.
          </p>
        </div>

        {/* Teams Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Our Teams</h2>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Each team plays a vital role in our community. Click on any team to learn more 
            about their responsibilities and application process.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {teams.map((team, index) => {
              const Icon = team.icon
              return (
                <div 
                  key={index}
                  onClick={() => handleTeamClick(team.path)}
                  className="bg-white rounded-2xl border border-gray-200 p-6 transition-all duration-300 
                  hover:shadow-lg hover:-translate-y-1 hover:border-gray-400 cursor-pointer group"
                  style={{ borderRadius: "20px" }}
                >
                  <div className="text-center">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 rounded-xl bg-gray-100 group-hover:bg-gray-200 transition-colors duration-300">
                        <Icon size={28} className="text-gray-800" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{team.name}</h3>
                    <p className="text-gray-600 text-sm">{team.description}</p>
                    
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <span className="text-gray-800 text-sm font-medium group-hover:text-black transition-colors">
                        Apply now →
                      </span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>


      </div>
    </div>
  )
}

export default JoinUsPage
