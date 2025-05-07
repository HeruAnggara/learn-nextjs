'use client'

import { useCount } from "@/context";
import { dataStore } from "@/store/dataStore";

export default function About() {
  const {count, setCount} = useCount();
  const {inc, dec, reset} = dataStore()
  return (
    <div>
      About
      <button className="bg-blue-500 p-4 m-2 rounded-lg" onClick={() => inc()}>Count ++</button> 
      <button className="bg-red-500 p-4 m-2 rounded-lg" onClick={() => dec()}>Count --</button> 
      <button className="bg-gray-200 p-4 m-2 rounded-lg" onClick={() => reset()}>Reset</button> 
      {/* <button onClick={() => setCount(count + 1)}>Count</button> */}
    </div>
  );
}