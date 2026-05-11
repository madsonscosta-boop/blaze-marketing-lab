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
          <div className="mt-24 rounded-3xl bg-brand px-8 py-16 text-center text-primary-foreground md:px-16 md:py-20">
            <p className="mx-auto max-w-3xl font-display text-3xl leading-snug md:text-4xl">
              Uma agência criativa social-first para marcas de lifestyle.
            </p>
            <p className="mx-auto mt-6 max-w-2xl font-display text-2xl leading-snug md:text-3xl">
              Fortalecemos o brand awareness e crescemos comunidades nas redes sociais através de conteúdo que engaja.
            </p>
            <Link
              to="/contato"
              className="mt-10 inline-flex flex-col items-center rounded-full border border-primary-foreground/70 px-8 py-3 text-sm leading-tight transition hover:bg-primary-foreground/10"
            >
              <span>Gostou do que viu?</span>
              <span>Fale com a gente!</span>
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-cream px-6 py-20">
        <div className="mx-auto max-w-7xl rounded-3xl bg-background px-6 py-20 text-center md:px-16 md:py-24">
          <h2 className="font-display text-4xl text-brand md:text-5xl">
            Nossos serviços de mídia social
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {[
              "Estratégia Social",
              "Gestão de Redes Sociais",
              "Criação de Conteúdo",
              "Conteúdo Criativo",
              "Tráfego Pago",
              "Produção de Vídeo",
            ].map((tag) => (
              <span
                key={tag}
                className="cursor-default rounded-full border border-brand px-6 py-2.5 text-sm text-brand transition hover:bg-brand hover:text-primary-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* TRUSTED BRANDS */}
      <section className="bg-cream text-accent-foreground">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-28 md:grid-cols-2 md:gap-16">
          <div className="flex flex-col justify-center">
            <p className="font-display text-2xl leading-snug md:text-3xl">
              Parceiro de mídia social preferido de marcas de lifestyle
              emergentes e consolidadas.
            </p>
            <p className="mt-6 font-display text-2xl leading-snug md:text-3xl">
              Somos a confiança de marcas incríveis nos setores de
              hospitalidade, alimentação, bebidas, esporte e lazer.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 md:gap-5">
            {["Caravan", "YUUM", "Jamie Oliver", "Paul Smith", "Rocketo", "Josie's"].map((brand) => (
              <div
                key={brand}
                className="flex aspect-[4/3] items-center justify-center rounded-2xl bg-background text-cream shadow-sm transition hover:shadow-md"
              >
                <span className="font-display text-2xl tracking-wide">{brand}</span>
              </div>
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

      {/* CTA — formulário */}
      <section className="bg-cream px-6 py-20">
        <div className="mx-auto max-w-6xl rounded-3xl bg-brand px-6 py-16 text-primary-foreground md:px-16 md:py-20">
          <h2 className="text-center font-display text-4xl leading-tight md:text-5xl">
            Gostou do que viu?
            <br />
            Vamos fazer acontecer!
          </h2>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Obrigado! Em breve entraremos em contato.");
            }}
            className="mx-auto mt-12 grid max-w-3xl gap-5"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <input
                type="text"
                name="name"
                required
                placeholder="Nome"
                className="rounded-full bg-cream px-6 py-4 text-brand placeholder:text-brand/70 outline-none transition focus:ring-2 focus:ring-primary-foreground"
              />
              <input
                type="tel"
                name="phone"
                required
                placeholder="Telefone"
                className="rounded-full bg-cream px-6 py-4 text-brand placeholder:text-brand/70 outline-none transition focus:ring-2 focus:ring-primary-foreground"
              />
              <input
                type="email"
                name="email"
                required
                placeholder="E-mail"
                className="rounded-full bg-cream px-6 py-4 text-brand placeholder:text-brand/70 outline-none transition focus:ring-2 focus:ring-primary-foreground"
              />
              <input
                type="text"
                name="company"
                placeholder="Empresa"
                className="rounded-full bg-cream px-6 py-4 text-brand placeholder:text-brand/70 outline-none transition focus:ring-2 focus:ring-primary-foreground"
              />
            </div>
            <textarea
              name="message"
              rows={5}
              required
              placeholder="Como podemos te ajudar?"
              className="rounded-3xl bg-cream px-6 py-4 text-brand placeholder:text-brand/70 outline-none transition focus:ring-2 focus:ring-primary-foreground"
            />
            <button
              type="submit"
              className="mx-auto mt-2 rounded-full border border-primary-foreground/80 px-10 py-3 text-base font-medium transition hover:bg-primary-foreground/10"
            >
              Enviar
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
