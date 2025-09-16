
"use client"

import { useState } from "react"
import { ArrowLeft, User, BookOpen, Linkedin, Mail, Code, Cpu, Database, GitBranch } from "lucide-react"
import { useNavigate } from "react-router-dom"

const TechTeamForm = () => {
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
    q7: string;
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
    q7: ""
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
      formDataEncoded.append('team', 'Tech Team')
      formDataEncoded.append('q1', formData.q1)
      formDataEncoded.append('q2', formData.q2)
      formDataEncoded.append('q3', formData.q3)
      formDataEncoded.append('q4', formData.q4)
      formDataEncoded.append('q5', formData.q5)
      formDataEncoded.append('q6', formData.q6)
      formDataEncoded.append('q7', formData.q7)

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
        q7: ""
      })
      
      alert('Thank you for your application to the Tech Team! We\'ll review it and get back to you soon.')

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
          <h1 className="text-3xl font-bold text-center flex-1">Tech Team Application</h1>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-50 rounded-full mb-4">
              <Code size={32} className="text-gray-900" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Join Our Tech Team</h2>
            <p className="text-gray-600 mb-4">
              Build innovative solutions, work with cutting-edge technologies, and develop your technical skills 
              while contributing to impactful projects that shape the future of our community.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="flex flex-col items-center p-4 bg-gray-50 rounded-xl">
                <Cpu size={24} className="text-gray-900 mb-2" />
                <span className="text-sm font-medium text-gray-700">Technical Development</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-gray-50 rounded-xl">
                <Database size={24} className="text-gray-900 mb-2" />
                <span className="text-sm font-medium text-gray-700">Real-world Projects</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-gray-50 rounded-xl">
                <GitBranch size={24} className="text-gray-900 mb-2" />
                <span className="text-sm font-medium text-gray-700">Collaborative Coding</span>
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

          {/* Tech Team Specific Questions */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold mb-6 pb-2 border-b border-gray-100 flex items-center">
              <Code size={20} className="mr-2 text-gray-700" />
              Tech Team Questions
            </h2>
            
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  1. Why do you want to join the Tech Team, and what specific technical skills or experiences do you hope to gain or contribute? *
                </label>
                <textarea
                  name="q1"
                  value={formData.q1}
                  onChange={handleChange}
                  required
                  rows={4}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-black transition-all disabled:opacity-50"
                  placeholder="Share your motivation and technical aspirations..."
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  2. What programming languages, frameworks, or technologies are you most comfortable with, and what is your experience level with them? *
                </label>
                <textarea
                  name="q2"
                  value={formData.q2}
                  onChange={handleChange}
                  required
                  rows={4}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-black transition-all disabled:opacity-50"
                  placeholder="List your technical skills and proficiency levels..."
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  3. Describe a technical project you've worked on (personal, academic, or professional). What was your role, what challenges did you face, and how did you overcome them? *
                </label>
                <textarea
                  name="q3"
                  value={formData.q3}
                  onChange={handleChange}
                  required
                  rows={4}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-black transition-all disabled:opacity-50"
                  placeholder="Explain your project experience and problem-solving approach..."
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  4. How do you approach learning new technologies or programming languages when required for a project? *
                </label>
                <textarea
                  name="q4"
                  value={formData.q4}
                  onChange={handleChange}
                  required
                  rows={4}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-black transition-all disabled:opacity-50"
                  placeholder="Describe your learning process and strategies..."
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  5. Have you worked with version control systems like Git? Describe your experience with collaborative coding and team projects. *
                </label>
                <textarea
                  name="q5"
                  value={formData.q5}
                  onChange={handleChange}
                  required
                  rows={3}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-black transition-all disabled:opacity-50"
                  placeholder="Share your experience with version control and teamwork..."
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  6. What area of technology interests you most (e.g., web development, mobile apps, AI/ML, DevOps, UI/UX design)? Why? *
                </label>
                <textarea
                  name="q6"
                  value={formData.q6}
                  onChange={handleChange}
                  required
                  rows={3}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-black transition-all disabled:opacity-50"
                  placeholder="Explain your tech interests and why they appeal to you..."
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  7. Do you have a GitHub profile or portfolio you can share? If yes, please provide the link and briefly describe one project from it.
                </label>
                <textarea
                  name="q7"
                  value={formData.q7}
                  onChange={handleChange}
                  rows={3}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-black transition-all disabled:opacity-50"
                  placeholder="Share your GitHub/profile link and project details..."
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

export default TechTeamForm
