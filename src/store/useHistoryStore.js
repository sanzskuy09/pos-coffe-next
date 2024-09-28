import { create } from "zustand";

const useHistoryStore = create((set) => ({
  history: [],

  addHistory: (item) => {
    set((state) => ({
      history: [...state.history, item],
    }));
  },
}));

export default useHistoryStore;
