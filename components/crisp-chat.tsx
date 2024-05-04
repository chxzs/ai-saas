"use client"

import { useEffect } from "react"
import { Crisp } from 'crisp-sdk-web'

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("2ef27c6d-2a82-4be6-adf0-d2f2bab89b12")
  }, [])
  return null
}