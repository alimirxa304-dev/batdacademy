import { Container } from "@/components/ui/Container";

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b-4 border-gold bg-navy py-20 sm:py-24">
      <div className="bg-grain pointer-events-none absolute inset-0 opacity-[0.06]" />
      <Container className="relative">
        {eyebrow ? (
          <span className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.16em] text-gold">
            <span className="h-[3px] w-8 bg-gold" />
            {eyebrow}
          </span>
        ) : null}
        <h1 className="font-heading mt-4 max-w-2xl text-balance text-4xl leading-[1.05] text-white sm:text-6xl">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70">
            {subtitle}
          </p>
        ) : null}
      </Container>
    </section>
  );
}
