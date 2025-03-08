"use client"

import type React from "react"
import { Link } from "react-router-dom"

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-32 md:py-40">
      <h1 className="text-4xl font-bold mb-8 text-center">About Us</h1>

      <div className="max-w-4xl mx-auto">
        <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-700 mb-6">
            Notion Community at VIT Bhopal University is dedicated to empowering students with digital productivity
            tools and skills. We believe in the power of organized information and collaborative learning to enhance
            academic success and professional growth.
          </p>

          <h2 className="text-2xl font-bold mb-4">What We Do</h2>
          <p className="text-gray-700 mb-6">
            Our community focuses on teaching students how to leverage Notion for academic organization, project
            management, and personal knowledge management. Through workshops, collaborative projects, and peer learning,
            we help students master digital tools that will serve them throughout their academic and professional
            careers.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-gray-50/90 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Workshops & Training</h3>
              <p className="text-gray-700">
                Regular sessions on Notion features, templates, and productivity techniques tailored for students.
              </p>
            </div>

            <div className="bg-gray-50/90 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Collaborative Projects</h3>
              <p className="text-gray-700">
                Team-based initiatives where members apply Notion skills to solve real campus challenges.
              </p>
            </div>

            <div className="bg-gray-50/90 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Resource Sharing</h3>
              <p className="text-gray-700">
                A library of templates, guides, and best practices for academic and personal use.
              </p>
            </div>

            <div className="bg-gray-50/90 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Networking</h3>
              <p className="text-gray-700">
                Connecting students across disciplines who share an interest in digital productivity and organization.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="flex flex-col items-center justify-center h-screen space-y-8">
              <img
                src="https://cloud.appwrite.io/v1/storage/buckets/67cb1acf001bdb8c4c45/files/67cb4ef000378337629a/view?project=67cb1a5d0022c5a29d3c&mode=admin"
                alt="Students working together"
                className="w-full max-w-md h-auto rounded-lg p-4"
              />
              <img
                src="https://cloud.appwrite.io/v1/storage/buckets/67cb1acf001bdb8c4c45/files/67cb50760012f5d0103f/view?project=67cb1a5d0022c5a29d3c&mode=admin"
                alt="Students collaborating"
                className="w-full max-w-md h-auto rounded-lg p-4"
              />
            </div>

            <div className="order-1 md:order-2">
              <h2 className="text-2xl font-bold mb-4">About Our Community</h2>
              <p className="text-gray-700 mb-6">
                The Notion Community at VIT Bhopal fosters learning and growth in technology, entrepreneurship, and
                productivity. With over 1200+ members, it offers workshops, competitions, and projects in AI, social
                media, and innovation, helping students explore personal and professional development.
              </p>

              <p className="text-gray-700 mb-6">
                Empower students to utilize Notion’s potential by integrating notes, tasks, wikis, and databases into
                one platform. Foster collaboration, teamwork, and digital literacy to drive innovation and positive
                change.
              </p>

              <p className="text-gray-700 mb-6">
                Provide tools and guidance for students to explore ideas, innovate, and achieve entrepreneurial goals
                through collaboration and knowledge-sharing within a supportive community.
              </p>

              <p className="text-gray-700 mb-6">
                Bridge academics and industry by leveraging Notion for collaboration, creativity, and skill-building.
                Inspire students to thrive in academics, projects, and careers through effective use of digital tools.
              </p>

              <h2 className="text-2xl font-bold mb-4">Join Us</h2>
              <p className="text-gray-700 mb-6">
                Whether you're a Notion expert or completely new to the platform, our community welcomes all VIT Bhopal
                students who are interested in improving their digital organization skills. No prior experience
                required—just bring your curiosity and willingness to learn!
              </p>

              <div className="mt-8">
                <Link to="/team" className="bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition">
                  Become a Member
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage

