export type PortfolioItem = {
  slug: string;
  title: string;
  client: string;
  category: string;
  summary: string;
  src: string;
  alt: string;
  cls: string;
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
    slug: "gastronomia",
    title: "Gastronomia",
    client: "Cliente em breve",
    category: "Conteúdo & Social",
    summary:
      "Produção contínua de conteúdo para um restaurante, com foco em reels e identidade visual.",
    src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1000&q=80",
    alt: "Gastronomia",
    cls: "md:col-span-2 md:row-span-1 aspect-[16/9]",
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
