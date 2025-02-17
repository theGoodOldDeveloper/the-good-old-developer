"use client";
import Script from "next/script";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ChatBot({ locale }: { locale: string }) {
  const [currentLocale, setCurrentLocale] = useState(locale);
  const router = useRouter();

  useEffect(() => {
    // Ha változik a locale, frissítsük a chatbot scriptet
    setCurrentLocale(locale);
  }, [locale]);

  return (
    <>
      <Script
        key={`botpress-inject-${currentLocale}`}
        src="https://cdn.botpress.cloud/webchat/v2.2/inject.js"
        strategy="afterInteractive"
      />
      <Script
        key={`botpress-chatbot-${currentLocale}`}
        src="https://files.bpcontent.cloud/2024/12/07/09/20241207095340-GZXCSAV5.js"
        strategy="afterInteractive"
      />
    </>
  );
}
