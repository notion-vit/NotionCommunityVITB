"use client"

import type React from "react"

import { X } from "lucide-react"
import { useEffect, useState } from "react"

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    if (isOpen) {
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  if (!mounted || !isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-50"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div
        className="relative bg-white rounded-lg max-w-md w-full m-4 transform transition-all duration-300 ease-out max-h-[90vh] overflow-y-auto"
        style={{
          animation: "modalSlideIn 0.3s ease-out",
        }}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="text-xl font-medium">{title}</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 transition-colors" title="Close">
            <X size={24} />
          </button>
        </div>

        <div className="p-6">{children}</div>
      </div>
    </div>
  )
}

export default Modal

