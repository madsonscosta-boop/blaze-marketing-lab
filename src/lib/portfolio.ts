export type PortfolioItem = {
  slug: string;
  title: string;
  client: string;
  category: string;
  summary: string;
  src: string;
  alt: string;
  cls: string;
  videos?: string[];
};

export const portfolioItems: PortfolioItem[] = [
  {
    slug: "marca-alimentacao",
    title: "Marca de alimentação",
    client: "Cliente em breve",
    category: "Branding & Conteúdo",
    summary:
      "Reposicionamento de marca e produção de conteúdo social-first para uma marca de alimentação.",
    src: "https://images.unsplash.com/photo-1543353071-10c8ba85a904?w=800&q=80",
    alt: "Marca de alimentação",
    cls: "md:col-span-1 md:row-span-1 aspect-[4/3]",
  },
  {
    slug: "evento-sazonal",
    title: "Evento sazonal",
    client: "Cliente em breve",
    category: "Campanha & Vídeo",
    summary:
      "Campanha integrada para evento sazonal com captação de vídeo, social e tráfego pago.",
    src: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=900&q=80",
    alt: "Evento sazonal",
    cls: "md:col-span-1 md:row-span-1 aspect-[4/3]",
  },
  {
    slug: "ori-mart",
    title: "Ori Mart",
    client: "Cliente em breve",
    category: " We built everything from scratch: content strategy, monthly on-location shoots, paid campaigns across Meta, and an organic presence across Instagram, Facebook and TikTok. The content is made to feel native to each platform, not polished for the sake of it, but real enough to stop the scroll. \n\nThe result:\nThis is an ongoing partnership. In just 2 months, Instagram grew from 2,558 to 3,611 followers (+41%). Facebook was launched from zero and reached 272K+ views. A single reel hit 97K views with 908 shares, the strongest piece of content produced by FIG for the account to date. Meta ads delivered a €0.05 cost-per-click with €331 in total ad spend for the month. April was their best digital month ever.\n",
    summary:
      "The brief:\n\nOri Mart is an Asian convenience store in the heart of Rotterdam. A daily stop for locals and a discovery moment for tourists passing through. When we approached them, their digital presence didn't reflect the energy of the store.\n\nOur approach:\n\nWe built everything from scratch: content strategy, monthly on-location shoots, paid campaigns across Meta, and an organic presence across Instagram, Facebook and TikTok. The content is made to feel native to each platform, not polished for the sake of it, but real enough to stop the scroll.\n\nThe result:\n\nThis is an ongoing partnership.\nIn just 2 months, Instagram grew from 2,558 to 3,611 followers (+41%). Facebook was launched from zero and reached 272K+ views. A single reel hit 97K views with 908 shares, the strongest piece of content produced by FIG for the account to date. Meta ads delivered a €0.05 cost-per-click with €331 in total ad spend for the month.\n\nApril was their best digital month ever.",
    src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1000&q=80",
    alt: "Ori Mart",
    cls: "md:col-span-2 md:row-span-1 aspect-[16/9]",
    videos: [
      "/portfolio/ori-mart/video-1.mp4",
      "/portfolio/ori-mart/video-2.mp4",
      "/portfolio/ori-mart/video-3.mp4",
    ],
  },
  {
    slug: "esporte",
    title: "Esporte",
    client: "Cliente em breve",
    category: "Vídeo & Performance",
    summary:
      "Estratégia de conteúdo e mídia para uma marca esportiva, conectando performance e narrativa.",
    src: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=1100&q=80",
    alt: "Esporte",
    cls: "md:col-span-2 md:row-span-1 aspect-[16/10]",
  },
  {
    slug: "estadio",
    title: "Estádio",
    client: "Cliente em breve",
    category: "Evento & Ativação",
    summary:
      "Cobertura e ativação de marca em estádio, com produção de vídeo e conteúdo em tempo real.",
    src: "https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=1000&q=80",
    alt: "Estádio",
    cls: "md:col-span-2 md:row-span-1 aspect-[16/10]",
  },
];

export function getPortfolioItem(slug: string): PortfolioItem | undefined {
  return portfolioItems.find((p) => p.slug === slug);
}
