import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { expect, test } from 'vitest'
import RecipeItem from './RecipeItem'

const renderItem = () =>
  render(
    <MemoryRouter>
      <RecipeItem
        label="Pasta"
        dishType="main course"
        image="/pasta.jpg"
        icon="/icon.png"
        ingredients={["noodles", "sauce"]}
        calories={240}
        source="Chef" />
    </MemoryRouter>
  )

test('renders a RecipeItem with expected details', () => {
  renderItem()

  expect(screen.getByText(/Pasta/i)).toBeInTheDocument()
  expect(screen.getByText(/main course/i)).toBeInTheDocument()
  expect(screen.getByText(/240 Calories/i)).toBeInTheDocument()
  expect(screen.getByText(/Chef/i)).toBeInTheDocument()
})

test('links to the recipe detail page', () => {
  renderItem()
  expect(screen.getByRole('link', { name: /info/i })).toHaveAttribute('href', '/Pasta')
})

test('reveals ingredients when expanded', async () => {
  const user = userEvent.setup()
  renderItem()

  expect(screen.queryByText('noodles')).not.toBeInTheDocument()
  await user.click(screen.getByRole('button', { name: /show more/i }))

  expect(await screen.findByText('noodles')).toBeInTheDocument()
  expect(screen.getByText('sauce')).toBeInTheDocument()
})
