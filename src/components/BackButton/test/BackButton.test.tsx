import React from 'react'
import { render, screen } from '@testing-library/react'
import BackButton from '../BackButton'

describe('BackButton', () => {
  it('renders', () => {
    render(<BackButton />)
    expect(screen.getByTestId('back-button')).toBeInTheDocument()
  })

  it('href is /', () => {
    render(<BackButton />)
    expect(screen.getByTestId('back-button')).toHaveAttribute('href', '/')
  })
})
