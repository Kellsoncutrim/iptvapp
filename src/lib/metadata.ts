import type { Metadata } from "next"

export const siteConfig = {
  name: "IPTV APP",
  description:
    "IPTV APP — A melhor IPTV do Brasil com canais premium, filmes, séries e esportes em HD, Full HD e 4K. Assine já e tenha a melhor experiência em IPTV sem travamentos.",
  url: "https://iptvapp.online",
  ogImage: "https://iptvapp.online/og-image.png",
  whatsapp: "556296418908",
  keywords: [
    "iptv app",
    "xc iptv app",
    "IPTV",
    "IPTV Premium",
    "Melhor IPTV",
    "IPTV HD",
    "IPTV Full HD",
    "IPTV 4K",
    "IPTV Brasil",
    "IPTV Online",
    "IPTV Sem Travamentos",
    "IPTV Barato",
    "IPTV para Smart TV",
    "IPTV para TV Box",
    "IPTV para Android",
    "IPTV para iPhone",
    "IPTV com Futebol",
    "IPTV com Filmes",
    "IPTV com Séries",
    "Planos IPTV",
    "Assinatura IPTV",
    "Teste IPTV",
  ],
}

export function constructMetadata({
  title,
  description,
  noIndex = false,
}: {
  title?: string
  description?: string
  noIndex?: boolean
} = {}): Metadata {
  return {
    title: title
      ? `${title} | ${siteConfig.name}`
      : `${siteConfig.name} — A Melhor IPTV do Brasil | Canais Premium Sem Travamentos`,
    description: description ?? siteConfig.description,
    keywords: siteConfig.keywords,
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    metadataBase: new URL(siteConfig.url),
    openGraph: {
      type: "website",
      locale: "pt_BR",
      url: siteConfig.url,
      title: title
        ? `${title} | ${siteConfig.name}`
        : `${siteConfig.name} — A Melhor IPTV do Brasil`,
      description: description ?? siteConfig.description,
      siteName: siteConfig.name,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: title
        ? `${title} | ${siteConfig.name}`
        : `${siteConfig.name} — A Melhor IPTV do Brasil`,
      description: description ?? siteConfig.description,
      images: [siteConfig.ogImage],
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
    },
    alternates: {
      canonical: siteConfig.url,
    },
  }
}
