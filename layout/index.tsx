'use client'

import { useCount } from '@/context'
import { dataStore } from '@/store/dataStore'
import Head from 'next/head'
import Link from 'next/link'
export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const {count}  = dataStore()
    
  return (
    <>
      <div>
        <header className="w-full flex justify-between p-4 px-8 items-center bg-white border-b shadow-lg shadow-gray-100">
          <h1 className="text-xl font-bold italic">Welcome to the Next</h1>
          <ul className="flex space-x-4 font-semibold">
            <li>
              <Link
                href="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
              >
                Blog
              </Link>
            </li>
          </ul>
        </header>
        <main className="container mx-auto my-2 p-4 bg-neutral-100">
          <div>
            <p>{`Count: ${count}`}</p>
          </div>
          {children}
        </main>
        <footer className="w-full mx-auto bg-gray-800 text-center text-white text-base py-4 bottom-0 absolute">
          <p>Copyright &copy; {new Date().getFullYear()}</p>
        </footer>
      </div>
    </>
  )
}
