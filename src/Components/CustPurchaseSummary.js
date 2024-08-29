import React, { useMemo } from 'react';
import { calculatePoints } from '../utils/rewardPointCalculator';

const CustPurchaseSummary = ({ transactions }) => {
  //useMemo will ensure that the calculation only runs when the transactions prop changes.
  const customerPointsMonthly = useMemo(()=>{
  const points = {};
  // Calculate points per month per customer
  transactions.forEach((transaction) => {
    const date = new Date(transaction.date);
    const month = date.getMonth() + 1; // since in JS objects the months start from 0
    const year = date.getFullYear();
    const displayMonthYear = `${month}/${year}`;

    if (!customerPointsMonthly[transaction.customerId]) {
      customerPointsMonthly[transaction.customerId] = {};
    }

    if (!customerPointsMonthly[transaction.customerId][displayMonthYear]) {
      customerPointsMonthly[transaction.customerId][displayMonthYear] = 0;
    }

    customerPointsMonthly[transaction.customerId][displayMonthYear] += calculatePoints(transaction.amount);
  });
  return points;
  },[transactions])

  // Calculate total points for each customer
  const totalPoints = {};
  Object.keys(customerPointsMonthly).forEach(customerId => {
    let total = 0;
    Object.keys(customerPointsMonthly[customerId]).forEach(month => {
      total += customerPointsMonthly[customerId][month];
    });
    totalPoints[customerId] = total; // Update totalPoints with the calculated total
  });

  return (
    <div>
      <h3>Customer Reward Points</h3>
      <ul>
        {Object.keys(customerPointsMonthly).map((customerId) => (
          <li key={customerId}>
            <h4>Customer {customerId}</h4>
            <ul>
              {Object.keys(customerPointsMonthly[customerId]).map((monthYear) => (
                <li key={monthYear}>
                  {monthYear}: {customerPointsMonthly[customerId][monthYear]} points
                </li>
              ))}
            </ul>
            <p>
              <strong>Total: {totalPoints[customerId]} points</strong>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustPurchaseSummary;
