'use client'
import Image from 'next/image'
import { Photo } from '@/domain/photo'
import Modal from '../Modal/Modal'
import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

export const PhotoItem = ({
  thumbnailUrl,
  url: imgUrl,
  title,
  albumId,
  id: photoId,
}: Photo) => {
  const [showModal, setShowModal] = useState(false)

  const ref = useRef(null)
  const isInView = useInView(ref)

  const handleOpen = () => {
    setShowModal(true)
    document.body.style.overflow = 'hidden'
  }

  const handleClose = () => {
    setShowModal(false)
    document.body.style.overflow = 'auto'
  }

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 0.05, delay: 0.1 }}
        onClick={handleOpen}
        data-testid='photo-item'
        className='flex items-center justify-between gap-2 md:justify-around border-t-[0.5px] border-[rgba(255,255,255,0.2)]  py-10'
      >
        <div className='flex items-center text-gray-300 gap-3 md:gap-8 lg:w-2/3'>
          <div className='h-24 w-32 relative cursor-pointer'>
            <Image
              blurDataURL='/blur-placeholder.png'
              placeholder='blur'
              src={thumbnailUrl}
              alt={title}
              style={{
                objectFit: 'cover',
              }}
              fill
            />
          </div>

          <p className='line-clamp-2 text-sm md:text-base'>{title}</p>
        </div>
        <div className='flex flex-col text-xs md:text-sm'>
          <p className='p-0.5 bg-gray-400 text-black text-xs rounded-sm mb-4'>
            Photo ID
          </p>
          <p>{photoId}</p>
        </div>
        <div className='flex flex-col text-xs md:text-md'>
          <p className='p-0.5 bg-gray-400 text-black text-xs rounded-sm mb-4'>
            Album ID
          </p>
          <p>{albumId}</p>
        </div>
      </motion.div>
      {showModal && (
        <Modal handleClose={handleClose}>
          <motion.div
            className='w-[600px] h-[600px] relative bg-black'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Image priority src={imgUrl} alt={title} layout='fill' />
          </motion.div>
        </Modal>
      )}
    </>
  )
}
