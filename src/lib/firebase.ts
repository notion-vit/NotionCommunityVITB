import { initializeApp } from "firebase/app"
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)

// Submit FAQ question
export const submitQuestion = async (questionData: {
  firstName: string
  lastName: string
  vitEmail: string
  query: string
  submittedAt: string
}) => {
  try {
    const docRef = await addDoc(collection(db, "faq_questions"), {
      ...questionData,
      timestamp: serverTimestamp(),
      status: "pending",
    })

    return docRef.id
  } catch (error) {
    console.error("Error submitting question:", error)
    throw error
  }
}

// Upload photo to Cloudinary
export const uploadPhotoToCloudinary = async (file: File) => {
  const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
  const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET

  console.log("Environment variables:", {
    cloudName,
    uploadPreset,
    hasCloudName: !!cloudName,
    hasUploadPreset: !!uploadPreset,
  })

  if (!cloudName || !uploadPreset) {
    throw new Error("Cloudinary configuration is missing. Please check your environment variables.")
  }

  const formData = new FormData()
  formData.append("file", file)
  formData.append("upload_preset", uploadPreset)

  try {
    console.log(`Uploading to Cloudinary: ${cloudName} with preset: ${uploadPreset}`)
    console.log("File details:", {
      name: file.name,
      size: file.size,
      type: file.type,
    })

    const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
      method: "POST",
      body: formData,
    })

    console.log("Response status:", response.status)
    console.log("Response headers:", Object.fromEntries(response.headers.entries()))

    const responseText = await response.text()
    console.log("Raw response:", responseText)

    if (!response.ok) {
      console.error("Cloudinary error response:", responseText)

      let errorMessage = `Cloudinary upload failed: ${response.status} ${response.statusText}`

      try {
        const errorData = JSON.parse(responseText)
        if (errorData.error && errorData.error.message) {
          errorMessage = `Cloudinary error: ${errorData.error.message}`
        }
      } catch (parseError) {
        console.error("Could not parse error response:", parseError)
      }

      throw new Error(errorMessage)
    }

    const data = JSON.parse(responseText)
    console.log("Cloudinary upload successful:", data)

    return {
      url: data.secure_url,
      publicId: data.public_id,
      originalName: file.name,
      size: file.size,
      format: data.format,
    }
  } catch (error) {
    console.error("Error uploading to Cloudinary:", error)
    throw error
  }
}

// Save photo metadata to Firebase
export const savePhotoMetadata = async (photoData: {
  userInfo: {
    name: string
    email: string
    eventName: string
    description: string
  }
  photos: Array<{
    url: string
    publicId: string
    originalName: string
    size: number
    format: string
  }>
  submittedAt: string
  status: string
}) => {
  try {
    console.log("Attempting to save to Firebase:", photoData)

    const docRef = await addDoc(collection(db, "photo_submissions"), {
      ...photoData,
      timestamp: serverTimestamp(),
    })

    console.log("Photo submission saved with ID:", docRef.id)
    return docRef.id
  } catch (error) {
    console.error("Error saving photo metadata:", error)
    throw error
  }
}
