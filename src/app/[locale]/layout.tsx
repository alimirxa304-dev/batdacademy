import type { Metadata } from "next";
import { notFound } from "next/navigation";
import localFont from "next/font/local";
import "../globals.css";
import { isLocale, localeDir, locales, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";

const plexArabic = localFont({
  variable: "--font-plex-arabic",
  src: [
    { path: "../../fonts/plex-arabic-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../../fonts/plex-arabic-500-normal.woff2", weight: "500", style: "normal" },
    { path: "../../fonts/plex-arabic-600-normal.woff2", weight: "600", style: "normal" },
    { path: "../../fonts/plex-arabic-700-normal.woff2", weight: "700", style: "normal" },
  ],
});

const plexSans = localFont({
  variable: "--font-plex-sans",
  src: [
    { path: "../../fonts/plex-sans-variable.woff2", weight: "400", style: "normal" },
    { path: "../../fonts/plex-sans-variable.woff2", weight: "500", style: "normal" },
    { path: "../../fonts/plex-sans-variable.woff2", weight: "600", style: "normal" },
    { path: "../../fonts/plex-sans-variable.woff2", weight: "700", style: "normal" },
  ],
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = await getDictionary(locale);
  return {
    title: {
      default: dict.meta.siteName,
      template: `%s | ${dict.meta.siteNameShort}`,
    },
    description: dict.footer.about,
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale as Locale);

  return (
    <html
      lang={locale}
      dir={localeDir[locale as Locale]}
      className={`${plexArabic.variable} ${plexSans.variable} h-full antialiased`}
    >
      <body
        className={`min-h-full flex flex-col bg-paper text-ink ${
          locale === "en" ? "font-en" : ""
        }`}
      >
        <Header locale={locale as Locale} dict={dict} />
        <main className="flex-1">{children}</main>
        <Footer locale={locale as Locale} dict={dict} />
        <WhatsAppButton locale={locale as Locale} />
      </body>
    </html>
  );
}
