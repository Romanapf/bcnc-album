import React from 'react'
import { render, screen } from '@testing-library/react'
import Filter from '../Filter'
import { albumMockGrid } from '@/components/AlbumCardGrid/test/mockAlbumCardGrid'

describe('Filter', () => {
  it('renders Filter component', () => {
    render(
      <Filter
        handleChange={(e: React.ChangeEvent<HTMLInputElement>) => {}}
        numberOfResults={albumMockGrid.length}
      />
    )
    expect(screen.getByTestId('filter')).toBeInTheDocument()
  })

  it('renders number of results', () => {
    render(
      <Filter
        handleChange={(e: React.ChangeEvent<HTMLInputElement>) => {}}
        numberOfResults={albumMockGrid.length}
      />
    )
    expect(screen.getByText(albumMockGrid.length)).toBeInTheDocument()
  })

  it('renders search input', () => {
    render(
      <Filter
        handleChange={(e: React.ChangeEvent<HTMLInputElement>) => {}}
        numberOfResults={albumMockGrid.length}
      />
    )
    expect(screen.getByPlaceholderText('Search')).toBeInTheDocument()
  })
})
