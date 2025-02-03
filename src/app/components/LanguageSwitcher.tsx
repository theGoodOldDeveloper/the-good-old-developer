"use client"; // 👈 Hozzáadjuk a kliens direktívát!

import { useRouter } from "next/navigation"; // ✅ `next/router` helyett `next/navigation`
import { useState } from "react";

export default function LanguageSwitcher() {
  const router = useRouter();
  const [lang, setLang] = useState("en");

  const switchLanguage = (newLang) => {
    setLang(newLang);
    router.push(`/${newLang}`);
  };

  return (
    <div>
      <button onClick={() => switchLanguage("en")} className="mr-2">
        🇬🇧 EN
      </button>
      <button onClick={() => switchLanguage("hu")}>🇭🇺 HU</button>
    </div>
  );
}
