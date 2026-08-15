import { isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { notFound } from "next/navigation";
import { Hero } from "@/components/home/Hero";
import { CourseSearch } from "@/components/home/CourseSearch";
import { QuickCategoryStrip } from "@/components/home/QuickCategoryStrip";
import { TrustStrip } from "@/components/home/TrustStrip";
import { SpecializationGrid } from "@/components/home/SpecializationGrid";
import { QuickLinksGrid } from "@/components/home/QuickLinksGrid";
import { FeaturedCourses } from "@/components/home/FeaturedCourses";
import { CityShowcase } from "@/components/home/CityShowcase";
import { StatsNumbers } from "@/components/home/StatsNumbers";
import { ClientsMarquee } from "@/components/home/ClientsMarquee";
import { CourseRequestSection } from "@/components/home/CourseRequestSection";
import { ConsultingCta } from "@/components/home/ConsultingCta";

export default async function HomePage({
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
      <Hero locale={l} dict={dict} />
      <CourseSearch locale={l} dict={dict} />
      <div className="pt-10 sm:pt-14">
        <QuickCategoryStrip locale={l} dict={dict} />
      </div>
      <TrustStrip locale={l} dict={dict} />
      <SpecializationGrid locale={l} dict={dict} />
      <QuickLinksGrid locale={l} dict={dict} />
      <FeaturedCourses locale={l} dict={dict} />
      <CityShowcase locale={l} dict={dict} />
      <StatsNumbers locale={l} dict={dict} />
      <ClientsMarquee locale={l} dict={dict} />
      <CourseRequestSection locale={l} dict={dict} />
      <ConsultingCta locale={l} dict={dict} />
    </>
  );
}
