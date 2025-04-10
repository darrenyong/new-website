import { motion } from 'framer-motion'

interface TooltipProps {
  title: string
  visible: boolean
}

export default function Tooltip({ title, visible }: TooltipProps) {
  return (
    <motion.div
      className='absolute left-1/2 top-0 -translate-x-1/2 -translate-y-full whitespace-nowrap rounded bg-black/80 px-2 py-1 text-xs text-white backdrop-blur-sm'
      initial={{ opacity: 0, y: 10 }}
      animate={{
        opacity: visible ? 1 : 0,
        y: visible ? 0 : 10,
      }}
      transition={{ duration: 0.2 }}
      style={{ marginTop: '-8px' }}
    >
      {title}
      <div className='absolute left-1/2 top-full -translate-x-1/2 border-4 border-transparent border-t-black/80' />
    </motion.div>
  )
}
