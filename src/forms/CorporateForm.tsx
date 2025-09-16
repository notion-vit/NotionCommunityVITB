
"use client"

import { useState } from "react"
import { ArrowLeft, User, BookOpen, Linkedin, Mail, MessageCircle, Instagram, Twitter, Star, Users, Handshake, Target } from "lucide-react"
import { useNavigate } from "react-router-dom"

const CorporateForm = () => {
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
    q5: string;
    q6: string[];
    q7: string;
    q8: string;
    q9: string;
    q10: string;
    q11: string;
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
    q4: "",
    q5: "",
    q6: [],
    q7: "",
    q8: "",
    q9: "",
    q10: "",
    q11: ""
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

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target
    setFormData(prev => {
      const currentSelection = prev.q6
      if (checked) {
        return { ...prev, q6: [...currentSelection, value] }
      } else {
        return { ...prev, q6: currentSelection.filter(item => item !== value) }
      }
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError(null)

    try {
      const scriptUrl = 'https://script.google.com/macros/s/AKfycbw6cubJkrF2UQYw1Z04qWCoL9AAmfJRtvL0G4I4g7yyilFM7WMLE-0pu05jCMHZKJGcyQ/exec'
      
      // Convert form data to URL-encoded format
      const formDataEncoded = new URLSearchParams()
      formDataEncoded.append('fullName', formData.fullName)
      formDataEncoded.append('regNo', formData.regNo)
      formDataEncoded.append('linkedin', formData.linkedin)
      formDataEncoded.append('email', formData.email)
      formDataEncoded.append('phone', formData.phone)
      formDataEncoded.append('department', formData.department)
      formDataEncoded.append('year', formData.year)
      formDataEncoded.append('team', 'Corporate')
      formDataEncoded.append('q1', formData.q1)
      formDataEncoded.append('q2', formData.q2)
      formDataEncoded.append('q3', formData.q3)
      formDataEncoded.append('q4', formData.q4)
      formDataEncoded.append('q5', formData.q5)
      formDataEncoded.append('q6', formData.q6.join(', '))
      formDataEncoded.append('q7', formData.q7)
      formDataEncoded.append('q8', formData.q8)
      formDataEncoded.append('q9', formData.q9)
      formDataEncoded.append('q10', formData.q10)
      formDataEncoded.append('q11', formData.q11)

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
        q4: "",
        q5: "",
        q6: [],
        q7: "",
        q8: "",
        q9: "",
        q10: "",
        q11: ""
      })
      
      alert('Thank you for your application! We\'ll review it and get back to you soon.')

    } catch (error) {
      console.error("Error submitting form: ", error)
      setSubmitError('Failed to submit form. Please try again or contact us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const toolsOptions = [
    { value: "LinkedIn", label: "LinkedIn", icon: Linkedin },
    { value: "Email", label: "Email", icon: Mail },
    { value: "WhatsApp", label: "WhatsApp", icon: MessageCircle },
    { value: "Instagram", label: "Instagram", icon: Instagram },
    { value: "X(Twitter)", label: "X (Twitter)", icon: Twitter }
  ]

  return (
    <div className="min-h-screen pt-32 px-4 pb-10 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center mb-8">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center text-gray-600 hover:text-gray-800 transition-colors"
            disabled={isSubmitting}
          >
            <ArrowLeft size={20} className="mr-2" />
            Back
          </button>
          <h1 className="text-3xl font-bold text-center flex-1">Corporate Team Application</h1>
        </div>

        {/* Team Information Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-50 rounded-full mb-4">
              <Handshake size={32} className="text-gray-900" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Join Our Corporate Relations Team</h2>
            <p className="text-gray-600 mb-4">
              Become the face of our community and build valuable connections with industry leaders, 
              sponsors, and partners. This is your opportunity to develop professional networking skills 
              while contributing to the growth of our organization.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="flex flex-col items-center p-4 bg-gray-50 rounded-xl">
                <Users size={24} className="text-gray-900 mb-2" />
                <span className="text-sm font-medium text-gray-700">Network Building</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-gray-50 rounded-xl">
                <Star size={24} className="text-gray-900 mb-2" />
                <span className="text-sm font-medium text-gray-700">Professional Growth</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-gray-50 rounded-xl">
                <Target size={24} className="text-gray-900 mb-2" />
                <span className="text-sm font-medium text-gray-700">Sponsorship Opportunities</span>
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
          {/* Common Information Section */}
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
                  LinkedIn Profile *
                </label>
                <input
                  type="url"
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleChange}
                  required
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

          {/* Corporate Team Specific Questions */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold mb-6 pb-2 border-b border-gray-100 flex items-center">
              <Target size={20} className="mr-2 text-gray-700" />
              Application Questions
            </h2>
            
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  1. Why do you want to join the Corporate Team? *
                </label>
                <p className="text-sm text-gray-600 mb-2">Explain your interest in this role and how you can contribute.</p>
                <textarea
                  name="q1"
                  value={formData.q1}
                  onChange={handleChange}
                  required
                  rows={4}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-black transition-all disabled:opacity-50"
                  placeholder="Share your motivation and potential contributions..."
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  2. Do you have prior experience in public relations or sponsorships? *
                </label>
                <p className="text-sm text-gray-600 mb-2">If yes, briefly describe your experience.</p>
                <textarea
                  name="q2"
                  value={formData.q2}
                  onChange={handleChange}
                  required
                  rows={3}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-black transition-all disabled:opacity-50"
                  placeholder="Describe any relevant experience..."
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  3. How would you approach securing a sponsorship for an event? *
                </label>
                <p className="text-sm text-gray-600 mb-2">Write a brief strategy or example.</p>
                <textarea
                  name="q3"
                  value={formData.q3}
                  onChange={handleChange}
                  required
                  rows={4}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-black transition-all disabled:opacity-50"
                  placeholder="Outline your sponsorship strategy..."
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  4. Describe a time you successfully collaborated with others to achieve a goal. *
                </label>
                <p className="text-sm text-gray-600 mb-2">Share a real-world experience.</p>
                <textarea
                  name="q4"
                  value={formData.q4}
                  onChange={handleChange}
                  required
                  rows={4}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-black transition-all disabled:opacity-50"
                  placeholder="Describe your collaborative experience..."
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  5. How comfortable are you with public speaking and communicating with high-profile individuals? *
                </label>
                <div className="grid grid-cols-3 gap-4 mt-3">
                  {[1, 2, 3].map((rating) => (
                    <label key={rating} className="flex flex-col items-center p-4 border-2 border-gray-200 rounded-xl cursor-pointer hover:border-gray-300 transition-all has-[:checked]:border-black has-[:checked]:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed">
                      <input
                        type="radio"
                        name="q5"
                        value={rating}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="hidden"
                      />
                      <div className="text-lg font-semibold mb-2">
                        {rating === 1 ? "Beginner" : rating === 2 ? "Intermediate" : "Advanced"}
                      </div>
                      <div className="flex space-x-1">
                        {[...Array(rating)].map((_, i) => (
                          <div key={i} className="w-3 h-3 bg-black rounded-full"></div>
                        ))}
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  6. What tools or platforms would you use to facilitate outreach and collaborations? *
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-3">
                  {toolsOptions.map((tool) => {
                    const Icon = tool.icon
                    return (
                      <label key={tool.value} className="flex items-center p-3 border-2 border-gray-200 rounded-xl cursor-pointer hover:border-gray-300 transition-all has-[:checked]:border-black has-[:checked]:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed">
                        <input
                          type="checkbox"
                          name="q6"
                          value={tool.value}
                          onChange={handleCheckboxChange}
                          disabled={isSubmitting}
                          className="hidden"
                        />
                        <Icon size={18} className="mr-2" />
                        <span>{tool.label}</span>
                      </label>
                    )
                  })}
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  7. Imagine our club is hosting a flagship event, but a confirmed sponsor backs out at the last moment. How would you handle this situation? *
                </label>
                <textarea
                  name="q7"
                  value={formData.q7}
                  onChange={handleChange}
                  required
                  rows={4}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-black transition-all disabled:opacity-50"
                  placeholder="Describe your crisis management approach..."
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  8. If given complete creative freedom, what unique idea would you implement to strengthen our club's external image and visibility? *
                </label>
                <textarea
                  name="q8"
                  value={formData.q8}
                  onChange={handleChange}
                  required
                  rows={4}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-black transition-all disabled:opacity-50"
                  placeholder="Share your innovative idea..."
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  9. Sometimes external partners may not respond positively or may reject collaboration offers. How do you handle rejection and keep trying? *
                </label>
                <textarea
                  name="q9"
                  value={formData.q9}
                  onChange={handleChange}
                  required
                  rows={3}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-black transition-all disabled:opacity-50"
                  placeholder="Explain your approach to handling rejection..."
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  10. How would you tailor your communication differently when talking to (a) a student organization vs. (b) a corporate sponsor? *
                </label>
                <textarea
                  name="q10"
                  value={formData.q10}
                  onChange={handleChange}
                  required
                  rows={4}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-black transition-all disabled:opacity-50"
                  placeholder="Describe your communication strategy..."
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  11. Our team often works under deadlines and high-pressure event timelines. How do you prioritize tasks and ensure smooth coordination with others? *
                </label>
                <textarea
                  name="q11"
                  value={formData.q11}
                  onChange={handleChange}
                  required
                  rows={4}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-black transition-all disabled:opacity-50"
                  placeholder="Explain your organizational approach..."
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

export default CorporateForm
