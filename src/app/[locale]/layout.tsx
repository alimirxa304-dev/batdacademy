import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  IBM_Plex_Sans_Arabic,
  Markazi_Text,
  Plus_Jakarta_Sans,
  Fraunces,
} from "next/font/google";
import "../globals.css";
import { isLocale, localeDir, locales, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";

const plexArabic = IBM_Plex_Sans_Arabic({
  variable: "--font-plex-arabic",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
});

const markazi = Markazi_Text({
  variable: "--font-markazi",
  subsets: ["arabic"],
  weight: ["500", "600", "700"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
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
      className={`${plexArabic.variable} ${markazi.variable} ${jakarta.variable} ${fraunces.variable} h-full antialiased`}
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
