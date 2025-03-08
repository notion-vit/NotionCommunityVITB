"use client"

import type React from "react"

import { useState } from "react"
import Modal from "./Modal"
import ThankYouModal from "./ThankYouModal"

interface JoinTeamModalProps {
  isOpen: boolean
  onClose: () => void
}

const JoinTeamModal: React.FC<JoinTeamModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    team: "",
    experience: "",
    reason: "",
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
      <Modal isOpen={isOpen} onClose={onClose} title="Apply to Join Our Team">
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="email">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-black bg-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="phone">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-black bg-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="team">
              Preferred Team *
            </label>
            <select
              id="team"
              name="team"
              value={formData.team}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-black bg-white"
            >
              <option value="">Select a team</option>
              <option value="tech">Tech Team</option>
              <option value="operations">Operations Team</option>
              <option value="creative">Creative Team</option>
              <option value="outreach">Outreach Team</option>
              <option value="media">Media Team</option>
              <option value="content">Content Team</option>
              <option value="corporate">Corporate Team</option>
              <option value="anchoring">Anchoring Team</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="experience">
              Relevant Experience
            </label>
            <textarea
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              rows={3}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-black bg-white"
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="reason">
              Why do you want to join? *
            </label>
            <textarea
              id="reason"
              name="reason"
              value={formData.reason}
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
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </button>
          </div>
        </form>
      </Modal>

      <ThankYouModal
        isOpen={showThankYou}
        onClose={() => setShowThankYou(false)}
        message={
          <div className="text-center">
            <p className="text-xl font-medium mb-4">Thank you for your application!</p>
            <p className="text-gray-600">
              Your application has been sent to <strong>notion@vitbhopal.ac.in</strong>
            </p>
            <p className="text-gray-600 mt-2">We'll review your application and get back to you soon.</p>
          </div>
        }
      />
    </>
  )
}

export default JoinTeamModal

