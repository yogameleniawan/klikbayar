import { create } from 'zustand'

const useCheckoutStore = create((set) => ({
  category: "",
  setCategory: (category) => set((state) => ({ category: category })),
}))

export { useCheckoutStore }
