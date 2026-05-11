import { createFileRoute, Link } from "@tanstack/react-router";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

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
              Uma agência criativa social-first para marcas de todos os segmentos.
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

      {/* GALLERY MOSAIC */}
      <section className="bg-cream px-6 pt-20">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 md:grid-cols-4 md:grid-rows-2 md:gap-5">
          {[
            { src: "https://images.unsplash.com/photo-1543353071-10c8ba85a904?w=800&q=80", alt: "Marca de alimentação", cls: "md:col-span-1 md:row-span-1 aspect-[4/3]" },
            { src: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=900&q=80", alt: "Evento sazonal", cls: "md:col-span-1 md:row-span-1 aspect-[4/3]" },
            { src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1000&q=80", alt: "Gastronomia", cls: "md:col-span-2 md:row-span-1 aspect-[16/9]" },
            { src: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=1100&q=80", alt: "Esporte", cls: "md:col-span-2 md:row-span-1 aspect-[16/10]" },
            { src: "https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=1000&q=80", alt: "Estádio", cls: "md:col-span-2 md:row-span-1 aspect-[16/10]" },
          ].map((img) => (
            <div
              key={img.src}
              className={`overflow-hidden rounded-2xl bg-background ${img.cls}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-cream px-6 py-20">
        <div className="mx-auto max-w-7xl rounded-3xl bg-brand px-6 py-20 text-center md:px-16 md:py-24">
          <h2 className="font-display text-4xl text-cream md:text-5xl">
            Nossos serviços de mídia social
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {[
              { t: "Estratégia Social", d: "Planejamento de posicionamento, pilares de conteúdo e calendário editorial alinhados ao seu público e aos objetivos de marca." },
              { t: "Gestão de Redes Sociais", d: "Operação diária dos seus canais: publicação, comunidade, atendimento e relatórios mensais com insights acionáveis." },
              { t: "Criação de Conteúdo", d: "Produção de fotos, reels e carrosséis que traduzem a identidade da marca em conteúdo nativo de cada plataforma." },
              { t: "Conteúdo Criativo", d: "Conceitos originais, campanhas e formatos pensados para gerar conversa, salvar e compartilhar — não só impressões." },
              { t: "Tráfego Pago", d: "Gestão de mídia em Meta, Google, TikTok e YouTube com modelagem de funil, criativos performáticos e otimização semanal para reduzir CAC e escalar resultados." },
              { t: "Produção de Vídeo", d: "Roteiro, captação e edição de vídeos para anúncios, UGC e conteúdo orgânico com foco em performance e narrativa." },
            ].map((s) => (
              <Popover key={s.t}>
                <PopoverTrigger asChild>
                  <button
                    type="button"
                    className="rounded-full border border-cream px-6 py-2.5 text-sm text-cream transition hover:bg-cream hover:text-brand focus:outline-none focus-visible:ring-2 focus-visible:ring-cream"
                  >
                    {s.t}
                  </button>
                </PopoverTrigger>
                <PopoverContent
                  side="top"
                  className="max-w-xs rounded-2xl border-brand/30 bg-cream text-brand"
                >
                  <p className="font-display text-lg">{s.t}</p>
                  <p className="mt-2 text-sm text-brand/80">{s.d}</p>
                </PopoverContent>
              </Popover>
            ))}
          </div>
        </div>
      </section>

      {/* TRUSTED BRANDS */}
      <section className="bg-cream text-accent-foreground">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-28 md:grid-cols-2 md:gap-16">
          <div className="flex flex-col justify-center">
            <p className="font-display text-2xl leading-snug md:text-3xl">
              Parceiro de mídia social preferido por marcas
              emergentes e consolidadas de todos os segmentos.
            </p>
            <p className="mt-6 font-display text-2xl leading-snug md:text-3xl">
              Atendemos negócios de tecnologia, varejo, serviços, indústria,
              saúde, educação, gastronomia e muito mais.
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
                className="rounded-full bg-cream px-6 py-4 text-slate-900 placeholder:text-slate-500 outline-none transition focus:ring-2 focus:ring-primary-foreground"
              />
              <input
                type="tel"
                name="phone"
                required
                placeholder="Telefone"
                className="rounded-full bg-cream px-6 py-4 text-slate-900 placeholder:text-slate-500 outline-none transition focus:ring-2 focus:ring-primary-foreground"
              />
              <input
                type="email"
                name="email"
                required
                placeholder="E-mail"
                className="rounded-full bg-cream px-6 py-4 text-slate-900 placeholder:text-slate-500 outline-none transition focus:ring-2 focus:ring-primary-foreground"
              />
              <input
                type="text"
                name="company"
                placeholder="Empresa"
                className="rounded-full bg-cream px-6 py-4 text-slate-900 placeholder:text-slate-500 outline-none transition focus:ring-2 focus:ring-primary-foreground"
              />
            </div>
            <textarea
              name="message"
              rows={5}
              required
              placeholder="Como podemos te ajudar?"
              className="rounded-3xl bg-cream px-6 py-4 text-slate-900 placeholder:text-slate-500 outline-none transition focus:ring-2 focus:ring-primary-foreground"
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
