import { isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { notFound } from "next/navigation";
import { Hero } from "@/components/home/Hero";
import { QuickCategoryStrip } from "@/components/home/QuickCategoryStrip";
import { TrustStrip } from "@/components/home/TrustStrip";
import { SpecializationGrid } from "@/components/home/SpecializationGrid";
import { FeaturedCourses } from "@/components/home/FeaturedCourses";
import { CityShowcase } from "@/components/home/CityShowcase";
import { ClientsMarquee } from "@/components/home/ClientsMarquee";
import { Testimonials } from "@/components/home/Testimonials";
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
      <div className="pt-10 sm:pt-14">
        <QuickCategoryStrip locale={l} dict={dict} />
      </div>
      <SpecializationGrid locale={l} dict={dict} />
      <FeaturedCourses locale={l} dict={dict} />
      <TrustStrip locale={l} dict={dict} />
      <CityShowcase locale={l} dict={dict} />
      <ClientsMarquee locale={l} dict={dict} />
      <Testimonials locale={l} dict={dict} />
      <CourseRequestSection locale={l} dict={dict} />
      <ConsultingCta locale={l} dict={dict} />
    </>
  );
}
