type ListNotes = {
    id: number
    title: string
    description: string
    deleted_at: string
    created_at: string
    updated_at: string
  }
  
  type Notes = {
    success: boolean
    message: string
    data: ListNotes[]
  }

  export const revalidate = 3
   
  export default async function Page() {
    const notes: Notes = await fetch(`https://service.pace11.my.id/api/notes`).then(
      (res) => res.json()
    )
    return (
      <main>
        <ul className="space-y-2">
          {notes.data.map((note) => (
            <li key={note.id} className="border-2 mb-2 p-2">
                <a href={`/notes/isr/${note.id}`}>
                    {note.title}
                </a>
            </li>
          ))}
        </ul>
      </main>
    )
  }