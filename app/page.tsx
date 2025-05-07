'use client'

import Image from "next/image";
import styles from "./page.module.css";
import { useCount } from "@/context";
import { dataStore } from "@/store/dataStore";

export default function Home() {
  const {inc, dec, reset} = dataStore()
  return (
  <>
    <h3 className="text-xl font-bold">Index Page</h3>
    <button className="bg-blue-500 p-4 m-2 rounded-lg" onClick={() => inc()}>Count ++</button> 
    <button className="bg-red-500 p-4 m-2 rounded-lg" onClick={() => dec()}>Count --</button> 
    <button className="bg-gray-200 p-4 m-2 rounded-lg" onClick={() => reset()}>Reset</button> 
  </>
  );
}
