async function getNotes() {
  const notes = await fetch('https://service.pace11.my.id/api/notes').then((res) => res.json());
  return notes;
}

export default async function Notes() {
  const notes = await getNotes();

  return (
    <div>
      <h1 className="text-center font-semibold mb-4">Note Servers</h1>
      <ul>
        {notes.data.map((note) => (
          <li key={note.id}>{note.title}</li>
        ))}
      </ul>
    </div>
  )
}