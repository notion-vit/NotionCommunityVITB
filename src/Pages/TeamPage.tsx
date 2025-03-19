"use client"

import type React from "react"
import { useState } from "react"
import { Linkedin } from "lucide-react"
import JoinUsModal from "../components/JoinUsModal"

interface TeamMember {
  id: number
  name: string
  role: string
  image: string
  linkedIn?: string
}

interface TeamCategory {
  id: string
  name: string
  members: TeamMember[]
}

const TeamPage: React.FC = () => {
  const [activeTeam, setActiveTeam] = useState<string>("tech")
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Faculty Coordinators
  const facultyCoordinators: TeamMember[] = [
    {
      id: 1,
      name: "Dr. G. Vishnuvarthanan",
      role: "Faculty Coordinator",
      image:
        "https://cloud.appwrite.io/v1/storage/buckets/67cb1acf001bdb8c4c45/files/67cb4a89001ac43cf4da/view?project=67cb1a5d0022c5a29d3c&mode=admin",
      linkedIn: "https://www.linkedin.com/company/notion_vit/posts/?feedView=all",
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
      name: "Rishav Mishra",
      role: "President",
      image:
        "images/team-members/Rishav Mishra_23BHI10011_PR & Outreach - Rishav Ramnandan Mishra 23bhi10011.jpg",
      linkedIn: "https://www.linkedin.com/in/rishavmishra002",
    },
    {
      id: 2,
      name: "Abhishek Kumar",
      role: "Founder",
      image:
        "images/team-members/Abhishek Kumar _ Operations Team - Abhishek Kumar 23bhi10052.png",
      linkedIn: "https://www.linkedin.com/in/heyabhishekkumar/",
    },
    {
      id: 3,
      name: "Tejus Gupta",
      role: "Vice-President",
      image:
        "images/team-members/tejus.png",
      linkedIn:
        "https://www.linkedin.com/in/iamtejusgupta?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
  ]

  // Administrators
  const administrators: TeamMember[] = [
    {
      id: 1,
      name: "Saniya Saw",
      role: "(Secretary)",
      image:
        "images/team-members/saniya.png",
      linkedIn:
        "https://www.linkedin.com/in/saniya-saw-5b7817278?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      id: 2,
      name: "Aadish Jadge",
      role: "(Executive Maneger)",
      image:
        "images/team-members/aadish jadge.png",
      linkedIn: "https://www.linkedin.com/in/aadishjagde/",
    },
    {
      id: 3,
      name: "Gauri Makker",
      role: "(Executive Maneger)",
      image:
        "images/team-members/gauri makker.png",
      linkedIn: "http://linkedin.com/in/gauri-makker",
    },
    {
      id: 4,
      name: "Riya Dixit",
      role: "(Executive Manager)",
      image:
        "images/team-members/riya dixit.jpg",
      linkedIn:
        "https://www.linkedin.com/in/riya-dixit-97415728a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app             ",
    },
  ]

  // Team Categories
  const teamCategories: TeamCategory[] = [
    {
      id: "tech",
      name: "Tech Team",
      members: [
        {
          id: 1,
          name: "Anushka Dubey",
          role: "Lead",
          image:
            "images/team-members/Anushka Dubey 23bce11492.jpg",
          linkedIn: "https://www.linkedin.com/in/anushka-dubey-7b4501215/",
        },
        {
          id: 2,
          name: "Shauryaraje Yadav",
          role: "Co-Lead",
          image:
            "images/team-members/shauryaraje yadav.png",
          linkedIn: "https://www.linkedin.com/in/shauryaraje/",
        },
        {
          id: 3,
          name: "Manya Raghuwanshi",
          role: "Junior Associates",
          image:
            "images/team-members/manya raghuwanshi.png",
          linkedIn:
            "https://www.linkedin.com/in/manya-raghuwanshi-9928a9332?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        },
        {
          id: 4,
          name: "Sparsh Khatwani",
          role: "Senior Associate",
          image:
            "https://cloud.appwrite.io/v1/storage/buckets/67cb1acf001bdb8c4c45/files/67cb534200329abb77e2/view?project=67cb1a5d0022c5a29d3c&mode=admin?height=300&width=300",
            // image not stored in the images folder so leaving it in appwrite link itself
          linkedIn: "https://www.linkedin.com/in/sparshkhatwani",
        },
        {
          id: 5,
          name: "Nikhil Hegde",
          role: "Senior Associate",
          image:
            "https://cloud.appwrite.io/v1/storage/buckets/67cb1acf001bdb8c4c45/files/67cb535a000031c5bfe2/view?project=67cb1a5d0022c5a29d3c&mode=admin?height=300&width=300",
            // same issue
          linkedIn: "http://www.linkedin.com/in/nikhil-hegde-897b59328",
        },
        {
          id: 6,
          name: "Kalyanee Deshmukh",
          role: "Junior Associates",
          image:
            "https://cloud.appwrite.io/v1/storage/buckets/67cb1acf001bdb8c4c45/files/67cb530200108667e21d/view?project=67cb1a5d0022c5a29d3c&mode=admin?height=300&width=300",
            // same issue
          linkedIn:
            "https://www.linkedin.com/in/kalyanee-deshmukh-9b3798339?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        },
      ],
    },
    {
      id: "operations",
      name: "Operations Team",
      members: [
        {
          id: 1,
          name: "Arnav Nehra",
          role: "Lead",
          image:
            "images/team-members/Arnav Nehra 23bhi10014.png",
          linkedIn:
            "https://www.linkedin.com/in/arnav-nehra-76bb2327a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        },
        {
          id: 2,
          name: "Shelly Sharma",
          role: "Co-Lead",
          image:
            "images/team-members/shelly .png",
          linkedIn: "https://www.linkedin.com/in/shelly-sharma2004",
        },
        {
          id: 3,
          name: "Krishna Agrawal",
          role: "Senior Associate",
          image:
            "images/team-members/Krishna Agrawal 23mei10032.jpg",
          linkedIn: "https://www.linkedin.com/in/krishna-agrawal-147210280",
        },
        {
          id: 4,
          name: "Prerna",
          role: "Senior Associate",
          image:
            "images/team-members/prerna.png",
          linkedIn: "www.linkedin.com/in/prerna-singh-7b40792a2",
        },
        {
          id: 5,
          name: "Priyanshu",
          role: "Senior Associate",
          image:
            "images/team-members/priyanshu.png",
          linkedIn:
            "https://www.linkedin.com/in/priyanshu-82514228a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        },
        {
          id: 6,
          name: "Yokesh T",
          role: "Junior Associates",
          image:
            "images/team-members/Yokesh T.png",
          linkedIn:
            "https://www.linkedin.com/in/yokesh-t-98937a303?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        },
        {
          id: 7,
          name: "Mehul khare",
          role: "Junior Associates",
          image:
            "images/team-members/MEHUL KHARE.png",
          linkedIn:
            "https://www.linkedin.com/in/mehul-khare-35a566311?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        },
      ],
    },
    {
      id: "creative",
      name: "Creative Team",
      members: [
        {
          id: 1,
          name: "Saurabh Sharma",
          role: "Lead",
          image:
            "https://cloud.appwrite.io/v1/storage/buckets/67cb1acf001bdb8c4c45/files/67cb58610021231611ee/view?project=67cb1a5d0022c5a29d3c&mode=admin?height=300&width=300",
          linkedIn: "https://in.linkedin.com/in/its0saurabh",
        },
        {
          id: 2,
          name: "Mohammed Shaariq",
          role: "Co-Lead",
          image:
            "images/team-members/MD SHAARIQ.png",
          linkedIn:
            "https://www.linkedin.com/in/mohammed-shaariq-0108b1287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        },
        {
          id: 3,
          name: "Krish Kumar",
          role: "Senior Associate",
          image:
            "images/team-members/krish kumar.png",
          linkedIn: "hthttps://www.linkedin.com/in/krish-verma-784944330/",
        },
        {
          id: 4,
          name: "Vedant Patidar",
          role: "Junior Associates",
          image:
            "images/team-members/vedant patidar.png",
          linkedIn:
            "https://www.linkedin.com/in/vedant-patidar-2ba146242?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        },
        {
          id: 4,
          name: "Manya Jajodia",
          role: "Junior Associates",
          image:
            "images/team-members/manya jajodia.png",
          linkedIn: "https://www.linkedin.com/in/manya-jajodia-28747033a/",
        },
        {
          id: 6,
          name: "Yug Pareek",
          role: "Senior Associate",
          image:
            "images/team-members/yug pareek.png",
          linkedIn: "https://www.linkedin.com/in/yug-pareek-4657a2330/",
        },
        {
          id: 7,
          name: "Mokshad Bunde",
          role: "Junior Associates",
          image:
            "images/team-members/mokshad bunde.png",
          linkedIn:
            "https://www.linkedin.com/in/mokshad-bunde-baa8b130a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        },
      ],
    },
    {
      id: "outreach",
      name: "Outreach Team",
      members: [
        {
          id: 1,
          name: "Lokesh Bagade",
          role: "Lead",
          image:
            "images/team-members/Lokesh Bhanudas Bagade 23BCE11746.jpg",
          linkedIn:
            "https://www.linkedin.com/in/lokeshbagade?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        },
        {
          id: 2,
          name: "Manaswi Suraskar",
          role: "Co-Lead",
          image:
            "images/team-members/Manaswi Suraskar  - Manaswi Shantaram Suraskar 23bcy10258.jpg",
          linkedIn:
            "https://www.linkedin.com/in/manaswi-suraskar-bb131b28a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        },
        {
          id: 3,
          name: "Tarpita Karnam",
          role: "Senior Associate",
          image:
            "images/team-members/Tarpita Karnam 23bhi10124.jpg",
          linkedIn:
            "https://www.linkedin.com/in/tarpita-karnam-8208b5287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        },
        {
          id: 4,
          name: "Iram Khan",
          role: "Senior Associate",
          image:
            "images/team-members/iram khan.png",
          linkedIn:
            "https://www.linkedin.com/in/iram-khan-3a4b80280?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        },
        {
          id: 5,
          name: "Niharika Pandey",
          role: "Senior Associate",
          image:
            "images/team-members/niharika.png",
          linkedIn:
            "https://www.linkedin.com/in/niharika-pandey-4335132b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        },
        {
          id: 6,
          name: "Anamika",
          role: "Senior Associate",
          image:
            "images/team-members/anamika.png",
          linkedIn:
            "https://www.linkedin.com/in/niharika-pandey-4335132b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        },
        {
          id: 7,
          name: "shanmugha priya",
          role: "Junior Associates",
          image:
            "images/team-members/shanmugha priya.png",
          linkedIn:
            "https://www.linkedin.com/in/shanmugha-priya-6050b131a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        },
        {
          id: 8,
          name: "ANANYA GAUR",
          role: "Senior Associate",
          image:
            "images/team-members/ananya gaur.png",
          linkedIn: "https://www.linkedin.com/in/ananya-gaur-268b0528b",
        },
        {
          id: 9,
          name: "Manasvi Maheshwari",
          role: "Senior Associate",
          image:
            "images/team-members/manasvi maheshwari.png",
          linkedIn:
            "https://www.linkedin.com/in/manasvi-maheshwari-5085a8279?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        },
      ],
    },
    {
      id: "media",
      name: "Media Team",
      members: [
        {
          id: 1,
          name: "Swarup Futane",
          role: "Lead",
          image:
            "images/team-members/swarup futane.jpeg",
          linkedIn: "https://www.linkedin.com/in/swarup-futane-087690303",
        },
        {
          id: 2,
          name: "Naman Gupta",
          role: "Co-Lead",
          image:
            "images/team-members/naman gupta.jpg",
          linkedIn: "https://www.linkedin.com/in/naman-gupta-3983b2238",
        },
        {
          id: 3,
          name: "Hardik Verma",
          role: "Senior Associate",
          image:
            "images/team-members/Hardik Verma 23bai10915.jpg",
          linkedIn: "https://www.linkedin.com/in/hardik-verma-aa6ab3276",
        },
        {
          id: 4,
          name: "Tuhin Rakshit",
          role: "Senior Associate",
          image:
            "images/team-members/Tuhin Rakshit 23bce10535.jpg",
          linkedIn: "https://www.linkedin.com/in/tuhin-rakshit-05511528a",
        },
        {
          id: 5,
          name: "Dheeraj Jangir",
          role: "Junior Associate",
          image:
            "images/team-members/dheeraj jangir.png",
          linkedIn: "https://www.linkedin.com/in/dheeraj-jangir-9754b3325",
        },
        {
          id: 6,
          name: "Yash Janiyani",
          role: "Junior Associate",
          image:
            "images/team-members/yash janiyani.png",
          linkedIn: "https://www.linkedin.com/in/yash-janiyani-279326271",
        },
      ],
    },
    {
      id: "content",
      name: "Content Team",
      members: [
        {
          id: 1,
          name: "Deepti Srivastava",
          role: "Lead",
          image:
            "images/team-members/deepti.png",
          linkedIn: "https://www.linkedin.com/in/deepti-srivastava-325329314",
        },
        {
          id: 2,
          name: "Mudra Khuje",
          role: "Senior Associate",
          image:
            "images/team-members/mudra khuje.png",
          linkedIn: "https://www.linkedin.com/in/mudra-khuje-b30b08204",
        },
        {
          id: 3,
          name: "Yoshita Purohit",
          role: "Junior Associate",
          image:
            "images/team-members/yoshita purohit.png",
          linkedIn: "https://www.linkedin.com/in/yoshita-purohit-047449327",
        },
        {
          id: 4,
          name: "Anuja Nag",
          role: "Senior Associate",
          image:
            "images/team-members/anuja nag.png",
          linkedIn: "https://www.linkedin.com/in/anuja-nag-618380312",
        },
        {
          id: 5,
          name: "Abha Singh",
          role: "Junior Associate",
          image:
            "images/team-members/abha singh.png",
          linkedIn: "https://www.linkedin.com/in/abha-singh-60739031a",
        },
      ],
    },
    {
      id: "corporate",
      name: "Corporate Team",
      members: [
        {
          id: 1,
          name: "Adarsh Singh",
          role: "Lead",
          image:
            "images/team-members/Adarsh - Adarsh Singh 23BAI11390.png",
          linkedIn: "https://www.linkedin.com/in/ adarsh-singh-go",
        },
        {
          id: 2,
          name: "Dev Vrat",
          role: "Co-Lead",
          image:
            "images/team-members/dev vrat.png",
          linkedIn: "https://www.linkedin.com/in/dev-vrat-9a0781276/",
        },
        {
          id: 3,
          name: "Dhananjay Yadav",
          role: "Senior Associate",
          image:
            "images/team-members/dhananjay yadav.png",
          linkedIn:
            "https://www.linkedin.com/in/dhananjay-yadav-a5b06b2b9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        },
      ],
    },
    {
      id: "anchoring",
      name: "Anchoring Team",
      members: [
        {
          id: 1,
          name: "Vartika Tiwari",
          role: "Lead",
          image:
            "https://cloud.appwrite.io/v1/storage/buckets/67cb1acf001bdb8c4c45/files/67cb5ebe003930a593e4/view?project=67cb1a5d0022c5a29d3c&mode=admin",
          linkedIn: "https://www.linkedin.com/in/vartika-tiwari-1a97b8289",
        },
        {
          id: 2,
          name: "Manishika Gupta",
          role: "Co-Lead",
          image:
            "images/team-members/MANISHIKA GUPTA 23BAI11303.jpeg",
          linkedIn: "https://www.linkedin.com/company/notion_vit/posts/?feedView=all",
        },
        {
          id: 3,
          name: "Ritika Singh",
          role: "Junior Associate",
          image:
            "images/team-members/ritika singh .png",
          linkedIn: "https://www.linkedin.com/in/ritika-singh-838a33276",
        },
        // {
        //   id: 4,
        //   name: "Snigdha Josh",
        //   role: "Junior Associate",
        //   image:
        //     "https://cloud.appwrite.io/v1/storage/buckets/67cb1acf001bdb8c4c45/files/67cb5eaf0033d126c0a2/view?project=67cb1a5d0022c5a29d3c&mode=admin",
        //   linkedIn: "https://www.linkedin.com/in/snigdha-joshi-4a4b76311",
        // },
        {
          id: 5,
          name: "Muskan Pathak",
          role: "Junior Associate",
          image:
            "images/team-members/muskan pathak.png",
          linkedIn: "https://www.linkedin.com/company/notion_vit/posts/?feedView=all",
        },
        {
          id: 6,
          name: "Aman Ankur",
          role: "Junior Associate",
          image:
            "images/team-members/aman ankur.png",
          linkedIn: "https://www.linkedin.com/in/aa3111s",
        },
      ],
    },
  ]

  // Find the active team
  const activeTeamData = teamCategories.find((team) => team.id === activeTeam) || teamCategories[0]

  return (
    <div className="container mx-auto px-6 py-32 md:py-40">
      <section className="w-full mb-20">
        <div className="relative h-[60vh] overflow-hidden">
          <img
            src="https://cloud.appwrite.io/v1/storage/buckets/67cb1acf001bdb8c4c45/files/67cb62a9000d982bd3eb/view?project=67cb1a5d0022c5a29d3c&mode=admin"
            alt="Notion Community Team"
            className="w-full h-full object-contain"
          />
        </div>
      </section>
      <h1 className="text-4xl font-bold mb-12 text-center">Our Team</h1>

      <div className="max-w-6xl mx-auto">
        {/* Faculty Coordinators Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-medium inter text-center mb-2">Faculty Coordinators</h2>
          <p className="text-center text-gray-600 mb-10">The guiding light of the Notion Community.</p>

          <div className="flex justify-center">
            {facultyCoordinators.map((faculty) => (
              <div
                key={faculty.id}
                className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden w-64 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:z-10"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={faculty.image || "/placeholder.svg"}
                    alt={faculty.name}
                    className="w-full h-full object-contain transition-all duration-300"
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
        </section>

        {/* Board Members Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-medium inter text-center mb-2">Board Members</h2>
          <p className="text-center text-gray-600 mb-10">The leaders steering the community forward.</p>

          <div className="flex flex-wrap justify-center gap-8">
            {boardMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden w-64 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:z-10"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-contain transition-all duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <h4 className="text-lg font-medium">{member.name}</h4>
                  <p className="text-gray-600">({member.role})</p>
                  <div className="flex justify-center mt-2">
                    <a href={member.linkedIn} target="_blank" rel="noopener noreferrer" className="text-blue-600">
                      <Linkedin size={24} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Administrators Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-medium inter text-center mb-2">Administrators</h2>
          <p className="text-center text-gray-600 mb-10">The leaders steering the community forward.</p>

          <div className="flex flex-wrap justify-center gap-6">
            {administrators.map((admin) => (
              <div
                key={admin.id}
                className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden w-64 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:z-10"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={admin.image || "/placeholder.svg"}
                    alt={admin.name}
                    className="w-full h-full object-contain transition-all duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <h4 className="text-lg font-medium">{admin.name}</h4>
                  <p className="text-gray-600">({admin.role})</p>
                  <div className="flex justify-center mt-2">
                    <a href={admin.linkedIn} target="_blank" rel="noopener noreferrer" className="text-blue-600">
                      <Linkedin size={24} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Team Categories Section */}
        <section className="mb-10">
          <h2 className="text-3xl font-medium inter text-center mb-6">{activeTeamData.name}</h2>
          <div className="flex justify-center">
            <nav className="grid grid-cols-2 md:grid-cols-4 lg:flex lg:flex-row lg:justify-center gap-4 max-w-6xl mx-auto px-4">
              {teamCategories.map((team) => (
                <button
                  key={team.id}
                  className={`px-4 py-2 rounded-full whitespace-nowrap transition-all duration-300 transform hover:scale-105 ${activeTeam === team.id
                      ? "bg-black text-white"
                      : "bg-white/80 backdrop-blur-sm text-black hover:bg-gray-100"
                    } inter font-medium`}
                  onClick={() => setActiveTeam(team.id)}
                >
                  {team.name}
                </button>
              ))}
            </nav>

          </div>
        </section>

        <div className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activeTeamData.members.map((member) => (
              <div
                key={member.id}
                className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-xl hover:z-10"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-contain transition-all duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <h4 className="text-lg font-medium">{member.name}</h4>
                  <p className="text-gray-600">({member.role})</p>
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

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Join Our Team</h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-8">
            We're always looking for passionate students to join our team. If you're interested in digital productivity,
            event planning, content creation, or community building, we'd love to have you!
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition"
          >
            Apply to Join
          </button>
          <JoinUsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
      </div>
    </div>
  )
}

export default TeamPage

