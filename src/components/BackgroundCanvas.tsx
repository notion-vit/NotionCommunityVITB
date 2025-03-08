"use client"

import { useEffect, useRef } from "react"

const BackgroundCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number | null>(null)
  type Blob = { x: number; y: number; radius: number; color: string; vx: number; vy: number }
  const blobsRef = useRef<Blob[]>([])
  const initialPositionsRef = useRef<{ x: number; y: number }[]>([])

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

    // Create blobs with consistent opacity
    if (blobsRef.current.length === 0) {
      blobsRef.current = [
        { x: canvas.width * 0.3, y: canvas.height * 0.2, radius: 500, color: "#3498db", vx: 0.3, vy: 0.2 },
        { x: canvas.width * 0.7, y: canvas.height * 0.3, radius: 550, color: "#e74c3c", vx: -0.25, vy: 0.3 },
        { x: canvas.width * 0.5, y: canvas.height * 0.5, radius: 450, color: "#1abc9c", vx: 0.2, vy: -0.2 },
        { x: canvas.width * 0.2, y: canvas.height * 0.7, radius: 480, color: "#9b59b6", vx: -0.2, vy: -0.25 },
        { x: canvas.width * 0.8, y: canvas.height * 0.8, radius: 520, color: "#f39c12", vx: -0.3, vy: 0.2 },
      ]

      // Store initial positions
      initialPositionsRef.current = blobsRef.current.map((blob) => ({ x: blob.x, y: blob.y }))
    }

    const drawBlob = (x: number, y: number, radius: number, color: string) => {
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius)
      gradient.addColorStop(0, `${color}90`) // Consistent opacity
      gradient.addColorStop(1, `${color}20`) // Consistent opacity

      ctx.fillStyle = gradient
      ctx.beginPath()
      ctx.arc(x, y, radius, 0, Math.PI * 2)
      ctx.fill()
    }

    const animate = () => {
      ctx.fillStyle = "rgba(255, 255, 255, 0.7)"; // Light translucent effect
ctx.fillRect(0, 0, canvas.width, canvas.height);


      // Draw blobs
      blobsRef.current.forEach((blob) => {
        // Update position
        blob.x += blob.vx
        blob.y += blob.vy

        // Bounce off edges
        if (blob.x < -blob.radius || blob.x > canvas.width + blob.radius) blob.vx *= -1
        if (blob.y < -blob.radius || blob.y > canvas.height + blob.radius) blob.vy *= -1

        drawBlob(blob.x, blob.y, blob.radius, blob.color)
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    // Start animation
    animate()

    // Cleanup function
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      window.removeEventListener("resize", resizeCanvas)
      resizeObserver.disconnect()
    }
  }, []) // Empty dependency array ensures this only runs once

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10" style={{ filter: "blur(70px)" }} />
}

export default BackgroundCanvas

