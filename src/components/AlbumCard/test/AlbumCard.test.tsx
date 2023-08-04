import React from 'react'
import { render, screen } from '@testing-library/react'
import AlbumCard from '../AlbumCard'
import { albumMock } from './mockAlbumCard'

describe('AlbumCard', () => {
  it('renders AlbumCard component', () => {
    render(<AlbumCard album={albumMock} />)
    expect(screen.getByTestId('album-card')).toBeInTheDocument()
  })

  it('render title', () => {
    render(<AlbumCard album={albumMock} />)
    expect(screen.getByText(albumMock.title)).toBeInTheDocument()
  })

  it('render albumid', () => {
    render(<AlbumCard album={albumMock} />)
    expect(screen.getByText(albumMock.id)).toBeInTheDocument()
  })

  it('render default thumbnail', () => {
    render(<AlbumCard album={albumMock} />)
    expect(screen.getByAltText(albumMock.title)).toBeInTheDocument()
  })
})
