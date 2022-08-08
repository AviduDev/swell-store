import React, { FC } from 'react'
import { Container } from '@components/ui'
import { ArrowRight } from '@components/icons'
import s from './Hero.module.css'
import Link from 'next/link'
interface HeroProps {
  className?: string
  headline: string
  description: string
}

const Hero = () => {
  return (
    <h1>This is HERO Section</h1>
  )
}

export default Hero
