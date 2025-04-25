// Server Component

// export default async function BlogDetail({
//   params,
// } : {
//   params: Promise<{
//     id: string
//   }>
// }) {
//   console.log('data => ', params);  
//   const id = (await params).id;
//   return <div>Blog Detail Page {id}</div>;
// }

'use client'

import { useParams, useSearchParams } from "next/navigation";

export default function BlogDetail() {
    const params = useParams();
    const seacrh = useSearchParams();
    // const user = seacrh.getAll('user');
    // const age = seacrh.getAll('age');
    const query = Object.fromEntries(seacrh.entries())
    console.log(query);
    

    return <div>Blog Detail Page with dynamic params : {params.id}{ query.user && query.age ? `, user : ${query.user}, age: ${query.age}` : ''}</div>
}