import type { Metadata } from "next";
import "../globals.css";
import { siteConfig } from "@/lib/site";
import RootLayoutContent from "./layout-content";
import { fontSans, fontMono, fontHeading } from "@/lib/fonts";

export const metadata: Metadata = {
  title: `${siteConfig.name} · Web, Mobile & Data`,
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: ["/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: ["/logo.png"],
  },
};

import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}>) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
 
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    sameAs: [siteConfig.links.linkedin],
    contactPoint: {
      "@type": "ContactPoint",
      email: siteConfig.links.email,
      contactType: "customer service",
      areaServed: "FR",
      availableLanguage: ["fr", "en"],
    },
  };

  return (
    <html lang={locale} suppressHydrationWarning>
      <body suppressHydrationWarning className={`${fontSans.className} ${fontSans.variable} ${fontMono.variable} ${fontHeading.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <NextIntlClientProvider messages={messages}>
          <RootLayoutContent>{children}</RootLayoutContent>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
