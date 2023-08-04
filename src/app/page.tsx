import { getAllAlbums, getAlbumById } from '@/services/AlbumUseCase'
import Image from 'next/image'

export default async function Home() {
  const albums = await getAllAlbums()
  const albumId = await getAlbumById(1)

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'></main>
  )
}
