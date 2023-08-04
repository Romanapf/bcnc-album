import AlbumCardGrid from '@/components/AlbumCardGrid/AlbumCardGrid'
import { getAllAlbums, getAlbumById } from '@/services/AlbumUseCase'

export default async function Home() {
  const albums = await getAllAlbums()

  return (
    <main className='flex min-h-screen flex-col items-center justify-between'>
      <h1 className='text-4xl mb-20'>📸 Welcome to PhotoAlbum</h1>
      <section className='w-full border-t pt-10'>
        <AlbumCardGrid albums={albums} />
      </section>
    </main>
  )
}
