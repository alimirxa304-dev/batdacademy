"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { Container } from "@/components/ui/Container";

const items = [
  { icon: "engineering", slug: "engineering-management", ar: "الهندسة", en: "Engineering" },
  { icon: "safety", slug: "safety-security", ar: "الأمن والسلامة", en: "Safety & Security" },
  { icon: "accounting", slug: "accounting", ar: "المحاسبة", en: "Accounting" },
  { icon: "media", slug: "press-media", ar: "الصحافة والإعلام", en: "Press & Media" },
  { icon: "healthcare", slug: "healthcare-hospital-management", ar: "إدارة المستشفيات", en: "Hospital Management" },
  { icon: "maintenance", slug: "maintenance-operations", ar: "الصيانة", en: "Maintenance" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};

export function QuickCategoryStrip({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section className="relative overflow-hidden bg-navy">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
          backgroundSize: "34px 34px",
        }}
      />
      <Container className="relative">
        <div className="flex items-center gap-4 pt-10">
          <span className="h-px flex-1 bg-white/10" />
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/60">
            {dict.categoryStrip.title}
          </p>
          <span className="h-px flex-1 bg-white/10" />
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="grid grid-cols-3 gap-x-4 gap-y-10 py-10 sm:grid-cols-6"
        >
          {items.map((it) => (
            <motion.div key={it.slug} variants={item}>
              <Link
                href={`/${locale}/courses/${it.slug}`}
                className="group flex flex-col items-center gap-3.5 text-center"
              >
                <motion.span
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className="relative flex h-[72px] w-[72px] items-center justify-center rounded-full border-2 border-white/15 bg-white/5 transition-colors duration-300 group-hover:border-gold group-hover:bg-gold"
                >
                  <span className="absolute inset-[-6px] rounded-full border border-white/0 transition-all duration-300 group-hover:border-white/20" />
                  <Image
                    src={`/images/icons/${it.icon}.webp`}
                    alt=""
                    width={30}
                    height={30}
                    className="h-[30px] w-[30px] object-contain transition-transform duration-300 group-hover:scale-110 group-hover:[filter:brightness(0)]"
                  />
                </motion.span>
                <span className="text-[13px] font-semibold text-white/75 transition-colors group-hover:text-white">
                  {locale === "ar" ? it.ar : it.en}
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
