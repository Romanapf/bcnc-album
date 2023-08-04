import BackButton from '@/components/BackButton/BackButton'
import { getAlbumById } from '@/services/AlbumUseCase'
import Image from 'next/image'

import AdpMainInfo from '@/components/AdpMainInfo/AdpMainInfo'
import PhotoItemList from '@/components/PhotoItemList/PhotoItemList'

const AlbumDetailPage = async ({
  params: { albumId },
}: {
  params: { albumId: number }
}) => {
  const album = await getAlbumById(albumId)

  return (
    <div className='grid grid-cols-1 md:grid-cols-12 gap-8 px-4 md:px-0'>
      <div className='col-span-full'>
        <BackButton />
      </div>
      <div className='col-span-full lg:col-span-4  rounded-lg bg-[rgba(255,255,255,0.1)] backdrop-filter backdrop-blur-lg pl-8 pr-8'>
        <div className='sticky top-0 pt-8'>
          {album && (
            <AdpMainInfo
              title={album.title}
              id={album?.id}
              img={album?.photos[0].thumbnailUrl}
            />
          )}
        </div>
      </div>
      <div className='col-span-full lg:col-span-8 rounded-lg bg-[rgba(255,255,255,0.1)] backdrop-filter backdrop-blur-lg p-2 md:p-8'>
        {album && <PhotoItemList photos={album.photos} albumId={album.id} />}
      </div>
    </div>
  )
}

export default AlbumDetailPage
