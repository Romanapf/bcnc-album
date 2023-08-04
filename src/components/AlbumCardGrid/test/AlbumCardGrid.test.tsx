import React from 'react'
import { render, screen } from '@testing-library/react'
import AlbumCardGrid from '../AlbumCardGrid'
import { albumMockGrid } from './mockAlbumCardGrid'

describe('AlbumCardGrid', () => {
  it('renders AlbumCard component', () => {
    render(<AlbumCardGrid albums={albumMockGrid} />)
    expect(screen.getByTestId('album-card-grid')).toBeInTheDocument()
  })
})
