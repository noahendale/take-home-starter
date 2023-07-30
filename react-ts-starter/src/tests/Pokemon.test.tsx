import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Pokemon from '../pages/Pokemon';

test('renders pokemon text field', () => {
  render(<BrowserRouter><Pokemon /></BrowserRouter>);

  const pokemon = screen.getByTestId('pokemon')
  expect(pokemon).toBeInTheDocument();
})
