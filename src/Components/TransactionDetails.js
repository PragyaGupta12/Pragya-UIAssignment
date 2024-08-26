import React from 'react';

const TransactionDetails = ({ transactions }) => {
  return (
    <div>
      <h3>Transaction Details</h3>
      <ul>
        {transactions.map((transaction, transactionId) => (
          <li key={transactionId}>
            Customer {transaction.customerId}: ${transaction.amount} on {transaction.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionDetails;
