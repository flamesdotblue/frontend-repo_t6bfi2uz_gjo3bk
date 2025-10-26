import { useState } from 'react'
import { Mail } from 'lucide-react'

export default function ContactForm() {
  const [values, setValues] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e) {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!values.name || !values.email || !values.message) return
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Let's talk</h2>
          <p className="mt-3 text-gray-600">Have a project in mind? Send us a note and we'll get back to you.</p>
        </div>
        <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
          {submitted ? (
            <div className="text-center py-10">
              <div className="mx-auto mb-3 inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-100 text-emerald-700">
                <Mail />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Message sent!</h3>
              <p className="text-gray-600 mt-1">We'll be in touch shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  name="message"
                  value={values.message}
                  onChange={handleChange}
                  rows={5}
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
                  placeholder="Tell us a bit about your idea..."
                />
              </div>
              <div className="flex items-center justify-between">
                <p className="text-xs text-gray-500">We respect your privacy. No spam.</p>
                <button type="submit" className="inline-flex items-center px-5 py-2.5 rounded-md bg-gray-900 text-white hover:bg-gray-800">
                  Send message
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
