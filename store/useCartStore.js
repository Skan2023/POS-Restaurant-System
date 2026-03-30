import { create } from "zustand";

export const useCartStore = create((set) => ({
  cart: [],

  addToCart: (product) =>
    set((state) => {
      const exist = state.cart.find((item) => item.id === product.id);

      if (exist) {
        return {
          cart: state.cart.map((item) =>
            item.id === product.id
              ? { ...item, qty: item.qty + 1 }
              : item
          ),
        };
      }

      return { cart: [...state.cart, { ...product, qty: 1 }] };
    }),

  increaseQty: (id) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      ),
    })),

  decreaseQty: (id) =>
    set((state) => ({
      cart: state.cart
        .map((item) =>
          item.id === id ? { ...item, qty: item.qty - 1 } : item
        )
        .filter((item) => item.qty > 0),
    })),

  getTotal: (state) =>
    state.cart.reduce((total, item) => total + item.price * item.qty, 0),
}));