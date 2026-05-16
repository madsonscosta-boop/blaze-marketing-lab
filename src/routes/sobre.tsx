import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "About — FIG" },
      { name: "description", content: "Who FIG is and how we think about attention." },
    ],
  }),
  component: SobrePage,
});

function SobrePage() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-24">
      <p className="text-xs uppercase tracking-[0.25em] text-brand-glow">About</p>
      <h1 className="mt-3 font-display text-6xl leading-[0.95] md:text-7xl">
        We believe <span className="italic">attention is the new currency</span>.
      </h1>
      <div className="mt-12 space-y-6 text-lg text-foreground/85">
        <p>
          FIG was born from the frustration of seeing great brands get ignored. Not for
          lack of product. For lack of a story told well — and distributed even better.
        </p>
        <p>
          We're a small, multidisciplinary team that brings together video production,
          performance and strategy. We work with a handful of brands each month, because
          depth is what makes the difference.
        </p>
        <p>
          We don't make pretty reports to justify meetings. We build campaigns that sell
          and videos that stop the feed.
        </p>
      </div>

      <div className="mt-16 grid gap-6 sm:grid-cols-3">
        {[
          { k: "2021", v: "2026" },
          { k: "40+", v: "Brands served" },
          { k: "12", v: "People on the team" },
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
        Work with FIG →
      </Link>
    </section>
  );
}
