"use client"

import { useEffect, useRef } from "react"

const BackgroundCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas to full window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = Math.max(window.innerHeight * 3, document.body.scrollHeight)
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Add resize observer to handle content changes
    const resizeObserver = new ResizeObserver(() => {
      resizeCanvas()
    })

    resizeObserver.observe(document.body)

    // Fill canvas with white
    ctx.fillStyle = "#FFFFFF"
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Cleanup function
    return () => {
      window.removeEventListener("resize", resizeCanvas)
      resizeObserver.disconnect()
    }
  }, []) // Empty dependency array ensures this only runs once

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10" />
}

export default BackgroundCanvas

