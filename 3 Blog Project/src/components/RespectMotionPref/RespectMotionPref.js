'use client'
import React from 'react'
import { MotionConfig } from 'framer-motion'

function RespectMotionPref({ children }) {
  return (
  <MotionConfig reducedMotion='user'>
    { children }
  </MotionConfig>
  )
}

export default RespectMotionPref
