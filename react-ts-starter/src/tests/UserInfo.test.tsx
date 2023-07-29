import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import UserInfo from '../pages/UserInfo';
import Pokemon from '../pages/Pokemon';

test('renders text fields', () => {
  render(<BrowserRouter><UserInfo /></BrowserRouter>);
  const firstName = screen.getByTestId('firstName');
  const lastName = screen.getByTestId('lastName');
  const phoneNumber = screen.getByTestId('phoneNumber');
  const address = screen.getByTestId('address');

  expect(firstName).toBeInTheDocument();
  expect(lastName).toBeInTheDocument();
  expect(phoneNumber).toBeInTheDocument();
  expect(address).toBeInTheDocument();
});

test('renders next button', () => {
  render(<BrowserRouter><UserInfo /></BrowserRouter>);

  const nextButton = screen.getByTestId('nextButton')
  expect(nextButton).toBeInTheDocument();
})

test('alerts if fields incomplete', () => {
  render(<BrowserRouter><UserInfo /></BrowserRouter>);
  const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {})

  // Find and click the button
  const nextButton = screen.getByText('Next');
  fireEvent.click(nextButton);

  expect(alertSpy).toHaveBeenCalledTimes(1)
  alertSpy.mockRestore();
})

test('displays pokemon page', () => {
  render(<BrowserRouter><UserInfo /></BrowserRouter>);
  render(<BrowserRouter><Pokemon /></BrowserRouter>);

  const pokemon = screen.queryByTestId('pokemon');

  const firstName = screen.getByTestId('firstName');
  const lastName = screen.getByTestId('lastName');
  const phoneNumber = screen.getByTestId('phoneNumber');
  const address = screen.getByTestId('address');

  fireEvent.change(firstName, {target: {value: 'Noah'}})
  fireEvent.change(lastName, {target: {value: 'Endale'}})
  fireEvent.change(phoneNumber, {target: {value: '123-456-7890'}})
  fireEvent.change(address, {target: {value: '123 Main St, Toronto, ON, A1B2B3'}})

  // Find and click the button
  const nextButton = screen.getByText('Next');
  fireEvent.click(nextButton);

  // This might need some router implementation
  expect(pokemon).toBeInTheDocument();
})
