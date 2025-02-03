"use client"; // 👈 Hozzáadjuk a kliens direktívát!

import { useRouter } from "next/navigation"; // ✅ `next/router` helyett `next/navigation`
import { useState } from "react";

export default function LanguageSwitcher() {
  const router = useRouter();
  const setLang = useState("en")[1];

  interface SwitchLanguageProps {
    newLang: string;
  }

  const switchLanguage = ({ newLang }: SwitchLanguageProps) => {
    setLang(newLang);
    router.push(`/${newLang}`);
  };

  return (
    <div>
      <button
        onClick={() => switchLanguage({ newLang: "en" })}
        className="mr-2"
      >
        EN
      </button>
      <button onClick={() => switchLanguage({ newLang: "hu" })}>HU</button>
    </div>
  );
}
