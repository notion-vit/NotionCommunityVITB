"use client"

import type React from "react"

import Modal from "./Modal"

interface ThankYouModalProps {
  isOpen: boolean
  onClose: () => void
  message?: React.ReactNode
}

const ThankYouModal: React.FC<ThankYouModalProps> = ({ isOpen, onClose, message }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Thank You!">
      <div className="py-6">
        <div className="mb-6 text-center">
          <img
            src="https://cloud.appwrite.io/v1/storage/buckets/67cb1acf001bdb8c4c45/files/67cb744a003d5f2e06bb/view?project=67cb1a5d0022c5a29d3c&mode=admin"
            alt="Thank you illustration"
            className="w-32 h-32 mx-auto"
          />
        </div>

        {typeof message === "string" ? (
          <p className="text-xl font-medium mb-4 text-center">{message || "Thank you for your submission!"}</p>
        ) : (
          message || <p className="text-xl font-medium mb-4 text-center">Thank you for your submission!</p>
        )}

        <div className="text-center mt-6">
          <button onClick={onClose} className="bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition">
            Close
          </button>
        </div>
      </div>
    </Modal>
  )
}

export default ThankYouModal

