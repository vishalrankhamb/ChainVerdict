// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ChainVerdict title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ChainVerdict/i);
    expect(titleElement).toBeInTheDocument();
});
