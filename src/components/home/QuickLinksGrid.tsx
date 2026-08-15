"use client";

import Link from "next/link";
import { motion } from "motion/react";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconArrow } from "@/components/ui/Icons";
import {
  IconBadgeCheck,
  IconBookmark,
  IconCalendar,
  IconGraduationCap,
  IconPin,
  IconTag,
} from "@/components/ui/Icons";

const items = [
  {
    icon: IconTag,
    dark: true,
    href: "/courses",
    title: { ar: "دورات مع الخصم", en: "Discounted Courses" },
    body: { ar: "نوفر أحدث الدورات العالمية وبأسعار مناسبة.", en: "The latest global courses at competitive prices." },
  },
  {
    icon: IconBookmark,
    dark: false,
    href: "/courses",
    title: { ar: "الدورات المميزة", en: "Featured Courses" },
    body: { ar: "نحدّث قائمة الدورات باستمرار حسب حاجة سوق العمل.", en: "Our course list is continuously updated to match market demand." },
  },
  {
    icon: IconBadgeCheck,
    dark: false,
    href: "/about/services",
    title: { ar: "الدورات المعتمدة", en: "Accredited Courses" },
    body: { ar: "يحظى المشارك بشهادة معتمدة وخدمات وميزات عديدة.", en: "Participants receive an accredited certificate and a range of added services." },
  },
  {
    icon: IconGraduationCap,
    dark: false,
    href: "/courses",
    title: { ar: "دورات حسب التخصص", en: "Courses by Specialisation" },
    body: { ar: "أكثر من 58 تخصصاً في مجالات عديدة.", en: "More than 58 specialisms across a wide range of fields." },
  },
  {
    icon: IconCalendar,
    dark: true,
    href: "/courses",
    title: { ar: "الخطة التدريبية السنوية", en: "Annual Training Plan" },
    body: { ar: "خطة الأكاديمية البريطانية الكاملة لدورات وبرامج العام.", en: "The Academy's full calendar of courses and programmes for the year." },
  },
  {
    icon: IconPin,
    dark: false,
    href: "/cities",
    title: { ar: "الدورات حسب المدينة", en: "Courses by City" },
    body: { ar: "المدن المفضلة لدى عملائنا وذات أماكن سياحية جذابة.", en: "Our clients' favourite destinations, chosen for their appeal." },
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const } },
};

export function QuickLinksGrid({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section className="border-t border-line-navy bg-paper-dim py-20">
      <Container>
        <SectionHeading
          eyebrow={dict.nav.courses}
          title={locale === "ar" ? "طرق سريعة لاستكشاف دوراتنا" : "Quick Ways to Explore Our Courses"}
          subtitle={
            locale === "ar"
              ? "كل ما تحتاجه لاختيار المسار المناسب — في مكان واحد."
              : "Everything you need to find the right path, in one place."
          }
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <motion.div key={i} variants={cardVariant}>
                <Link
                  href={`/${locale}${it.href}`}
                  className={`group relative flex h-full flex-col justify-between gap-8 overflow-hidden rounded-md border-2 p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl ${
                    it.dark
                      ? "border-navy bg-navy text-white hover:shadow-navy/30"
                      : "border-navy/10 bg-surface hover:border-navy hover:shadow-navy/10"
                  }`}
                >
                  <span
                    className={`pointer-events-none absolute -end-6 -top-6 h-24 w-24 rotate-12 rounded-md transition-transform duration-500 group-hover:rotate-45 ${
                      it.dark ? "bg-white/[0.04]" : "bg-navy/[0.03]"
                    }`}
                  />

                  <div className="relative flex items-start justify-between gap-4">
                    <div>
                      <h3 className={`font-heading text-xl ${it.dark ? "text-white" : "text-navy"}`}>
                        {it.title[locale]}
                      </h3>
                      <p className={`mt-2.5 text-[13.5px] leading-relaxed ${it.dark ? "text-white/70" : "text-ink-soft"}`}>
                        {it.body[locale]}
                      </p>
                    </div>
                    <span
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-sm transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110 ${
                        it.dark ? "bg-gold text-white" : "bg-navy text-white"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                  </div>

                  <span
                    className={`relative flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide ${
                      it.dark ? "text-gold" : "text-navy"
                    }`}
                  >
                    {locale === "ar" ? "اكتشف المزيد" : "Discover"}
                    <IconArrow className="h-3.5 w-3.5 transition-transform duration-300 rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
