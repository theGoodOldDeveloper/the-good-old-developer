"use client";

import { useTranslations } from "next-intl";

export default function Messenger() {
  const t = useTranslations("Messenger");

  // Messenger URL az azonosítóval
  const messengerUsername = "61567364721356";
  const messengerWebURL = `https://www.messenger.com/t/${messengerUsername}`;
  const messengerMobileURL = `https://m.me/${messengerUsername}`;

  // Ellenőrzi, hogy mobilon vagy asztali gépen van a felhasználó
  const isMobile =
    typeof window !== "undefined" && /Mobi|Android/i.test(navigator.userAgent);
  const messengerLink = isMobile ? messengerMobileURL : messengerWebURL;

  return (
    <a
      href={messengerLink}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-4 px-6 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition"
    >
      {t("buttonText")}
    </a>
  );
}
