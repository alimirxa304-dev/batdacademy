import { isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { notFound } from "next/navigation";
import { ProgramLanding } from "@/components/shared/ProgramLanding";
import { diplomaProgram } from "@/lib/data/programs";

export default async function DiplomasPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale as Locale);
  const l = locale as Locale;

  return (
    <ProgramLanding
      locale={l}
      dict={dict}
      program={diplomaProgram}
      eyebrow={dict.nav.diplomas}
      image="/images/photos/1786450030.webp"
    />
  );
}
