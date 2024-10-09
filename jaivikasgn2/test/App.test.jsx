import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from '../src/App';

test('renders Hello DevOps text', () => {
  render(<App/>)
  const helloElement = screen.getByText(/Hello DevOps!/i);

  // checking that hello devops present in document or not.
  expect(helloElement).toBeInTheDocument();
});
