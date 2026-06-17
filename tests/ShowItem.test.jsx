import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { expect, test } from 'vitest'
import ShowItem from '../src/components/ShowItem'

const details = [
  {
    recipe: {
      label: 'Pasta',
      dishType: 'main course',
      source: 'Chef',
      cuisineType: 'italian',
      calories: 240,
      image: '/pasta.jpg',
      healthLabels: ['Vegetarian'],
      totalNutrients: {
        ENERC_KCAL: { label: 'Energy', quantity: 240, unit: 'kcal' },
      },
      ingredients: [{ text: 'noodles' }, { text: 'tomato sauce' }],
    },
  },
]

test('renders the matched recipe summary', () => {
  render(<ShowItem details={details} label="Pasta" />)

  expect(screen.getByRole('heading', { name: /^Pasta$/i })).toBeInTheDocument()
  expect(screen.getByText(/240 Calories/i)).toBeInTheDocument()
  expect(screen.getByText(/italian cuisine/i)).toBeInTheDocument()
})

test('reveals ingredients when the Ingredients card is expanded', async () => {
  const user = userEvent.setup()
  render(<ShowItem details={details} label="Pasta" />)

  // Hidden until expanded
  expect(screen.queryByText('noodles')).not.toBeInTheDocument()

  // First "show more" button belongs to the Ingredients card
  await user.click(screen.getAllByRole('button', { name: /show more/i })[0])

  expect(await screen.findByText('noodles')).toBeInTheDocument()
  expect(screen.getByText('tomato sauce')).toBeInTheDocument()
})
