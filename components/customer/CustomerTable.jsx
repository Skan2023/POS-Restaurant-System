import { Search, Plus } from "lucide-react";
import React from "react";

export default function CustomerTable() {
  const customers = [
    {
      id: 1,
      name: "John Doe",
      phone: "012 345 678",
      address: "Phnom Penh",
      orders: 2,
    },
    {
      id: 2,
      name: "Jane Smith",
      phone: "098 765 432",
      address: "Siem Reap",
      orders: 5,
    },
    {
      id: 3,
      name: "Michael Chan",
      phone: "011 223 344",
      address: "Battambang",
      orders: 1,
    },
    {
      id: 4,
      name: "Sok Dara",
      phone: "010 555 666",
      address: "Phnom Penh",
      orders: 3,
    },
    {
      id: 5,
      name: "Lina Kim",
      phone: "015 777 888",
      address: "Kandal",
      orders: 4,
    },
  ];
  return (
    <div className="flex-1 h-full bg-white rounded-2xl p-6 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-lg font-semibold text-gray-800">Customers</h1>

        <button className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-orange-600 transition">
          <Plus size={16} />
          Add Customer
        </button>
      </div>

      {/* Search */}
      <div className="flex items-center justify-between mb-4">
        <div className="relative w-full max-w-sm">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder="Search customers..."
            className="w-full border border-gray-200 rounded-lg pl-10 pr-3 py-2 text-sm outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
          />
        </div>
      </div>

      {/* Table Placeholder */}
      <div className="border border-gray-100 rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-600">
            <tr>
              <th className="text-left px-4 py-3">Customer Name</th>
              <th className="text-left px-4 py-3">Mobile Number</th>
              <th className="text-left px-4 py-3">Address</th>
              <th className="text-left px-4 py-3">Orders</th>
              <th className="text-left px-4 py-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id} className="border-t">
                <td className="px-4 py-3">{customer.name}</td>
                <td className="px-4 py-3">{customer.phone}</td>
                <td className="px-4 py-3">{customer.address}</td>
                <td className="px-4 py-3">{customer.orders}</td>
                <td className="px-4 py-3 flex gap-1">
                  <button className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 cursor-pointer">
                    Edit
                  </button>
                  <button className="bg-red-500 text-white py-2 px-6 rounded hover:bg-red-600 cursor-pointer">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
