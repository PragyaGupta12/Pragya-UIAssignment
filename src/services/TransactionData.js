export const fetchTransactions = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { customerId: 1, amount: 120, date: '2024-06-10', transactionId: 1},
          { customerId: 1, amount: 200, date: '2024-06-14', transactionId: 2},
          { customerId: 1, amount: 75, date: '2024-07-12', transactionId: 3},
          { customerId: 2, amount: 200, date: '2024-06-15', transactionId: 4},
          { customerId: 2, amount: 50, date: '2024-07-15', transactionId: 5},
          { customerId: 2, amount: 120, date: '2024-07-10', transactionId: 6},
        ]);
      }, 1000);
    });
  };
  