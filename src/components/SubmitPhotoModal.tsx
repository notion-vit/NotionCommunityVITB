"use client"

import type React from "react"
import { X } from "lucide-react"
import { useEffect, useState } from "react"
import ThankYouModal from "./ThankYouModal"

interface SubmitPhotoModalProps {
  isOpen: boolean
  onClose: () => void
}

const SubmitPhotoModal: React.FC<SubmitPhotoModalProps> = ({ isOpen, onClose }) => {
  const [mounted, setMounted] = useState(false)
  const [showThankYou, setShowThankYou] = useState(false)

  useEffect(() => {
    setMounted(true)

    if (isOpen) {
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  const handleEmailClick = () => {
    window.location.href =
      "mailto:vishalojha628@gmail.com?subject=Photo%20Submission&body=Hello%2C%0A%0AI%20would%20like%20to%20submit%20photos%20for%20the%20gallery.%0A%0ABest%20regards"
    setShowThankYou(true)
    onClose()
  }

  if (!mounted || !isOpen) return null

  return (
    <>
      <div
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-50"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose()
        }}
      >
        <div
          className="relative bg-white rounded-lg max-w-md w-full m-4 transform transition-all duration-300 ease-out"
          style={{
            animation: "modalSlideIn 0.3s ease-out",
          }}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
            title="Close"
          >
            <X size={24} />
          </button>

          <div className="p-8">
            <div className="flex flex-col items-center justify-center">
              <img
                src="https://github.com/notion-vit/NotionCommunityVITB/blob/main/assets/trial1.png?raw=true"
                alt="Person drawing"
                className="w-48 h-48 object-contain mb-6"
              />

              <p className="text-center text-lg mb-8">
                Please email your photos to us, and we'll add them to the gallery!
              </p>

              <div className="flex space-x-4 mt-4">
                <button
                  onClick={handleEmailClick}
                  className="bg-red-500 text-white p-3 rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
                >
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                    <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z" />
                  </svg>
                  <span>Send Photos via Email</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ThankYouModal
        isOpen={showThankYou}
        onClose={() => setShowThankYou(false)}
        message={
          <div className="text-center">
            <p className="text-xl font-medium mb-4">Thank you!</p>
            <p className="text-gray-600">You will be redirected to your email client.</p>
            <p className="text-gray-600 mt-2">Please send your photos to notion@vitbhopal.ac.in</p>
          </div>
        }
      />
    </>
  )
}

export default SubmitPhotoModal

