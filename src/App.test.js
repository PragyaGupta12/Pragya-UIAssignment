import { render, screen } from '@testing-library/react';
import App from './App';

test('renders reward calculator title', () => {
  render(<App />);
  const linkElement = screen.getByText(/reward calculator for customers/i);
  expect(linkElement).toBeInTheDocument();
});
