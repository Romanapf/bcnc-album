'use client'
import React, { useState, useEffect } from 'react'
import AlbumCard from '../AlbumCard/AlbumCard'
import Filter from '../Filter/Filter'
import classNames from 'classnames'
import debounce from 'lodash/debounce'
import { Album } from '@/domain/album'

interface AlbumCardGridProps {
  albums: Album[]
}

const AlbumCardGrid = ({ albums }: AlbumCardGridProps) => {
  const [searchResults, setSearchResults] = useState<Album[]>(albums)
  const [searchValue, setSearchValue] = useState<string>('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }

  useEffect(() => {
    const filteredAlbums = albums.filter((album) =>
      album.title.toLowerCase().includes(searchValue.toLowerCase())
    )
    setSearchResults(filteredAlbums)
  }, [albums, searchValue])

  const debouncedHandleChange = debounce(handleChange, 200)

  return (
    <div
      data-testid='album-card-grid'
      className='grid md:grid-cols-12 gap-12 h-screen content-start'
    >
      <Filter
        numberOfResults={searchResults.length}
        handleChange={debouncedHandleChange}
        className={classNames('col-start-1 col-span-full', {
          'mb-28': searchResults.length > 0,
        })}
      />
      {searchResults.length === 0 ? (
        <div className='text-white text-2xl col-span-full'>
          No results found
        </div>
      ) : (
        searchResults.map((album) => (
          <AlbumCard key={album.title} album={album} />
        ))
      )}
    </div>
  )
}

export default AlbumCardGrid
