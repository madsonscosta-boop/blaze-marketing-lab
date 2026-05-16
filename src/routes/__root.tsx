import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import appCss from "../styles.css?url";
import logo from "../assets/fig-logo.png";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Página não encontrada</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          O endereço que você procura não existe ou foi movido.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90"
          >
            Voltar ao início
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-3xl text-foreground">Algo deu errado</h1>
        <p className="mt-2 text-sm text-muted-foreground">Tente novamente em instantes.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90"
          >
            Tentar de novo
          </button>
          <a href="/" className="rounded-full border border-border px-5 py-2.5 text-sm font-medium hover:bg-muted">
            Início
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "FIG — Vídeo & Tráfego pago que vende" },
      { name: "description", content: "Digital Growth Hub creates marketing websites for digital agencies, focusing on video and paid traffic." },
      { property: "og:title", content: "FIG — Vídeo & Tráfego pago que vende" },
      { property: "og:description", content: "Digital Growth Hub creates marketing websites for digital agencies, focusing on video and paid traffic." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "FIG — Vídeo & Tráfego pago que vende" },
      { name: "twitter:description", content: "Digital Growth Hub creates marketing websites for digital agencies, focusing on video and paid traffic." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/80465f5f-4403-4b46-919a-ef71133e7d3f/id-preview-df8c1638--7b4596f0-703e-4847-a1ce-bafb29ceb9fe.lovable.app-1778519504970.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/80465f5f-4403-4b46-919a-ef71133e7d3f/id-preview-df8c1638--7b4596f0-703e-4847-a1ce-bafb29ceb9fe.lovable.app-1778519504970.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,400&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const linkCls = "rounded-full px-4 py-2 text-background/80 transition hover:bg-background/10 hover:text-background";
  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <div className="mx-auto flex w-fit items-center gap-2 rounded-full border border-white/10 bg-foreground/90 px-2 py-2 text-background shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] backdrop-blur-xl">
        <Link to="/" className="flex items-center pl-2" onClick={() => setOpen(false)}>
          <img src={logo} alt="FIG" className="h-7 w-auto" />
        </Link>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          className="flex h-9 w-9 items-center justify-center rounded-full text-background/80 transition hover:bg-background/10 hover:text-background"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 -z-10 bg-foreground/95 backdrop-blur-xl animate-fade-in">
          <nav className="flex h-full w-full flex-col items-center justify-center gap-6 text-background animate-scale-in">
            <Link to="/servicos" className="font-display text-5xl md:text-7xl tracking-tight transition hover:text-brand-glow" activeProps={{ className: "text-brand-glow" }} onClick={() => setOpen(false)}>Serviços</Link>
            <Link to="/trabalhos" className="font-display text-5xl md:text-7xl tracking-tight transition hover:text-brand-glow" activeProps={{ className: "text-brand-glow" }} onClick={() => setOpen(false)}>Trabalhos</Link>
            <Link to="/sobre" className="font-display text-5xl md:text-7xl tracking-tight transition hover:text-brand-glow" activeProps={{ className: "text-brand-glow" }} onClick={() => setOpen(false)}>Sobre</Link>
            <Link to="/contato" className="mt-4 rounded-full bg-brand px-8 py-4 text-lg text-white transition hover:bg-brand-glow" onClick={() => setOpen(false)}>Falar</Link>
          </nav>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <img src={logo} alt="FIG" className="h-10 w-auto" />
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Fig the out.
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest text-muted-foreground">Navegar</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/servicos" className="hover:text-brand-glow">Serviços</Link></li>
            <li><Link to="/trabalhos" className="hover:text-brand-glow">Trabalhos</Link></li>
            <li><Link to="/sobre" className="hover:text-brand-glow">Sobre</Link></li>
            <li><Link to="/contato" className="hover:text-brand-glow">Contato</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest text-muted-foreground">Contato</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="mailto:ola@fig.agency" className="hover:text-brand-glow">ola@fig.agency</a></li>
            <li><a href="https://instagram.com" className="hover:text-brand-glow">@fig.agency</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/40">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} FIG. Todos os direitos reservados.</span>
          <span>Feito com atenção, em São Paulo.</span>
        </div>
      </div>
    </footer>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1"><Outlet /></main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
