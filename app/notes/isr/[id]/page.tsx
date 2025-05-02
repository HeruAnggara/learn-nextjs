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

  type DetaiNote = {
    success: boolean
    message: string
    data: ListNotes
  }

  export const revalidate = 3
  
  export const dynamicParams = true // or false, to 404 on unknown paths
   
  export async function generateStaticParams() {
    const notes: Notes = await fetch('https://api.vercel.app/blog').then((res) =>
      res.json()
    )
    return notes.map((note: ListNotes[]) => ({
      id: String(note.id),
    }))
  }
   
  export default async function Page({
    params,
  }: {
    params: Promise<{ id: string }>
  }) {
    const { id } = await params
    const note: DetaiNote = await fetch(`https://service.pace11.my.id/api/note/${id}`).then(
      (res) => res.json()
    )
    return (
      <main>
        <h1>{note.data.title}</h1>
        <p>{note.data.description}</p>
      </main>
    )
  }