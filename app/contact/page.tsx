import { ContactHeader } from '@/components/contact/contact-header'
import { ContactForm } from '@/components/contact/contact-form'

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full">
      <ContactHeader />
      <ContactForm />
    </div>
  )
}