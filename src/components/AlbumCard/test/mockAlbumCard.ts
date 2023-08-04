import { Album } from '@/domain/album'

export const albumMock: Album = {
  userId: 1,
  id: 1,
  title: 'My Album',
  photos: [
    {
      albumId: 1,
      id: 1,
      title: 'Photo 1',
      url: 'https://example.com/photo1.jpg',
      thumbnailUrl: 'https://example.com/thumbnail1.jpg',
    },
    {
      albumId: 2,
      id: 2,
      title: 'Photo 2',
      url: 'https://example.com/photo2.jpg',
      thumbnailUrl: 'https://example.com/thumbnail2.jpg',
    },
  ],
}
