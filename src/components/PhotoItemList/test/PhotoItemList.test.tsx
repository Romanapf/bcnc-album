import React from 'react'
import { render, screen } from '@testing-library/react'
import { photItemMock } from './mockPhotoItem'
import PhotoItemList from '../PhotoItemList'

describe('PhotoItem', () => {
  it('renders', () => {
    render(
      <PhotoItemList photos={[photItemMock]} albumId={photItemMock.albumId} />
    )
    expect(screen.getByTestId('photo-item-list')).toBeInTheDocument()
  })
})
