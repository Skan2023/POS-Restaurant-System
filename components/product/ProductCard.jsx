"use client";

import { useCartStore } from "@/store/useCartStore";

export default function ProductCard({ product }) {
  const addToCart = useCartStore((s) => s.addToCart);

  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition">
      <img
        src={product.image}
        className="w-full h-24 mx-auto object-contain"
      />

      <h3 className="mt-2 font-medium text-center">
        {product.name}
      </h3>

      <p className="text-orange-500 font-bold text-center">
        ${product.price}
      </p>

      <button
        onClick={() => addToCart(product)}
        className="mt-2 w-full bg-orange-500 text-white py-1 rounded-lg"
      >
        Add
      </button>
    </div>
  );
}