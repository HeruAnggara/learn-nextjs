'use client'

import { createContext, useContext, useState, ReactNode } from "react"

const CounterContext = createContext<any>(null)

export function CountProvider({ children }: { children: ReactNode }) {
  const [count, setCount] = useState(0)

  return (
    <CounterContext.Provider value={{ count, setCount }}>
      {children}
    </CounterContext.Provider>
  )
}

export function useCount() {
  return useContext(CounterContext)
}