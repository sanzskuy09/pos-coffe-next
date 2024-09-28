import { create } from "zustand";

const useCartStore = create((set) => ({
  cart: [],
  totalItems: 0,
  totalPrice: 0,
  totalDisc: 0,

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
          totalPrice: state.totalPrice + item.price,
          totalDisc: state.totalDisc + item.disc,
        };
      } else {
        return {
          cart: [...state.cart, { ...item, quantity: 1 }],
          totalItems: state.totalItems + 1,
          totalPrice: state.totalPrice + item.price,
          totalDisc: state.totalDisc + item.disc,
        };
      }
    });
  },

  removeFromCart: (e) =>
    set((state) => {
      if (e.quantity === 1) {
        return {
          cart: state.cart.filter((item) => item.id !== e.id),
          totalItems: state.totalItems - 1,
          totalPrice: state.totalPrice - e.price,
          totalDisc: state.totalDisc - e.disc,
        };
      } else {
        const updatedCart = state.cart.map((item) =>
          item.id === e.id ? { ...item, quantity: item.quantity - 1 } : item
        );

        return {
          cart: updatedCart,
          totalItems: state.totalItems - 1,
          totalPrice: state.totalPrice - e.price,
          totalDisc: state.totalDisc - e.disc,
        };
      }
    }),

  resetCart: () =>
    set({ cart: [], totalItems: 0, totalPrice: 0, totalDisc: 0 }),
}));

export default useCartStore;
