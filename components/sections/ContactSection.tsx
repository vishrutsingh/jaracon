'use client'

import { useRef, useState } from 'react'
import { contactInfo } from '@/content/contact'
import LoopText from '@/components/ui/LoopText'
import FadeUp from '@/components/animations/FadeUp'

const fields = [
  { name: 'name', label: 'your name', type: 'text' },
  { name: 'email', label: 'email address', type: 'email' },
  { name: 'message', label: 'tell us about your project', type: 'textarea' },
]

export default function ContactSection() {
  const [focused, setFocused] = useState<string | null>(null)
  const [values, setValues] = useState<Record<string, string>>({})
  const formRef = useRef<HTMLFormElement>(null)

  const handleChange = (name: string, value: string) => {
    setValues(prev => ({ ...prev, [name]: value }))
  }

  return (
    <section className="section-padding bg-bg">
      <div className="container-site">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <FadeUp>
            <h2 className="text-heading mb-12">
              let&apos;s build something<br />great together.
            </h2>

            <form ref={formRef} className="flex flex-col gap-10">
              {fields.map(field => (
                <div key={field.name} className="relative">
                  <label
                    className={`absolute left-0 transition-all duration-200 pointer-events-none ${
                      focused === field.name || values[field.name]
                        ? '-top-5 text-xs text-orange'
                        : 'top-2 text-[1rem] text-muted'
                    }`}
                  >
                    {field.label}
                  </label>
                  {field.type === 'textarea' ? (
                    <textarea
                      name={field.name}
                      rows={3}
                      className="w-full bg-transparent border-0 border-b border-border focus:border-dark outline-none pt-2 pb-1 text-dark resize-none transition-colors"
                      onFocus={() => setFocused(field.name)}
                      onBlur={() => setFocused(null)}
                      onChange={e => handleChange(field.name, e.target.value)}
                    />
                  ) : (
                    <input
                      name={field.name}
                      type={field.type}
                      className="w-full bg-transparent border-0 border-b border-border focus:border-dark outline-none pt-2 pb-1 text-dark transition-colors"
                      onFocus={() => setFocused(field.name)}
                      onBlur={() => setFocused(null)}
                      onChange={e => handleChange(field.name, e.target.value)}
                    />
                  )}
                </div>
              ))}

              <button type="submit" className="text-[0.9rem] text-dark self-start mt-4">
                <LoopText label="send message &rarr;" />
              </button>
            </form>
          </FadeUp>

          <FadeUp delay={0.15}>
            <div className="flex flex-col gap-10 md:pt-16">
              <div>
                <span className="text-xs text-orange block mb-3">address</span>
                <p className="text-body text-mid max-w-[30ch]">{contactInfo.address}</p>
              </div>
              <div>
                <span className="text-xs text-orange block mb-3">phone</span>
                <p className="text-body text-mid">{contactInfo.phone}</p>
              </div>
              <div>
                <span className="text-xs text-orange block mb-3">email</span>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-body text-mid hover:text-dark transition-colors"
                >
                  {contactInfo.email}
                </a>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}
