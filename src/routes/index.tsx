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
        <div className="mx-auto max-w-7xl px-6 pt-24 pb-32">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/40 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-glow" />
            Vagas abertas para Q3 — 2 marcas por mês
          </div>
          <h1 className="mt-6 max-w-5xl font-display text-6xl leading-[0.95] md:text-8xl">
            Você não tem um problema de produto.
            <span className="text-cream/70 italic"> Tem um problema de atenção.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg text-muted-foreground">
            A FIG é uma agência de vídeo e tráfego pago para marcas que querem
            sair do óbvio e virar conversa — e venda.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link
              to="/contato"
              className="rounded-full bg-brand px-7 py-3.5 text-base font-medium text-primary-foreground transition hover:bg-brand-glow"
            >
              Agendar diagnóstico
            </Link>
            <Link
              to="/trabalhos"
              className="rounded-full border border-border px-7 py-3.5 text-base font-medium hover:bg-muted"
            >
              Ver trabalhos →
            </Link>
          </div>

          {/* stats */}
          <div className="mt-24 grid gap-8 border-t border-border/50 pt-10 md:grid-cols-3">
            {[
              { k: "3.2x", v: "ROAS médio em campanhas Meta + Google" },
              { k: "+180", v: "vídeos produzidos por mês" },
              { k: "48h", v: "do briefing ao primeiro criativo no ar" },
            ].map((s) => (
              <div key={s.k}>
                <p className="font-display text-6xl text-brand-glow">{s.k}</p>
                <p className="mt-2 max-w-[16rem] text-sm text-muted-foreground">{s.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="border-t border-border/40 bg-background">
        <div className="mx-auto max-w-7xl px-6 py-28">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-brand-glow">Serviços</p>
              <h2 className="mt-3 max-w-2xl font-display text-5xl md:text-6xl">
                Criativo e mídia, no mesmo time.
              </h2>
            </div>
            <p className="max-w-md text-muted-foreground">
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
                className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 transition hover:border-brand-glow"
              >
                <p className="font-display text-3xl">{s.t}</p>
                <p className="mt-3 text-sm text-muted-foreground">{s.d}</p>
                <ul className="mt-8 space-y-2 text-sm">
                  {s.items.map((i) => (
                    <li key={i} className="flex items-center gap-2 text-foreground/80">
                      <span className="h-1 w-1 rounded-full bg-brand-glow" />
                      {i}
                    </li>
                  ))}
                </ul>
                <div
                  aria-hidden
                  className="pointer-events-none absolute -bottom-24 -right-24 h-48 w-48 rounded-full bg-brand/30 opacity-0 blur-3xl transition group-hover:opacity-100"
                />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE / SHOWCASE */}
      <section className="border-t border-border/40">
        <div className="mx-auto max-w-7xl px-6 py-28">
          <p className="font-display text-4xl leading-tight md:text-6xl">
            “Em três meses, a FIG fez o nosso CAC cair{" "}
            <span className="text-brand-glow italic">pela metade</span> e o
            volume de vídeo subir 4x. Hoje a gente não roda nada sem eles.”
          </p>
          <div className="mt-10 flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-cream" />
            <div>
              <p className="font-medium">Marina Lopes</p>
              <p className="text-sm text-muted-foreground">Head of Growth, Pluma DTC</p>
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
