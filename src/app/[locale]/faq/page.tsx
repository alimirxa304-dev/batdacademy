import { isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/shared/PageHero";
import { FaqAccordion } from "@/components/faq/FaqAccordion";

export default async function FaqPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale as Locale);
  const l = locale as Locale;

  return (
    <>
      <PageHero
        eyebrow={dict.topbar.faq}
        title={dict.topbar.faq}
        subtitle={
          l === "ar"
            ? "إجابات سريعة على أكثر الأسئلة شيوعاً حول برامجنا التدريبية والتسجيل والدفع."
            : "Quick answers to the most common questions about our programmes, registration and payment."
        }
        image="/images/photos/1581409163.webp"
      />
      <Container className="max-w-3xl py-16">
        <FaqAccordion locale={l} />
      </Container>
    </>
  );
}
