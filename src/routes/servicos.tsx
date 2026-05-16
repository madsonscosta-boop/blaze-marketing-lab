import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Services — FIG" },
      { name: "description", content: "Video, paid media and content strategy." },
    ],
  }),
  component: ServicosPage,
});

const services = [
  {
    t: "Video",
    d: "From idea to final cut. Organic content, UGC and ads built to perform in the first 3 seconds.",
    items: ["Creative direction", "4K production", "Editing + motion", "UGC at scale"],
  },
  {
    t: "Paid Media",
    d: "Daily management with funnel modelling, weekly creative testing and transparent dashboards.",
    items: ["Meta Ads", "Google Ads", "TikTok / YouTube", "Weekly reports"],
  },
  {
    t: "Brand Strategy",
    d: "Positioning, offer and copywriting. Creativity works better when it starts with a good question.",
    items: ["Audience research", "Positioning", "Offer + copy", "Conversion funnel"],
  },
];

function ServicosPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <p className="text-xs uppercase tracking-[0.25em] text-brand-glow">Services</p>
      <h1 className="mt-3 max-w-3xl font-display text-6xl leading-[0.95] md:text-7xl">
        Everything your brand needs to <span className="italic">become the conversation</span>.
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
