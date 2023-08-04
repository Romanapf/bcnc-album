'use client'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

const Modal = ({
  children,
  handleClose,
}: {
  children: React.ReactNode
  handleClose: () => void
}) => {
  const [modalRoot, setModalRoot] = useState<HTMLElement | null>(null)
  useEffect(() => {
    setModalRoot(document.getElementById('modal'))
  }, [])

  if (!modalRoot) return null
  return createPortal(
    <AnimatePresence>
      <motion.div
        data-testid='modal'
        onClick={handleClose}
        className='flex items-center justify-center fixed top-0 left-0 modal bg-black/80 w-full h-screen overflow-hidden z-[99] p-20'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.1 }}
      >
        <button
          className='absolute top-10 right-10 text-xl text-white z-[100]'
          onClick={handleClose}
        >
          Close
        </button>

        {children}
      </motion.div>
    </AnimatePresence>,
    modalRoot as HTMLElement
  )
}

export default Modal
