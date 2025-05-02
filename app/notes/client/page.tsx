'use client'

import { useEffect, useState } from "react";

export default function Notes() {
  const [data, setData] = useState([]);
  const [isLOading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://service.pace11.my.id/api/notes').then((res) => res.json()).then((data) => {
      setData(data.data);
    }).finally(() => {
      setIsLoading(false);
    })
  })

  return (
    <div>
      <h1 className="text-center font-semibold mb-4">Note Client</h1>
      <ul>
        {data.map((note) => (
          <li key={note.id}>{note.title}</li>
        ))}
      </ul>
    </div>
  )
}