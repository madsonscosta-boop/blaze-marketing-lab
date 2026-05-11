import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/trabalhos")({
  head: () => ({
    meta: [
      { title: "Trabalhos — FIG" },
      { name: "description", content: "Cases de vídeo e tráfego pago feitos pela FIG." },
    ],
  }),
  component: TrabalhosPage,
});

const works = [
  { brand: "Pluma DTC", tag: "DTC · Beleza", result: "CAC -52% em 90 dias" },
  { brand: "Norte Café", tag: "F&B · E-commerce", result: "ROAS 4.8x no Meta" },
  { brand: "Studio Vento", tag: "Arquitetura", result: "+340% leads qualificados" },
  { brand: "Ânfora Wines", tag: "Vinhos", result: "12M+ views orgânicos" },
];

function TrabalhosPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <p className="text-xs uppercase tracking-[0.25em] text-brand-glow">Trabalhos</p>
      <h1 className="mt-3 max-w-3xl font-display text-6xl leading-[0.95] md:text-7xl">
        Marcas que <span className="italic">apareceram</span>.
      </h1>

      <div className="mt-16 grid gap-6 md:grid-cols-2">
        {works.map((w, i) => (
          <article
            key={w.brand}
            className="group relative aspect-[4/3] overflow-hidden rounded-3xl border border-border"
            style={{
              background: i % 2 === 0
                ? "linear-gradient(135deg, oklch(0.45 0.30 275), oklch(0.62 0.22 278))"
                : "linear-gradient(135deg, oklch(0.20 0.05 280), oklch(0.93 0.025 350))",
            }}
          >
            <div className="absolute inset-0 flex flex-col justify-between p-8 text-cream">
              <p className="text-xs uppercase tracking-widest opacity-80">{w.tag}</p>
              <div>
                <p className="font-display text-5xl">{w.brand}</p>
                <p className="mt-2 text-sm opacity-80">{w.result}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
