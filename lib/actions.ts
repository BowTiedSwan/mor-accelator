'use server'

import { contactFormSchema } from '@/lib/schema'
import { z } from 'zod'

export async function contactFormAction(formData: FormData) {
  try {
    const data = contactFormSchema.parse(Object.fromEntries(formData))

    // This simulates a slow response like a form submission.
    // Replace this with your actual form submission logic.
    await new Promise(resolve => setTimeout(resolve, 1000))

    console.log(data)

    return {
      success: true,
      errors: null,
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        errors: Object.fromEntries(
          Object.entries(error.flatten().fieldErrors).map(([key, value]) => [
            key,
            value?.join(', '),
          ])
        ),
      }
    }

    return {
      success: false,
      errors: { _form: 'Something went wrong. Please try again.' },
    }
  }
}

