import Image from "next/image";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { Container } from "@/components/ui/Container";
import { IconBadgeCheck, IconBuilding, IconGlobe, IconUsers } from "@/components/ui/Icons";

const icons = [IconUsers, IconBadgeCheck, IconGlobe, IconBuilding];

export function TrustStrip({ dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section className="border-b border-line-navy bg-surface py-20">
      <Container className="grid items-center gap-14 lg:grid-cols-2">
        <div className="relative aspect-[4/5] overflow-hidden rounded-md border-2 border-navy sm:aspect-[5/4]">
          <Image
            src="/images/photos/1786454689.webp"
            alt=""
            fill
            sizes="(min-width: 1024px) 560px, 90vw"
            className="object-cover"
          />
        </div>

        <div>
          <span className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.16em] text-gold">
            <span className="h-[3px] w-8 bg-gold" />
            {dict.nav.about}
          </span>
          <h2 className="font-heading mt-4 text-balance text-4xl leading-[1.05] text-navy sm:text-5xl">
            {dict.trust.title}
          </h2>

          <div className="mt-10 flex flex-col gap-7">
            {dict.trust.items.map((item, i) => {
              const Icon = icons[i % icons.length];
              return (
                <div key={i} className="flex gap-5">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm bg-navy text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-navy">{item.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{item.body}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
