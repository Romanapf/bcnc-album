import React from 'react'
import { render, screen } from '@testing-library/react'
import { PhotoItem } from '../PhotoItem'
import { photItemMock } from './mockPhotoItem'

describe('PhotoItem', () => {
  it('renders', () => {
    render(
      <PhotoItem
        albumId={photItemMock.albumId}
        url={photItemMock.url}
        title={photItemMock.title}
        thumbnailUrl={photItemMock.thumbnailUrl}
        id={photItemMock.id}
      />
    )
    expect(screen.getByTestId('photo-item')).toBeInTheDocument()
  })
})
