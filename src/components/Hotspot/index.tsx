'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Tooltip from '../Tooltip'
import Link from 'next/link'


interface HotspotProps {
  x: number
  y: number
  link: string
  title: string
}

export default function Hotspot({ x, y, link, title }: HotspotProps) {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <Link
      href={link}
      target='_blank'
      rel='noopener noreferrer'
      className='absolute z-10 cursor-pointer'
      style={{
        left: `${x}%`,
        top: `${y}%`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label={`Interactive hotspot: ${title}`}
    >
    <motion.button
      className='absolute z-10 cursor-pointer'
      style={{
        left: `${x}%`,
        top: `${y}%`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.2 }}
      aria-label={`Interactive hotspot: ${title}`}
    >
      <div className='relative'>
        <Tooltip title={title} visible={isHovered} />

        <motion.div
          className='h-2.5 w-2.5 rounded-full bg-white'
        />
      </div>
    </motion.button>

    </Link>
  )
}
