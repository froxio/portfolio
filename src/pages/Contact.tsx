import { useContactForm } from '../hooks/useContactForm'

export default function Contact() {
  const { form, errors, status, handleChange, handleSubmit } = useContactForm()

  return (
    <div className="max-w-xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Contact</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-10">
        Have a project in mind or just want to connect? Send me a message.
      </p>

      {status === 'success' ? (
        <div className="text-center py-10">
          <p className="text-xl font-medium text-gray-900 dark:text-white mb-2">Message sent!</p>
          <p className="text-gray-600 dark:text-gray-300">I'll get back to you soon.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          <Field label="Name" error={errors.name}>
            <input
              type="text"
              value={form.name}
              onChange={handleChange('name')}
              className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </Field>
          <Field label="Email" error={errors.email}>
            <input
              type="email"
              value={form.email}
              onChange={handleChange('email')}
              className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </Field>
          <Field label="Message" error={errors.message}>
            <textarea
              rows={5}
              value={form.message}
              onChange={handleChange('message')}
              className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
            />
          </Field>
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full py-2.5 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:opacity-60 font-medium transition-colors"
          >
            {status === 'submitting' ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      )}
    </div>
  )
}

function Field({
  label,
  error,
  children,
}: {
  label: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">{label}</label>
      {children}
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  )
}
