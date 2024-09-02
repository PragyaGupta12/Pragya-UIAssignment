import { render, screen } from '@testing-library/react';
import App from './App';

test('renders reward calculator title after loading', async () => {
  render(<App />);

  // Wait for the title to appear, implicitly waiting for loading to disappear
  const linkElement = await screen.findByText(/reward calculator for customers/i);
  expect(linkElement).toBeInTheDocument();
});
