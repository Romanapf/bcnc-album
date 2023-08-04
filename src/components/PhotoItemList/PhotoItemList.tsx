'use client'

import { Photo } from '@/domain/photo'
import { PhotoItem } from '../PhotoItem/PhotoItem'

const PhotoItemList = ({
  photos,
  albumId,
}: {
  photos: Photo[]
  albumId: number
}) => {
  return (
    <div data-testid='photo-item-list' className='w-full'>
      <p className='mb-8 text-gray-300'># {photos.length} photos</p>
      {photos.map((photo: Photo, idx: number) => (
        <PhotoItem
          key={idx}
          thumbnailUrl={photo.thumbnailUrl}
          url={photo.url}
          title={photo.title}
          albumId={albumId}
          id={photo.id}
        />
      ))}
    </div>
  )
}

export default PhotoItemList
