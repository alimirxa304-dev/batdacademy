"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { Course } from "@/lib/data/courses";
import type { CourseDetail } from "@/lib/data/course-details";
import { getFeeTiers } from "@/lib/data/course-details";
import { cities } from "@/lib/data/cities";
import { faqGroups } from "@/lib/data/faq";
import {
  IconArrow,
  IconBadgeCheck,
  IconBuilding,
  IconCalendar,
  IconChevronDown,
  IconClock,
  IconGlobe,
} from "@/components/ui/Icons";
import { Button } from "@/components/ui/Button";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.18em] text-gold">
      <span className="h-[3px] w-8 bg-gold" />
      {children}
    </span>
  );
}

function Reveal({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
    >
      {children}
    </motion.div>
  );
}

export function CourseDetailTabs({
  locale,
  dict,
  course,
  detail,
  otherDates,
}: {
  locale: Locale;
  dict: Dictionary;
  course: Course;
  detail: CourseDetail;
  otherDates: Course[];
}) {
  const sections = [
    { key: "overview", label: dict.featured.overview },
    { key: "objectives", label: dict.featured.objectives },
    { key: "program", label: dict.featured.program },
    { key: "dates-fees", label: `${dict.featured.datesTab} & ${dict.featured.feesTab}` },
    { key: "faq", label: dict.topbar.faq },
  ] as const;
  const [openFaq, setOpenFaq] = useState<string | null>(null);
  const relevantFaqGroups = faqGroups.filter((g) =>
    ["Registration & Enrolment", "Fees & Payment"].includes(g.title.en)
  );
  const fees = getFeeTiers(course.price);
  const facts = [
    { icon: IconClock, label: `${course.durationDays} ${dict.featured.days}`, tone: "navy" as const },
    { icon: IconBuilding, label: dict.featured.formatValue, tone: "gold" as const },
    { icon: IconGlobe, label: dict.featured.languageValue, tone: "navy" as const },
    { icon: IconBadgeCheck, label: dict.featured.certificate, tone: "gold" as const },
  ];
  const toneChip = { navy: "bg-navy text-white", gold: "bg-gold text-white" };

  return (
    <div>
      <div className="sticky top-[64px] z-20 -mx-1 flex flex-wrap gap-1 overflow-x-auto border-b-2 border-line-navy bg-paper/95 px-1 backdrop-blur lg:top-[104px]">
        {sections.map((s) => (
          <a
            key={s.key}
            href={`#${s.key}`}
            className="shrink-0 rounded-t-lg px-4 py-3 text-[13.5px] font-medium text-ink-soft transition-colors hover:text-navy"
          >
            {s.label}
          </a>
        ))}
      </div>

      <section id="overview" className="scroll-mt-28 border-b border-line py-10">
        <Reveal>
          <Eyebrow>{dict.nav.courses}</Eyebrow>
          <h2 className="font-heading mt-2 text-3xl text-navy">{dict.featured.overview}</h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-ink-soft">{detail.overview[locale]}</p>
        </Reveal>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
          className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4"
        >
          {facts.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={i}
                variants={fadeUp}
                className="flex flex-col items-start gap-3 rounded-md border-2 border-line-navy bg-surface p-4 transition-all hover:-translate-y-1 hover:border-navy hover:shadow-lg"
              >
                <span className={`flex h-10 w-10 items-center justify-center rounded-sm ${toneChip[f.tone]}`}>
                  <Icon className="h-5 w-5" />
                </span>
                <span className="text-xs font-semibold text-navy">{f.label}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      <section id="objectives" className="scroll-mt-28 border-b border-line py-10">
        <Reveal>
          <Eyebrow>{dict.featured.targetGroup}</Eyebrow>
          <h2 className="font-heading mt-2 text-3xl text-navy">{dict.featured.objectives}</h2>
        </Reveal>
        <div className="mt-7 grid gap-6 sm:grid-cols-2">
          <Reveal className="rounded-md border-2 border-line-navy bg-surface p-6">
            <h3 className="text-base font-bold text-navy">{dict.featured.targetGroup}</h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {detail.targetAudience.map((t, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-ink-soft">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  {t[locale]}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="rounded-md border-2 border-navy bg-navy p-6">
            <h3 className="text-base font-bold text-white">{dict.featured.courseObjectives}</h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {detail.objectives.map((o, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-white/75">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  {o[locale]}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section id="program" className="scroll-mt-28 border-b border-line py-10">
        <Reveal>
          <Eyebrow>{dict.featured.program}</Eyebrow>
          <h2 className="font-heading mt-2 text-3xl text-navy">{dict.featured.program}</h2>
        </Reveal>
        <motion.ol
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
          className="mt-7 flex flex-col gap-3"
        >
          {detail.modules.map((m, i) => (
            <motion.li
              key={i}
              variants={fadeUp}
              className="flex items-center gap-4 rounded-md border-2 border-line-navy bg-surface px-5 py-4 transition-all hover:-translate-x-1 hover:border-navy hover:shadow-md rtl:hover:translate-x-1 rtl:hover:-translate-x-0"
            >
              <span
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-sm text-sm font-bold text-white ${
                  i % 2 === 0 ? "bg-navy" : "bg-gold"
                }`}
              >
                {i + 1}
              </span>
              <span className="text-sm font-medium text-navy">{m[locale]}</span>
            </motion.li>
          ))}
        </motion.ol>

        <div className="relative mt-8 h-52 overflow-hidden rounded-md border-2 border-navy sm:h-64">
          <Image src={course.image} alt="" fill sizes="800px" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/10 to-transparent" />
          <p className="font-heading absolute bottom-5 start-6 end-6 text-xl text-white sm:text-2xl">
            {locale === "ar" ? course.ar : course.en}
          </p>
        </div>
      </section>

      <section id="dates-fees" className="scroll-mt-28 py-10">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <Reveal>
              <Eyebrow>{dict.featured.datesTab}</Eyebrow>
              <h2 className="font-heading mt-2 text-3xl text-navy">{dict.featured.datesTab}</h2>
            </Reveal>
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
              className="mt-6 flex flex-col gap-3"
            >
              {[course, ...otherDates].map((c) => {
                const dateFormatted = new Intl.DateTimeFormat(locale === "ar" ? "ar-GB" : "en-GB", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                }).format(new Date(c.date));
                return (
                  <motion.div
                    key={c.id}
                    variants={fadeUp}
                    className="flex flex-wrap items-center gap-3 rounded-md border-2 border-line-navy bg-surface px-4 py-3.5 transition-all hover:border-navy hover:shadow-md sm:flex-nowrap"
                  >
                    <span className="flex shrink-0 items-center gap-2 text-sm font-medium text-navy">
                      <IconCalendar className="h-4 w-4 text-gold" />
                      {dateFormatted}
                    </span>
                    <select
                      defaultValue={c.citySlug}
                      className="min-w-[9rem] flex-1 rounded-sm border-2 border-line-navy bg-paper px-3 py-2 text-sm text-navy focus:border-gold focus:outline-none"
                    >
                      {cities.map((ct) => (
                        <option key={ct.slug} value={ct.slug}>
                          {locale === "ar" ? ct.ar : ct.en}
                        </option>
                      ))}
                    </select>
                    <Button href={`/${locale}/contact`} size="md" className="shrink-0">
                      {dict.featured.register}
                      <IconArrow className="h-3.5 w-3.5 rtl:rotate-180" />
                    </Button>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          <div>
            <Reveal>
              <Eyebrow>{dict.featured.feesTab}</Eyebrow>
              <h2 className="font-heading mt-2 text-3xl text-navy">{dict.featured.feesTab}</h2>
              <p className="mt-2 text-xs text-ink-soft">{dict.featured.feeNote}</p>
            </Reveal>
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
              className="mt-6 flex flex-col gap-3"
            >
              {fees.map((tier, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className={`flex items-center justify-between gap-3 rounded-md border-2 px-4 py-3.5 transition-all hover:-translate-y-0.5 hover:shadow-lg ${
                    i === fees.length - 1 ? "border-gold bg-gold-soft/20" : "border-navy"
                  }`}
                >
                  <span className="text-sm font-medium text-navy">{tier.label[locale]}</span>
                  <span className="flex items-center gap-1.5 rounded-sm bg-navy px-3 py-1.5 text-sm font-bold text-white">
                    £{tier.price.toLocaleString()}
                    <span className="font-normal opacity-70">{dict.featured.perSubscriber}</span>
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section id="faq" className="scroll-mt-28 border-t border-line py-10">
        <Reveal>
          <Eyebrow>{dict.topbar.faq}</Eyebrow>
          <h2 className="font-heading mt-2 text-3xl text-navy">{dict.topbar.faq}</h2>
        </Reveal>

        <div className="mt-7 flex flex-col gap-8">
          {relevantFaqGroups.map((group, gi) => (
            <div key={gi}>
              <h3 className="text-sm font-bold uppercase tracking-wide text-ink-soft">
                {group.title[locale]}
              </h3>
              <div className="mt-3 flex flex-col gap-2.5">
                {group.items.map((item, ii) => {
                  const key = `${gi}-${ii}`;
                  const isOpen = openFaq === key;
                  return (
                    <div key={key} className="overflow-hidden rounded-sm border-2 border-line-navy bg-surface">
                      <button
                        type="button"
                        onClick={() => setOpenFaq(isOpen ? null : key)}
                        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-start"
                      >
                        <span className="text-[14.5px] font-medium text-navy">{item.q[locale]}</span>
                        <IconChevronDown
                          className={`h-4 w-4 shrink-0 text-gold transition-transform ${isOpen ? "rotate-180" : ""}`}
                        />
                      </button>
                      {isOpen ? (
                        <div className="border-t border-line px-5 pb-4 pt-3 text-[13.5px] leading-relaxed text-ink-soft">
                          {item.a[locale]}
                        </div>
                      ) : null}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
