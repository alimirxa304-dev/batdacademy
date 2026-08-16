import { isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/shared/PageHero";
import { ContactForm } from "@/components/shared/ContactForm";
import { IconCompass, IconGlobe, IconTarget } from "@/components/ui/Icons";

const services = [
  {
    icon: IconGlobe,
    title: { ar: "سوق الاستشارات العالمية", en: "Global Consulting Practice" },
    body: {
      ar: "توفر الأكاديمية استشاريين متخصصين في الإدارة لتقديم المشورة والمساعدة للمنظمات في التخطيط الاستراتيجي والتنظيمي، والتخطيط المالي وإعداد الميزانيات، بالإضافة إلى صياغة الأهداف التسويقية والسياسات وسياسات الموارد البشرية والتخطيط الإنتاجي.",
      en: "The Academy provides specialist management consultants offering strategic and organisational planning advice, financial planning and budgeting, plus support shaping marketing objectives, HR policy and production planning.",
    },
  },
  {
    icon: IconCompass,
    title: { ar: "سوق الاستشارات الأوروبي", en: "European Market Advisory" },
    body: {
      ar: "نقدم نصائح واستشارات للراغبين في دخول السوق الأوروبي، سواء من خلال استثمار رأس المال في أسهم الشركات أو شراء وبناء العقارات، ويساعد خبراؤنا المستثمر أو رجل الأعمال على معرفة قوانين السوق الأوروبية المشتركة.",
      en: "We advise clients entering the European market — whether investing in equities or acquiring and developing property — helping investors and business owners navigate shared European market regulation.",
    },
  },
  {
    icon: IconTarget,
    title: { ar: "استشارات في قطاعات السوق", en: "Sector & Market Segmentation" },
    body: {
      ar: "نقدم نصائح حول الأسواق العالمية وتجزئة السوق، بما يشمل تقسيم السوق المستهدفة إلى مجموعات فرعية من المستهلكين والشركات ذات احتياجات ومصالح وأولويات مشتركة، ثم تصميم وتنفيذ استراتيجيات استهدافها.",
      en: "We advise on global markets and segmentation — dividing a target market into consumer or company subgroups with shared needs and priorities, then designing and executing strategies to reach them.",
    },
  },
];

export default async function ConsultationsPage({
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
        eyebrow={dict.consulting.eyebrow}
        title={dict.nav.consultations}
        subtitle={
          l === "ar"
            ? "خدمة استشارية عالية الجودة للقطاعات الحكومية والخاصة، تنقل التجارب الأوروبية الحديثة بما يضمن التطوير المستمر لمؤسستك."
            : "A premium advisory service for public and private organisations, transferring modern European experience to drive continuous institutional development."
        }
        image="/images/photos/1786454689.webp"
      />

      <Container className="grid gap-14 py-16 lg:grid-cols-[1.2fr_1fr]">
        <div className="flex min-w-0 flex-col gap-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={i} className="rounded-2xl border border-line-navy bg-surface p-7">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold-soft/50 text-navy">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="font-heading mt-4 text-lg text-navy">{s.title[l]}</h3>
                <p className="mt-2.5 text-[14.5px] leading-relaxed text-ink-soft">{s.body[l]}</p>
              </div>
            );
          })}
        </div>

        <div className="h-fit min-w-0 rounded-2xl border border-line-navy bg-surface p-7">
          <h3 className="font-heading text-lg text-navy">{dict.consulting.cta}</h3>
          <p className="mt-2 text-sm text-ink-soft">{dict.consulting.body}</p>
          <div className="mt-6">
            <ContactForm locale={l} dict={dict} showCity={false} />
          </div>
        </div>
      </Container>
    </>
  );
}
