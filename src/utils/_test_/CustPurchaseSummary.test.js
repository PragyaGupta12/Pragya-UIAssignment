import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CustomerSummary from '../components/CustomerSummary';

const transactions = [
    { customerId: 1, amount: 120, date: '2024-05-10', transactionId: 1 },
    { customerId: 1, amount: 200, date: '2024-06-14', transactionId: 2 },
    { customerId: 1, amount: 75, date: '2024-07-12', transactionId: 3 },
    { customerId: 2, amount: 200, date: '2024-05-15', transactionId: 4 },
    { customerId: 2, amount: 50, date: '2024-06-15', transactionId: 5 },
    { customerId: 2, amount: 120, date: '2024-07-10', transactionId: 6 },
  ];

describe('CustomerSummary Component', () => {
  it('should render customer points summary correctly', () => {
    render(<CustomerSummary transactions={transactions} />);

    //Check for customer 1
    expect(screen.getByText('Customer 1')).toBeInTheDocument();
    expect(screen.getByText('5/2024: 90 points')).toBeInTheDocument(); // May 2024 points
    expect(screen.getByText('6/2024: 250 points')).toBeInTheDocument(); // June 2024 points
    expect(screen.getByText('7/2024: 25 points')).toBeInTheDocument(); // July 2024 points
    expect(screen.getByText('Total: 365 points')).toBeInTheDocument(); // Total points

    // Check for customer 2
    expect(screen.getByText('Customer 2')).toBeInTheDocument();
    expect(screen.getByText('5/2024: 250 points')).toBeInTheDocument(); // May 2024 points
    expect(screen.getByText('6/2024: 0 points')).toBeInTheDocument(); // June 2024 points
    expect(screen.getByText('7/2024: 90 points')).toBeInTheDocument(); // July 2024 points
    expect(screen.getByText('Total: 340 points')).toBeInTheDocument(); // Total points
  });

  it('should display a message when there are no transactions', () => {
    render(<CustomerSummary transactions={[]} />);
    expect(screen.getByText('No data available')).toBeInTheDocument();
  });
});
