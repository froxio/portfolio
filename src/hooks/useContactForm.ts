import { useState } from 'react'

interface FormState {
  name: string
  email: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

type Status = 'idle' | 'submitting' | 'success' | 'error'

export function useContactForm() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<Status>('idle')

  function validate(): boolean {
    const next: FormErrors = {}
    if (!form.name.trim()) next.name = 'Name is required'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Valid email required'
    if (form.message.trim().length < 10) next.message = 'Message must be at least 10 characters'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  function handleChange(field: keyof FormState) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }))
      if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return
    setStatus('submitting')
    // TODO: wire up Lambda endpoint
    await new Promise((r) => setTimeout(r, 800))
    setStatus('success')
  }

  return { form, errors, status, handleChange, handleSubmit }
}
