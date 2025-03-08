"use client"

import type React from "react"

import { X } from "lucide-react"
import { useEffect, useState } from "react"
import ThankYouModal from "./ThankYouModal"

interface JoinUsModalProps {
  isOpen: boolean
  onClose: () => void
}

const JoinUsModal: React.FC<JoinUsModalProps> = ({ isOpen, onClose }) => {
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

  const handleJoinWhatsApp = () => {
    // Open WhatsApp link
    window.open("https://chat.whatsapp.com/L6ucA08piwVLw1N0hmyCun", "_blank")

    // Show thank you modal
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
                src="https://cloud.appwrite.io/v1/storage/buckets/67cb1acf001bdb8c4c45/files/67cb744a003d5f2e06bb/view?project=67cb1a5d0022c5a29d3c&mode=admin"
                alt="Person drawing"
                className="w-48 h-48 object-contain mb-6"
              />

              <p className="text-center text-lg mb-8">
                We're <span className="text-red-500 font-bold">not</span> hiring at the moment, but you can join our
                WhatsApp community to stay updated!
              </p>

              <div className="flex space-x-4 mt-4">
                <button
                  onClick={handleJoinWhatsApp}
                  className="bg-[#25D366] text-white p-3 rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
                >
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <span>Join WhatsApp Group</span>
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
            <p className="text-xl font-medium mb-4">Thank you for joining!</p>
            <p className="text-gray-600 mt-2">You should now be redirected to the WhatsApp group.</p>
          </div>
        }
      />
    </>
  )
}

export default JoinUsModal

