import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'
import About from '../src/pages/About'

test('renders the About page intro and copyright', () => {
  render(<About />)

  expect(screen.getByRole('heading', { name: /Welcome to Mapishi/i })).toBeInTheDocument()
  expect(screen.getAllByText(/Edamam API/i).length).toBeGreaterThan(0)
  expect(screen.getByText(/© \d{4} Mapishi\. All rights reserved\./i)).toBeInTheDocument()
})
