import React from 'react';

function ExpensesList() {
  // Dummy expense data
  const expenses = [
    { id: 1, description: 'Office Supplies', amount: '$150.00' },
    { id: 2, description: 'Internet Bill', amount: '$75.00' },
    { id: 3, description: 'Software Subscription', amount: '$200.00' },
    { id: 4, description: 'Marketing Expenses', amount: '$500.00' },
    { id: 5, description: 'Travel Expenses', amount: '$1,200.00' },
  ];

  return (
    <div className="mt-4 bg-white shadow rounded-lg p-4 h-96 overflow-y-auto">
      <h3 className="font-semibold text-lg mb-4">Expenses</h3>
      <ul className="space-y-2">
        {expenses.map(expense => (
          <li key={expense.id} className="flex justify-between p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition duration-200">
            <span>{expense.description}</span>
            <span className="font-bold text-red-600">{expense.amount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpensesList;