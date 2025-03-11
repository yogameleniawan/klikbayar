import { create } from 'zustand'

const useCategoryCatalogStore = create((set) => ({
  category: "",
  setCategory: (category) => set((state) => ({ category: category })),
}))

export { useCategoryCatalogStore }
