import Hero from "../components/Hero";
import Services from "../components/Services";
import { useTranslations } from "next-intl";

export default function Index() {
  const t = useTranslations("Home");
  return (
    <div>
      <Hero />
      <div className="flex flex-col justify-center items-center">
        {/* <div className="flex flex-col justify-center items-center h-screen"> */}
        <h1 className="text-center text-3xl font-bold mb-10 mt-10 ps-3 pe-3">
          {t("aboutMeTitle")}
        </h1>

        <div className="text-left text-1xl font-semibold ps-6 pe-6">
          <h3>{t("aboutMeContentParagraph01")}</h3>
          <h3>{t("aboutMeContentParagraph02")}</h3>
          <ul className="list-disc pl-6 space-y-2 mt-3">
            {t
              .raw("aboutMeContentParagraph03.list")
              .map((item: string, index: number) => (
                <li key={index} className="text-lg">
                  {item}
                </li>
              ))}
          </ul>
          <h3 className="text-2xl font-bold ps-6 pe-6 pt-6 mb-3">
            {t("aboutMeContentParagraph04")}
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            {t
              .raw("aboutMeContentParagraph05.list")
              .map((item: string, index: number) => (
                <li key={index} className="text-lg">
                  {item}
                </li>
              ))}
          </ul>
          <h3 className="mt-6">{t("aboutMeContentParagraph06")}</h3>
          <h3 className="mt-3">{t("aboutMeContentParagraph07")}</h3>
          <h3>{t("aboutMeContentParagraph08")}</h3>
          {/* <h3>{t("aboutMeContentParagraph09")}</h3>
          <h3>{t("aboutMeContentParagraph10")}</h3> */}
        </div>
      </div>
      <Services />
    </div>
  );
}
