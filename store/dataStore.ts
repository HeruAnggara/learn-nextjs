import { create } from "zustand"
import { persist } from "zustand/middleware"

type Store = {
    count: number,
    inc: () => void,
    dec: () => void,
    reset: () => void,
}

export const dataStore = create<Store>()(persist((set) => ({
    count: 1,
    inc: () => set((state) => ({ count: state.count + 1 })),
    dec: () => set((state) => ({ count: state.count - 1 })),
    reset: () => set(() => ({ count: 1 })),
}), {
    name: "data-store",
}))