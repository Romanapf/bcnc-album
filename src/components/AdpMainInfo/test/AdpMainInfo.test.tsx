import React from 'react'
import { render, screen } from '@testing-library/react'
import AdpMainInfo from '../AdpMainInfo'
import { albumMock } from '@/components/AlbumCard/test/mockAlbumCard'

describe('AdpMainInfo', () => {
  it('renders AdpMainInfo component', () => {
    render(
      <AdpMainInfo
        id={albumMock.id}
        img={albumMock.photos[0].thumbnailUrl}
        title={albumMock.title}
      />
    )
    expect(screen.getByTestId('adp-main-info')).toBeInTheDocument()
  })
})
