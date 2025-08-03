"use client"

import React from 'react'
import { useEffect, useRef, useCallback } from 'react'
import { JSX } from 'react/jsx-runtime'

interface Ball {
  x: number
  y: number
  dx: number
  dy: number
  radius: number
  color: string
}

export default function BallCanvas(): JSX.Element {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationFrameRef = useRef<number>()
  const ballsRef = useRef<Ball[]>([])

  const colors: string[] = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3', '#54a0ff', '#5f27cd']

  const initializeBalls = useCallback((canvas: HTMLCanvasElement): void => {
    const balls: Ball[] = []
    const ballCount: number = Math.min(30, Math.floor((canvas.width * canvas.height) / 10000))

    for (let i = 0; i < ballCount; i++) {
      balls.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        dx: (Math.random() - 0.5) * 1.5,
        dy: (Math.random() - 0.5) * 1.5,
        radius: Math.random() * 20 + 8,
        color: colors[Math.floor(Math.random() * colors.length)],
      })
    }

    ballsRef.current = balls
  }, [colors])

  const animate = useCallback((ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement): void => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    ballsRef.current.forEach((ball: Ball) => {
      ball.x += ball.dx
      ball.y += ball.dy

      if (ball.x + ball.radius >= canvas.width || ball.x - ball.radius <= 0) {
        ball.dx = -ball.dx
        ball.x = Math.max(ball.radius, Math.min(canvas.width - ball.radius, ball.x))
      }
      if (ball.y + ball.radius >= canvas.height || ball.y - ball.radius <= 0) {
        ball.dy = -ball.dy
        ball.y = Math.max(ball.radius, Math.min(canvas.height - ball.radius, ball.y))
      }

      ctx.beginPath()
      ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2)
      ctx.fillStyle = ball.color
      ctx.fill()
    })

    animationFrameRef.current = requestAnimationFrame(() => animate(ctx, canvas))
  }, [])

  const handleResize = useCallback((): void => {
    const canvas = canvasRef.current
    if (!canvas) return

    const dpr: number = window.devicePixelRatio || 1
    const rect: DOMRect = canvas.getBoundingClientRect()

    canvas.width = rect.width * dpr
    canvas.height = rect.height * dpr

    const ctx: CanvasRenderingContext2D | null = canvas.getContext('2d')
    if (ctx) ctx.scale(dpr, dpr)

    initializeBalls(canvas)
  }, [initializeBalls])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d', { alpha: false })
    if (!ctx) return

    // setup size with DPR
    handleResize()

    initializeBalls(canvas)
    animate(ctx, canvas)

    let resizeTimeout: NodeJS.Timeout
    const throttledResize = () => {
      clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(handleResize, 100)
    }

    window.addEventListener('resize', throttledResize, { passive: true })
    return () => {
      window.removeEventListener('resize', throttledResize)
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current)
      clearTimeout(resizeTimeout)
    }
  }, [animate, handleResize, initializeBalls])

  return (
    <canvas
      ref={canvasRef}
      className="absolute container mx-auto inset-0 w-[50vw] h-[100vh] py-24"
      style={{ display: 'block' }}
    />
  )
}
