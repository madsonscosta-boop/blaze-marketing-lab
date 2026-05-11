import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(60% 50% at 20% 10%, oklch(0.45 0.30 275 / 0.5), transparent 70%), radial-gradient(50% 60% at 90% 30%, oklch(0.62 0.22 278 / 0.35), transparent 70%)",
          }}
        />
        <div className="mx-auto max-w-7xl px-6 pt-10 pb-32">
          {/* VIDEO PLACEHOLDER — substitua pelo seu vídeo */}
          <div className="relative aspect-video w-full overflow-hidden rounded-3xl border border-border/50 bg-card/40 backdrop-blur">
            <div className="flex h-full w-full items-center justify-center text-sm text-muted-foreground">
              Espaço reservado para o vídeo
            </div>
          </div>

          {/* pitch card */}
          <div className="mt-24 rounded-3xl bg-cream px-8 py-16 text-center text-accent-foreground md:px-16 md:py-20">
            <p className="mx-auto max-w-3xl font-display text-3xl leading-snug md:text-4xl">
              Uma agência criativa social-first para marcas de lifestyle.
            </p>
            <p className="mx-auto mt-6 max-w-2xl font-display text-2xl leading-snug md:text-3xl">
              Fortalecemos o brand awareness e crescemos comunidades nas redes sociais através de conteúdo que engaja.
            </p>
            <Link
              to="/contato"
              className="mt-10 inline-flex flex-col items-center rounded-full border border-accent-foreground/40 px-8 py-3 text-sm leading-tight transition hover:bg-accent-foreground/5"
            >
              <span>Gostou do que viu?</span>
              <span>Fale com a gente!</span>
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="border-t border-border/40 bg-brand text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 py-28">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-cream">Serviços</p>
              <h2 className="mt-3 max-w-2xl font-display text-5xl md:text-6xl">
                Criativo e mídia, no mesmo time.
              </h2>
            </div>
            <p className="max-w-md text-primary-foreground/75">
              Times separados produzem campanhas mornas. A gente une produção
              de vídeo, estratégia e gestão de mídia sob o mesmo teto.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[
              {
                t: "Vídeo",
                d: "Roteiros, produção e edição com foco em performance — UGC, anúncios cinematográficos e conteúdo orgânico.",
                items: ["Direção criativa", "Captação 4K", "Pós + motion"],
              },
              {
                t: "Tráfego pago",
                d: "Gestão diária em Meta, Google, TikTok e YouTube com modelagem de funil e otimização semanal.",
                items: ["Meta Ads", "Google Ads", "TikTok / YouTube"],
              },
              {
                t: "Estratégia",
                d: "Posicionamento, oferta e copy que faz o criativo trabalhar — antes de a câmera ligar.",
                items: ["Posicionamento", "Oferta + copy", "Funil de conversão"],
              },
            ].map((s) => (
              <article
                key={s.t}
                className="group relative overflow-hidden rounded-3xl border border-cream/20 bg-cream p-8 text-accent-foreground transition hover:border-cream"
              >
                <p className="font-display text-3xl">{s.t}</p>
                <p className="mt-3 text-sm text-accent-foreground/70">{s.d}</p>
                <ul className="mt-8 space-y-2 text-sm">
                  {s.items.map((i) => (
                    <li key={i} className="flex items-center gap-2 text-accent-foreground/80">
                      <span className="h-1 w-1 rounded-full bg-brand" />
                      {i}
                    </li>
                  ))}
                </ul>
                <div
                  aria-hidden
                  className="pointer-events-none absolute -bottom-24 -right-24 h-48 w-48 rounded-full bg-brand-glow/30 opacity-0 blur-3xl transition group-hover:opacity-100"
                />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE / SHOWCASE */}
      <section className="border-t border-border/40 bg-brand text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 py-28">
          <p className="font-display text-4xl leading-tight md:text-6xl">
            “Em três meses, a FIG fez o nosso CAC cair{" "}
            <span className="text-cream italic">pela metade</span> e o
            volume de vídeo subir 4x. Hoje a gente não roda nada sem eles.”
          </p>
          <div className="mt-10 flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-cream" />
            <div>
              <p className="font-medium">Marina Lopes</p>
              <p className="text-sm text-primary-foreground/70">Head of Growth, Pluma DTC</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream text-accent-foreground">
        <div className="mx-auto max-w-7xl px-6 py-28">
          <div className="grid items-end gap-10 md:grid-cols-2">
            <h2 className="font-display text-6xl leading-[0.95] md:text-7xl">
              Pronto pra <span className="italic">parar de ser ignorado?</span>
            </h2>
            <div>
              <p className="text-lg text-accent-foreground/70">
                Em 30 minutos a gente identifica onde o seu funil está vazando
                atenção — e o que dá pra resolver nos próximos 60 dias.
              </p>
              <Link
                to="/contato"
                className="mt-8 inline-flex rounded-full bg-brand px-7 py-3.5 text-base font-medium text-primary-foreground transition hover:bg-brand-glow"
              >
                Agendar diagnóstico gratuito
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
