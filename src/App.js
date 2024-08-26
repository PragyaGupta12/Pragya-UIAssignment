import React, { useState, useEffect } from 'react';
import './App.css';
import TransactionDetails from './Components/TransactionDetails';
import CustPurchaseSummary from './Components/CustPurchaseSummary';
import { fetchTransactions } from './services/TransactionData';

function App() {
  const [transaction, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchTransactions();
        setTransactions(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch transactions.');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="App">
      <h1>Reward Calculator for Customers</h1>
      <TransactionDetails transactions={transaction} />
      <CustPurchaseSummary transactions={transaction} />
    </div>
  );
}

export default App;
