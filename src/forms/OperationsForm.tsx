
"use client"

import { useState } from "react"
import { ArrowLeft, User, BookOpen, Linkedin, Mail, Settings, Calendar, Users, TrendingUp } from "lucide-react"
import { useNavigate } from "react-router-dom"

const OperationsForm = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState<{
    fullName: string;
    regNo: string;
    linkedin: string;
    email: string;
    phone: string;
    department: string;
    year: string;
    q1: string;
    q2: string;
    q3: string;
    q4: string;
  }>({
    fullName: "",
    regNo: "",
    linkedin: "",
    email: "",
    phone: "",
    department: "",
    year: "",
    q1: "",
    q2: "",
    q3: "",
    q4: ""
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError(null)

    try {
      const scriptUrl = 'https://script.google.com/macros/s/AKfycbw6cubJkrF2UQYw1Z04qWCoL9AAmfJRtvL0G4I4g7yyilFM7WMLE-0pu05jCMHZKJGcyQ/exec'
      
      const formDataEncoded = new URLSearchParams()
      formDataEncoded.append('fullName', formData.fullName)
      formDataEncoded.append('regNo', formData.regNo)
      formDataEncoded.append('linkedin', formData.linkedin)
      formDataEncoded.append('email', formData.email)
      formDataEncoded.append('phone', formData.phone)
      formDataEncoded.append('department', formData.department)
      formDataEncoded.append('year', formData.year)
      formDataEncoded.append('team', 'Operations')
      formDataEncoded.append('q1', formData.q1)
      formDataEncoded.append('q2', formData.q2)
      formDataEncoded.append('q3', formData.q3)
      formDataEncoded.append('q4', formData.q4)

      const response = await fetch(scriptUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formDataEncoded
      })

      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.status} ${response.statusText}`)
      }

      // Attempt to parse response (Google Apps Script typically returns JSON)
      const result = await response.json()
      if (result.status !== 'success') {
        throw new Error('Form submission failed on the server')
      }

      // Reset form if submission is successful
      setFormData({
        fullName: "",
        regNo: "",
        linkedin: "",
        email: "",
        phone: "",
        department: "",
        year: "",
        q1: "",
        q2: "",
        q3: "",
        q4: ""
      })
      
      alert('Thank you for your application to the Operations Team! We\'ll review it and get back to you soon.')

    } catch (error) {
      console.error("Error submitting form: ", error)
      setSubmitError('Failed to submit form. Please try again or contact us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen pt-32 px-4 pb-10 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-8">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center text-gray-600 hover:text-gray-800 transition-colors"
            disabled={isSubmitting}
          >
            <ArrowLeft size={20} className="mr-2" />
            Back
          </button>
          <h1 className="text-3xl font-bold text-center flex-1">Operations Team Application</h1>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-50 rounded-full mb-4">
              <Settings size={32} className="text-gray-900" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Join Our Operations Team</h2>
            <p className="text-gray-600 mb-4">
              Be the backbone of our community events and activities. Manage logistics, coordinate teams, 
              and ensure everything runs smoothly behind the scenes to create amazing experiences for everyone.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="flex flex-col items-center p-4 bg-gray-50 rounded-xl">
                <Calendar size={24} className="text-gray-900 mb-2" />
                <span className="text-sm font-medium text-gray-700">Event Planning</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-gray-50 rounded-xl">
                <Users size={24} className="text-gray-900 mb-2" />
                <span className="text-sm font-medium text-gray-700">Logistics Management</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-gray-50 rounded-xl">
                <TrendingUp size={24} className="text-gray-900 mb-2" />
                <span className="text-sm font-medium text-gray-700">Resource Optimization</span>
              </div>
            </div>
          </div>
        </div>

        {submitError && (
          <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-xl mb-6">
            {submitError}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Personal Information Section */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold mb-6 pb-2 border-b border-gray-100 flex items-center">
              <User size={20} className="mr-2 text-gray-700" />
              Personal Information
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="flex items-center text-sm font-medium text-gray-700">
                  <User size={16} className="mr-2" />
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-black transition-all disabled:opacity-50"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="space-y-2">
                <label className="flex items-center text-sm font-medium text-gray-700">
                  <BookOpen size={16} className="mr-2" />
                  Registration Number *
                </label>
                <input
                  type="text"
                  name="regNo"
                  value={formData.regNo}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-black transition-all disabled:opacity-50"
                  placeholder="Enter your registration number"
                />
              </div>

              <div className="space-y-2">
                <label className="flex items-center text-sm font-medium text-gray-700">
                  <Linkedin size={16} className="mr-2" />
                  LinkedIn Profile
                </label>
                <input
                  type="url"
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-black transition-all disabled:opacity-50"
                  placeholder="https://linkedin.com/in/yourprofile"
                />
              </div>

              <div className="space-y-2">
                <label className="flex items-center text-sm font-medium text-gray-700">
                  <Mail size={16} className="mr-2" />
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-black transition-all disabled:opacity-50"
                  placeholder="Enter your email address"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-black transition-all disabled:opacity-50"
                  placeholder="Enter your phone number"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Department *
                </label>
                <input
                  type="text"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-black transition-all disabled:opacity-50"
                  placeholder="e.g., CSE, ECE, etc."
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Current Year *
                </label>
                <select
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-black transition-all disabled:opacity-50"
                >
                  <option value="">Select your year</option>
                  <option value="1st">1st Year</option>
                  <option value="2nd">2nd Year</option>
                  <option value="3rd">3rd Year</option>
                  <option value="4th">4th Year</option>
                </select>
              </div>
            </div>
          </div>

          {/* Operations Team Specific Questions */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold mb-6 pb-2 border-b border-gray-100 flex items-center">
              <Settings size={20} className="mr-2 text-gray-700" />
              Operations Team Questions
            </h2>
            
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  1. You are given the responsibility to organize a Notion Community event for 100 students which is scheduled to take place 10 days from now. Share your step-by-step action plan for smooth execution. *
                </label>
                <textarea
                  name="q1"
                  value={formData.q1}
                  onChange={handleChange}
                  required
                  rows={5}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-black transition-all disabled:opacity-50"
                  placeholder="Outline your step-by-step plan for event organization..."
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  2. Imagine you are responsible for promoting an upcoming Notion Community event in our college. Your goal is to ensure maximum participation. Describe your strategy for the same. *
                </label>
                <textarea
                  name="q2"
                  value={formData.q2}
                  onChange={handleChange}
                  required
                  rows={4}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-black transition-all disabled:opacity-50"
                  placeholder="Describe your promotion and outreach strategy..."
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  3. If we had very limited budget for an event, how would you still make it engaging for participants? *
                </label>
                <textarea
                  name="q3"
                  value={formData.q3}
                  onChange={handleChange}
                  required
                  rows={4}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-black transition-all disabled:opacity-50"
                  placeholder="Share your creative low-budget engagement ideas..."
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  4. Suggest some fun activity we can add to make our events more interactive for participants. *
                </label>
                <textarea
                  name="q4"
                  value={formData.q4}
                  onChange={handleChange}
                  required
                  rows={4}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-black transition-all disabled:opacity-50"
                  placeholder="Propose interactive activities and engagement ideas..."
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-black text-white font-semibold py-4 px-8 rounded-xl hover:bg-gray-800 transition-colors transform hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default OperationsForm
