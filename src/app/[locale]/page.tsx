import Hero from "../components/Hero";
import Services from "../components/Services";
import { useTranslations } from "next-intl";

export default function Index() {
  const t = useTranslations("Home");
  return (
    <div>
      <Hero />
      <div className="flex flex-col justify-center items-center h-screen">
        <h1 className="text-center text-3xl font-bold mb-10">
          {t("aboutMeAddress")}
        </h1>
        <h3 className="text-center text-1xl font-semibold ps-6 pe-6">
          {t("aboutMeContent")}
        </h3>
      </div>
      <Services />
    </div>
  );
}
