import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const LINKS = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Especialidades" },
  { href: "#atendimento", label: "Atendimento" },
  { href: "#diferenciais", label: "Filosofia" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#localizacao", label: "Agende" },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-colors ${scrolled ? "bg-background/80 backdrop-blur border-b border-border" : "bg-transparent"}`}>
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-bold text-lg">
          <img src="/favicon.svg" alt="Logo nutrição" className="h-7 w-7" />
          <span>Ana Caroline Santiago</span>
        </a>
        <ul className="hidden md:flex gap-6 text-sm">
          {LINKS.map(link => (
            <li key={link.href}>
              <a href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="h-9 w-9">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2">
                  <img src="/favicon.svg" alt="Logo nutrição" className="h-6 w-6" />
                  <span>Ana Caroline Santiago</span>
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-6 space-y-3">
                {LINKS.map(link => (
                  <a key={link.href} href={link.href} className="block py-2 text-base text-foreground">
                    {link.label}
                  </a>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}


