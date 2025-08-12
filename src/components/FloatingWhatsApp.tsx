import { MessageCircle } from "lucide-react"

type FloatingWhatsAppProps = {
  phone: string
  message?: string
}

export default function FloatingWhatsApp({ phone, message = "Olá, gostaria de agendar uma consulta." }: FloatingWhatsAppProps) {
  const href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Abrir WhatsApp"
      className="fixed z-50 bottom-6 right-6"
    >
      <div className="h-14 w-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg flex items-center justify-center transition-colors">
        <MessageCircle className="h-7 w-7" />
      </div>
    </a>
  )
}


