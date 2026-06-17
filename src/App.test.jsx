import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { beforeAll, describe, expect, test, vi } from 'vitest'

vi.mock('react-loader-spinner', () => ({
  CirclesWithBar: () => null
}))

import App from './App'
import * as service from './service/service'

beforeAll(() => {
  vi.spyOn(service, 'fetchData').mockResolvedValue({ hits: [] })
})

describe('App', () => {
  test('renders Mapishi header and footer', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )

    expect(await screen.findByRole('link', { name: /^Mapishi$/i })).toBeInTheDocument()
    const aboutLinks = await screen.findAllByRole('link', { name: /^About$/i })
    expect(aboutLinks.length).toBeGreaterThan(0)
  })
})
