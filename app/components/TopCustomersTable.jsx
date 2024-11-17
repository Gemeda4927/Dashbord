import React from 'react';

function TopCustomersTable() {
  // Dummy data for customers
  const customers = [
    { name: 'Alice Johnson', email: 'alice@example.com', amountPaid: '$150', phone: '123-456-7890', edirName: 'Edir A', location: 'New York' },
    { name: 'Bob Smith', email: 'bob@example.com', amountPaid: '$200', phone: '234-567-8901', edirName: 'Edir B', location: 'Los Angeles' },
    { name: 'Charlie Brown', email: 'charlie@example.com', amountPaid: '$300', phone: '345-678-9012', edirName: 'Edir C', location: 'Chicago' },
    { name: 'David Wilson', email: 'david@example.com', amountPaid: '$220', phone: '456-789-0123', edirName: 'Edir D', location: 'Houston' },
    { name: 'Eva Green', email: 'eva@example.com', amountPaid: '$180', phone: '567-890-1234', edirName: 'Edir E', location: 'Phoenix' },
    { name: 'Frank White', email: 'frank@example.com', amountPaid: '$90', phone: '678-901-2345', edirName: 'Edir F', location: 'Philadelphia' },
    { name: 'Grace Lee', email: 'grace@example.com', amountPaid: '$350', phone: '789-012-3456', edirName: 'Edir G', location: 'San Antonio' },
    { name: 'Hannah Scott', email: 'hannah@example.com', amountPaid: '$220', phone: '890-123-4567', edirName: 'Edir H', location: 'San Diego' },
    { name: 'Isaac King', email: 'isaac@example.com', amountPaid: '$120', phone: '901-234-5678', edirName: 'Edir I', location: 'Dallas' },
    { name: 'Jack Brown', email: 'jack@example.com', amountPaid: '$60', phone: '012-345-6789', edirName: 'Edir J', location: 'San Jose' },
  ];

  return (
    <div className="mt-4 bg-white shadow rounded-lg p-4">
      <h3 className="font-semibold text-lg mb-4">Top Customers</h3>
      <table className="min-w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-purple-600 text-white">
            <th className="py-2 px-4 border border-gray-200">Name</th>
            <th className="py-2 px-4 border border-gray-200">Email</th>
            <th className="py-2 px-4 border border-gray-200">Amount Paid</th>
            <th className="py-2 px-4 border border-gray-200">Phone Number</th>
            <th className="py-2 px-4 border border-gray-200">Edir Name</th>
            <th className="py-2 px-4 border border-gray-200">Location</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="py-2 px-4 border border-gray-200">{customer.name}</td>
              <td className="py-2 px-4 border border-gray-200">{customer.email}</td>
              <td className="py-2 px-4 border border-gray-200">{customer.amountPaid}</td>
              <td className="py-2 px-4 border border-gray-200">{customer.phone}</td>
              <td className="py-2 px-4 border border-gray-200">{customer.edirName}</td>
              <td className="py-2 px-4 border border-gray-200">{customer.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TopCustomersTable;