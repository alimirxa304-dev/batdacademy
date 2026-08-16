import { isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/shared/PageHero";
import { ContactForm } from "@/components/shared/ContactForm";
import { IconMail, IconPhone, IconPin } from "@/components/ui/Icons";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale as Locale);
  const l = locale as Locale;

  const details = [
    {
      icon: IconPin,
      label: l === "ar" ? "المقر الرئيسي — لندن" : "Central London HQ",
      value: "344-354 Gray's Inn Road, London, England, WC1X 8BP",
    },
    {
      icon: IconPhone,
      label: l === "ar" ? "الهاتف" : "Phone",
      value: dict.topbar.phone,
      href: `tel:${dict.topbar.phone}`,
    },
    {
      icon: IconMail,
      label: l === "ar" ? "البريد الإلكتروني" : "Email",
      value: dict.topbar.email,
      href: `mailto:${dict.topbar.email}`,
    },
  ];

  return (
    <>
      <PageHero
        eyebrow={dict.nav.contact}
        title={dict.nav.getInTouch}
        subtitle={
          l === "ar"
            ? "كل من يعمل في الأكاديمية البريطانية جاهز لمساعدتك. صف لنا احتياجك وسنرد عليك خلال يوم عمل واحد كحد أقصى."
            : "Everyone at the British Academy is ready to help. Tell us what you need and we'll respond within one business day."
        }
        image="/images/photos/1545493916.webp"
      />

      <Container className="grid gap-14 py-16 lg:grid-cols-[1fr_1.3fr]">
        <div className="flex flex-col gap-4">
          {details.map((d, i) => {
            const Icon = d.icon;
            const content = (
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy-tint text-navy">
                  <Icon className="h-4 w-4" />
                </span>
                <span>
                  <span className="block text-xs text-ink-soft">{d.label}</span>
                  <span className="block text-[14.5px] font-medium text-navy">{d.value}</span>
                </span>
              </div>
            );
            return (
              <div key={i} className="rounded-2xl border border-line-navy bg-surface p-5">
                {d.href ? (
                  <a href={d.href} className="hover:opacity-80">
                    {content}
                  </a>
                ) : (
                  content
                )}
              </div>
            );
          })}

          <div className="overflow-hidden rounded-2xl border border-line-navy">
            <iframe
              title="map"
              src="https://www.google.com/maps?q=344-354+Gray%27s+Inn+Road+London+WC1X+8BP&output=embed"
              className="h-56 w-full grayscale"
              loading="lazy"
            />
          </div>
        </div>

        <div className="rounded-2xl border border-line-navy bg-surface p-7">
          <h3 className="font-heading text-lg text-navy">
            {l === "ar" ? "أرسل لنا رسالة" : "Send Us a Message"}
          </h3>
          <div className="mt-6">
            <ContactForm locale={l} dict={dict} />
          </div>
        </div>
      </Container>
    </>
  );
}
