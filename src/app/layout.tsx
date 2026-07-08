import type { Viewport } from "next"
import { Inter } from "next/font/google"
import { constructMetadata } from "@/lib/metadata"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppFloat } from "@/components/layout/whatsapp-float"
import { ParticlesBg } from "@/components/effects/particles-bg"
import Script from "next/script"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata = constructMetadata()

export const viewport: Viewport = {
  themeColor: "#0B1220",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      name: "IPTV APP",
      url: "https://iptvapp.online",
      description:
        "A melhor IPTV do Brasil com canais premium, filmes, séries e esportes em HD, Full HD e 4K sem travamentos.",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://iptvapp.online/?s={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "Organization",
      name: "IPTV APP",
      url: "https://iptvapp.online",
      logo: "https://iptvapp.online/favicon.ico",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+55-62-96418-908",
        contactType: "customer service",
        availableLanguage: ["Portuguese"],
      },
    },
    {
      "@type": "Product",
      name: "IPTV APP",
      description:
        "Assinatura de IPTV com canais premium, filmes, séries e esportes em HD, Full HD e 4K.",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        bestRating: "5",
        ratingCount: "10250",
        reviewCount: "8450",
      },
      review: [
        {
          "@type": "Review",
          author: { "@type": "Person", name: "Carlos A." },
          reviewRating: { "@type": "Rating", ratingValue: "5" },
          reviewBody:
            "Já testei várias IPTV, mas a IPTV APP é incomparável. Qualidade 4K sem travamentos e suporte nota 10!",
        },
        {
          "@type": "Review",
          author: { "@type": "Person", name: "Fernanda M." },
          reviewRating: { "@type": "Rating", ratingValue: "5" },
          reviewBody:
            "Assinei o plano semestral e valeu cada centavo. Meus filhos adoram os canais infantis e os filmes em Full HD.",
        },
        {
          "@type": "Review",
          author: { "@type": "Person", name: "Rafael S." },
          reviewRating: { "@type": "Rating", ratingValue: "5" },
          reviewBody:
            "O teste grátis me conquistou. Em 6 horas vi que era a melhor IPTV do Brasil. Assinei o anual e não me arrependo.",
        },
      ],
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "BRL",
        lowPrice: "35",
        highPrice: "270",
        offerCount: "4",
        availability: "https://schema.org/InStock",
      },
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <head>
        <link rel="canonical" href="https://iptvapp.online" />
        <meta name="google-site-verification" content="dQw4w9WgXcQ" />
        <script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body className="font-sans antialiased">
        <ParticlesBg />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  )
}
