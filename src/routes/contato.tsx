import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — FIG" },
      { name: "description", content: "Agende um diagnóstico gratuito com a FIG." },
    ],
  }),
  component: ContatoPage,
});

function ContatoPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24">
      <p className="text-xs uppercase tracking-[0.25em] text-brand-glow">Contato</p>
      <h1 className="mt-3 font-display text-6xl leading-[0.95]">
        Vamos conversar sobre <span className="italic">atenção</span>.
      </h1>
      <p className="mt-6 text-lg text-muted-foreground">
        Conte um pouco sobre a sua marca. Respondemos em até 1 dia útil.
      </p>

      <form
        onSubmit={(e) => { e.preventDefault(); alert("Obrigado! Em breve entraremos em contato."); }}
        className="mt-12 grid gap-5"
      >
        {[
          { l: "Nome", t: "text", n: "name" },
          { l: "E-mail", t: "email", n: "email" },
          { l: "Empresa", t: "text", n: "company" },
        ].map((f) => (
          <label key={f.n} className="grid gap-2">
            <span className="text-sm text-muted-foreground">{f.l}</span>
            <input
              type={f.t}
              name={f.n}
              required
              className="rounded-xl border border-border bg-card px-4 py-3 text-foreground outline-none transition focus:border-brand-glow"
            />
          </label>
        ))}
        <label className="grid gap-2">
          <span className="text-sm text-muted-foreground">Conte sobre o seu desafio</span>
          <textarea
            name="message"
            rows={5}
            required
            className="rounded-xl border border-border bg-card px-4 py-3 text-foreground outline-none transition focus:border-brand-glow"
          />
        </label>
        <button
          type="submit"
          className="mt-2 justify-self-start rounded-full bg-brand px-7 py-3.5 text-base font-medium text-primary-foreground transition hover:bg-brand-glow"
        >
          Enviar mensagem
        </button>
      </form>

      <p className="mt-12 text-sm text-muted-foreground">
        Prefere e-mail direto?{" "}
        <a href="mailto:ola@fig.agency" className="text-brand-glow underline">ola@fig.agency</a>
        {" · "}
        <Link to="/" className="hover:text-brand-glow">voltar ao início</Link>
      </p>
    </section>
  );
}
