import { Album } from '@/domain/album'
import Image from 'next/image'
import Link from 'next/link'

interface AlbumCardProps {
  album: Album
}

const AlbumCard = ({ album }: AlbumCardProps) => {
  if (!album || !album.photos || album.photos.length === 0) {
    // Return some fallback UI or null if there's nothing to show
    return null
  }

  const thumbnailUrl = album.photos[0].thumbnailUrl || '/default-thumbnail.jpg'

  return (
    <Link
      data-testid='album-card'
      href={`/album/${album.id}`}
      className='col-span-full md:col-span-6 lg:col-span-4  rounded-lg  bg-[rgba(255,255,255,0.1)] backdrop-filter backdrop-blur-lg p-4 flex flex-col items-center justify-center mb-28'
    >
      <div className='w-48 h-48 absolute overflow-hidden rounded-full -top-[96px]'>
        <Image
          blurDataURL='/blur-placeholder.jpg'
          src={thumbnailUrl}
          alt={album.title}
          fill
          style={{
            objectFit: 'cover',
          }}
        />
      </div>
      <div className='pt-24 flex flex-col gap-2 pb-8 text-center'>
        <p className='mb-4'>
          <span className='font-semibold mr-2'>Title:</span>
          {album.title}
        </p>
        <p>
          <span className='font-semibold mr-2'>Album Id:</span>
          {album.id}
        </p>
      </div>
    </Link>
  )
}

export default AlbumCard
