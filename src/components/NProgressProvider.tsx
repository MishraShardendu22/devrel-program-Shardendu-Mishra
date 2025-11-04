"use client"

import 'nprogress/nprogress.css'
import { useEffect } from 'react'
import NProgress from 'nprogress'

export default function NProgressProvider() {
  useEffect(() => {
    NProgress.configure({ 
      showSpinner: false,
      speed: 500,
      minimum: 0.3,
      trickleSpeed: 200
    })

    const handleStart = () => NProgress.start()

    window.addEventListener('beforeunload', handleStart)
    
    NProgress.start()
    
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
