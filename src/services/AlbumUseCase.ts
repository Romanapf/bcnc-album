import {
  getAlbumByIdFromApi,
  getAllAlbumsFromApi,
  getPhotosByAlbumIdFromApi,
} from '@/data/AlbumApiDataSource'
import { Album } from '@/domain/album'

export async function getAllAlbums(): Promise<Album[]> {
  const albums = await getAllAlbumsFromApi()

  const albumsWithPhotos = await Promise.all(
    albums.map(async (album) => {
      const photos = await getPhotosByAlbumIdFromApi(album.id)
      return { ...album, photos }
    })
  )

  return albumsWithPhotos
}

export async function getAlbumById(id: number): Promise<Album | null> {
  const album = await getAlbumByIdFromApi(id)
  return album
}
