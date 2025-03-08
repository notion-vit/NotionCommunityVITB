"use client"

import { useEffect, useState } from "react"

const Preloader = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time or wait for resources to load
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2500) // Adjust time as needed

    // Prevent scrolling while preloader is active
    document.body.style.overflow = "hidden"

    return () => {
      clearTimeout(timer)
      document.body.style.overflow = "auto"
    }
  }, [])

  if (!loading) return null

  return (
    <div
      className="fixed inset-0 z-[9999] bg-white"
      style={{
        width: "100vw",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/notion-new-preloader-TBn11oTatoBpDn3OjToUreaKLF08ir.gif"
        alt="Notion Community Loading"
        className="max-w-[300px] sm:max-w-[400px] md:max-w-[500px] w-full h-auto"
      />
    </div>
  )
}

export default Preloader

