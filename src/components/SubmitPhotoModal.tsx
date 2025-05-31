"use client"

import type React from "react"
import { X, Upload, AlertCircle, CheckCircle, Settings } from "lucide-react"
import { useEffect, useState } from "react"
import ThankYouModal from "./ThankYouModal"
import { uploadPhotoToCloudinary, savePhotoMetadata } from "../lib/firebase"

interface SubmitPhotoModalProps {
  isOpen: boolean
  onClose: () => void
}

interface ErrorModalProps {
  isOpen: boolean
  onClose: () => void
  message: string
  showSetupInstructions?: boolean
}

const ErrorModal: React.FC<ErrorModalProps> = ({ isOpen, onClose, message, showSetupInstructions = false }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[999999] flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full p-6 transform transition-all duration-300 ease-out max-h-[90vh] overflow-y-auto">
        <div className="flex items-center space-x-3 mb-4">
          <AlertCircle className="text-red-500" size={24} />
          <h3 className="text-lg font-semibold text-gray-900">Upload Error</h3>
        </div>
        <p className="text-gray-600 mb-4">{message}</p>

        {showSetupInstructions && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
            <div className="flex items-center space-x-2 mb-2">
              <Settings className="text-yellow-600" size={20} />
              <h4 className="font-semibold text-yellow-800">Setup Required</h4>
            </div>
            <div className="text-sm text-yellow-700 space-y-2">
              <p>
                <strong>To fix this issue:</strong>
              </p>
              <ol className="list-decimal list-inside space-y-1 ml-2">
                <li>Go to your Cloudinary Dashboard</li>
                <li>Navigate to Settings → Upload</li>
                <li>Click "Add upload preset"</li>
                <li>
                  Set preset name: <code className="bg-yellow-100 px-1 rounded">notion_photos_unsigned</code>
                </li>
                <li>
                  Set signing mode to: <strong>Unsigned</strong>
                </li>
                <li>Save the preset</li>
                <li>Update your cloud name in environment variables</li>
              </ol>
            </div>
          </div>
        )}

        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  )
}

const SubmitPhotoModal: React.FC<SubmitPhotoModalProps> = ({ isOpen, onClose }) => {
  const [mounted, setMounted] = useState(false)
  const [showThankYou, setShowThankYou] = useState(false)
  const [showError, setShowError] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [showSetupInstructions, setShowSetupInstructions] = useState(false)
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])
  const [isUploading, setIsUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [currentUploadFile, setCurrentUploadFile] = useState("")
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    eventName: "",
    description: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  useEffect(() => {
    setMounted(true)

    if (isOpen) {
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || [])
    const imageFiles = files.filter((file) => file.type.startsWith("image/"))

    if (imageFiles.length !== files.length) {
      setErrorMessage("Please select only image files (PNG, JPG, JPEG)")
      setShowError(true)
      return
    }

    if (imageFiles.length > 10) {
      setErrorMessage("Please select maximum 10 images")
      setShowError(true)
      return
    }

    // Check file sizes
    const oversizedFiles = imageFiles.filter((file) => file.size > 10 * 1024 * 1024) // 10MB
    if (oversizedFiles.length > 0) {
      setErrorMessage("Some files are larger than 10MB. Please select smaller images.")
      setShowError(true)
      return
    }

    setSelectedFiles(imageFiles)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setUserInfo((prev) => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!userInfo.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!userInfo.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!userInfo.email.includes("@")) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!userInfo.eventName.trim()) {
      newErrors.eventName = "Event name is required"
    }

    if (selectedFiles.length === 0) {
      newErrors.files = "Please select at least one photo"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    // Check environment variables
    const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
    const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET

    if (!cloudName || !uploadPreset || cloudName === "your_cloud_name_here") {
      setErrorMessage("Cloudinary is not properly configured. Please check your environment variables.")
      setShowSetupInstructions(true)
      setShowError(true)
      return
    }

    setIsUploading(true)
    setUploadProgress(0)
    setCurrentUploadFile("")

    try {
      console.log("Starting upload process...")

      // Upload files to Cloudinary one by one
      const uploadResults = []
      for (let i = 0; i < selectedFiles.length; i++) {
        const file = selectedFiles[i]
        setCurrentUploadFile(file.name)
        console.log(`Uploading file ${i + 1}/${selectedFiles.length}: ${file.name}`)

        try {
          const result = await uploadPhotoToCloudinary(file)
          uploadResults.push(result)
          console.log(`Successfully uploaded: ${file.name}`)
        } catch (uploadError) {
          console.error(`Failed to upload ${file.name}:`, uploadError)

          let errorMsg = `Failed to upload "${file.name}".`

          if (uploadError instanceof Error) {
            if (uploadError.message.includes("Upload preset not found")) {
              errorMsg = "Upload preset not found. Please create the upload preset in your Cloudinary dashboard."
              setShowSetupInstructions(true)
            } else if (uploadError.message.includes("Invalid cloud name")) {
              errorMsg = "Invalid cloud name. Please check your Cloudinary configuration."
              setShowSetupInstructions(true)
            } else {
              errorMsg += ` Error: ${uploadError.message}`
            }
          }

          setErrorMessage(errorMsg)
          setShowError(true)
          setIsUploading(false)
          setCurrentUploadFile("")
          return
        }

        // Update progress
        setUploadProgress(((i + 1) / selectedFiles.length) * 100)
      }

      console.log("All files uploaded successfully:", uploadResults)

      // Save metadata to Firebase
      const photoData = {
        userInfo: {
          name: userInfo.name,
          email: userInfo.email,
          eventName: userInfo.eventName,
          description: userInfo.description,
        },
        photos: uploadResults,
        submittedAt: new Date().toISOString(),
        status: "pending_review",
      }

      console.log("Saving to Firebase:", photoData)
      const docId = await savePhotoMetadata(photoData)
      console.log("Saved to Firebase with ID:", docId)

      setShowThankYou(true)
      onClose()

      // Reset form
      setSelectedFiles([])
      setUserInfo({
        name: "",
        email: "",
        eventName: "",
        description: "",
      })
      setUploadProgress(0)
      setCurrentUploadFile("")
    } catch (error) {
      console.error("Error uploading photos:", error)
      setErrorMessage("There was an error processing your photos. Please check your internet connection and try again.")
      setShowError(true)
    } finally {
      setIsUploading(false)
      setCurrentUploadFile("")
    }
  }

  const removeFile = (index: number) => {
    setSelectedFiles((prev) => prev.filter((_, i) => i !== index))
  }

  if (!mounted || !isOpen) return null

  return (
    <>
      {/* Enhanced backdrop with maximum z-index */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[999998] flex items-center justify-center p-4"
        onClick={(e) => {
          if (e.target === e.currentTarget && !isUploading) onClose()
        }}
      >
        {/* Modal container with enhanced styling and maximum z-index */}
        <div
          className="relative bg-white rounded-xl shadow-2xl max-w-3xl w-full max-h-[95vh] overflow-hidden transform transition-all duration-300 ease-out z-[999999]"
          style={{
            animation: "modalSlideIn 0.3s ease-out",
          }}
        >
          {/* Header with close button */}
          <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between z-10">
            <h2 className="text-2xl font-bold text-gray-900">Submit Photos</h2>
            <button
              onClick={onClose}
              disabled={isUploading}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              title="Close"
            >
              <X size={24} className="text-gray-500" />
            </button>
          </div>

          {/* Scrollable content */}
          <div className="overflow-y-auto max-h-[calc(95vh-80px)]">
            <div className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* User Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="name">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={userInfo.name}
                      onChange={handleInputChange}
                      className={`w-full border ${
                        errors.name ? "border-red-500" : "border-gray-300"
                      } rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white transition-colors`}
                      disabled={isUploading}
                      placeholder="Enter your full name"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="email">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={userInfo.email}
                      onChange={handleInputChange}
                      className={`w-full border ${
                        errors.email ? "border-red-500" : "border-gray-300"
                      } rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white transition-colors`}
                      disabled={isUploading}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="eventName">
                    Event Name *
                  </label>
                  <input
                    type="text"
                    id="eventName"
                    name="eventName"
                    value={userInfo.eventName}
                    onChange={handleInputChange}
                    placeholder="e.g., Build Your Brand, Zenith'24, etc."
                    className={`w-full border ${
                      errors.eventName ? "border-red-500" : "border-gray-300"
                    } rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white transition-colors`}
                    disabled={isUploading}
                  />
                  {errors.eventName && <p className="text-red-500 text-sm mt-1">{errors.eventName}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="description">
                    Description (Optional)
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={userInfo.description}
                    onChange={handleInputChange}
                    rows={3}
                    placeholder="Tell us about these photos..."
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white transition-colors resize-none"
                    disabled={isUploading}
                  />
                </div>

                {/* File Upload */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Photos * (Max 10 images, 10MB each)
                  </label>
                  <div
                    className={`border-2 border-dashed ${
                      errors.files ? "border-red-300" : "border-gray-300"
                    } rounded-lg p-8 text-center hover:border-blue-400 transition-colors`}
                  >
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={handleFileSelect}
                      className="hidden"
                      id="photoUpload"
                      disabled={isUploading}
                    />
                    <label htmlFor="photoUpload" className="cursor-pointer flex flex-col items-center space-y-3">
                      <Upload size={48} className="text-gray-400" />
                      <div>
                        <p className="text-gray-600 font-medium">Click to select photos or drag and drop</p>
                        <p className="text-sm text-gray-500 mt-1">PNG, JPG, JPEG up to 10MB each</p>
                      </div>
                    </label>
                  </div>
                  {errors.files && <p className="text-red-500 text-sm mt-1">{errors.files}</p>}
                </div>

                {/* Selected Files Preview */}
                {selectedFiles.length > 0 && (
                  <div>
                    <h4 className="font-medium text-gray-700 mb-3">Selected Photos ({selectedFiles.length})</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 max-h-48 overflow-y-auto p-2 border border-gray-200 rounded-lg bg-gray-50">
                      {selectedFiles.map((file, index) => (
                        <div key={index} className="relative group">
                          <img
                            src={URL.createObjectURL(file) || "/placeholder.svg"}
                            alt={`Preview ${index + 1}`}
                            className="w-full h-20 object-cover rounded-lg border border-gray-200"
                          />
                          <button
                            type="button"
                            onClick={() => removeFile(index)}
                            disabled={isUploading}
                            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm hover:bg-red-600 disabled:opacity-50 transition-colors shadow-lg"
                          >
                            ×
                          </button>
                          <p className="text-xs mt-1 truncate text-gray-600">{file.name}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Upload Progress */}
                {isUploading && (
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-medium text-blue-800">
                        Uploading: {currentUploadFile || "Processing..."}
                      </span>
                      <span className="text-blue-600">{Math.round(uploadProgress)}%</span>
                    </div>
                    <div className="w-full bg-blue-200 rounded-full h-3">
                      <div
                        className="bg-blue-500 h-3 rounded-full transition-all duration-300 ease-out"
                        style={{ width: `${uploadProgress}%` }}
                      />
                    </div>
                  </div>
                )}

                {/* Submit Button */}
                <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200">
                  <button
                    type="button"
                    onClick={onClose}
                    disabled={isUploading}
                    className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isUploading || selectedFiles.length === 0}
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium"
                  >
                    {isUploading ? "Uploading..." : "Submit Photos"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Error Modal */}
      <ErrorModal
        isOpen={showError}
        onClose={() => {
          setShowError(false)
          setShowSetupInstructions(false)
        }}
        message={errorMessage}
        showSetupInstructions={showSetupInstructions}
      />

      {/* Success Modal */}
      <ThankYouModal
        isOpen={showThankYou}
        onClose={() => setShowThankYou(false)}
        message={
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <CheckCircle className="text-green-500" size={48} />
            </div>
            <p className="text-xl font-medium mb-4">Photos Submitted Successfully!</p>
            <p className="text-gray-600">
              Thank you for sharing your photos with us. We'll review them and add them to our gallery soon!
            </p>
          </div>
        }
      />
    </>
  )
}

export default SubmitPhotoModal
