import Link from "next/link";
import NotesServerCreate from "./create";

type ListNotes = {
  id: number
  title: string
  description: string
  deleted_at: string
  created_at: string
  updated_at: string
}

async function getNotes() {
  const notes = await fetch('https://service.pace11.my.id/api/notes').then((res) => res.json());
  return notes;
}

export default async function Notes() {
  const notes = await getNotes();

  return (
    <>
      <NotesServerCreate />
      <div className="grid grid-cols-3 space-x-4 space-y-4 gap-4 mt-8">
          {notes.data.map((note: ListNotes) => (
            <Link
              href=""
              key={note.id}
              className="flex flex-col gap-2 bg-gray-100 shadow-sm rounded-lg"
            >
              <h1 className="font-semibold capitalize">{note.title}</h1>
              <p>{note.description}</p>
            </Link>
          ))}
        </div>
    </>
  )
}