"use client"

import { useEffect } from 'react'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

export default function NProgressProvider() {
  useEffect(() => {
    // Configure NProgress
    NProgress.configure({ 
      showSpinner: false,
      speed: 500,
      minimum: 0.3,
      trickleSpeed: 200
    })

    // Start progress on route change
    const handleStart = () => NProgress.start()
    const handleStop = () => NProgress.done()

    // Listen to Next.js route changes
    window.addEventListener('beforeunload', handleStart)
    
    // Start animation on initial load
    NProgress.start()
    
    // Complete after a short delay
    const timer = setTimeout(() => {
      NProgress.done()
    }, 500)

    return () => {
      window.removeEventListener('beforeunload', handleStart)
      clearTimeout(timer)
    }
  }, [])

  return null
}
