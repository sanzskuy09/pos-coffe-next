import { create } from "zustand";

const useCartStore = create((set) => ({
  cart: [],
  totalItems: 0,

  // fungsi
  addToCart: (item) => {
    set((state) => {
      const existingItem = state.cart.find((e) => e.id === item.id);

      if (existingItem) {
        // jika item sudah ada
        const updatedCart = state.cart.map((e) =>
          e.id === item.id ? { ...e, quantity: e.quantity + 1 } : e
        );

        return {
          cart: updatedCart,
          totalItems: state.totalItems + 1,
        };
      } else {
        return {
          cart: [...state.cart, { ...item, quantity: 1 }],
          totalItems: state.totalItems + 1,
        };
      }
    });
  },

  removeCartItem: (item) => {
    set((state) => ({
      cart: state.cart.find((e) => e.id !== item.id),
      totalItems: state.totalItems - 1,
    }));
  },

  resetCart: () => set({ cart: [], totalItems: 0 }),
}));

export default useCartStore;
