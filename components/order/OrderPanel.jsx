"use client";

import { useCartStore } from "@/store/useCartStore";

export default function OrderPanel() {
  const { cart, increaseQty, decreaseQty } = useCartStore();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div className="w-80 bg-white rounded-2xl p-4 shadow">
      <h2 className="font-bold mb-4">Order</h2>

      <div className="space-y-3">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center"
          >
            <div>
              <p className="text-sm font-medium">{item.name}</p>
              <p className="text-xs text-gray-500">
                ${item.price}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button onClick={() => decreaseQty(item.id)}>
                -
              </button>
              <span>{item.qty}</span>
              <button onClick={() => increaseQty(item.id)}>
                +
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 border-t pt-3">
        <p className="font-bold">Total: ${total}</p>

        <button className="mt-3 w-full border border-gray-300 py-2 rounded-lg">Print Invoice</button>
        <button className="mt-3 w-full bg-green-500 text-white py-2 rounded-lg">
          Payments
        </button>
      </div>
    </div>
  );
}