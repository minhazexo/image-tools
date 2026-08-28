import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Creator — MD Mehrab Hossain",
  description:
    "Meet MD Mehrab Hossain — Full-Stack Web Developer crafting premium digital experiences with React, Next.js & Node.js. View portfolio, GitHub, LinkedIn and connect.",
  path: "/creator",
  keywords: ["creator", "developer", "MD Mehrab Hossain", "minhazexo", "full-stack"],
});

const STACKS = [
  {
    label: "Frontend",
    items: ["React 18", "Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Drizzle ORM", "Neon Postgres", "JWT Auth", "Resend"],
  },
  {
    label: "Tooling",
    items: ["Vercel", "Git & GitHub", "Playwright", "Vitest", "Bun"],
  },
  {
    label: "Principles",
    items: ["SSR / SSG", "A11y", "SEO", "Responsive", "Clean Architecture"],
  },
];

const SERVICES = [
  {
    icon: "frontend",
    title: "Frontend Engineering",
    desc: "Cinematic, accessible UIs with React & Next.js 14 — animations, glassmorphism, and perfect responsiveness across every device.",
  },
  {
    icon: "fullstack",
    title: "Full-Stack & APIs",
    desc: "Node.js, Neon PostgreSQL + Drizzle ORM, JWT auth, and Resend email — secure, scalable backends that are a joy to maintain.",
  },
  {
    icon: "performance",
    title: "Performance & Growth",
    desc: "WebP, lazy-loading, bundle analysis, and SEO baked in from day one. Your site stays fast as you scale — and ranks.",
  },
];

const LINKS = [
  {
    name: "Portfolio",
    desc: "Live work & case studies",
    url: "https://minhazexo.vercel.app/",
    color: "from-blue-600 to-indigo-600",
    label: "Visit portfolio",
  },
  {
    name: "GitHub",
    desc: "30+ repositories",
    url: "https://github.com/minhazexo/",
    color: "from-gray-700 to-gray-900",
    label: "View code",
  },
  {
    name: "LinkedIn",
    desc: "Professional network",
    url: "https://www.linkedin.com/in/minhazexo",
    color: "from-blue-500 to-blue-700",
    label: "Connect",
  },
  {
    name: "Facebook",
    desc: "Updates & community",
    url: "https://www.facebook.com/61590831477985/",
    color: "from-blue-500 to-blue-600",
    label: "Follow",
  },
];

function ServiceIcon({ type }: { type: string }) {
  if (type === "frontend") {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8" />
        <path d="M12 17v4" />
      </svg>
    );
  }
  if (type === "fullstack") {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    );
  }
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function LinkIcon({ name }: { name: string }) {
  if (name === "GitHub") {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .3a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.09-.75.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.84 2.82 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.63-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.22.7.82.58A12 12 0 0 0 12 .3Z" />
      </svg>
    );
  }
  if (name === "LinkedIn") {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.45 20.45h-3.55V14.9c0-1.32-.47-2.22-1.66-2.22-.91 0-1.45.61-1.69 1.2-.09.21-.11.51-.11.81v5.76H9.9s.05-9.35 0-10.32h3.55v1.46c.47-.73 1.32-1.77 3.22-1.77 2.35 0 4.11 1.54 4.11 4.84v5.79zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V10.13h3.56v10.32z" />
      </svg>
    );
  }
  if (name === "Facebook") {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07C0 17.6 4.06 22.37 9.36 23.23v-8.42H6.55V12.07h2.81V9.98c0-2.77 1.65-4.3 4.17-4.3 1.21 0 2.47.22 2.47.22v2.72h-1.39c-1.37 0-1.8.85-1.8 1.72v2.06h3.06l-.49 2.74h-2.57v8.42C19.94 22.37 24 17.6 24 12.07z" />
      </svg>
    );
  }
  // Portfolio / default
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

export default function CreatorPage() {
  return (
    <div className="container-page py-10">
      {/* Hero */}
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
        <div className="max-w-2xl">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_0_3px_rgba(34,197,94,0.15)] animate-pulse" />
            Available for new projects
          </span>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            I build fast,
            <br />
            premium{" "}
            <span className="bg-gradient-to-r from-primary via-blue-400 to-purple-400 bg-clip-text text-transparent">
              web experiences
            </span>{" "}
            that convert.
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            I&apos;m <strong className="text-foreground">MD Mehrab Hossain</strong> — a Full-Stack Web Developer focused on React, Next.js, and Node.js.
            I craft cinematic, high-performance websites with clean code, thoughtful UX, and obsessive attention to detail.
            From idea → deployment, I ship products that look amazing and work flawlessly.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href="https://minhazexo.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              View Portfolio
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
            <a
              href="https://github.com/minhazexo/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:bg-secondary"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .3a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.09-.75.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.84 2.82 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.63-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.22.7.82.58A12 12 0 0 0 12 .3Z" />
              </svg>
              GitHub
            </a>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs font-medium text-muted-foreground">
              React • Next.js • Node.js
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs font-medium text-muted-foreground">
              Performance &amp; SEO Focused
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs font-medium text-muted-foreground">
              Clean, Maintainable Code
            </span>
          </div>
        </div>

        {/* Profile Card */}
        <div className="card-base relative w-full max-w-sm shrink-0 overflow-hidden p-5">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/8 to-transparent pointer-events-none" />
          <div className="relative flex items-center gap-4">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-border bg-gradient-to-br from-primary/20 to-primary/5 text-lg font-bold text-primary">
              MH
            </div>
            <div>
              <div className="font-semibold text-foreground">MD Mehrab Hossain</div>
              <div className="text-sm font-medium text-primary">Full-Stack Developer</div>
              <div className="mt-0.5 flex items-center gap-1 text-xs text-muted-foreground">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Bangladesh • Remote Worldwide
              </div>
            </div>
          </div>

          <p className="relative mt-4 rounded-lg border border-border bg-secondary/40 p-3 text-sm leading-relaxed text-muted-foreground">
            I help founders and teams turn ideas into lightning-fast, beautiful web products. 30+ repositories, production-grade Next.js 14 apps, Neon + Drizzle, and a design system that scales.
            If you need a site that <em className="not-italic font-semibold text-foreground">feels premium and loads instantly</em> — let&apos;s talk.
          </p>

          <div className="relative mt-4 grid grid-cols-3 gap-2">
            <div className="rounded-lg border border-border bg-secondary/40 p-2.5 text-center">
              <strong className="block text-lg font-bold tracking-tight">30+</strong>
              <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Repos</span>
            </div>
            <div className="rounded-lg border border-border bg-secondary/40 p-2.5 text-center">
              <strong className="block text-lg font-bold tracking-tight">100%</strong>
              <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Responsive</span>
            </div>
            <div className="rounded-lg border border-border bg-secondary/40 p-2.5 text-center">
              <strong className="block text-lg font-bold tracking-tight">⚡</strong>
              <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Fast &amp; SEO</span>
            </div>
          </div>

          <div className="relative mt-4 grid grid-cols-2 gap-2">
            <a
              href="mailto:mehrabhossain7102@gmail.com"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-transparent bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <path d="m22 6-10 7L2 6" />
              </svg>
              Email Me
            </a>
            <a
              href="https://minhazexo.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-secondary/60 px-4 py-2.5 text-sm font-medium text-foreground transition-all hover:bg-secondary"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              Portfolio
            </a>
          </div>
        </div>
      </div>

      {/* What I Do */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold tracking-tight">What I do</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          End-to-end web development — from concept to deployment and beyond.
        </p>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {SERVICES.map((s) => (
            <div key={s.title} className="card-interactive p-6">
              <div className="mb-4 grid h-10 w-10 place-items-center rounded-lg border border-border bg-primary/10 text-primary">
                <ServiceIcon type={s.icon} />
              </div>
              <h3 className="font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="mt-12">
        <div className="card-base p-6">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-lg font-bold tracking-tight">Tech Stack</h2>
            <span className="text-xs font-mono text-muted-foreground">built for speed • built to last</span>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STACKS.map((group) => (
              <div key={group.label}>
                <h4 className="mb-3 text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                  {group.label}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-border bg-secondary/60 px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:border-primary/30 hover:bg-primary/10 hover:text-primary"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Connect */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold tracking-tight">Connect with me</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Follow my work, see the code, or just say hello — I&apos;d love to hear from you.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {LINKS.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card-interactive group flex flex-col gap-3 p-4"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${link.color} text-white`}
                >
                  <LinkIcon name={link.name} />
                </div>
                <div>
                  <strong className="block text-sm">{link.name}</strong>
                  <span className="text-xs text-muted-foreground">{link.desc}</span>
                </div>
              </div>
              <div className="truncate rounded-lg border border-border bg-secondary/30 px-2.5 py-1.5 font-mono text-xs text-muted-foreground">
                {link.url.replace("https://", "")}
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary">
                {link.label}
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform group-hover:translate-x-0.5"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="mt-12 grid gap-5 lg:grid-cols-3">
        <div className="card-base p-5">
          <div className="mb-3 grid h-10 w-10 place-items-center rounded-lg border border-border bg-cyan-500/10 text-cyan-500">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22a7 7 0 0 0 7-7c0-5.2-7-13-7-13S5 9.8 5 15a7 7 0 0 0 7 7z" />
              <circle cx="12" cy="15" r="3" />
            </svg>
          </div>
          <h3 className="font-semibold">How I work</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Clear communication, fast iterations, and honest timelines. No surprises — just progress you can see.
          </p>
        </div>
        <div className="card-base p-5">
          <div className="mb-3 grid h-10 w-10 place-items-center rounded-lg border border-border bg-primary/10 text-primary">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>
          </div>
          <h3 className="font-semibold">Why clients choose me</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Production-ready code, SEO-first builds, and a design eye. I care about the polish that turns visitors into customers.
          </p>
        </div>
        <div className="relative overflow-hidden rounded-xl border border-primary/20 bg-gradient-to-br from-primary/10 to-primary/5 p-6 lg:col-span-1">
          <span className="absolute -right-2 -top-6 text-[100px] font-bold leading-none text-primary/[0.06]">&ldquo;</span>
          <p className="relative text-sm font-medium leading-relaxed">
            &ldquo;I don&apos;t just write code — I craft digital experiences that feel effortless to use and impossible to forget.
            If your project deserves to look as good as it performs, let&apos;s build it right.&rdquo;
          </p>
          <div className="relative mt-4 flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 text-xs font-bold text-primary">
              MH
            </div>
            <div className="text-xs">
              <strong className="block text-foreground">MD Mehrab Hossain</strong>
              <span className="text-muted-foreground">Web Developer • minhazexo.vercel.app</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-12">
        <div className="flex flex-col items-start justify-between gap-5 rounded-xl border border-border bg-card p-6 sm:flex-row sm:items-center">
          <div>
            <h3 className="text-xl font-bold tracking-tight">Have an idea? Let&apos;s make it real.</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Whether it&apos;s a portfolio, SaaS, or e-commerce — I&apos;ll help you ship something you&apos;re proud of.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:mehrabhossain7102@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <path d="m22 6-10 7L2 6" />
              </svg>
              mehrabhossain7102@gmail.com
            </a>
            <a
              href="https://minhazexo.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:bg-secondary"
            >
              Explore Portfolio
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
