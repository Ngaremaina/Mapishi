import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { expect, test, vi } from 'vitest'
import Header from '../src/components/Header'

const renderHeader = (getSearch = vi.fn()) => {
  render(
    <MemoryRouter>
      <Header getSearch={getSearch} />
    </MemoryRouter>
  )
  return getSearch
}

test('renders the Mapishi brand and nav links', () => {
  renderHeader()
  expect(screen.getByRole('link', { name: /^Mapishi$/i })).toBeInTheDocument()
  expect(screen.getByRole('link', { name: /^Home$/i })).toBeInTheDocument()
  // "About" appears in the desktop nav (and the mobile menu when open)
  expect(screen.getAllByRole('link', { name: /^About$/i }).length).toBeGreaterThan(0)
})

test('submitting the search form calls getSearch with the typed value', async () => {
  const user = userEvent.setup()
  const getSearch = renderHeader()

  const input = screen.getByPlaceholderText('Search…')
  await user.type(input, 'pasta')
  await user.click(screen.getByRole('button', { name: /search/i }))

  expect(getSearch).toHaveBeenCalledWith('pasta')
})

test('toggles the mobile menu open', async () => {
  const user = userEvent.setup()
  renderHeader()

  expect(screen.queryByRole('link', { name: /^Home$/i, hidden: false }))
  await user.click(screen.getByRole('button', { name: /menu/i }))

  // Opening the menu adds a second "Home"/"About" entry (mobile dropdown)
  expect(screen.getAllByRole('link', { name: /^Home$/i }).length).toBeGreaterThan(1)
})
