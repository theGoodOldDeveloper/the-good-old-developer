import Hero from "./Hero";
import Services from "../components/Services";
import { useTranslations } from "next-intl";

export default function Index() {
  console.log(useTranslations("Home")("quotesLine1"), "❤️❤️❤️");
  const t = useTranslations("Home");
  return (
    <div>
      <Hero />
      <div className="flex flex-col justify-center items-center h-screen">
        <h1 className="text-center text-2xl font-semibold mb-10">
          {t("example1")}
        </h1>
        <h3 className="text-center text-3xl font-bold">{t("example2")}</h3>
      </div>
      <Services />
    </div>
  );
}
