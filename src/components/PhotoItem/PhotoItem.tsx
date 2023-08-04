'use client'
import Image from 'next/image'
import { Photo } from '@/domain/photo'

export const PhotoItem = ({
  thumbnailUrl,
  url: imgUrl,
  title,
  albumId,
  id: photoId,
}: Photo) => {
  return (
    <>
      <div
        data-testid='photo-item'
        className='flex items-center justify-around border-t-[0.5px] border-[rgba(255,255,255,0.2)]  py-10'
      >
        <div className='flex items-center text-gray-300 gap-8 w-2/3'>
          <div className='h-24 w-32 relative cursor-pointer'>
            <Image
              src={thumbnailUrl}
              alt={title}
              style={{
                objectFit: 'cover',
              }}
              fill
            />
          </div>

          <p className='max-w-xs'>{title}</p>
        </div>
        <div className='flex flex-col'>
          <p className='p-0.5 bg-gray-400 text-black text-xs rounded-sm mb-4'>
            Photo ID
          </p>
          <p>{photoId}</p>
        </div>
        <div className='flex flex-col'>
          <p className='p-0.5 bg-gray-400 text-black text-xs rounded-sm mb-4'>
            Album ID
          </p>
          <p>{albumId}</p>
        </div>
      </div>
    </>
  )
}
