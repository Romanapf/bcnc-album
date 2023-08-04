import { Album } from '@/domain/album'
import { Photo } from '@/domain/photo'

export async function getAllAlbumsFromApi(): Promise<Album[]> {
  const response = await fetch('https://jsonplaceholder.typicode.com/albums', {
    next: {
      revalidate: 86400,
    },
  })
  const albums = await response.json()
  return albums
}

export async function getAlbumByIdFromApi(id: number): Promise<Album | null> {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/albums/${id}`,
    {
      next: {
        revalidate: 86400,
      },
    }
  )

  if (response.ok) {
    const album = await response.json()
    return album
  } else {
    return null
  }
}

export async function getPhotosByAlbumIdFromApi(
  albumId: number
): Promise<Photo[]> {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`,
    {
      next: {
        revalidate: 86400,
      },
    }
  )
  const photos = await response.json()
  return photos
}
