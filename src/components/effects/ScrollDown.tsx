'use client'

import { useEffect } from 'react'

export default function ScrollDown({ height = 0 }) {
  useEffect(() => {
    window.scrollTo({
      top: height,
      behavior: 'smooth'
    })
  }, [height])

  return null
}