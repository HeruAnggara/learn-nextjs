'use server'

import { revalidatePath } from 'next/cache'
import { z } from 'zod'

type FieldErrors = {
    [key: string]: string[]
}

export async function createNote(prevState: {
    message: string | null
    errors: object | null
}, formData: FormData) {
    const formSchema = z.object({
        title: z.string().min(1, 'Title wajib diisi'),
        description: z.string().min(1, 'Description wajib diisi'),
    })

    const validateForm = formSchema.safeParse({
        title: formData.get('title'),
        description: formData.get('description'),
    })

    if (!validateForm.success) {
        const fieldErrors: FieldErrors = validateForm.error.formErrors.fieldErrors || {}
        const errors = Object.keys(fieldErrors)?.reduce(
            (acc, key) => {
              acc[key] = fieldErrors[key]?.[0] || 'Unknown error'
              return acc
            },
            {} as Record<string, string>,
        )

        return { errors }
    }

    try {
        await fetch('https://service.pace11.my.id/api/note', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(validateForm.data)
        }).then(res => res.json())
        
        revalidatePath('/notes/server')
        return {
            message: 'Note created successfully',
        }
    } catch (error) {
        return {
            message: 'Something went wrong',
        }
    }
}