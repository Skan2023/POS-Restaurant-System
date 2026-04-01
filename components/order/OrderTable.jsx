export default function OrderTable() {
  const orders = [
    {
      id: "12415346512",
      date: "Wed 1:00pm",
      amount: "$18.99",
      items: 2,
      category: "Food",
      menu: "Mac and Cheese",
    },
    {
      id: "12415346512",
      date: "Wed 7:20am",
      amount: "$4.50",
      items: 3,
      category: "Food",
      menu: "Chill Cheese Dog",
    },
    {
      id: "12415346512",
      date: "Wed 2:45am",
      amount: "$88.00",
      items: 4,
      category: "Food",
      menu: "Biscuits and Gravy",
    },
    {
      id: "12415346512",
      date: "Tue 6:10pm",
      amount: "$15.00",
      items: 6,
      category: "Food",
      menu: "Biscuits and Gravy",
    },
    {
      id: "12415346512",
      date: "Tue 7:52am",
      amount: "$12.50",
      items: 1,
      category: "Coffee",
      menu: "Flatwhite",
    },
    {
      id: "12415346512",
      date: "Tue 12:15pm",
      amount: "$40.20",
      items: 8,
      category: "Coffee",
      menu: "Ice Latte",
    },
  ];

  return (
    <div className="flex-1 h-full bg-white rounded-2xl p-6 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-lg font-semibold">Orders</h1>

        <input
          type="text"
          placeholder="Search menu..."
          className="border rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-orange-400"
        />
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 mb-4">
        <button className="px-4 py-1.5 bg-black text-white rounded-lg text-sm">
          All
        </button>
        <button className="px-4 py-1.5 bg-gray-100 text-gray-600 rounded-lg text-sm">
          last Month
        </button>
      </div>

      {/* Table */}
      <div className="overflow-hidden border rounded-xl">
        <table className="w-full text-sm">
          {/* Table Head */}
          <thead className="bg-gray-50 text-gray-500 text-left">
            <tr>
              <th className="p-3">Transaction ID</th>
              <th className="p-3">Date</th>
              <th className="p-3">Amount</th>
              <th className="p-3">Orders</th>
              <th className="p-3">Category</th>
              <th className="p-3">Menu</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {orders.map((order, index) => (
              <tr
                key={index}
                className="border-t hover:bg-gray-50 transition"
              >
                <td className="p-3 text-gray-600">{order.id}</td>
                <td className="p-3">{order.date}</td>
                <td className="p-3">{order.amount}</td>
                <td className="p-3">{order.items}</td>

                {/* Category Badge */}
                <td className="p-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      order.category === "Food"
                        ? "bg-blue-100 text-blue-600"
                        : "bg-green-100 text-green-600"
                    }`}
                  >
                    {order.category}
                  </span>
                </td>

                <td className="p-3">{order.menu}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Load More */}
      <div className="flex justify-center mt-4">
        <button className="text-orange-500 text-sm font-medium hover:underline">
          Load More
        </button>
      </div>
    </div>
  );
}