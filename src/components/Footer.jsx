"use client";

import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");
  return (
    <footer className="bg-slate-200 py-6 text-center">
      <p className="text-sm">{t("copyright")}</p>
      <p className="text-lg mt-2">{t("tagline")}</p>
      <p className="mt-3">{t("contact")}</p>
      <a
        href="/contact"
        className="mt-4 inline-block px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
      >
        {t("contactButton")}
      </a>
    </footer>
  );
}

//INFO: dinamic footer
//<footer className="bg-gray-900 text-white py-6 text-center">
//INFO: static footer - permanent bottom
// <footer className="bg-slate-200 p-5 fixed bottom-0 left-0 w-full">
//   <p className="text-center text-1xl font-bold">{t("footer")}</p>
// </footer>
