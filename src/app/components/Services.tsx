"use client";

import Link from "next/link";
import { useState } from "react";
import { useTranslations } from "next-intl";

export default function Services() {
  const t = useTranslations("Services");

  const services = t.raw("services") || [];

  const [selectedService, setSelectedService] = useState<{
    id: number;
    title: string;
    description: string;
    content?: string[];
    workLink1?: string;
    workLink2?: string;
    linkButton1?: string;
    linkButton2?: string;
  } | null>(null);

  return (
    <div className="max-w-4xl mx-auto mt-10 mb-40">
      <h2 className="text-3xl font-bold text-center">
        {t("title", { default: "Our Services" })}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {services.map(
          (service: {
            id: number;
            title: string;
            description: string;
            content?: string[];
          }) => (
            <div
              key={service.id}
              className="relative p-5 border rounded-lg shadow-md cursor-pointer hover:shadow-xl"
              onClick={() => setSelectedService(service)}
            >
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="text-sm mt-2">{service.description}</p>
              <br />
              <div className="absolute bottom-1 right-3 text-sm font-extralight mt-2">
                👆 Click
              </div>
            </div>
          )
        )}
      </div>

      {selectedService && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg max-w-md">
            <h3 className="text-2xl font-semibold">{selectedService.title}</h3>
            <p className="mt-2">{selectedService.description}</p>

            {selectedService.content && (
              <ul className="mt-2 list-disc pl-5">
                {selectedService.content.map((item, index) => (
                  <li
                    key={index}
                    className={`${
                      index > 4 ? "text-sm text-red-500 font-bold" : "text-sm"
                    }`}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}

            <div className="flex justify-around mt-4">
              {selectedService.workLink1 && (
                <Link href={selectedService.workLink1}>
                  <button
                    className="m-1
                   bg-red-500  text-lime-200 px-4 py-2 rounded-lg"
                  >
                    {selectedService.linkButton1}
                  </button>
                </Link>
              )}
              {selectedService.workLink2 && (
                <Link href={selectedService.workLink2}>
                  <button
                    className="m-1
                   bg-red-500  text-lime-200 px-4 py-2 rounded-lg"
                  >
                    {selectedService.linkButton2}
                  </button>
                </Link>
              )}
            </div>

            <div className="flex justify-between mt-4">
              <Link href="https://thegoodolddeveloper.com/contact">
                <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg">
                  {t("contactButton", { default: "Contact Us" })}
                </button>
              </Link>
              <button
                className="mt-4 bg-orange-200 text-red-500 px-4 py-2 rounded-lg"
                onClick={() => setSelectedService(null)}
              >
                {t("closeButton", { default: "Close" })}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
