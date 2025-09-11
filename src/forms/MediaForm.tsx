
"use client"

import { useState } from "react"
import { ArrowLeft, User, BookOpen, Linkedin, Mail, Camera, Video, Film, Users } from "lucide-react"
import { useNavigate } from "react-router-dom"

const MediaForm = () => {
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
    q6: string;
    q7: string[];
    q8: string;
    othersSpecify: string;
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
    q6: "",
    q7: [],
    q8: "",
    othersSpecify: ""
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
      const currentSelection = prev.q7
      if (checked) {
        return { ...prev, q7: [...currentSelection, value] }
      } else {
        return { ...prev, q7: currentSelection.filter(item => item !== value) }
      }
    })
  }

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      formDataEncoded.append('team', 'Media')
      formDataEncoded.append('q1', formData.q1)
      formDataEncoded.append('q2', formData.q2)
      formDataEncoded.append('q3', formData.q3)
      formDataEncoded.append('q4', formData.q4)
      formDataEncoded.append('q5', formData.q5)
      formDataEncoded.append('q6', formData.q6)
      
      // Include "Others" specification in the q7 data if applicable
      let q7Data = formData.q7
      if (q7Data.includes("Others (please specify)") && formData.othersSpecify) {
        q7Data = q7Data.filter(item => item !== "Others (please specify)")
        q7Data.push(`Others: ${formData.othersSpecify}`)
      }
      formDataEncoded.append('q7', q7Data.join(', '))
      
      formDataEncoded.append('q8', formData.q8)
      formDataEncoded.append('others_specify', formData.othersSpecify)

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
        q6: "",
        q7: [],
        q8: "",
        othersSpecify: ""
      })
      
      alert('Thank you for your application to the Media Team! We\'ll review it and get back to you soon.')

    } catch (error) {
      console.error("Error submitting form: ", error)
      setSubmitError('Failed to submit form. Please try again or contact us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const projectOptions = [
    "Short Reels / Social Media Content",
    "Event Coverage",
    "Documentaries / Interviews",
    "Cinematic Projects",
    "Others (please specify)"
  ]

  const showCameraQuestion = formData.q1 === "Videography" || formData.q1 === "Both"
  const showEditingQuestion = formData.q1 === "Video Editing" || formData.q1 === "Both"
  const showOthersInput = formData.q7.includes("Others (please specify)")

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
          <h1 className="text-3xl font-bold text-center flex-1">Media Team Application</h1>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-50 rounded-full mb-4">
              <Camera size={32} className="text-gray-900" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Join Our Media Production Team</h2>
            <p className="text-gray-600 mb-4">
              Bring stories to life through video, photography, and creative media. Help us capture 
              and share the amazing work happening in our community through compelling visual content.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="flex flex-col items-center p-4 bg-gray-50 rounded-xl">
                <Video size={24} className="text-gray-900 mb-2" />
                <span className="text-sm font-medium text-gray-700">Videography</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-gray-50 rounded-xl">
                <Film size={24} className="text-gray-900 mb-2" />
                <span className="text-sm font-medium text-gray-700">Video Editing</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-gray-50 rounded-xl">
                <Users size={24} className="text-gray-900 mb-2" />
                <span className="text-sm font-medium text-gray-700">Creative Collaboration</span>
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

          {/* Media Team Specific Questions */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold mb-6 pb-2 border-b border-gray-100 flex items-center">
              <Camera size={20} className="mr-2 text-gray-700" />
              Media Skills & Experience
            </h2>
            
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  1. Which skills do you have experience with? *
                </label>
                <div className="space-y-3 mt-3">
                  {["Videography", "Video Editing", "Both"].map((option) => (
                    <label key={option} className="flex items-center p-3 border-2 border-gray-200 rounded-xl cursor-pointer hover:border-gray-300 transition-all has-[:checked]:border-black has-[:checked]:bg-gray-50">
                      <input
                        type="radio"
                        name="q1"
                        value={option}
                        onChange={handleRadioChange}
                        required
                        disabled={isSubmitting}
                        className="mr-3"
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              {showCameraQuestion && (
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    2. What camera/device do you use? *
                  </label>
                  <input
                    type="text"
                    name="q2"
                    value={formData.q2}
                    onChange={handleChange}
                    required={showCameraQuestion}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-black transition-all disabled:opacity-50"
                    placeholder="e.g., iPhone 13, Canon EOS R6, etc."
                  />
                </div>
              )}

              {showEditingQuestion && (
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    3. Which software or tools do you use for video editing? *
                  </label>
                  <input
                    type="text"
                    name="q3"
                    value={formData.q3}
                    onChange={handleChange}
                    required={showEditingQuestion}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-black transition-all disabled:opacity-50"
                    placeholder="e.g., Adobe Premiere Pro, Final Cut Pro, DaVinci Resolve"
                  />
                </div>
              )}

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  4. Please share a link to your portfolio or previous work. *
                </label>
                <input
                  type="url"
                  name="q4"
                  value={formData.q4}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-black transition-all disabled:opacity-50"
                  placeholder="https://youtube.com/your-channel or Google Drive link"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  5. How would you rate your proficiency in your primary skill? *
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
                  {["Beginner", "Intermediate", "Advanced"].map((level) => (
                    <label key={level} className="flex flex-col items-center p-4 border-2 border-gray-200 rounded-xl cursor-pointer hover:border-gray-300 transition-all has-[:checked]:border-black has-[:checked]:bg-gray-50">
                      <input
                        type="radio"
                        name="q5"
                        value={level}
                        onChange={handleRadioChange}
                        required
                        disabled={isSubmitting}
                        className="hidden"
                      />
                      <div className="text-lg font-semibold mb-2">{level}</div>
                      <div className="flex space-x-1">
                        {[...Array(level === "Beginner" ? 1 : level === "Intermediate" ? 2 : 3)].map((_, i) => (
                          <div key={i} className="w-3 h-3 bg-black rounded-full"></div>
                        ))}
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  6. Is there anything else you would like to share about your passion for media and content creation?
                </label>
                <textarea
                  name="q6"
                  value={formData.q6}
                  onChange={handleChange}
                  rows={3}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-black transition-all disabled:opacity-50"
                  placeholder="Share your passion and inspiration..."
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  7. What kind of projects do you enjoy the most? *
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                  {projectOptions.map((project) => (
                    <label key={project} className="flex items-center p-3 border-2 border-gray-200 rounded-xl cursor-pointer hover:border-gray-300 transition-all has-[:checked]:border-black has-[:checked]:bg-gray-50">
                      <input
                        type="checkbox"
                        name="q7"
                        value={project}
                        onChange={handleCheckboxChange}
                        disabled={isSubmitting}
                        className="mr-3"
                      />
                      <span>{project}</span>
                    </label>
                  ))}
                </div>
                
                {showOthersInput && (
                  <div className="mt-4 ml-2 p-4 bg-gray-50 rounded-xl border border-gray-200">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Please specify what other types of projects you enjoy:
                    </label>
                    <input
                      type="text"
                      name="othersSpecify"
                      value={formData.othersSpecify}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-black transition-all disabled:opacity-50"
                      placeholder="Describe the types of projects you enjoy..."
                    />
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  8. Do you have experience with advanced editing techniques (color grading, VFX, motion graphics)? *
                </label>
                <div className="space-y-3 mt-3">
                  {["Yes", "No", "Somewhat (basic level)"].map((option) => (
                    <label key={option} className="flex items-center p-3 border-2 border-gray-200 rounded-xl cursor-pointer hover:border-gray-300 transition-all has-[:checked]:border-black has-[:checked]:bg-gray-50">
                      <input
                        type="radio"
                        name="q8"
                        value={option}
                        onChange={handleRadioChange}
                        required
                        disabled={isSubmitting}
                        className="mr-3"
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
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

export default MediaForm
