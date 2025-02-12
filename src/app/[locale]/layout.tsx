import { NextIntlClientProvider } from "next-intl";
import { ReactNode } from "react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = (await import(`../../../messages/${locale}.json`)).default;

  console.log(messages, "❤️❤️❤️❤️❤️❤️❤️❤️❤️");

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
