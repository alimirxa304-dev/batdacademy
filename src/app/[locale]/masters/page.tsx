import { isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { notFound } from "next/navigation";
import { ProgramLanding } from "@/components/shared/ProgramLanding";
import { mastersProgram } from "@/lib/data/programs";

export default async function MastersPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale as Locale);
  const l = locale as Locale;

  return <ProgramLanding locale={l} dict={dict} program={mastersProgram} eyebrow={dict.nav.masters} />;
}
