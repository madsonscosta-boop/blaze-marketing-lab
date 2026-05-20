import { createFileRoute, Link } from "@tanstack/react-router";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { portfolioItems } from "@/lib/portfolio";

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
          {/* VIDEO PLACEHOLDER */}
          <div className="relative aspect-video w-full overflow-hidden rounded-3xl border border-border/50 bg-card/40 backdrop-blur">
            <div className="flex h-full w-full items-center justify-center text-sm text-muted-foreground">
              Video placeholder
            </div>
          </div>

          {/* pitch card */}
          <div className="mt-24 rounded-3xl px-8 py-16 text-center text-primary-foreground md:px-16 md:py-20" style={{ backgroundColor: '#6f64ff' }}>
          <p className="mx-auto max-w-3xl font-display text-3xl leading-snug md:text-4xl">
            A creative agency for brands ready to grow.
          </p>
          <p className="mx-auto mt-6 max-w-2xl font-display text-2xl leading-snug md:text-3xl">
            We help brands build awareness, create meaningful content, and grow engaged communities through strategic digital marketing.
          </p>
            <Link
              to="/"
              hash="contato"
              className="mt-10 inline-flex flex-col items-center rounded-full border border-primary-foreground/70 px-8 py-3 text-sm leading-tight transition hover:bg-primary-foreground/10"
            >
              <span>Like what you see?</span>
              <span>Get in touch!</span>
            </Link>
          </div>
        </div>
      </section>

      {/* GALLERY MOSAIC */}
      <section id="portfolio" className="bg-cream px-6 pt-20">
        <div className="mx-auto grid max-w-[68rem] grid-cols-2 gap-4 md:grid-cols-3 md:gap-5">
          {portfolioItems.map((img) => (
            <Link
              key={img.slug}
              to="/portfolio/$slug"
              params={{ slug: img.slug }}
              className={`group overflow-hidden rounded-2xl ${img.fit === "contain" ? "bg-transparent" : "bg-background"} ${img.cls}`}
              aria-label={`View project: ${img.title}`}
            >
              {img.coverVideo ? (
                <video
                  src={img.coverVideo}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  playsInline
                  muted
                  loop
                  autoPlay
                  preload="metadata"
                  aria-label={img.alt}
                />
              ) : (
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className={`h-full w-full ${img.fit === "contain" ? "object-contain p-6" : "object-cover"} transition duration-500 group-hover:scale-105`}
                />
              )}
            </Link>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="servicos" className="bg-cream px-6 py-20 scroll-mt-24">
        <div className="mx-auto max-w-7xl rounded-3xl px-6 py-20 text-center md:px-16 md:py-24" style={{ backgroundColor: '#6f64ff' }}>
          <h2 className="font-display text-4xl text-cream md:text-5xl">
            Our social media services
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {[
              { t: "Social Strategy", d: "Positioning, content pillars and editorial calendars aligned with your audience and brand goals." },
              { t: "Social Media Management", d: "Day-to-day operation of your channels: publishing, community, customer care and monthly reports with actionable insights." },
              { t: "Content Creation", d: "Photos, reels and carousels that translate your brand identity into content native to each platform." },
              { t: "Creative Content", d: "Original concepts, campaigns and formats built to spark conversation, saves and shares — not just impressions." },
              { t: "Paid Media", d: "Media management across Meta, Google, TikTok and YouTube with funnel modelling, high-performing creative and weekly optimisation to lower CAC and scale results." },
              { t: "Video Production", d: "Scripting, shooting and editing of videos for ads, UGC and organic content with a focus on performance and storytelling." },
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
                  className="max-w-xs rounded-2xl border-cream/30 bg-[#6f64ff] text-cream"
                >
                  <p className="font-display text-lg">{s.t}</p>
                  <p className="mt-2 text-sm text-cream/80">{s.d}</p>
                </PopoverContent>
              </Popover>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE / SHOWCASE */}
      <section className="border-t border-border/40 bg-[#0e1020] text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 py-28">
          <p className="font-display text-2xl leading-tight md:text-4xl">
            "Working with FIG made a huge impact. My Instagram grew from 400 to 1,395 followers, workshops sold out, and I got comfortable on camera — even landing a TV invitation. Professional, dedicated support. Highly recommend!"
          </p>
          <div className="mt-10 flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-cream" />
            <div>
              <p className="font-medium">Oficina Amor</p>
              <p className="text-sm text-primary-foreground/70">Head of Growth, Pluma DTC</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA — form */}
      <section id="contato" className="bg-cream px-6 py-20 scroll-mt-24">
        <div className="mx-auto max-w-6xl rounded-3xl bg-background px-6 py-16 text-[#6f64ff] md:px-16 md:py-20">
          <h2 className="text-center font-display text-4xl leading-tight md:text-5xl">
            Like what you see?
            <br />
            Let's make it happen!
          </h2>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you! We'll be in touch soon.");
            }}
            className="mx-auto mt-12 grid max-w-3xl gap-5"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <input
                type="text"
                name="name"
                required
                placeholder="Name"
                className="rounded-full bg-cream px-6 py-4 text-slate-900 placeholder:text-slate-500 outline-none transition focus:ring-2 focus:ring-primary-foreground"
              />
              <input
                type="tel"
                name="phone"
                required
                placeholder="Phone"
                className="rounded-full bg-cream px-6 py-4 text-slate-900 placeholder:text-slate-500 outline-none transition focus:ring-2 focus:ring-primary-foreground"
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Email"
                className="rounded-full bg-cream px-6 py-4 text-slate-900 placeholder:text-slate-500 outline-none transition focus:ring-2 focus:ring-primary-foreground"
              />
              <input
                type="text"
                name="company"
                placeholder="Company"
                className="rounded-full bg-cream px-6 py-4 text-slate-900 placeholder:text-slate-500 outline-none transition focus:ring-2 focus:ring-primary-foreground"
              />
            </div>
            <textarea
              name="message"
              rows={5}
              required
              placeholder="How can we help you?"
              className="rounded-3xl bg-cream px-6 py-4 text-slate-900 placeholder:text-slate-500 outline-none transition focus:ring-2 focus:ring-primary-foreground"
            />
            <button
              type="submit"
              className="mx-auto mt-4 rounded-full bg-[#6f64ff] px-12 py-4 text-base font-semibold text-white shadow-lg shadow-[#6f64ff]/30 transition hover:bg-[#5a50e6] hover:shadow-xl hover:shadow-[#6f64ff]/40 hover:scale-105"
            >
              Send
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
