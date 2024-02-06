import '@testing-library/jest-dom'
import { render, fireEvent } from '@testing-library/react'
import App from '../App'
import Greeting from '../randomComponent'

test('demo', () => {
  expect(true).toBe(true)
})

test('Renders the main page', () => {
  render(<App />)
  expect(true).toBeTruthy()
})

test('renders the counter button and updates count on click', () => {
  const { getByText } = render(<App />)

  // Initial count is 0
  expect(getByText(/count is 0/i)).toBeInTheDocument()

  // Click the button
  fireEvent.click(getByText(/count is 0/i))

  // After clicking, count should be 1
  expect(getByText(/count is 1/i)).toBeInTheDocument()
})

test('renders greeting with provided name', () => {
  const { getByText } = render(<Greeting name="Alice" />)
  const greetingElement = getByText(/Hello, Alice! Follow the counter/i)
  expect(greetingElement).toBeInTheDocument()
})
