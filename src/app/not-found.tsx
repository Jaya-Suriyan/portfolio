import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main" className="mx-auto flex min-h-screen max-w-page flex-col justify-center px-6">
      <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent">404</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">This page doesn&apos;t exist.</h1>
      <p className="mt-4 text-muted">The link may be broken, or the page may have moved.</p>
      <Link
        href="/"
        className="mt-8 inline-flex w-fit items-center rounded-full bg-fg px-5 py-2.5 text-sm font-medium text-bg transition-colors hover:bg-accent hover:text-accent-fg"
      >
        Back to home
      </Link>
    </main>
  );
}
