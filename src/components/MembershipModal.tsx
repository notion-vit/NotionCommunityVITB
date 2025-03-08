"use client"

import type React from "react"

import { useState } from "react"
import Modal from "./Modal"
import ThankYouModal from "./ThankYouModal"

interface MembershipModalProps {
  isOpen: boolean
  onClose: () => void
}

const MembershipModal: React.FC<MembershipModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    regNumber: "",
    year: "",
    branch: "",
    interests: "",
  })
  const [showThankYou, setShowThankYou] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      // Show thank you modal
      setShowThankYou(true)
      onClose()
      setIsSubmitting(false)
    }, 1000)
  }

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} title="Become a Member">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="firstName">
                First Name *
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-black bg-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="lastName">
                Last Name *
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-black bg-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              VIT Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              pattern=".+@vitbhopal\.ac\.in"
              placeholder="example@vitbhopal.ac.in"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-black bg-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="regNumber">
              Registration Number *
            </label>
            <input
              type="text"
              id="regNumber"
              name="regNumber"
              value={formData.regNumber}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-black bg-white"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="year">
                Year of Study *
              </label>
              <select
                id="year"
                name="year"
                value={formData.year}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-black bg-white"
              >
                <option value="">Select Year</option>
                <option value="1">1st Year</option>
                <option value="2">2nd Year</option>
                <option value="3">3rd Year</option>
                <option value="4">4th Year</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="branch">
                Branch *
              </label>
              <input
                type="text"
                id="branch"
                name="branch"
                value={formData.branch}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-black bg-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="interests">
              What interests you about Notion? *
            </label>
            <textarea
              id="interests"
              name="interests"
              value={formData.interests}
              onChange={handleChange}
              required
              rows={3}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-black bg-white"
            ></textarea>
          </div>

          <div className="flex justify-end space-x-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors bg-white"
              disabled={isSubmitting}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Join Community"}
            </button>
          </div>
        </form>
      </Modal>

      <ThankYouModal
        isOpen={showThankYou}
        onClose={() => setShowThankYou(false)}
        message={
          <div className="text-center">
            <p className="text-xl font-medium mb-4">Welcome to the Notion Community!</p>
            <p className="text-gray-600">
              Your application has been sent to <strong>notion@vitbhopal.ac.in</strong>
            </p>
            <p className="text-gray-600 mt-2">We're excited to have you join us!</p>
          </div>
        }
      />
    </>
  )
}

export default MembershipModal

