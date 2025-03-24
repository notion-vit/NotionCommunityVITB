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
        "https://github.com/notion-vit/NotionCommunityVITB/blob/main/images/team-members/WhatsApp%20Image%202025-03-24%20at%2021.39.05.jpeg?raw=true",
      linkedIn: "https://www.linkedin.com/in/rishavmishra002",
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
      name: "Tejus Gupta",
      role: "Vice-President",
      image:
        "https://github.com/notion-vit/NotionCommunityVITB/blob/main/images/team-members/WhatsApp%20Image%202025-03-24%20at%2021.39.24.jpeg?raw=true",
      linkedIn:
        "https://www.linkedin.com/in/iamtejusgupta?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
  ]

  // Administrators
  const administrators: TeamMember[] = [
    {
      id: 1,
      name: "Saniya Saw",
      role: "Secretary",
      image:
        "https://github.com/notion-vit/NotionCommunityVITB/blob/main/images/team-members/saniya.png?raw=true",
      linkedIn:
        "https://www.linkedin.com/in/saniya-saw-5b7817278?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      id: 2,
      name: "Aadish Jadge",
      role: "Executive Maneger",
      image:
        "https://github.com/notion-vit/NotionCommunityVITB/blob/main/images/team-members/aadish%20jadge.png?raw=true",
      linkedIn: "https://www.linkedin.com/in/aadishjagde/",
    },
    {
      id: 3,
      name: "Gauri Makker",
      role: "Executive Maneger",
      image:
        "https://github.com/notion-vit/NotionCommunityVITB/blob/main/images/team-members/Gauri%20Makker%2023bce11131.jpeg?raw=true",
      linkedIn: "http://linkedin.com/in/gauri-makker",
    },
    {
      id: 4,
      name: "Riya Dixit",
      role: "Executive Manager",
      image:
        "https://github.com/notion-vit/NotionCommunityVITB/blob/main/images/team-members/riya%20dixit.jpg?raw=true",
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
            "https://github.com/notion-vit/NotionCommunityVITB/blob/main/images/team-members/Anushka%20Dubey%2023bce11492.jpg?raw=true",
          linkedIn: "https://www.linkedin.com/in/anushka-dubey-7b4501215/",
        },
        {
          id: 2,
          name: "Shauryaraje Yadav",
          role: "Co-Lead",
          image:
            "https://github.com/notion-vit/NotionCommunityVITB/blob/main/images/team-members/shauryaraje%20yadav.png?raw=true",
          linkedIn: "https://www.linkedin.com/in/shauryaraje/",
        },
        {
          id: 3,
          name: "Manya Raghuwanshi",
          role: "Junior Associates",
          image:
            "https://github.com/notion-vit/NotionCommunityVITB/blob/main/images/team-members/manya%20raghuwanshi.png?raw=true",
          linkedIn:
            "https://www.linkedin.com/in/manya-raghuwanshi-9928a9332?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        },
        {
          id: 4,
          name: "Sparsh Khatwani",
          role: "Senior Associate",
          image:
            "https://github.com/notion-vit/NotionCommunityVITB/blob/main/images/team-members/SparshKhatwani_techteam%20-%20Sparsh%20Khatwani%2023bce10090.jpg?raw=true?height=300&width=300",
            // image not stored in the images folder so leaving it in appwrite link itself
          linkedIn: "https://www.linkedin.com/in/sparshkhatwani",
        },
        {
          id: 5,
          name: "Nikhil Hegde",
          role: "Senior Associate",
          image:
            "https://github.com/notion-vit/NotionCommunityVITB/blob/main/images/team-members/Nikhil_Hegde_tech_team%20-%20NIKHIL%20ANANT%20HEGDE%2024BCE10223.jpg?raw=true?height=300&width=300",
            // same issue
          linkedIn: "http://www.linkedin.com/in/nikhil-hegde-897b59328",
        },
        {
          id: 6,
          name: "Kalyanee Deshmukh",
          role: "Junior Associates",
          image:
            "https://github.com/notion-vit/NotionCommunityVITB/blob/main/images/team-members/kalyaneedeshmukh_techteam%20-%20KALYANEE%20DESHMUKH%2024BAC10046.jpg?raw=true?height=300&width=300",
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
            "https://github.com/notion-vit/NotionCommunityVITB/blob/main/images/team-members/Arnav%20Nehra%2023bhi10014.png?raw=true",
          linkedIn:
            "https://www.linkedin.com/in/arnav-nehra-76bb2327a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        },
        {
          id: 2,
          name: "Shelly Sharma",
          role: "Co-Lead",
          image:
            "https://github.com/notion-vit/NotionCommunityVITB/blob/main/images/team-members/shelly%20.png?raw=true",
          linkedIn: "https://www.linkedin.com/in/shelly-sharma2004",
        },
        {
          id: 3,
          name: "Krishna Agrawal",
          role: "Senior Associate",
          image:
            "https://github.com/notion-vit/NotionCommunityVITB/blob/main/images/team-members/Krishna%20Agrawal%2023mei10032.jpg?raw=true",
          linkedIn: "https://www.linkedin.com/in/krishna-agrawal-147210280",
        },
        {
          id: 4,
          name: "Prerna",
          role: "Senior Associate",
          image:
            "https://github.com/notion-vit/NotionCommunityVITB/blob/main/images/team-members/prerna.png?raw=true",
          linkedIn: "www.linkedin.com/in/prerna-singh-7b40792a2",
        },
        {
          id: 5,
          name: "Shresth jaiswal",
          role: "Senior Associate",
          image:
            "https://github.com/notion-vit/NotionCommunityVITB/blob/main/images/team-members/shresth%20jaiswal.png?raw=true",
          linkedIn:
            "https://www.linkedin.com/in/priyanshu-82514228a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        },
        {
          id: 6,
          name: "Yokesh T",
          role: "Junior Associates",
          image:
            "https://github.com/notion-vit/NotionCommunityVITB/blob/main/images/team-members/Yokesh%20T.png?raw=true",
          linkedIn:
            "https://www.linkedin.com/in/yokesh-t-98937a303?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        },
        {
          id: 7,
          name: "Mehul khare",
          role: "Junior Associates",
          image:
            "https://github.com/notion-vit/NotionCommunityVITB/blob/main/images/team-members/MEHUL%20KHARE.png?raw=true",
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
            "https://github.com/notion-vit/NotionCommunityVITB/blob/main/images/team-members/saurabh%20(1).jpg?raw=true?height=300&width=300",
          linkedIn: "https://in.linkedin.com/in/its0saurabh",
        },
        {
          id: 2,
          name: "Mohammed Shaariq",
          role: "Co-Lead",
          image:
            "https://github.com/notion-vit/NotionCommunityVITB/blob/main/images/team-members/MD%20SHAARIQ.png?raw=true",
          linkedIn:
            "https://www.linkedin.com/in/mohammed-shaariq-0108b1287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        },
        {
          id: 3,
          name: "Krish Kumar",
          role: "Senior Associate",
          image:
            "https://github.com/notion-vit/NotionCommunityVITB/blob/main/images/team-members/krish%20kumar.png?raw=true",
          linkedIn: "hthttps://www.linkedin.com/in/krish-verma-784944330/",
        },
        {
          id: 4,
          name: "Vedant Patidar",
          role: "Junior Associates",
          image:
            "https://github.com/notion-vit/NotionCommunityVITB/blob/main/images/team-members/vedant%20patidar.png?raw=true",
          linkedIn:
            "https://www.linkedin.com/in/vedant-patidar-2ba146242?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        },
        {
          id: 4,
          name: "Manya Jajodia",
          role: "Junior Associates",
          image:
            "https://github.com/notion-vit/NotionCommunityVITB/blob/main/images/team-members/manya%20jajodia.png?raw=true",
          linkedIn: "https://www.linkedin.com/in/manya-jajodia-28747033a/",
        },
        {
          id: 6,
          name: "Yug Pareek",
          role: "Senior Associate",
          image:
            "https://github.com/notion-vit/NotionCommunityVITB/blob/main/images/team-members/yug%20pareek.png?raw=true",
          linkedIn: "https://www.linkedin.com/in/yug-pareek-4657a2330/",
        },
        {
          id: 7,
          name: "Mokshad Bunde",
          role: "Junior Associates",
          image:
            "images/team-members/mokshad bunde.pnghttps://github.com/notion-vit/NotionCommunityVITB/blob/main/images/team-members/mokshad%20bunde.png?raw=true",
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
            "https://github.com/notion-vit/NotionCommunityVITB/blob/main/images/team-members/Lokesh%20Bhanudas%20Bagade%2023BCE11746.jpg?raw=true",
          linkedIn:
            "https://www.linkedin.com/in/lokeshbagade?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        },
        {
          id: 2,
          name: "Manaswi Suraskar",
          role: "Co-Lead",
          image:
            "https://github.com/notion-vit/NotionCommunityVITB/blob/main/images/team-members/Manaswi%20Suraskar%20%20-%20Manaswi%20Shantaram%20Suraskar%2023bcy10258.jpg?raw=true",
          linkedIn:
            "https://www.linkedin.com/in/manaswi-suraskar-bb131b28a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        },
        {
          id: 3,
          name: "Tarpita Karnam",
          role: "Senior Associate",
          image:
            "https://github.com/notion-vit/NotionCommunityVITB/blob/main/images/team-members/Tarpita%20Karnam%2023bhi10124.jpg?raw=true",
          linkedIn:
            "https://www.linkedin.com/in/tarpita-karnam-8208b5287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        },
        {
          id: 4,
          name: "Iram Khan",
          role: "Senior Associate",
          image:
            "https://github.com/notion-vit/NotionCommunityVITB/blob/main/images/team-members/iram%20khan.png?raw=true",
          linkedIn:
            "https://www.linkedin.com/in/iram-khan-3a4b80280?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        },
        {
          id: 5,
          name: "Niharika Pandey",
          role: "Senior Associate",
          image:
            "https://github.com/notion-vit/NotionCommunityVITB/blob/main/images/team-members/niharika.png?raw=true",
          linkedIn:
            "https://www.linkedin.com/in/niharika-pandey-4335132b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        },
        {
          id: 6,
          name: "Anamika",
          role: "Senior Associate",
          image:
            "https://github.com/notion-vit/NotionCommunityVITB/blob/main/images/team-members/anamika.png?raw=true",
          linkedIn:
            "https://www.linkedin.com/in/niharika-pandey-4335132b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        },
        {
          id: 7,
          name: "shanmugha priya",
          role: "Junior Associates",
          image:
            "https://github.com/notion-vit/NotionCommunityVITB/blob/main/images/team-members/shanmugha%20priya.png?raw=true",
          linkedIn:
            "https://www.linkedin.com/in/shanmugha-priya-6050b131a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        },
        {
          id: 8,
          name: "ANANYA GAUR",
          role: "Senior Associate",
          image:
            "https://github.com/notion-vit/NotionCommunityVITB/blob/main/images/team-members/ananya%20gaur.png?raw=true",
          linkedIn: "https://www.linkedin.com/in/ananya-gaur-268b0528b",
        },
        {
          id: 9,
          name: "Manasvi Maheshwari",
          role: "Senior Associate",
          image:
            "https://github.com/notion-vit/NotionCommunityVITB/blob/main/images/team-members/manasvi%20maheshwari.png?raw=true",
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
            "https://github.com/notion-vit/NotionCommunityVITB/blob/main/images/team-members/swarup%20futane.jpeg?raw=true",
          linkedIn: "https://www.linkedin.com/in/swarup-futane-087690303",
        },
        {
          id: 2,
          name: "Naman Gupta",
          role: "Co-Lead",
          image:
            "https://github.com/notion-vit/NotionCommunityVITB/blob/main/images/team-members/naman%20gupta.jpg?raw=true",
          linkedIn: "https://www.linkedin.com/in/naman-gupta-3983b2238",
        },
        {
          id: 3,
          name: "Hardik Verma",
          role: "Senior Associate",
          image:
            "https://github.com/notion-vit/NotionCommunityVITB/blob/main/images/team-members/Hardik%20Verma%2023bai10915.jpg?raw=true",
          linkedIn: "https://www.linkedin.com/in/hardik-verma-aa6ab3276",
        },
        {
          id: 4,
          name: "Tuhin Rakshit",
          role: "Senior Associate",
          image:
            "https://github.com/notion-vit/NotionCommunityVITB/blob/main/images/team-members/Tuhin%20Rakshit%2023bce10535.jpg?raw=true",
          linkedIn: "https://www.linkedin.com/in/tuhin-rakshit-05511528a",
        },
        {
          id: 5,
          name: "Dheeraj Jangir",
          role: "Junior Associate",
          image:
            "https://github.com/notion-vit/NotionCommunityVITB/blob/main/images/team-members/dheeraj%20jangir.png?raw=true",
          linkedIn: "https://www.linkedin.com/in/dheeraj-jangir-9754b3325",
        },
        {
          id: 6,
          name: "Yash Janiyani",
          role: "Junior Associate",
          image:
            "https://github.com/notion-vit/NotionCommunityVITB/blob/main/images/team-members/yash%20janiyani.png?raw=true",
          linkedIn: "https://www.linkedin.com/in/yash-janiyani-279326271",
        },
      ],
    },
    {
      id: "content",
      name: "Content Team",
      members: [
        // {
        //   id: 1,
        //   name: "Deepti Srivastava",
        //   role: "Lead",
        //   image:
        //     "images/team-members/deepti.png",
        //   linkedIn: "https://www.linkedin.com/in/deepti-srivastava-325329314",
        // },
        {
          id: 2,
          name: "Mudra Khuje",
          role: "Senior Associate",
          image:
            "https://github.com/notion-vit/NotionCommunityVITB/blob/main/images/team-members/mudra%20khuje.png?raw=true",
          linkedIn: "https://www.linkedin.com/in/mudra-khuje-b30b08204",
        },
        {
          id: 3,
          name: "Yoshita Purohit",
          role: "Junior Associate",
          image:
            "https://github.com/notion-vit/NotionCommunityVITB/blob/main/images/team-members/yoshita%20purohit.png?raw=true",
          linkedIn: "https://www.linkedin.com/in/yoshita-purohit-047449327",
        },
        {
          id: 4,
          name: "Anuja Nag",
          role: "Senior Associate",
          image:
            "https://github.com/notion-vit/NotionCommunityVITB/blob/main/images/team-members/anuja%20nag.png?raw=true",
          linkedIn: "https://www.linkedin.com/in/anuja-nag-618380312",
        },
        {
          id: 5,
          name: "Abha Singh",
          role: "Junior Associate",
          image:
            "https://github.com/notion-vit/NotionCommunityVITB/blob/main/images/team-members/abha%20singh.png?raw=true",
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
            "https://github.com/notion-vit/NotionCommunityVITB/blob/main/images/team-members/Adarsh%20-%20Adarsh%20Singh%2023BAI11390.png?raw=true",
          linkedIn: "https://www.linkedin.com/in/ adarsh-singh-go",
        },
        {
          id: 2,
          name: "Dev Vrat",
          role: "Co-Lead",
          image:
            "https://github.com/notion-vit/NotionCommunityVITB/blob/main/images/team-members/dev%20vrat.png?raw=true",
          linkedIn: "https://www.linkedin.com/in/dev-vrat-9a0781276/",
        },
        {
          id: 3,
          name: "Dhananjay Yadav",
          role: "Senior Associate",
          image:
            "https://github.com/notion-vit/NotionCommunityVITB/blob/main/images/team-members/dhananjay%20yadav.png?raw=true",
          linkedIn:
            "https://www.linkedin.com/in/dhananjay-yadav-a5b06b2b9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        },
        {
          id: 3,
          name: "Athrav Patil",
          role: "Junior Associate",
          image:
            "https://github.com/notion-vit/NotionCommunityVITB/blob/main/images/team-members/WhatsApp%20Image%202025-03-24%20at%2022.57.30.jpeg?raw=true",
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
            "https://github.com/notion-vit/NotionCommunityVITB/blob/main/images/team-members/vartika.jpg?raw=true",
          linkedIn: "https://www.linkedin.com/in/vartika-tiwari-1a97b8289",
        },
        {
          id: 2,
          name: "Manishika Gupta",
          role: "Co-Lead",
          image:
            "https://github.com/notion-vit/NotionCommunityVITB/blob/main/images/team-members/MANISHIKA%20GUPTA%2023BAI11303.jpeg?raw=true",
          linkedIn: "https://www.linkedin.com/company/notion_vit/posts/?feedView=all",
        },
        {
          id: 3,
          name: "Ritika Singh",
          role: "Junior Associate",
          image:
            "https://github.com/notion-vit/NotionCommunityVITB/blob/main/images/team-members/ritika%20singh%20.png?raw=true",
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
            "https://github.com/notion-vit/NotionCommunityVITB/blob/main/images/team-members/muskan%20pathak.png?raw=true",
          linkedIn: "https://www.linkedin.com/company/notion_vit/posts/?feedView=all",
        },
        {
          id: 6,
          name: "Aman Ankur",
          role: "Junior Associate",
          image:
            "https://github.com/notion-vit/NotionCommunityVITB/blob/main/images/team-members/aman%20ankur.png?raw=true",
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
            src="https://github.com/notion-vit/NotionCommunityVITB/blob/main/assets/grouppic.jpeg?raw=true"
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

