import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre — FIG" },
      { name: "description", content: "Quem é a FIG e como pensamos atenção." },
    ],
  }),
  component: SobrePage,
});

function SobrePage() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-24">
      <p className="text-xs uppercase tracking-[0.25em] text-brand-glow">Sobre</p>
      <h1 className="mt-3 font-display text-6xl leading-[0.95] md:text-7xl">
        A gente acredita que <span className="italic">atenção é a nova moeda</span>.
      </h1>
      <div className="mt-12 space-y-6 text-lg text-foreground/85">
        <p>
          A FIG nasceu do incômodo de ver marcas boas serem ignoradas. Não por
          falta de produto. Por falta de uma história contada bem — e
          distribuída melhor ainda.
        </p>
        <p>
          Somos um time pequeno, multidisciplinar, que junta produção
          audiovisual, performance e estratégia. Trabalhamos com poucas marcas
          por mês, porque profundidade é o que faz a diferença.
        </p>
        <p>
          Não fazemos relatórios bonitinhos pra justificar reunião. Fazemos
          campanha que vende e vídeo que pausa o feed.
        </p>
      </div>

      <div className="mt-16 grid gap-6 sm:grid-cols-3">
        {[
          { k: "2021", v: "2026" },
          { k: "40+", v: "Marcas atendidas" },
          { k: "12", v: "Pessoas no time" },
        ].map((s) => (
          <div key={s.k} className="rounded-2xl border border-border bg-card p-6">
            <p className="font-display text-4xl text-brand-glow">{s.k}</p>
            <p className="mt-1 text-sm text-muted-foreground">{s.v}</p>
          </div>
        ))}
      </div>

      <Link
        to="/contato"
        className="mt-16 inline-flex rounded-full bg-brand px-7 py-3.5 text-base font-medium text-primary-foreground hover:bg-brand-glow"
      >
        Trabalhar com a FIG →
      </Link>
    </section>
  );
}
