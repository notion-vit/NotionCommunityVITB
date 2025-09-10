"use client"

import type React from "react"
import { Linkedin } from "lucide-react"
import { Link } from "react-router-dom"

interface TeamMember {
  id: number
  name: string
  role: string
  image: string
  linkedIn?: string
}

const TeamSection: React.FC = () => {
  // Faculty Coordinators
  const facultyCoordinators: TeamMember[] = [
    {
      id: 1,
      name: "Dr. Jay Prakash",
      role: "Faculty Coordinator",
      image:
        "/images/Jay_Prakash_Sir.jpeg",
      linkedIn: "https://www.linkedin.com/in/jpeemaurya-6a105b17?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    },
    // {
    //   id: 2,
    //   name: "Dr. Vishal kumar Ojha",
    //   role: "Faculty Coordinator",
    //   image:
    //     "https://cloud.appwrite.io/v1/storage/buckets/67cb1acf001bdb8c4c45/files/67cb4e3c0023cd999bad/view?project=67cb1a5d0022c5a29d3c&mode=admin",
    //   linkedIn: "https://www.linkedin.com/company/notion_vit/posts/?feedView=all",
    // },
  ]

  // Board Members
  const boardMembers: TeamMember[] = [
    {
      id: 1,
      name: "Gauri Makker",
      role: "Precident",
      image:
        "https://github.com/notion-vit/NotionCommunityVITB/blob/main/images/team-members/Gauri%20Makker%2023bce11131.jpeg?raw=true",
      linkedIn: "http://linkedin.com/in/gauri-makker",
    },
    {
      id: 2,
      name: "Abhishek Kumar",
      role: "Founder",
      image:
        "https://github.com/notion-vit/NotionCommunityVITB/blob/main/images/team-members/WhatsApp%20Image%202025-03-24%20at%2021.38.33.jpeg?raw=true",
      linkedIn: "https://www.linkedin.com/in/heyabhishekkumar/",
    },
    {
     id: 3,
      name: "Anushka Dubey",
      role: "Vice-President",
      image:
        "https://github.com/notion-vit/NotionCommunityVITB/blob/main/images/team-members/Anushka%20Dubey%2023bce11492.jpg?raw=true",
      linkedIn: "https://www.linkedin.com/in/anushka-dubey-7b4501215/",
    },
  ]

  // Administrators
  const administrators: TeamMember[] = [
    {
      id: 1,
      name: "Arnav Nehra",
      role: "Secretary",
      image:
        "https://github.com/notion-vit/NotionCommunityVITB/blob/main/images/team-members/Arnav%20Nehra%2023bhi10014.png?raw=true",
      linkedIn:
        "https://www.linkedin.com/in/arnav-nehra-76bb2327a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    },
    {
      id: 2,
      name: "Lokesh Bagade",
      role: "Executive Manager",
      image:
        "https://github.com/notion-vit/NotionCommunityVITB/blob/main/images/team-members/Lokesh%20Bhanudas%20Bagade%2023BCE11746.jpg?raw=true",
      linkedIn:
        "https://www.linkedin.com/in/lokeshbagade?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      id: 3,
      name: "Saurabh Sharma",
      role: "Executive Manager",
      image:
        "https://github.com/notion-vit/NotionCommunityVITB/blob/main/images/team-members/IMG_20250325_090909.jpg?raw=true?height=300&width=300",
      linkedIn: "https://in.linkedin.com/in/its0saurabh",
    },
    {
      id: 4,
      name: "Krishna Agrawal",
      role: "Executive Manager",
      image:
        "https://github.com/notion-vit/NotionCommunityVITB/blob/main/images/team-members/Krishna%20Agrawal%2023mei10032.jpg?raw=true",
      linkedIn: "https://www.linkedin.com/in/krishna-agrawal-147210280",
    },
    {
      id: 5,
      name: "Saniya Saw",
      role: "Treasurer",
      image:
        "/images/Saniya_saw.jpeg",
      linkedIn:
        "https://www.linkedin.com/in/saniya-saw-5b7817278?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
  ]

  return (
    <section className="py-9 px-6 md:px-12 lg:px-24 bg-transparent">
      <div className="mt-16 text-center">
        <h1 className="text-3xl font-medium mb-4">Meet the Notion Community Team</h1>
        <p className="text-sm text-gray-600 max-w-2xl mx-auto">
          Our dedicated team of students and faculty work together to create valuable experiences and resources for our
          community members.
        </p>
      </div>

      {/* Faculty Coordinators */}
      <div className="pt-6 mb-25">
        <h3 className="text-2xl font-medium inter text-center mb-8">Faculty Coordinator</h3>
        {/* <p className="text-sm text-gray-600 max-w-2xl mx-auto pb-4" text-center>
        The guiding light of the Notion Community.
        </p> */}

        <div className="flex justify-center">
          {facultyCoordinators.map((faculty) => (
            <div
              key={faculty.id}
              className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden w-64 transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={faculty.image || "/placeholder.svg"}
                  alt={faculty.name}
                  className="w-full h-full object-contain transition-all duration-300 transform hover:scale-110"
                />
              </div>
              <div className="p-4 text-center">
                <h4 className="text-xl font-medium">{faculty.name}</h4>
                <p className="text-gray-600">{faculty.role}</p>
                <div className="flex justify-center mt-2">
                  <a href={faculty.linkedIn} target="_blank" rel="noopener noreferrer" className="text-blue-600">
                    <Linkedin size={24} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Board Members */}
      <div className="mb-16">
        <h3 className="text-2xl font-medium inter text-center mb-8 pt-6">Board Members</h3>
        {/* <p className="text-sm text-gray-600 max-w-2xl mx-auto pb-4" text-center>
        The leaders steering the community forward.
        </p> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {boardMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden w-64 transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-contain transition-all duration-300 transform hover:scale-110"
                />
              </div>
              <div className="p-4 text-center">
                <h4 className="text-xl font-medium">{member.name}</h4>
                <p className="text-gray-600">{member.role}</p>
                <div className="flex justify-center mt-2">
                  <a href={member.linkedIn} target="_blank" rel="noopener noreferrer" className="text-blue-600">
                    <Linkedin size={24} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Administrators */}
      <div className="mb-16">
        <h3 className="text-2xl font-medium inter text-center mb-8">Administrators</h3>
        {/* <p className="text-sm text-gray-600 max-w-2xl mx-auto pb-4" text-center>
         The leaders steering the community forward
        </p> */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-items-center">
          {administrators.map((admin) => (
            <div
              key={admin.id}
              className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden w-64 transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={admin.image || "/placeholder.svg"}
                  alt={admin.name}
                  className="w-full h-full object-contain transition-all duration-300 transform hover:scale-110"
                />
              </div>
              <div className="p-4 text-center">
                <h4 className="text-xl font-medium">{admin.name}</h4>
                <p className="text-gray-600">{admin.role}</p>
                <div className="flex justify-center mt-2">
                  <a href={admin.linkedIn} target="_blank" rel="noopener noreferrer" className="text-blue-600">
                    <Linkedin size={24} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center">
        <Link to="/team" className="inline-block bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition">
          View All Team Members
        </Link>
      </div>
    </section>
  )
}

export default TeamSection

