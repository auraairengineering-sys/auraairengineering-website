import { Container, Button } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-primary text-surface">
      <div className="grid-texture absolute inset-0 opacity-60" aria-hidden />
      <Container className="relative flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
        <span className="font-display text-7xl font-extrabold text-accent">404</span>
        <h1 className="mt-4 text-2xl font-bold text-surface sm:text-3xl">Page not found</h1>
        <p className="mt-3 max-w-md text-surface/75">
          The page you&apos;re looking for doesn&apos;t exist or may have moved. Let&apos;s get you
          back on track.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Button href="/" variant="accent" withArrow>
            Back to Home
          </Button>
          <Button href="/industries" variant="outline">
            Explore Solutions
          </Button>
        </div>
      </Container>
    </section>
  );
}
