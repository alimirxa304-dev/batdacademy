import Image from "next/image";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { Container } from "@/components/ui/Container";
import { IconBadgeCheck, IconBuilding, IconGlobe, IconUsers } from "@/components/ui/Icons";

const icons = [IconUsers, IconBadgeCheck, IconGlobe, IconBuilding];

export function TrustStrip({ dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section className="relative overflow-hidden bg-navy pt-20 pb-0">
      <Container className="grid items-center gap-14 pb-24 lg:grid-cols-2">
        <div>
          <span className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.16em] text-gold">
            <span className="h-[3px] w-8 bg-gold" />
            {dict.nav.about}
          </span>
          <h2 className="font-heading mt-4 text-balance text-4xl leading-[1.05] text-white sm:text-5xl">
            {dict.trust.title}
          </h2>
          <div className="mt-10 flex flex-col gap-7">
            {dict.trust.items.map((item, i) => {
              const Icon = icons[i % icons.length];
              return (
                <div key={i} className="flex gap-5">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm bg-white/10 text-gold">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-white">{item.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-white/65">{item.body}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative mx-auto hidden h-[420px] w-full max-w-md lg:block">
          <div className="absolute start-0 top-0 h-64 w-64 overflow-hidden rounded-full border-4 border-navy shadow-2xl">
            <Image src="/images/photos/1581409163.webp" alt="" fill sizes="256px" className="object-cover" />
          </div>
          <div className="absolute end-0 top-6 h-44 w-44 overflow-hidden rounded-full border-4 border-navy shadow-2xl">
            <Image src="/images/photos/1786452583.webp" alt="" fill sizes="176px" className="object-cover" />
          </div>
          <div className="absolute bottom-0 start-20 h-48 w-48 overflow-hidden rounded-full border-4 border-navy shadow-2xl">
            <Image src="/images/photos/1786450030.webp" alt="" fill sizes="192px" className="object-cover" />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 lg:hidden">
          {["1581409163.webp", "1786452583.webp", "1786450030.webp"].map((src) => (
            <div key={src} className="relative aspect-square overflow-hidden rounded-full border-4 border-navy">
              <Image src={`/images/photos/${src}`} alt="" fill sizes="120px" className="object-cover" />
            </div>
          ))}
        </div>
      </Container>

      <svg
        className="relative block w-full text-paper"
        viewBox="0 0 1440 72"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0,32 C320,90 1120,0 1440,48 L1440,72 L0,72 Z" fill="currentColor" />
      </svg>
    </section>
  );
}
