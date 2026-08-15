"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "motion/react";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { cities } from "@/lib/data/cities";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function CourseRequestSection({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  const fields = [
    <input
      key="name"
      required
      placeholder={dict.common.fullName}
      className="w-full rounded-sm border-2 border-white/20 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-gold focus:outline-none"
    />,
    <input
      key="email"
      required
      type="email"
      placeholder={dict.topbar.email}
      className="w-full rounded-sm border-2 border-white/20 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-gold focus:outline-none"
    />,
    <input
      key="phone"
      required
      type="tel"
      placeholder={dict.common.phone}
      className="w-full rounded-sm border-2 border-white/20 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-gold focus:outline-none"
    />,
    <input
      key="course"
      placeholder={dict.common.course}
      className="w-full rounded-sm border-2 border-white/20 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-gold focus:outline-none"
    />,
    <select
      key="city"
      defaultValue=""
      className="w-full rounded-sm border-2 border-white/20 bg-white/5 px-4 py-3 text-sm text-white focus:border-gold focus:outline-none [&>option]:text-navy"
    >
      <option value="">{dict.common.selectCity}</option>
      {cities.map((c) => (
        <option key={c.slug} value={c.slug}>
          {locale === "ar" ? c.ar : c.en}
        </option>
      ))}
    </select>,
  ];

  return (
    <section className="relative overflow-hidden bg-navy">
      <div className="grid lg:grid-cols-2">
        <div
          className="relative px-6 py-16 sm:px-10 lg:py-24"
          style={{ clipPath: "polygon(0 0, 100% 0, 92% 100%, 0% 100%)" }}
        >
          <motion.div
            className="max-w-md"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.18em] text-gold">
              <span className="h-[3px] w-8 bg-gold" />
              {locale === "ar" ? "طلب خاص" : "Private Request"}
            </span>
            <h2 className="font-heading mt-4 text-3xl leading-[1.1] text-white sm:text-4xl">
              {dict.topbar.requestCourse}
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-white/70">
              {locale === "ar"
                ? "يمكنكم التواصل معنا لطلب دورة خاصة في الزمان والمكان الذي يناسبكم."
                : "Get in touch to request a private course at the time and location that suits you."}
            </p>

            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-8 rounded-md border-2 border-gold/40 bg-white/5 p-6 text-white"
              >
                {locale === "ar" ? "شكراً لطلبكم، سنتواصل معكم قريباً." : "Thank you — we'll be in touch shortly."}
              </motion.div>
            ) : (
              <form onSubmit={onSubmit} className="mt-9 flex flex-col gap-3.5">
                {fields.map((field, i) => (
                  <motion.div
                    key={i}
                    custom={i}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.4 }}
                  >
                    {field}
                  </motion.div>
                ))}
                <motion.button
                  custom={fields.length}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.4 }}
                  whileHover={{ y: -2 }}
                  type="submit"
                  className="mt-2 rounded-sm bg-gold px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-gold/90"
                >
                  {dict.common.send}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>

        <div className="relative hidden min-h-[460px] overflow-hidden lg:block">
          <motion.div
            initial={{ scale: 1.15, opacity: 0.7 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <Image src="/images/photos/1728666238.jpeg" alt="" fill sizes="50vw" className="object-cover" />
          </motion.div>
          <div className="absolute inset-0 bg-navy/40" />
        </div>
      </div>
    </section>
  );
}
