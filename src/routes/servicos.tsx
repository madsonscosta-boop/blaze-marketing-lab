import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Serviços — FIG" },
      { name: "description", content: "Vídeo, tráfego pago e estratégia de conteúdo." },
    ],
  }),
  component: ServicosPage,
});

const services = [
  {
    t: "Vídeo",
    d: "Da ideia ao corte final. Conteúdo orgânico, UGC e anúncios feitos para performar nos primeiros 3 segundos.",
    items: ["Direção criativa", "Produção 4K", "Edição + motion", "UGC em escala"],
  },
  {
    t: "Tráfego pago",
    d: "Gestão diária com modelagem de funil, testes criativos semanais e dashboards transparentes.",
    items: ["Meta Ads", "Google Ads", "TikTok / YouTube", "Relatórios semanais"],
  },
  {
    t: "Estratégia de marca",
    d: "Posicionamento, oferta e copywriting. A criatividade trabalha melhor com uma boa pergunta no começo.",
    items: ["Pesquisa de audiência", "Posicionamento", "Oferta + copy", "Funil de conversão"],
  },
];

function ServicosPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <p className="text-xs uppercase tracking-[0.25em] text-brand-glow">Serviços</p>
      <h1 className="mt-3 max-w-3xl font-display text-6xl leading-[0.95] md:text-7xl">
        Tudo que sua marca precisa para <span className="italic">virar conversa</span>.
      </h1>

      <div className="mt-20 space-y-px overflow-hidden rounded-3xl border border-border">
        {services.map((s, i) => (
          <article key={s.t} className="grid gap-8 bg-card p-10 md:grid-cols-[1fr_2fr] md:p-14">
            <div>
              <p className="text-sm text-muted-foreground">0{i + 1}</p>
              <p className="mt-2 font-display text-5xl">{s.t}</p>
            </div>
            <div>
              <p className="text-lg text-foreground/85">{s.d}</p>
              <ul className="mt-6 grid gap-2 text-sm sm:grid-cols-2">
                {s.items.map((it) => (
                  <li key={it} className="flex items-center gap-2 text-muted-foreground">
                    <span className="h-1 w-1 rounded-full bg-brand-glow" />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
