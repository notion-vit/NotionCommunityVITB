"use client"

import type React from "react"
import { Mail, Instagram, Linkedin } from "lucide-react"
import { Link } from "react-router-dom"

const Footer: React.FC = () => {
  return (
    <footer className="bg-transparent backdrop-blur-md py-8 px-6 md:px-12 lg:px-24 mt-auto">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8 border-b pb-8 mb-6">
          {/* Left Column */}
          <div>
            <h3 className="text-2xl mb-4 font-medium italic">Notion Community, VIT Bhopal</h3>
            <p className="text-gray-600 leading-relaxed">
              Notion Community is a group of enthusiastic learners focused on productivity, collaboration, and knowledge
              sharing through Notion. We aim to create a space where students can learn, organize, and grow.
            </p>
          </div>
          {/* Middle Column */}
          <div className="md:border-l md:border-r px-8">
            <h3 className="text-2xl mb-4 font-medium italic">Updates</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-medium mb-2">Events and Workshops</h4>
                <p className="text-gray-600">Coming Soon!</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Recruitment</h4>
                <p className="text-gray-600">Coming Soon!</p>
              </div>
            </div>
          </div>
          {/* Right Column */}
          <div>
            <h3 className="text-2xl mb-4 font-medium italic">Contact Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/notion.vit/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 text-white hover:opacity-90 transition-opacity hover:scale-110"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://chat.whatsapp.com/L6ucA08piwVLw1N0hmyCun"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-green-500 text-white hover:opacity-90 transition-opacity hover:scale-110"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/notion_vit/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white hover:opacity-90 transition-opacity hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:notion@vitbhopal.ac.in?subject=Inquiry&body"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-red-500 text-white hover:opacity-90 transition-opacity hover:scale-110"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center text-sm">
          <p className="text-gray-600 mb-2">© {new Date().getFullYear()} Notion Community. All rights reserved</p>
          <div className="flex justify-center space-x-4 text-gray-600">
            <Link
              to="https://www.notion.so/notion/Terms-and-Privacy-28ffdd083dc3473e9c2da6ec011b58ac"
              className="hover:underline"
            >
              Privacy Policy
            </Link>
            <span>|</span>
            <Link
              to="https://www.notion.so/notion/Terms-and-Privacy-28ffdd083dc3473e9c2da6ec011b58ac"
              className="hover:underline"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

