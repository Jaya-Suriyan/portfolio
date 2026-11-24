import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  index: string;
  title: string;
  lead?: string;
  children: ReactNode;
};

/** Two-column section: a sticky label on the left, content on the right. */
export function Section({ id, index, title, lead, children }: SectionProps) {
  const headingId = `${id}-heading`;
  return (
    <section id={id} aria-labelledby={headingId} className="scroll-mt-20 border-t border-line py-20 sm:py-24">
      <div className="grid gap-8 md:grid-cols-[13rem_1fr] md:gap-12">
        <div className="md:sticky md:top-24 md:self-start">
          <p className="font-mono text-xs text-muted">{index}</p>
          <h2 id={headingId} className="mt-2 text-sm font-semibold uppercase tracking-[0.18em]">
            {title}
          </h2>
          {lead ? <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted text-pretty">{lead}</p> : null}
        </div>
        <div className="min-w-0">{children}</div>
      </div>
    </section>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <li className="rounded-full border border-line bg-card px-2.5 py-1 font-mono text-[11px] leading-none text-muted">
      {children}
    </li>
  );
}
