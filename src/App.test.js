import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

test('renders reward calculator title', async () => {
  render(<App />);

  // Wait for the loading state to complete and the text to appear
  await waitFor(() => {
    const linkElement = screen.getByText(/reward calculator for customers/i);
    expect(linkElement).toBeInTheDocument();
  });
});
