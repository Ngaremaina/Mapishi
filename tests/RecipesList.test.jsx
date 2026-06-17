import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { expect, test } from 'vitest'
import Recipes from '../src/pages/RecipesList'

const makeRecipe = (label) => ({
  recipe: {
    label,
    image: `/${label}.jpg`,
    dishType: 'main course',
    images: { SMALL: { url: `/${label}-small.jpg` } },
    ingredientLines: ['salt'],
    calories: 100,
    source: 'Chef',
  },
})

test('renders one card per recipe', () => {
  render(
    <MemoryRouter>
      <Recipes recipes={[makeRecipe('Pasta'), makeRecipe('Soup')]} />
    </MemoryRouter>
  )

  expect(screen.getByText(/Pasta/)).toBeInTheDocument()
  expect(screen.getByText(/Soup/)).toBeInTheDocument()
})

test('renders nothing to crash on an empty list', () => {
  render(
    <MemoryRouter>
      <Recipes recipes={[]} />
    </MemoryRouter>
  )

  expect(screen.queryByText(/Calories/)).not.toBeInTheDocument()
})
