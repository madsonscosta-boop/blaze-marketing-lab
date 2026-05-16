import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getPortfolioItem, portfolioItems } from "@/lib/portfolio";

export const Route = createFileRoute("/portfolio/$slug")({
  loader: ({ params }) => {
    const item = getPortfolioItem(params.slug);
    if (!item) throw notFound();
    return { item };
  },
  head: ({ loaderData }) => {
    const item = loaderData?.item;
    const title = item ? `${item.title} — FIG` : "Portfólio — FIG";
    const description = item?.summary ?? "Projeto do portfólio FIG.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        ...(item ? [{ property: "og:image", content: item.src }] : []),
      ],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-6 py-32 text-center">
      <h1 className="font-display text-4xl">Projeto não encontrado</h1>
      <Link to="/" className="mt-6 inline-block underline">
        Voltar para a home
      </Link>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="mx-auto max-w-3xl px-6 py-32 text-center">
      <h1 className="font-display text-3xl">Algo deu errado</h1>
      <p className="mt-4 text-muted-foreground">{error.message}</p>
    </div>
  ),
  component: PortfolioDetail,
});

function PortfolioDetail() {
  const { item } = Route.useLoaderData();
  const others = portfolioItems.filter((p) => p.slug !== item.slug).slice(0, 4);

  return (
    <article className="bg-cream">
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-10">
        <Link to="/" className="text-sm text-brand/70 hover:text-brand">
          ← Voltar
        </Link>
        <p className="mt-6 font-display text-sm uppercase tracking-widest text-brand/60">
          {item.category}
        </p>
        <h1 className="mt-3 font-display text-5xl leading-tight text-brand md:text-6xl">
          {item.title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-brand/80">{item.summary}</p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="overflow-hidden rounded-3xl bg-background">
          <img
            src={item.src}
            alt={item.alt}
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <h2 className="font-display text-2xl text-brand">Outros projetos</h2>
        <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
          {others.map((p) => (
            <Link
              key={p.slug}
              to="/portfolio/$slug"
              params={{ slug: p.slug }}
              className="group overflow-hidden rounded-2xl bg-background"
            >
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="aspect-[4/3] h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </Link>
          ))}
        </div>
      </section>
    </article>
  );
}
