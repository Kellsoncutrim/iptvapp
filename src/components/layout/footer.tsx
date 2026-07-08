import { Container } from "@/components/ui/container"

const links = [
  { label: "Benefícios", href: "#beneficios" },
  { label: "Planos", href: "#planos" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "FAQ", href: "#faq" },
]

export function Footer() {
  return (
    <footer className="border-t border-[rgba(255,255,255,.08)] bg-[#0B1220]">
      <Container className="py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00C2FF] to-[#2563EB] flex items-center justify-center">
                <span className="text-white font-bold text-sm">I</span>
              </div>
              <span className="text-white font-bold text-lg tracking-tight">
                IPTV <span className="text-[#00C2FF]">APP</span>
              </span>
            </div>
            <p className="text-[#94A3B8] text-sm leading-relaxed">
              A melhor IPTV do Brasil. Canais premium, filmes, séries e esportes
              em qualidade HD, Full HD e 4K sem travamentos.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Links</h4>
            <nav className="flex flex-col gap-2">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[#94A3B8] hover:text-white transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contato</h4>
            <a
              href="https://api.whatsapp.com/send?phone=556296418908"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#94A3B8] hover:text-[#25D366] transition-colors text-sm block mb-2"
            >
              WhatsApp: (62) 96418-908
            </a>
            <p className="text-[#94A3B8] text-sm">
              Suporte 24h todos os dias
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[rgba(255,255,255,.08)] text-center">
          <p className="text-[#94A3B8] text-sm">
            © {new Date().getFullYear()} IPTV APP — iptvapp.online. Todos os direitos reservados.
          </p>
        </div>
      </Container>
    </footer>
  )
}
