'use client'

import * as React from 'react'
import {
  Card,
  CardTitle,
  CardHeader,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'
import { Checkbox } from "@/components/ui/checkbox"

import { contactFormAction } from '@/lib/actions'
import { Check } from 'lucide-react'
import { useState } from 'react'

export function ContactForm({ className }: React.ComponentProps<typeof Card>) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formState, setFormState] = React.useState({
    success: false,
    errors: null as Record<string, string> | null,
  })

  const handleSubmit = async (formData: FormData) => {
    setIsSubmitting(true)
    try {
      const result = await contactFormAction(formData)
      setFormState({
        success: result.success,
        errors: result.errors ? Object.fromEntries(
          Object.entries(result.errors).filter(([_, v]) => v !== undefined)
        ) as Record<string, string> : null
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className={cn('w-full max-w-2xl bg-black shadow-[0_0_50px_rgba(0,255,0,0.2)] border-0', className)}>
      <CardHeader className="space-y-2">
        <CardTitle className="text-4xl font-normal tracking-tight text-white">
          Ready to accelerate your project on MOR? Apply now.
        </CardTitle>
        <CardDescription className="text-green-400/80">
          Tell us more about yourself and what you've got in mind.
        </CardDescription>
      </CardHeader>
      <form onSubmit={async (e) => {
        e.preventDefault()
        await handleSubmit(new FormData(e.currentTarget))
      }}>
        <CardContent className="flex flex-col gap-6">
          {formState.success ? (
            <p className="text-green-400 flex items-center gap-2 text-sm">
              <Check className="size-4" />
              Your message has been sent. Thank you.
            </p>
          ) : null}
          <div
            className="group/field grid gap-2"
            data-invalid={!!formState.errors?.name}
          >
            <Label
              htmlFor="name"
              className="text-white group-data-[invalid=true]/field:text-red-400"
            >
              Your name
            </Label>
            <Input
              id="name"
              name="name"
              placeholder="Enter your name"
              className="border-green-400/20 bg-black text-green-400 placeholder:text-green-400/50 focus-visible:ring-green-400/30 group-data-[invalid=true]/field:border-red-400"
              disabled={isSubmitting}
              aria-invalid={!!formState.errors?.name}
              aria-errormessage="error-name"
            />
            {formState.errors?.name && (
              <p id="error-name" className="text-red-400 text-sm">
                {formState.errors.name}
              </p>
            )}
          </div>
          <div
            className="group/field grid gap-2"
            data-invalid={!!formState.errors?.email}
          >
            <Label
              htmlFor="email"
              className="text-white group-data-[invalid=true]/field:text-red-400"
            >
              Enter your email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              className="border-green-400/20 bg-black text-green-400 placeholder:text-green-400/50 focus-visible:ring-green-400/30 group-data-[invalid=true]/field:border-red-400"
              disabled={isSubmitting}
              aria-invalid={!!formState.errors?.email}
              aria-errormessage="error-email"
            />
            {formState.errors?.email && (
              <p id="error-email" className="text-red-400 text-sm">
                {formState.errors.email}
              </p>
            )}
          </div>
          <div
            className="group/field grid gap-2"
            data-invalid={!!formState.errors?.message}
          >
            <Label
              htmlFor="message"
              className="text-white group-data-[invalid=true]/field:text-red-400"
            >
              Tell us a little about the project...
            </Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Type your message here..."
              className="border-green-400/20 bg-black text-green-400 placeholder:text-green-400/50 focus-visible:ring-green-400/30 min-h-[100px] group-data-[invalid=true]/field:border-red-400"
              disabled={isSubmitting}
              aria-invalid={!!formState.errors?.message}
              aria-errormessage="error-message"
            />
            {formState.errors?.message && (
              <p id="error-message" className="text-red-400 text-sm">
                {formState.errors.message}
              </p>
            )}
          </div>
          <div className="space-y-3">
            <Label className="text-white">How can we help?</Label>
            <div className="grid grid-cols-2 gap-4">
              {[
                'Mentorship',
                'Builder Rewards',
                'Compute Budget',
                'Token Launch Support',
                'Builder Use Cases',
              ].map((service) => (
                <div key={service} className="flex items-center space-x-2">
                  <Checkbox 
                    id={service}
                    name="services"
                    value={service}
                    className="border-green-400 bg-black data-[state=checked]:bg-green-400 data-[state=checked]:text-black"
                    checked={true}
                    defaultChecked={true}
                  />
                  <Label htmlFor={service} className="text-green-400">
                    {service}
                  </Label>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button 
            type="submit" 
            className="w-full bg-green-400 text-black hover:bg-green-500 transition-colors border-0"
            size="lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send application'}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}

