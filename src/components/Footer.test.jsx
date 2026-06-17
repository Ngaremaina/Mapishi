import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'
import Footer from './Footer'

test('renders footer headings, links and copyright', () => {
  render(<Footer />)

  expect(screen.getByRole('heading', { name: /^Mapishi$/i })).toBeInTheDocument()
  expect(screen.getByRole('heading', { name: /Useful Links/i })).toBeInTheDocument()
  expect(screen.getByRole('heading', { name: /^Contact$/i })).toBeInTheDocument()

  const githubLinks = screen.getAllByRole('link', { name: /github/i })
  expect(githubLinks.length).toBeGreaterThan(0)
  githubLinks.forEach((link) =>
    expect(link).toHaveAttribute('href', 'https://github.com/Ngaremaina')
  )

  expect(screen.getByRole('link', { name: /^About Us$/i })).toHaveAttribute('href', '/about')
  expect(screen.getByText(/© 2025 Mapishi\. All rights reserved\./i)).toBeInTheDocument()
})
