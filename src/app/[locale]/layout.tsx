import { NextIntlClientProvider } from "next-intl";
import { ReactNode } from "react";
import Script from "next/script";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = (await import(`../../../messages/${locale}.json`)).default;

  return (
    <html lang={locale}>
      <head>
        <Script
          key={`botpress-inject-${locale}`}
          src="https://cdn.botpress.cloud/webchat/v2.2/inject.js"
          strategy="afterInteractive"
        />
        <Script
          key={`botpress-chatbot-${locale}`}
          src="https://files.bpcontent.cloud/2024/12/07/09/20241207095340-GZXCSAV5.js"
          strategy="afterInteractive"
        />
      </head>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />
          <ChatBot locale={locale} />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
