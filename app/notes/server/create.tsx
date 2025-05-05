'use client'

import { useActionState } from "react"
import { createNote } from "./action"
import { useFormStatus } from "react-dom"

const initialState = {
  message: '',
  errors: {
    title: '',
    description: '',
  }
}

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <div className="flex justify-end">
      <button
        type="submit"
        className="bg-blue-700 text-white px-4 py-2 rounded-md"
        aria-disabled={pending}
      >
        Submit
      </button>
    </div>
  )
}

export default function NotesServerCreate() {
  const [state, formAction] = useActionState(createNote, initialState)
  return (
    <div className="w-full mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Add Notes</h2>
      <form action={formAction} className="space-y-4">
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-600"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="mt-1 p-2 border rounded-md w-full"
          />
          {state && state.errors && (
            <p className="text-red-500 text-sm mt-1">{state.errors.title}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-600"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            className="mt-1 p-2 border rounded-md w-full"
          ></textarea>
          {state && state.errors && (
            <p className="text-red-500 text-sm mt-1">
              {state.errors.description}
            </p>
          )}
        </div>
        <SubmitButton />
      </form>
    </div>
  )
}
